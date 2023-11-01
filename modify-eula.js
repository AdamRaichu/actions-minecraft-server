const fs = require("fs");

var eula = fs.readFileSync("./eula.txt", { encoding: "utf8" });

eula = eula.replaceAll("false", "true");

// For testing
console.log(eula);

fs.writeFileSync("./eula.txt", eula);
