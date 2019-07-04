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
    UserChallengeResults.belongsTo(models.users, {
      onDelete: "CASCADE"
    });
    UserChallengeResults.belongsTo(models.challenges, {
      onDelete: "CASCADE"
    });
    UserChallengeResults.belongsTo(models.challenge_details, {
      onDelete: "CASCADE"
    });
  };

  return UserChallengeResults;
};
