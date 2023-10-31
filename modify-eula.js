const fs = require("fs");

var eula = fs.readFileSync("./eula.txt", { encoding: "utf8" });

// For testing
console.log(eula);

fs.writeFileSync("./eula.txt", eula.replaceAll("false", "true"));
