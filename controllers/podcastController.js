import fs from "fs";

export const get_podcast = async (req, res) => {
  const data = fs.readFile("./public/html/podcast.html", "utf-8", (err, data) => {
    res.cookie("user", JSON.stringify(req.session.user));
    res.send(data);
  });
  
  console.log(req.session.user);
};
