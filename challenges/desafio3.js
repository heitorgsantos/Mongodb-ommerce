db.produtos.updateMany(
  { curtidas: { $gte: 1 } },
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
