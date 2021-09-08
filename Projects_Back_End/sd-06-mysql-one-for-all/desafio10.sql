-- Crie uma function chamada de quantidade_musicas_no_historico que exibe a quantidade de músicas que estão presentes atualmente no histórico de reprodução de uma pessoa usuária. 
-- Ao receber o código identificador da pessoa, exiba a quantidade de canções em seu histórico de reprodução.
-- Confirme a execução correta da function, chamando-a e passando o id para a pessoa usuária com o nome igual a "Bill".
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS quantidade_musicas_no_historico;
DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(usuario_id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE reproducoes INT;
SELECT COUNT(SpotifyClone.historico_de_reproducoes.usuario_id)
FROM SpotifyClone.historico_de_reproducoes
WHERE SpotifyClone.historico_de_reproducoes.usuario_id = usuario_id INTO reproducoes;
RETURN reproducoes;
END $$
DELIMITER ;
