module.exports = function(sequelize, DataTypes) {
  var UserChallengesView = sequelize.define(
    "user_challenges_view",
    {
      // Define columns
      challengeId: DataTypes.INTEGER,
      challengeName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      prize: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
  return UserChallengesView;
};
