export const isAuthenticated = (req, res, next) => {
  if (req.session.user !== undefined) {
    next();
  } else {
    return res.send("You are not authorized, please login in first");
  }
};
