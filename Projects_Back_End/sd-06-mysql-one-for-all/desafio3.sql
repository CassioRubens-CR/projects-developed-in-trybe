-- Crie uma VIEW chamada historico_reproducao_usuarios. Essa VIEW deverá ter apenas duas colunas:
-- A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.
-- A segunda coluna deve possuir o alias "nome" e exibir o nome da canção ouvida pela pessoa com base no seu histórico de reprodução.
-- Os resultados devem estar ordenados por nome da pessoa usuária em ordem alfabética e em caso de empate no nome os resultados devem ser ordenados pelo nome da canção em ordem alfabética.
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS historico_reproducao_usuarios;
CREATE VIEW historico_reproducao_usuarios AS
SELECT SpotifyClone.usuario.usuario_nome AS usuario,
SpotifyClone.cancoes.cancoes_nome AS nome
FROM historico_de_reproducoes
INNER JOIN usuario
ON SpotifyClone.usuario.usuario_id = SpotifyClone.historico_de_reproducoes.usuario_id
INNER JOIN cancoes
ON SpotifyClone.cancoes.cancoes_id = SpotifyClone.historico_de_reproducoes.cancoes_id
ORDER BY usuario, nome;
