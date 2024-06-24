const model = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const artikel = model.Artikel;

const indexArtikel = async (req, res) => {
  try {
    const data = await artikel.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const showArtikel = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await artikel.findOne({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({
        message: "Artikel tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Berhasil memanggil artikel",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createArtikelUser = async (req, res) => {
  const user = req.user;
  const { judul, konten } = req.body;

  try {
    const newArtikel = await artikel.create({
      id_user: user.id,
      judul,
      konten,
    });

    return res.status(201).json({
      message: "Berhasil menambah artikel",
      data: newArtikel,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

// fungsi kalau artikel dibuat oleh admin
const createArtikel = async (req, res) => {
  const { id_user, judul, konten } = req.body;

  try {
    const newArtikel = await artikel.create({
      id_user: id_user,
      judul,
      konten,
    });

    return res.status(201).json({
      message: "Berhasil menambah artikel",
      data: newArtikel,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

const updateArtikel = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const { judul, konten } = req.body;

  try {
    const data = await artikel.findByPk(id);

    if (data) {
      data.judul = judul;
      data.konten = konten;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update artikel",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Artikel tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteArtikel = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await artikel.findByPk(id);

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
  indexArtikel,
  showArtikel,
  createArtikel,
  createArtikelUser,
  updateArtikel,
  deleteArtikel,
};
