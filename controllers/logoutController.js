export const logout = async (req, res) => {
  req.session.destroy();
  res.clearCookie("user");
  res.redirect(302, "/login");
}