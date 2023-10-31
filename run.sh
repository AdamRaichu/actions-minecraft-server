chmod u+x ./install-playit.sh
chmod u+x ./tunnels-status.sh

./install-playit.sh
./tunnels-status.sh

playit --secret $PLAYIT_SECRET this-donations.gl.joinmc.link &
java -Xmx6G -jar fabric-server-mc.1.20.2-loader.0.14.24-launcher.0.11.2.jar nogui