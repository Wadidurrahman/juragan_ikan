const model = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");

const pencatatan = model.Pencatatan;
const pencatatan_detail = model.PencatatanDetail;
const penjualan = model.Penjualan;

const indexPencatatan = async (req, res) => {
  try {
    const data = await pencatatan.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const indexPencatatanUser = async (req, res) => {
  try {
    const user = req.user;
    const data = await pencatatan.findAll({
      where: { id_user: user.id },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPencatatan = async (req, res) => {
  const user = req.user;
  const { nama_menu } = req.body;

  try {
    const newPencatatan = await pencatatan.create({
      id_user: user.id,
      nama_menu,
    });

    return res.status(201).json({
      message: "Success create pencatatan",
      data: {
        pencatatan: newPencatatan,
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

const showPencatatan = async (req, res) => {
  const { id } = req.params;

  try {
    // Query pencatatan berdasarkan id menggunakan Sequelize
    const data = await pencatatan.findOne({
      where: { id },
      include: [
        {
          model: pencatatan_detail,
          as: "pencatatan_detail",
        },
        {
          model: penjualan,
          as: "penjualan",
        },
      ],
    });

    if (!data) {
      return res.status(404).json({
        message: "Pencatatan tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Berhasil memanggil pencatatan",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updatePencatatan = async (req, res) => {
  const { id } = req.params;
  const { nama_menu } = req.body;

  try {
    const data = await pencatatan.findByPk(id);

    if (data) {
      data.nama_menu = nama_menu;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update pencatatan",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Pencatatan tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updatePencatatanUser = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const { nama_menu } = req.body;

  try {
    const data = await pencatatan.findOne({ where: { id, id_user: user.id } });

    if (data) {
      data.nama_menu = nama_menu;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update pencatatan",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Pencatatan tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deletePencatatan = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await pencatatan.findByPk(id);

    if (data) {
      await data.destroy();

      return res.status(200).json({
        message: "Berhasil delete pencatatan",
      });
    } else {
      return res.status(404).json({
        message: "Pencatatan tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const indexPencatatanDetail = async (req, res) => {
  try {
    const data = await pencatatan_detail.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const showPencatatanDetail = async (req, res) => {
  const { id } = req.params;

  try {
    // Query pencatatan berdasarkan id menggunakan Sequelize
    const data = await pencatatan_detail.findOne({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({
        message: "Pencatatan Detail tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Berhasil memanggil pencatatan detail",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createPencatatanDetail = async (req, res) => {
  const { id_pencatatan, jumlah, jenis, keterangan, tipe_pencatatan } =
    req.body;

  try {
    const newPencatatanDetail = await pencatatan_detail.create({
      id_pencatatan: id_pencatatan,
      jumlah,
      jenis,
      keterangan,
      tipe_pencatatan,
    });

    return res.status(201).json({
      message: "Berhasil menambah pencatatan detail",
      data: newPencatatanDetail,
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

const updatePencatatanDetail = async (req, res) => {
  const { id } = req.params;
  const { id_pencatatan, jumlah, jenis, keterangan, tipe_pencatatan } =
    req.body;

  try {
    const data = await pencatatan_detail.findByPk(id);

    if (data) {
      data.id_pencatatan = id_pencatatan;
      data.jumlah = jumlah;
      data.jenis = jenis;
      data.keterangan = keterangan;
      data.tipe_pencatatan = tipe_pencatatan;
      await data.save();

      return res.status(200).json({
        message: "Berhasil update pencatatan detail",
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Pencatatan detail tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deletePencatatanDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await pencatatan_detail.findByPk(id);

    if (data) {
      await data.destroy();

      return res.status(200).json({
        message: "Berhasil delete pencatatan detail",
      });
    } else {
      return res.status(404).json({
        message: "Pencatatan detail tidak ditemukan",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPencatatan,
  createPencatatanDetail,
  indexPencatatan,
  indexPencatatanUser,
  showPencatatan,
  updatePencatatan,
  updatePencatatanUser,
  deletePencatatan,
  indexPencatatanDetail,
  showPencatatanDetail,
  updatePencatatanDetail,
  deletePencatatanDetail,
};
