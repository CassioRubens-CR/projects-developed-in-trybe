-- Estamos fazendo um estudo das músicas mais tocadas e precisamos saber quais são as duas músicas mais tocadas no momento. Crie uma VIEW chamada top_2_hits_do_momento que possua duas colunas:
-- A primeira coluna deve possuir o alias "cancao" e exibir o nome da canção.
-- A segunda coluna deve possuir o alias "reproducoes" e exibir a quantidade de pessoas que já escutaram a canção em questão.
-- Seu resultado deve estar ordenado em ordem decrescente, baseando-se no número de reproduções. Em caso de empate, ordene os resultados pelo nome da canção em ordem alfabética. Queremos apenas o top 2 de músicas mais tocadas.
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS top_2_hits_do_momento;
CREATE VIEW `top_2_hits_do_momento` AS
SELECT SpotifyClone.cancoes.cancoes_nome AS cancao,
COUNT(SpotifyClone.cancoes.cancoes_id) AS reproducoes
FROM historico_de_reproducoes
INNER JOIN cancoes
ON SpotifyClone.cancoes.cancoes_id = SpotifyClone.historico_de_reproducoes.cancoes_id
GROUP BY SpotifyClone.cancoes.cancoes_nome
ORDER BY reproducoes DESC, cancao ASC
LIMIT 2;
