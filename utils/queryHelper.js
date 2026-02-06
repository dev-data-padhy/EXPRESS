export const executeQuery = async ({
  model,
  req,
  searchableFields = [],
  baseFilter = {},
}) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;
  const skip = (page - 1) * limit;

  const sortBy = req.query.sortBy || "createdAt";
  const order = req.query.order === "asc" ? 1 : -1;
  const search = req.query.search || "";

  const searchFilter =
    search && searchableFields.length
      ? {
          $or: searchableFields.map((field) => ({
            [field]: { $regex: search, $options: "i" },
          })),
        }
      : {};

  const finalFilter = {
    $and: [baseFilter, searchFilter].filter(
      (filter) => Object.keys(filter).length
    ),
  };

  const [data, total] = await Promise.all([
    model
      .find(finalFilter)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: order }),
    model.countDocuments(finalFilter),
  ]);

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data,
  };
};
