module.exports = function(sequelize, DataTypes) {
  var UserChallengeResults = sequelize.define("user_challenge_results", {
    isDone: DataTypes.BOOLEAN,
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

  UserChallengeResults.associate = function(models) {
    console.log("Here3");
    UserChallengeResults.belongsTo(models.users, {
      onDelete: "cascade"
    });
    UserChallengeResults.belongsTo(models.challenges, {
      onDelete: "cascade"
    });
    UserChallengeResults.belongsTo(models.challenge_details, {
      onDelete: "cascade"
    });
  };

  return UserChallengeResults;
};
