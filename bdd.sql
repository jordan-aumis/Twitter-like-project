
DROP TABLE Post;

DROP TABLE Follow;

Drop TABLE Utilisateur;

-- CREATE TABLE `Utilisateur` (
--     `id utilisateur` INT NOT NULL AUTO_INCREMENT,
--     `Pseudo` varchar(255) NOT NULL,
--     `email` varchar(255) NOT NULL UNIQUE,
--     `mdp` varchar(200) NOT NULL,
--     PRIMARY KEY (`id utilisateur`)
-- );

-- CREATE TABLE `Post` (
--     `id_poste` INT NOT NULL AUTO_INCREMENT,
--     `contenu` TEXT NOT NULL,
--     `id_utilisateur` INT NOT NULL,
--     PRIMARY KEY (`id_poste`)
-- );

-- CREATE TABLE `Follow` (
--     `id_follow` INT NOT NULL AUTO_INCREMENT,
--     `id_follower` INT NOT NULL,
--     `id_followed` INT NOT NULL,
--     `follow_status` BOOLEAN NOT NULL,
--     PRIMARY KEY (`id_follow`)
-- );


-- ALTER TABLE `Post` ADD CONSTRAINT `Post_fk0` FOREIGN KEY (`id_utilisateur`) REFERENCES `Utilisateur`(`id utilisateur`);

-- ALTER TABLE `Follow` ADD CONSTRAINT `Follow_fk0` FOREIGN KEY (`id_follower`) REFERENCES `Utilisateur`(`id utilisateur`);

-- ALTER TABLE `Follow` ADD CONSTRAINT `Follow_fk1` FOREIGN KEY (`id_followed`) REFERENCES `Utilisateur`(`id utilisateur`);