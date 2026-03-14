export default class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.code).json({ message: err.message });
  }

  res.status(503).json({ message: "Internal server error" });
};
