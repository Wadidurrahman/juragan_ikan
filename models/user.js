"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: "id_user",
        as: "profile", // Alias untuk hubungan
      });
      User.hasMany(models.Pencatatan, {
        foreignKey: "id_user",
        as: "pencatatan",
        onDelete: "CASCADE",
      });
      User.hasMany(models.Artikel, {
        foreignKey: "id_user",
        as: "artikel",
        onDelete: "CASCADE",
      });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Username dimasukan sudah terdaftar",
        },
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username tidak boleh kosong",
          },
          notNull: {
            msg: "Username tidak boleh kosong",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email yang dimasukan sudah terdaftar",
        },
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Harus berbentuk email",
          },
          notEmpty: {
            msg: "Email tidak boleh kosong",
          },
          notNull: {
            msg: "Email tidak boleh kosong",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password tidak boleh kosong",
          },
          notNull: {
            msg: "Password tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const encryption = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, encryption);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const encryption = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, encryption);
          }
        },
      },
    }
  );

  return User;
};
