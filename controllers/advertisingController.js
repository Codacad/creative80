import fs from "fs";

export const get_advertising = async (req, res) => {
  const data = fs.readFile("./public/html/advertising.html", "utf-8", (err, data) => {
    res.cookie("user", JSON.stringify(req.session.user));
    res.send(data);
  });
  
  console.log(req.session.user);
};
