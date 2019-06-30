-- Test data for challenge DB and APP
DELETE FROM user_challenge_results;
ALTER TABLE user_challenge_results AUTO_INCREMENT = 1;

DELETE FROM user_challenges;
ALTER TABLE user_challenges AUTO_INCREMENT = 1;

DELETE FROM challenge_details;
ALTER TABLE challenge_details AUTO_INCREMENT = 1;

DELETE FROM challenges;
ALTER TABLE challenges AUTO_INCREMENT = 1;

DELETE FROM users;
ALTER TABLE users AUTO_INCREMENT = 1;

-- users load
INSERT INTO users(id, firstName, lastName, email)
VALUES (1, "Challenge", "Master", "cmaster@mail.com");
INSERT INTO users(id, firstName, lastName, email)
VALUES (2, "Jane", "Doe", "jdoe@mail.com");
INSERT INTO users(id, firstName, lastName, email)
VALUES (3, "Joe", "Dokes", "jdokes@mail.com");
INSERT INTO users(id, firstName, lastName, email)
VALUES (4, "Ernie", "Pyle", "epyle@mail.com");

-- Challenges load
INSERT INTO challenges(id, name, creatorId, prize, url)
VALUES (1, "Weekly Chores", 1, "$10.00", "https://www.whatsupfagans.com/cleaning-games-for-kids-make-chores-fun/");
INSERT INTO challenges(id, name, creatorId, prize, url)
VALUES (2, "Practice Music Scales", 1, "Free Lesson", "https://takelessons.com/blog/violin-scales-for-beginners-z08");
INSERT INTO challenges(id, name, creatorId, prize, url)
VALUES (3, "Navy Seal Workout Challenge", 1, "12 Chocolate Donuts", "https://www.youtube.com/watch?v=IW7Y68G2XIg");
INSERT INTO challenges(id, name, creatorId, prize, url, winnerId)
VALUES (4, "Test Challenge", 1, "World Peace", "https://www.youtube.com/watch?v=jHklKfiyKx0", 1);

-- Challenge details load
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (1, 1, "Make Your Bed", 1);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (2, 1, "Wash Dishes", 2);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (3, 1, "Walk Dog", 3);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (4, 1, "Clean Bathroom", 4);

INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (5, 2, "Practice A Major", 1);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (6, 2, "Practice D Major", 2);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (7, 2, "Practice G Major", 3);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (8, 2, "Practice C Major", 4);

INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (9, 3, "Swim 1 Mile", 1);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (10, 3, "Upper Body", 2);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (11, 3, "Lower Body", 3);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (12, 3, "Core", 4);

INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (13, 4, "Goal 1", 1);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (14, 4, "Goal 2", 2);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (15, 4, "Goal 3", 3);
INSERT INTO challenge_details(id, challengeId, goal, goalOrder)
VALUES (16, 4, "Goal 4", 4);

-- user_challenges
INSERT INTO user_challenges(userId, challengeId)
VALUES (1, 1);
INSERT INTO user_challenges(userId, challengeId)
VALUES (1, 2);
INSERT INTO user_challenges(userId, challengeId)
VALUES (1, 3);
INSERT INTO user_challenges(userId, challengeId)
VALUES (1, 4);

-- user_challenge_results
INSERT INTO user_challenge_results(id, userId, challengeId, challengeDetailId, isDone)
VALUES (1, 1, 4, 13, true);
INSERT INTO user_challenge_results(id, userId, challengeId, challengeDetailId, isDone)
VALUES (2, 1, 4, 14, true);
INSERT INTO user_challenge_results(id, userId, challengeId, challengeDetailId, isDone)
VALUES (3, 1, 4, 15, true);
INSERT INTO user_challenge_results(id, userId, challengeId, challengeDetailId, isDone)
VALUES (4, 1, 4, 16, true);
 