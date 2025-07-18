const validateBug = (req, res, next) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      error: 'Please provide both title and description'
    });
  }
  
  if (title.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Title cannot be more than 100 characters'
    });
  }
  
  if (description.length > 1000) {
    return res.status(400).json({
      success: false,
      error: 'Description cannot be more than 1000 characters'
    });
  }
  
  next();
};

export default validateBug;