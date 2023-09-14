import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const expiration = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // Expire en 24 heures

  return jwt.sign({ id, exp: expiration }, process.env.JWT_SECRET);
};

export default generateToken;

