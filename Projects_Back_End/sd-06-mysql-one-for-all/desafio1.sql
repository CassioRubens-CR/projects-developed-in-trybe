-- Database: SpotifyClone
DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;
USE SpotifyClone;

-- -----------------------------
-- Table plano
CREATE TABLE plano(
plano_id INT PRIMARY KEY AUTO_INCREMENT,
plano_nome VARCHAR(45) NOT NULL,
plano_valor DECIMAL(5,2) NOT NULL
) engine = InnoDB;

-- -----------------------------
-- Table usuario
CREATE TABLE usuario(
usuario_id INT PRIMARY KEY AUTO_INCREMENT,
usuario_nome VARCHAR(45) NOT NULL,
usuario_idade INT NOT NULL,
plano_id INT,
FOREIGN KEY(plano_id) REFERENCES plano(plano_id)
) engine = InnoDB;

-- -----------------------------
-- Table artista
CREATE TABLE artista(
artista_id INT PRIMARY KEY AUTO_INCREMENT,
artista_nome VARCHAR(45) NOT NULL
) engine = InnoDB;

-- -----------------------------
-- Table album
CREATE TABLE album(
album_id INT PRIMARY KEY auto_increment,
album_nome VARCHAR(45) NOT NULL,
artista_id INT NOT NULL,
FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) engine = innoDB;

-- -----------------------------
-- Table cancoes
CREATE TABLE cancoes(
cancoes_id INT PRIMARY KEY auto_increment,
cancoes_nome VARCHAR(45) NOT NULL,
album_id INT NOT NULL,
FOREIGN KEY (album_id) REFERENCES album(album_id)
) engine = innoDB;

-- -----------------------------
-- Table historico_de_reproducoes
CREATE TABLE historico_de_reproducoes(
-- reproducoes_id INT PRIMARY KEY auto_increment,
cancoes_id INT,
usuario_id INT,
PRIMARY KEY (cancoes_id, usuario_id),
FOREIGN KEY (cancoes_id) REFERENCES cancoes(cancoes_id),
FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
) engine = innoDB;

-- -----------------------------
-- Table seguindo_artistas
CREATE TABLE seguindo_artistas(
-- seguindo_artistas_id INT PRIMARY KEY auto_increment,
artista_id INT,
usuario_id INT,
PRIMARY KEY (artista_id, usuario_id),
FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
) engine = innoDB;

INSERT INTO plano (plano_nome, plano_valor)
VALUES
('gratuito', 0),
('universitário', 5.99),
('familiar', 7.99);

INSERT INTO usuario (usuario_nome, usuario_idade, plano_id)
VALUES
('Thati', 23, 1),
('Cintia', 35, 3),
('Bill', 20, 2),
('Roger', 45, 1);

INSERT INTO artista (artista_nome)
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');

INSERT INTO album (album_nome, artista_id)
VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

INSERT INTO cancoes(cancoes_nome, album_id)
VALUES
('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
("Sweetie, Let's Go Wild", 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
("Honey, Let's Be Silly", 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO historico_de_reproducoes (cancoes_id, usuario_id)
VALUES
(1, 1),
(6, 1),
(14, 1),
(16, 1),
(13, 2),
(17, 2),
(2, 2),
(15, 2),
(4, 3),
(16, 3),
(6, 3),
(3, 4),
(18, 4),
(11, 4);

INSERT INTO seguindo_artistas (artista_id, usuario_id)
VALUES
(1, 1),
(4, 1),
(3, 1),
(1, 2),
(3, 2),
(2, 3),
(1, 3),
(4, 4);
