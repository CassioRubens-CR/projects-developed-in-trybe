-- Exiba todos os produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80.
-- Use o banco w3schools como referência
-- Monte uma query que exiba 02 colunas:
-- A primeira deve possuir o alias "Produto" e exibir o nome do produto.
-- A segunda deve possuir o alias "Preço" e exibir o preço desse produto.
-- Os resultados devem estar ordenados pelo nome do produto em ordem alfabética.
-- SELECT * FROM w3schools.products;
-- SELECT * FROM w3schools.order_details;
SELECT pdts.ProductName AS `Produto`,
pdts.Price AS `Preço` 
FROM w3schools.products AS pdts
INNER JOIN w3schools.order_details AS ods
ON pdts.ProductID = ods.ProductID
WHERE ods.Quantity > 80
ORDER BY `Produto`;
