-- Crie uma procedure chamada albuns_do_artista que recebe como parâmetro o nome de uma pessoa artista e em retorno deve exibir as seguintes colunas:
-- O nome da pessoa artista, com o alias "artista".
-- O nome do álbum, com o alias "album".
-- Os resultados devem ser ordenados pelo nome do álbum em ordem alfabética.
-- Confirme a execução correta da procedure, chamando-a e passando o nome igual a "Walter Phoenix". 
-- CALL albuns_do_artista('Walter Phoenix');
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS albuns_do_artista;
DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN artista VARCHAR(100))
BEGIN
SELECT SpotifyClone.artista.artista_nome AS artista,
SpotifyClone.album.album_nome AS album
FROM SpotifyClone.artista
INNER JOIN SpotifyClone.album
ON SpotifyClone.album.artista_id = SpotifyClone.artista.artista_id
WHERE SpotifyClone.artista.artista_nome = artista;
END $$
DELIMITER ;
