-- Exiba todos os produtos que já foram pedidos e que possuem uma média de quantidade nos pedidos registrados acima de 20.00.
-- Use o banco w3schools como referência
-- Monte uma query que exiba 04 colunas:
-- A primeira deve possuir o alias "Produto" e exibir o nome do produto.
-- A segunda deve possuir o alias "Mínima" e exibir a quantidade mínima que já foi pedida desse produto.
-- A terceira deve possuir o alias "Máxima" e exibir a quantidade máxima que já foi pedida desse produto.
-- A quarta deve deve possuir o alias "Média" e exibir a média de quantidade nos pedidos deste produto, arredondada para duas casas decimais.
-- Os resultados devem estar ordenados pela média de quantidade nos pedidos em ordem crescente.
-- Em caso de empate na média, os resultados devem ser ordenados pelo nome do produto em ordem alfabética.
-- SELECT * FROM w3schools.products;
-- SELECT * FROM w3schools.order_details;
SELECT pdts.ProductName AS `Produto`,
MIN(ods.Quantity) AS `Mínima`,
MAX(ods.Quantity) AS `Máxima`,
round(AVG(ods.Quantity), 2) AS `Média`
FROM w3schools.products AS pdts
INNER JOIN w3schools.order_details AS ods
ON ods.ProductID = pdts.ProductID
GROUP BY `Produto`
HAVING `Média` > 20.00
ORDER BY `Média`, `Produto`;
