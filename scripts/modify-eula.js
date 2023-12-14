const fs = require("fs");

var eula = fs.readFileSync("./eula.txt", { encoding: "utf8" });

eula = eula.replaceAll("false", "true");

fs.writeFileSync("./eula.txt", eula);
