const fs = require("fs");

var serverProp = fs.readFileSync("./server.properties", { encoding: "utf8" });

serverProp = serverProp.replaceAll("motd=A Minecraft Server", "motd=" + process.argv[2]);

fs.writeFileSync("./server.properties", serverProp);
