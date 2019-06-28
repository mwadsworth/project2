CREATE OR REPLACE VIEW user_challenge_results_view AS
    SELECT 
        b.id AS challengeId,
        b.name AS challengeName,
        c.id AS userId,
        c.firstName AS firstName,
        c.lastName AS lastName,
        d.goal AS goal,
        d.goalOrder AS goalOrder,
        a.isDone AS isDone
    FROM
        (user_challenge_results a, challenges b, users c, challenge_details d)
    WHERE
        (a.challengeId = b.id) AND
        (a.userId = c.id) AND
        (a.challengeDetailId = d.id)
    ORDER BY (c.lastName);
