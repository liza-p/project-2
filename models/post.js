// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Post  = sequelize.define("Post", {
      // The name cannot be null, varchar 255
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The gender can not be null
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      // The gbreed can not be null, varchar 255
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      img_url:{
          type: DataTypes.STRING(1000),
          allowNull: false   
      }
      // pet_id: {
      //     type: DataTypes.INTEGER
      // }
    });
    Post.associate = function (models) {
      // We're saying that a Post should belong to an Pet
      // A Post can't be created without Pet due to the foreign key constraint
      Post.belongsTo(models.Pet, {
          foreignKey: {
              allowNull: false
          }
      });
  };
    return Post;
  };