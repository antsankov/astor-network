(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{213:function(e,t,a){"use strict";a.r(t);var n=a(2),i=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"running-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-locally","aria-hidden":"true"}},[e._v("↳")]),e._v(" Running locally")]),e._v(" "),a("h3",{attrs:{id:"with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-docker","aria-hidden":"true"}},[e._v("↳")]),e._v(" With Docker")]),e._v(" "),a("p",[e._v("We are making available a simple Docker-based set up with Hyperledger Besu so you can try out locally Keccak mining.\nThe local network has a very small fixed difficulty as well so you can easily produce blocks on your machine with CPU mining.")]),e._v(" "),a("p",[a("code",[e._v('$> docker run -p 8545:8545 tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all" --network=ecip1049_dev --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73')])]),e._v(" "),a("h3",{attrs:{id:"with-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-docker-compose","aria-hidden":"true"}},[e._v("↳")]),e._v(" With Docker Compose")]),e._v(" "),a("p",[e._v("You can "),a("a",{attrs:{href:"https://github.com/antsankov/astor-network/blob/master/docs/node/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("download this Docker Compose file"),a("OutboundLink")],1),e._v(" and automate away the set up of a simple Besu with a bundled Python CPU miner. You can use the Python miner as a starting point for optimized mining approaches/hardware.")]),e._v(" "),a("p",[e._v("Download the file and make sure Docker Compose is installed.")]),e._v(" "),a("p",[e._v("To run, make a new directory, and get the docker compose:")]),e._v(" "),a("p",[a("code",[e._v("$> wget https://raw.githubusercontent.com/antsankov/astor-network/master/docs/node/docker-compose.yml")])]),e._v(" "),a("p",[e._v("and then run")]),e._v(" "),a("p",[a("code",[e._v("$> docker-compose up")])]),e._v(" "),a("p",[e._v("It will run interactively the set up and collaboration of Besu with the CPU miner.")]),e._v(" "),a("p",[e._v("You can exit with Ctrl+C.")]),e._v(" "),a("h2",{attrs:{id:"mining-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mining-locally","aria-hidden":"true"}},[e._v("↳")]),e._v(" Mining locally")]),e._v(" "),a("p",[e._v("If you would like to mine on the network, you will need to install a miner to connect to Besu (see below).")]),e._v(" "),a("p",[e._v("You will need to enable Besu's stratum mining as well:")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v('$> docker run -p 8545:8545 tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all" --network=ecip1049_dev --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73 --miner-stratum-enabled --miner-stratum-host=0.0.0.0')])])]),e._v(" "),a("li",[a("p",[e._v("Connect Metamask to "),a("code",[e._v("localhost:8545")])])])]),e._v(" "),a("p",[e._v("The dev network uses 3 accounts. Here are the private keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63")])]),e._v(" "),a("li",[a("code",[e._v("c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3")])]),e._v(" "),a("li",[a("code",[e._v("ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f")])])]),e._v(" "),a("p",[e._v("You can import them into Metamask.")]),e._v(" "),a("h2",{attrs:{id:"mining-client-experimental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mining-client-experimental","aria-hidden":"true"}},[e._v("↳")]),e._v(" Mining Client (EXPERIMENTAL)")]),e._v(" "),a("p",[e._v("Currently, we have only created a CPU miner in Python, however we will be working on an open source GPU version as well. Please consult "),a("router-link",{attrs:{to:"/mine/"}},[e._v("our resources")]),e._v(" if you are interested in mining.")],1),e._v(" "),a("p",[a("code",[e._v("$> git clone https://github.com/snissn/ethereum-cpu-miner.git")])]),e._v(" "),a("p",[a("code",[e._v("$> pip3 install -r requirements.txt")])]),e._v(" "),a("p",[a("code",[e._v("$> sh run.sh")])]),e._v(" "),a("p",[e._v("Make sure to change the "),a("code",[e._v("run.sh")]),e._v(" to have the "),a("code",[e._v("-n")]),e._v(" be the number of blocks you want to mine on the testnet. Screenshot below is succesful testnet mine to the author address.")]),e._v(" "),a("h2",{attrs:{id:"more-difficulty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-difficulty","aria-hidden":"true"}},[e._v("↳")]),e._v(" More difficulty")]),e._v(" "),a("p",[e._v("The dev network uses a fixed, small difficulty so it uses CPU mining by default.\nYou can provide a different genesis file with the following approach:")]),e._v(" "),a("ol",[a("li",[e._v("mount a different genesis file")]),e._v(" "),a("li",[e._v("change the arguments to pick it up.")])]),e._v(" "),a("p",[e._v("Here is an example of genesis file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "config": {\n    "chainId": 2021,\n    "ecip1049Block": 0,\n    "keccak256": {\n    }\n  },\n  "nonce": "0x42",\n  "timestamp": "0x0",\n  "extraData": "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",\n  "gasLimit": "0x1fffffffffffff",\n  "difficulty": "0x10000",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n      "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n')])])]),a("h3",{attrs:{id:"custom-genesis-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-genesis-example","aria-hidden":"true"}},[e._v("↳")]),e._v(" Custom Genesis Example")]),e._v(" "),a("p",[a("code",[e._v('$> docker run -p 8545:8545 -v genesis.json:/tmp/genesis.json tmio/besu-keccak --rpc-http-enabled --rpc-http-api=admin,eth,debug,miner,net,txpool,priv,trace,web3 --rpc-http-cors-origins="all" --miner-enabled --miner-coinbase=fe3b557e8fb62b89f4916b721be55ceb828dbd73 --genesis-file=/tmp/genesis.json')])]),e._v(" "),a("p",[a("img",{attrs:{src:"/success.png",alt:""}})])])},[],!1,null,null,null);t.default=i.exports}}]);