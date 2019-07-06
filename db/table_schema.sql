-- -----------------------------------------------------
-- Schema challenge_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS challenge_db;
USE challenge_db;

-- Drop tables
DROP TABLE IF EXISTS user_challenge_results;
DROP TABLE IF EXISTS user_challenges;
DROP TABLE IF EXISTS challenge_details;
DROP TABLE IF EXISTS challenges;
DROP TABLE IF EXISTS users;

-- -----------------------------------------------------
-- Table users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC)
);

-- -----------------------------------------------------
-- Table challenges
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS challenges (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
	prize VARCHAR(255) NOT NULL,
	url VARCHAR(255) NULL,
    creatorId INT NULL,
    winnerId INT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC),
    CONSTRAINT fk_creator_id FOREIGN KEY (creatorId)
        REFERENCES users (id)
        ON DELETE SET NULL ON UPDATE NO ACTION,
    CONSTRAINT fk_winner_id FOREIGN KEY (winnerId)
        REFERENCES users (id)
        ON DELETE SET NULL ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table challenge_details
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS challenge_details (
    id INT NOT NULL AUTO_INCREMENT,
    challengeId INT NOT NULL,
    goal VARCHAR(80) NOT NULL,
    goalOrder INT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC),
    CONSTRAINT fk_challenge1 FOREIGN KEY (challengeId)
        REFERENCES challenges (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table user_challenges
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS user_challenges (
    userId INT NOT NULL,
    challengeId INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (userId , challengeId),
    INDEX user_id_ixd (userId ASC),
    INDEX challenge_id_ixd (challengeId ASC),
    CONSTRAINT fk_user1 FOREIGN KEY (userId)
        REFERENCES users (id)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_challenge2 FOREIGN KEY (challengeId)
        REFERENCES challenges (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table user_challenge_results
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS user_challenge_results (
	id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    challengeId INT NOT NULL,
    challengeDetailId INT NOT NULL,
    isDone BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX user_id_idx (userId ASC),
    INDEX challenge_id_idx (challengeId ASC),
    INDEX challenge_detail_id_idx (challengeDetailId ASC),
    CONSTRAINT fk_user2 FOREIGN KEY (userId)
        REFERENCES users (id)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_challenge3 FOREIGN KEY (challengeId)
        REFERENCES challenges (id)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_challenge_detail FOREIGN KEY (challengeDetailId)
        REFERENCES challenge_details (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);
