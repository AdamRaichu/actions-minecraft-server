# Run the first time in order to generate eula.txt
java -Xmx6G -jar fabric-server-mc.1.20.2-loader.0.14.24-launcher.0.11.2.jar nogui

node ./modify-eula.js
node ./modify-server-prop.js

lt &
printf 'op AdamRaichu' | java -Xmx6G -jar fabric-server-mc.1.20.2-loader.0.14.24-launcher.0.11.2.jar nogui
