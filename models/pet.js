// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      // The name cannot be null, varchar 255
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The gender can not be null
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      // The gbreed can not be null, varchar 255
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age:{
          type: DataTypes.INTEGER,
          allowNull: false   
      },
      notes: {
          type: DataTypes.STRING(1000)
      },
      img_url: {
          type: DataTypes.STRING(1000)
      }
    });
    return Pet;
  };
  