CREATE DATABASE IF NOT EXISTS `viogenero` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE IF NOT EXISTS `chatbot` (
  `id_question` int NOT NULL AUTO_INCREMENT,
  `question` varchar(300) NOT NULL,
  `target` int NOT NULL,
  PRIMARY KEY (`id_question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `chatbot_training` (
  `id_question` int NOT NULL AUTO_INCREMENT,
  `question` varchar(300) NOT NULL,
  `target` int NOT NULL,
  PRIMARY KEY (`id_question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
