"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    static associate(models) {
      Artikel.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user",
      });
    }
  }
  Artikel.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Judul tidak boleh kosong",
          },
          notNull: {
            msg: "Judul tidak boleh kosong",
          },
        },
      },
      konten: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Konten tidak boleh kosong",
          },
          notNull: {
            msg: "Konten tidak boleh kosong",
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
      modelName: "Artikel",
      tableName: "artikel",
    }
  );
  return Artikel;
};
