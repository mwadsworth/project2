module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    // Define columns
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Users.associate = function(models) {
    Users.belongsToMany(models.challenges, {
      as: "user",
      through: "user_challenges",
      ondelete: "cascade"
    });
  };

  return Users;
};
