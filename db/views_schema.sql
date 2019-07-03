-- -----------------------------------------------------
-- View user_challenges_view
-- Inner Join between users and challenges
-- Used to show the challenges a user has opted into
-- ORDER BY lastName
-- -----------------------------------------------------
-- DROP TABLE for user_challenges_view is a sequelize thing
-- It will be fixed in future releases.
-- -----------------------------------------------------
DROP TABLE IF EXISTS user_challenges_view;
CREATE OR REPLACE VIEW user_challenges_view AS
    SELECT 
        b.id AS challengeId,
        b.name AS challengeName,
        c.id AS userId,
        c.firstName AS firstName,
        c.lastName AS lastName,
        b.prize AS prize
    FROM
        (user_challenges a, challenges b, users c)
    WHERE
        (a.challengeId = b.id)
            AND (a.userId = c.id)
    ORDER BY (c.lastName);
    
-- -----------------------------------------------------
-- View user_challenge_results_view
-- Inner Join between users and challenges and challenge details
-- and user_challenge_results.
-- Used to show the challenges a user has opted into
-- along with the resultss for each goal
-- ORDER BY lastName
-- -----------------------------------------------------
CREATE OR REPLACE VIEW user_challenge_results_view AS
    SELECT 
        a.id AS id,
        c.id AS userId,
        b.id AS challengeId,
        d.id AS challengeDetailId,
        b.name AS challengeName,
        c.firstName AS firstName,
        c.lastName AS lastName,
        d.goal AS goal,
        d.goalOrder AS goalOrder,
        a.isDone AS isDone
    FROM
        (user_challenge_results a, challenges b, users c, challenge_details d)
    WHERE
        (a.challengeId = b.id)
            AND (a.userId = c.id)
            AND (a.challengeDetailId = d.id)
    ORDER BY (c.lastName);

-- -----------------------------------------------------
-- View challenge_winner_view
-- Inner Join between users and challenges.
-- Used to show the winner of challenges.
-- ORDER BY lastName
-- -----------------------------------------------------
CREATE OR REPLACE VIEW challenge_winner_view AS
    SELECT 
        a.id AS challengeId,
        a.name AS challengeName,
        b.id AS userId,
        b.firstName AS firstName,
        b.lastName AS lastName,
        a.prize AS prize
    FROM
        (challenges a, users b)
    WHERE
        (a.winnerId = b.id)
    ORDER BY (b.lastName);
            