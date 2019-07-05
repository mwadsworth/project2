module.exports = function(sequelize, DataTypes) {
  var Challenges = sequelize.define("challenges", {
    // Giving the Challenges model columns
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    prize: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    url: DataTypes.STRING,
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

  Challenges.associate = function(models) {
    Challenges.hasMany(models.challenge_details, {
      onDelete: "CASCADE"
    });

    Challenges.belongsTo(models.users, {
      as: "creator",
      onDelete: "SET NULL"
    });

    Challenges.belongsTo(models.users, {
      as: "winner",
      onDelete: "SET NULL"
    });

    // A Challenge many to many connection to Users with UserChallenges
    Challenges.belongsToMany(models.users, {
      as: "challenge",
      through: "user_challenges",
      onDelete: "cascade"
    });
  };

  return Challenges;
};
