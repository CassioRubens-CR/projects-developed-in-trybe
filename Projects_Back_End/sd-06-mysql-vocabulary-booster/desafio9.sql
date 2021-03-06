-- Exiba todas as pessoas funcionárias que já realizaram algum pedido e o total dos pedidos feitos.
-- Use o banco w3schools como referência
-- Monte uma query que exiba 02 colunas:
-- A primeira deve possuir o alias "Nome completo" e exibir o nome completo da pessoa funcionária (não se esqueça do espaço entre o nome e o sobrenome).
-- A segunda deve possuir o alias "Total de pedidos" e exibir a quantidade total de pedidos feitos pela pessoa.
-- Ordene seus resultados pelo total de pedidos em ordem crescente.
-- SELECT * FROM w3schools.employees;
-- SELECT * FROM w3schools.orders;
SELECT concat(epy.FirstName, ' ', epy.LastName) AS `Nome completo`,
COUNT(ods.OrderID) AS `Total de pedidos`
FROM w3schools.employees AS epy, w3schools.orders AS ods
WHERE ods.EmployeeID = epy.EmployeeID
GROUP BY `Nome completo`
ORDER BY `Total de pedidos`;
