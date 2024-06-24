"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PencatatanDetail extends Model {
    static associate(models) {
      PencatatanDetail.belongsTo(models.Pencatatan, {
        foreignKey: "id_pencatatan",
        as: "pencatatan",
      });
    }
  }
  PencatatanDetail.init(
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
      jenis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Jenis tidak boleh kosong",
          },
          notNull: {
            msg: "Jenis tidak boleh kosong",
          },
        },
      },
      keterangan: {
        type: DataTypes.STRING,
        allowNull: true, // Boleh kosong
      },
      tipe_pencatatan: {
        type: DataTypes.ENUM("pakan", "ikan"),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Tipe pencatatan tidak boleh kosong",
          },
          notNull: {
            msg: "Tipe pencatatan tidak boleh kosong",
          },
          isIn: {
            args: [["pakan", "ikan"]],
            msg: 'Tipe pencatatan harus berupa "pakan" atau "ikan"',
          },
        },
      },
    },
    {
      sequelize,
      modelName: "PencatatanDetail",
      tableName: "pencatatan_detail",
    }
  );
  return PencatatanDetail;
};
