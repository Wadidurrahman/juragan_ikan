const model = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const penjualan = model.Penjualan;

const indexPenjualan = async (req, res) => {
  try {
    const data = await penjualan.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const showPenjualan = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await penjualan.findOne({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({
        message: "Penjualan tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Berhasil memanggil Penjualan",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createPenjualan = async (req, res) => {
  const { id_pencatatan, jumlah, harga, keterangan } = req.body;

  try {
    const newPenjualan = await penjualan.create({
      id_pencatatan: id_pencatatan,
      jumlah,
      harga,
      keterangan,
    });

    return res.status(201).json({
      message: "Berhasil menambah penjualan",
      data: newPenjualan,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

const updatePenjualan = async (req, res) => {
  const { id } = req.params;
  const { id_pencatatan, jumlah, harga, keterangan } = req.body;

  try {
    const data = await penjualan.findByPk(id);

    if (data) {
      data.id_pencatatan = id_pencatatan;
      data.jumlah = jumlah;
      data.harga = harga;
      data.keterangan = keterangan;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update penjualan",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Penjualan tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deletePenjualan = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await penjualan.findByPk(id);

    if (data) {
      await data.destroy();

      return res.status(200).json({
        message: "Berhasil delete penjualan",
      });
    } else {
      return res.status(404).json({
        message: "Penjualan tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  indexPenjualan,
  showPenjualan,
  createPenjualan,
  updatePenjualan,
  deletePenjualan,
};
