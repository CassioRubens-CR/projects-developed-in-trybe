-- crie uma VIEW chamada cancoes_premium que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano familiar ou universitário, de acordo com os detalhes a seguir:
-- A primeira coluna deve exibir o nome da canção, com o alias "nome";
-- A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "reproducoes";
-- Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética.
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS cancoes_premium;
CREATE VIEW cancoes_premium AS
SELECT SpotifyClone.cancoes.cancoes_nome AS nome,
COUNT(SpotifyClone.historico_de_reproducoes.usuario_id) AS reproducoes
FROM SpotifyClone.historico_de_reproducoes
INNER JOIN SpotifyClone.cancoes
ON SpotifyClone.cancoes.cancoes_id = SpotifyClone.historico_de_reproducoes.cancoes_id
INNER JOIN SpotifyClone.usuario
ON SpotifyClone.usuario.usuario_id = SpotifyClone.historico_de_reproducoes.usuario_id
WHERE SpotifyClone.usuario.plano_id IN (2,3)
GROUP BY nome
ORDER BY nome ASC;
