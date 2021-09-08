-- Crie uma trigger chamada trigger_usuario_delete que deve ser disparada sempre que uma pessoa usuária for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver.
-- Teste a funcionalidade correta de sua trigger, fazendo a exclusão da usuária "Thati"
-- USE SpotifyClone;
-- DROP DATABASE IF EXISTS trigger_usuario_delete;
DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE
ON SpotifyClone.usuario
FOR EACH ROW
BEGIN
DELETE FROM SpotifyClone.historico_de_reproducoes WHERE usuario_id = OLD.usuario_id;
DELETE FROM SpotifyClone.seguindo_artistas WHERE usuario_id = OLD.usuario_id;
END $$
DELIMITER ;
