const model = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = model.User;
const profiles = model.Profile;

// fungsi register
const register = async (req, res) => {
  const { username, email, password } = req.body;
  const secretKey = "test";

  await users
    .create({ username, email, password })
    .then(function (user) {
      const token = jwt.sign({ user: user }, secretKey, { expiresIn: "1h" });
      res.header("Authorization", `Bearer ${token}`);
      res.header("Content-Type", `application/json`);

      return res.status(201).json({
        message: "Success",
        data: {
          user: user,
          token: token,
        },
      });
    })
    .catch(function (error) {
      return res.status(401).json({
        message: error.errors,
      });
    });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await users.findOne({ username: username });
  const jwtSecretKey = "test"; // bebas mau diubah apa aja

  if (!user) {
    return res
      .status(401)
      .json({ message: "Username yang dimasukan tidak terdaftar" });
  }

  bcrypt.compare(password, user.password, (error, result) => {
    if (error) {
      return res.status(500).json({
        message: `${error.message}`,
      });
    } else if (result) {
      const token = jwt.sign({ user: user }, jwtSecretKey, { expiresIn: "1h" });
      res.header("Authorization", `Bearer ${token}`);
      res.header("Content-Type", `application/json`);

      return res.status(201).json({
        message: "Success login",
        status: 201,
        data: {
          user: user,
          token: token,
        },
      });
    } else {
      return res.status(401).json({
        message: "Username atau password salah",
      });
    }
  });
};

const getUser = async (req, res) => {
  const user = await users.findOne({
    where: { id: req.user.id },
    include: [
      {
        model: profiles,
        as: "profile",
        // attributes: [
        //   "nama",
        //   "no_telepon",
        //   "alamat",
        //   "kota",
        //   "provinsi",
        //   "kode_pos",
        // ], bisa disesuaikan buat attribute yang mau di tampilkan
      },
    ],
  });

  res.status(200).json(user);
};

const editProfile = async (req, res) => {
  const { nama, no_telepon, alamat, kota, provinsi, kode_pos } = req.body;
  const user = req.user;
  const profile = await profiles.findOne({ id_user: user.id });

  try {
    if (profile) {
      profile.nama = nama;
      profile.no_telepon = no_telepon;
      profile.alamat = alamat;
      profile.kota = kota;
      profile.provinsi = provinsi;
      profile.kode_pos = kode_pos;
      const updatedProfile = await profile.save();

      return res.status(201).json({
        message: "Success Edit Profile",
        data: { profile: updatedProfile },
      });
    } else {
      // Create new profile
      const newProfile = new profiles({
        id_user: user.id,
        nama,
        no_telepon,
        alamat,
        kota,
        provinsi,
        kode_pos,
      });
      await newProfile.save();
      return res.status(201).json({
        message: "Success Add Profile",
        data: { profile: newProfile },
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.errors,
    });
  }
};

module.exports = {
  register,
  login,
  getUser,
  editProfile,
};
