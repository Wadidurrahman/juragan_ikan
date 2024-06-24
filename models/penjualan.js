"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Penjualan extends Model {
    static associate(models) {
      Penjualan.belongsTo(models.Pencatatan, {
        foreignKey: "id_pencatatan",
        as: "pencatatan",
      });
    }
  }
  Penjualan.init(
    {
      id_pencatatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "Pencatatan",
        //   key: "id",
        // },
      },
      jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jumlah tidak boleh kosong",
          },
          notNull: {
            msg: "Jumlah tidak boleh kosong",
          },
          isInt: {
            msg: "Jumlah harus berupa angka bulat",
          },
          min: {
            args: [0],
            msg: "Jumlah tidak boleh negatif",
          },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Harga tidak boleh kosong",
          },
          notNull: {
            msg: "Harga tidak boleh kosong",
          },
          isInt: {
            msg: "Harga harus berupa angka bulat",
          },
          min: {
            args: [0],
            msg: "Harga tidak boleh negatif",
          },
        },
      },
      keterangan: {
        type: DataTypes.TEXT,
        allowNull: true, // Boleh kosong
      },
    },
    {
      sequelize,
      modelName: "Penjualan",
      tableName: "penjualan",
    }
  );
  return Penjualan;
};
