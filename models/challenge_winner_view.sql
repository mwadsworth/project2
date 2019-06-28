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
        (a.winnerId = b.id);