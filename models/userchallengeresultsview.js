module.exports = function(sequelize, DataTypes) {
  var UserChallengeResultsView = sequelize.define(
    "user_challenge_results_view",
    {
      // Define columns
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      userId: DataTypes.INTEGER,
      challengeId: DataTypes.INTEGER,
      challengeDetailId: DataTypes.INTEGER,
      challengeName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      goal: DataTypes.STRING,
      goalOrder: DataTypes.INTEGER,
      isDone: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  );
  return UserChallengeResultsView;
};
