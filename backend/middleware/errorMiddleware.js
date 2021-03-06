const notfound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  console.log('404 middleware');
  res.status(404);
  next(error);
};

// Error middleware
const errorHandler = (err, req, res, next) => {
  console.log('Error middleware');
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notfound, errorHandler };
