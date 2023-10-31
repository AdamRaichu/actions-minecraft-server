chmod u+x ./install-playit.sh
chmod u+x ./tunnels-status.sh

./install-playit.sh
./tunnels-status.sh

playit --secret $PLAYIT_SECRET this-donations.gl.joinmc.link