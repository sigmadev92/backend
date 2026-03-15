const invalidRoute = (req, res, next) => {
  res.status(404).json({ message: "Route Invalid" });
};

export default invalidRoute;
