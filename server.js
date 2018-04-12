const express = require("express"),
  path = require("path"),
  fs = require("fs"),
  app = express();
PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "app")));
app.use('/docs', express.static(path.join(__dirname, "docs")));
const server = app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

app.get("/data", (req, res) => {
  let radarConfig = JSON.parse(
      fs.readFileSync(__dirname + "/data/radar-config.json", "utf-8")
    ),
    // radarData = JSON.parse(
    //   fs.readFileSync(__dirname + "/data/radar-data.json", "utf-8")
    // ),
    radarData = JSON.parse(
      fs.readFileSync(__dirname + "/data/output.json", "utf-8")
    ),
    data = Object.assign(radarConfig, {entries: radarData});
  res.send(data);
});
