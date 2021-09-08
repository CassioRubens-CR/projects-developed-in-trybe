-- Mostre uma relação de todos os álbuns produzidos por cada pessoa artista, com a quantidade de seguidores que ela possui, de acordo com os detalhes a seguir. 
-- Para tal, crie uma VIEW chamada perfil_artistas, com as seguintes colunas:
-- A primeira coluna deve exibir o nome da pessoa artista, com o alias "artista".
-- A segunda coluna deve exibir o nome do álbum, com o alias "album".
-- A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "seguidores".
-- Seus resultados devem estar ordenados de forma decrescente, baseando-se no número de pessoas seguidoras. Em caso de empate no número de pessoas, ordene os resultados pelo nome da pessoa artista em ordem alfabética e caso há artistas com o mesmo nome, ordene os resultados pelo nome do álbum alfabeticamente.
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS perfil_artistas;
CREATE VIEW `perfil_artistas` AS
SELECT SpotifyClone.artista.artista_nome AS `artista`,
SpotifyClone.album.album_nome AS `album`,
COUNT(SpotifyClone.artista.artista_id) AS `seguidores`
FROM seguindo_artistas
INNER JOIN artista
ON SpotifyClone.artista.artista_id = SpotifyClone.seguindo_artistas.artista_id
INNER JOIN album
ON SpotifyClone.artista.artista_id = SpotifyClone.album.artista_id
GROUP BY SpotifyClone.artista.artista_nome, SpotifyClone.album.album_nome
ORDER BY seguidores DESC, artista ASC, album;
