-- Crie uma VIEW chamada estatisticas_musicais que exiba três colunas:
-- A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "cancoes".
-- A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "artistas".
-- A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "albuns".
-- Sua VIEW deve retornar a seguinte informação ao ser consultada:
-- cancoes 18 - artistas 4 - albuns 5
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS estatisticas_musicais;
CREATE VIEW estatisticas_musicais AS
SELECT COUNT(DISTINCT SpotifyClone.cancoes.cancoes_nome) AS cancoes,
COUNT(DISTINCT SpotifyClone.artista.artista_nome) AS artistas,
COUNT(DISTINCT SpotifyClone.album.album_nome) AS albuns
FROM SpotifyClone.cancoes, SpotifyClone.artista, SpotifyClone.album;
