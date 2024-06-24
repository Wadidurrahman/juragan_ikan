"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pencatatan extends Model {
    static associate(models) {
      Pencatatan.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user",
      });
      Pencatatan.hasMany(models.PencatatanDetail, {
        foreignKey: "id_pencatatan",
        as: "pencatatan_detail",
        onDelete: "CASCADE",
      });
      Pencatatan.hasMany(models.Penjualan, {
        foreignKey: "id_pencatatan",
        as: "penjualan",
        // onDelete: "CASCADE",
      });
    }
  }
  Pencatatan.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama_menu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama menu tidak boleh kosong",
          },
          notNull: {
            msg: "Nama menu tidak boleh kosong",
          },
        },
      },
      tanggal: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Pencatatan",
      tableName: "pencatatan",
    }
  );
  return Pencatatan;
};
