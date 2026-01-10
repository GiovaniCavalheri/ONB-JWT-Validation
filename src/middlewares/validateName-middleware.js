const validadeNameMiddleware = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.length < 2) {
    return res.status(400).json({
      message: "Name is Invalid",
    });
  }
};

module.exports = validadeNameMiddleware; 
