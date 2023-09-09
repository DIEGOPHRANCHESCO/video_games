const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      platforms: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      background_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      released: {
        type: DataTypes.STRING,
        defaultValue: true,
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      createDb: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    { timestamps: true, createdAt: "creado", updatedAt: false }
  );
};
