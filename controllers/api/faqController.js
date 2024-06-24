const model = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const faq = model.Faq;

const indexFaq = async (req, res) => {
  try {
    const data = await faq.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const showFaq = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await faq.findOne({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({
        message: "faq tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Berhasil memanggil faq",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createFaq = async (req, res) => {
  const { pertanyaan, jawaban } = req.body;

  try {
    const newfaq = await faq.create({
      pertanyaan,
      jawaban,
    });

    return res.status(201).json({
      message: "Berhasil menambah faq",
      data: newfaq,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

const updateFaq = async (req, res) => {
  const { id } = req.params;
  const { pertanyaan, jawaban } = req.body;

  try {
    const data = await faq.findByPk(id);

    if (data) {
      data.pertanyaan = pertanyaan;
      data.jawaban = jawaban;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update faq",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "faq tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteFaq = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await faq.findByPk(id);

    if (data) {
      await data.destroy();

      return res.status(200).json({
        message: "Berhasil delete faq",
      });
    } else {
      return res.status(404).json({
        message: "Faq tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  indexFaq,
  showFaq,
  createFaq,
  updateFaq,
  deleteFaq,
};
