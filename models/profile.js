"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user",
      });
    }
  }
  Profile.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama tidak boleh kosong",
          },
          notNull: {
            msg: "Nama tidak boleh kosong",
          },
        },
      },
      no_telepon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nomor telepon tidak boleh kosong",
          },
          notNull: {
            msg: "Nomor telepon tidak boleh kosong",
          },
          isNumeric: {
            msg: "Nomor telepon harus berupa angka",
          },
          len: {
            args: [8, 15],
            msg: "Nomor telepon harus memiliki panjang antara 8 sampai 15 karakter",
          },
        },
      },
      alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Alamat tidak boleh kosong",
          },
          notNull: {
            msg: "Alamat tidak boleh kosong",
          },
        },
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kota tidak boleh kosong",
          },
          notNull: {
            msg: "Kota tidak boleh kosong",
          },
        },
      },
      provinsi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Provinsi tidak boleh kosong",
          },
          notNull: {
            msg: "Provinsi tidak boleh kosong",
          },
        },
      },
      kode_pos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Kode pos tidak boleh kosong",
          },
          notNull: {
            msg: "Kode pos tidak boleh kosong",
          },
          isNumeric: {
            msg: "Kode pos harus berupa angka",
          },
          len: {
            args: [5, 10],
            msg: "Kode pos harus memiliki panjang antara 5 sampai 10 karakter",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
