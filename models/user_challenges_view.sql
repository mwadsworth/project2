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
        (a.challengeId = b.id) AND
        (a.userId = c.id)
    ORDER BY (c.lastName);