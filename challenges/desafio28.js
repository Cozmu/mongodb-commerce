db.produtos.countDocuments({ $expr: { $eq: [{ $size: "$ingredientes" }, 4] } });
