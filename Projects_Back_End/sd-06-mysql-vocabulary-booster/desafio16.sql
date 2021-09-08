-- Crie uma função chamada buscar_quantidade_de_empregos_por_funcionario que, ao receber o email de uma pessoa funcionária, retorne a quantidade de empregos presentes em seu histórico.
-- Use o banco hr como referência
-- Confirme que sua função retorna o valor 2 ao ser chamada passando uma pessoa funcionária cujo email é "NKOCHHAR".
-- SELECT * FROM hr.employees;
-- SELECT * FROM hr.job_history;
USE hr;
DROP FUNCTION IF EXISTS buscar_quantidade_de_empregos_por_funcionario;

DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email varchar(25))
RETURNS INT READS SQL DATA
BEGIN
RETURN (
  SELECT COUNT(jbh.job_id) AS `total_empregos` 
  FROM hr.job_history AS jbh
  WHERE jbh.EMPLOYEE_ID = (
  SELECT epy.EMPLOYEE_ID
  FROM hr.employees AS epy
  WHERE epy.EMAIL = email)
  );
END $$
DELIMITER ;

SELECT  buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR'); 
