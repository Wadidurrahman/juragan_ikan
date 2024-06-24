"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    static associate(models) {
      // define association here
    }
  }
  Faq.init(
    {
      pertanyaan: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Pertanyaan tidak boleh kosong",
          },
          notNull: {
            msg: "Pertanyaan tidak boleh kosong",
          },
        },
      },
      jawaban: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "jawaban tidak boleh kosong",
          },
          notNull: {
            msg: "jawaban tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Faq",
      tableName: "faq",
    }
  );
  return Faq;
};
