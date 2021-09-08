-- Crie uma VIEW com o nome top_3_artistas que deve mostrar somente as três pessoas artistas mais populares no banco SpotifyClone, possuindo as seguintes colunas:
-- A primeira coluna deve possuir o alias "artista" e exibir o nome da pessoa artista.
-- A segunda coluna deve ter o alias "seguidores" e exibir a quantidade de pessoas que estão seguindo aquela pessoa artista.
-- Seu resultado deve estar ordenado em ordem decrescente, baseando-se na quantidade de seguidores. Em caso de empate, ordene os resultados pelo nome da pessoa artista em ordem alfabética.
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS top_3_artistas;
CREATE VIEW top_3_artistas AS
SELECT SpotifyClone.artista.artista_nome AS artista,
COUNT(SpotifyClone.artista.artista_id) AS seguidores
FROM seguindo_artistas
INNER JOIN artista
ON SpotifyClone.artista.artista_id = SpotifyClone.seguindo_artistas.artista_id
GROUP BY SpotifyClone.artista.artista_nome
ORDER BY seguidores DESC, artista ASC
LIMIT 3;
