const fs = require("fs");

var serverProp = fs.readFileSync("./server.properties", { encoding: "utf8" });

// For testing
console.log(serverProp);

fs.writeFileSync("./server.properties", serverProp.replaceAll("enable-query=false", "enable-query=true").replaceAll("motd=A Minecraft Server", "motd=A Minecraft server running in GitHub Actions"));
