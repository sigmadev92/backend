const invalidRoute = (req, res, next) => {
  console.log("Invalid Endpoint : " + req.path);
  res.status(404).json({ message: "Route Invalid" });
};

export default invalidRoute;
