"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Penjualan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_pencatatan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pencatatan",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      jumlah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Penjualan");
  },
};
