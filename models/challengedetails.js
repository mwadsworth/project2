module.exports = function(sequelize, DataTypes) {
  var ChallengeDetails = sequelize.define("challenge_details", {
    // Giving the Challenges model columns
    goal: DataTypes.STRING,
    goalOrder: DataTypes.INTEGER,
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

  ChallengeDetails.associate = function(models) {
    // We're saying that a ChallengeDetails should belong to a Challenges
    // A ChallengeDetails can't be created without an Challenges
    // due to the foreign key constraint
    ChallengeDetails.belongsTo(models.challenges, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ChallengeDetails;
};
