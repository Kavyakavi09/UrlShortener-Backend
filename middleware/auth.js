import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (token) {
    let decode = jwt.verify(token, process.env.SECRET_KEY);
    if (decode) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default auth;
