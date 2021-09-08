// Desafio 3
// Localizando o campo avaliacaoem todos os documentos da coleção e efetue mudanças nesse campo.
// Para isso, escreva no arquivo desafio3.jsquatro queries, nesta ordem :
// Crie uma consulta que inclua o campo avaliacaodo tipo NumberInte com
// o valor 0 em todos os documentos da coleção.
// CRIE Uma consulta that incremente o valor do campo avaliacaoem 5 em todos
// OS sanduiches de carne do tipo bovino.
// Dica: utilize como filtro o campo tags.
// CRIE Uma consulta that incremente o valor do campo avaliacaoem 3 em todos OS sanduiches de ave.
// Crie uma consulta que retorne o nome e avaliacaode todos os sanduíches.
db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);

db.produtos.updateMany(
  { tags: "bovino" },
  { $set: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: "ave" },
  { $set: { avaliacao: 3 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
).pretty();
