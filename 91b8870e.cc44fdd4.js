(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(81)),i={id:"node-operator",title:"How to run a node"},c={unversionedId:"node-operator",id:"node-operator",isDocsHomePage:!1,title:"How to run a node",description:'Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water in Maori", and we aim to create a Tewai Protocol to become the most important substances on metaverse and flows like water that adjust to any objects.',source:"@site/docs/node-operator.md",slug:"/node-operator",permalink:"/node-operator",editUrl:"https://github.com/bit-country/bitcountry-docs/edit/master/docs/node-operator.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting $NUUM Faucet",permalink:"/faucet"},next:{title:"Architecture",permalink:"/architecture"}},b=[],s={rightToc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water in Maori", and we aim to create a Tewai Protocol to become the most important substances on metaverse and flows like water that adjust to any objects.'),Object(o.b)("p",{parentName:"div"},"If you would like to support and be a part of the most important aspects of the future Metaverse, you can apply to become a Node Operator to run the Tewai Protocol using this section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"node-operator#run-a-node"}),"Run a node"),". Or if you simply wanted to accessing the User Interface, head to this section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"node-operator#ui"}),"Accessing User Interface"),"."),Object(o.b)("h2",Object(n.a)({parentName:"div"},{id:"run-a-node"}),"Run a node"),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"initial-set-up"}),"Initial Set-up"),Object(o.b)("h4",Object(n.a)({parentName:"div"},{id:"requirements"}),Object(o.b)("strong",{parentName:"h4"},"Requirements")),Object(o.b)("p",{parentName:"div"},"The most common way for a beginner to run a validator is on a cloud server running Linux. You can choose whatever VPS provider e.g AWS, Azure, or running on your own local setup."),Object(o.b)("p",{parentName:"div"},"Standard Hardware Specs"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"CPU - 2.2 GHz 6-Core Intel Core i7"),Object(o.b)("li",{parentName:"ul"},"Storage - SSD - Should be reasonably sized to deal with blockchain growth. Starting around 10 GB - 80 GB will be okay for the first six months. Recommend to re-evaluate every six month"),Object(o.b)("li",{parentName:"ul"},"RAM - 8 Gb")),Object(o.b)("p",{parentName:"div"},"Or "),Object(o.b)("p",{parentName:"div"},"AWS Medium EC2 instance with 30 GB Hard drive should be efficient."),Object(o.b)("h2",Object(n.a)({parentName:"div"},{id:"running-a-node"}),Object(o.b)("strong",{parentName:"h2"},"Running a Node")),Object(o.b)("p",{parentName:"div"},"There are two ways that you can run a node and connect to the Bit.Country Tewai Chain testnet. "),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Build from source (takes about 5 - 15 minutes with standard specs)"),Object(o.b)("li",{parentName:"ul"},"Use Docker")),Object(o.b)("h4",Object(n.a)({parentName:"div"},{id:"building-from-source"}),Object(o.b)("strong",{parentName:"h4"},"Building from source")),Object(o.b)("p",{parentName:"div"},"Window users: please use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://substrate.dev/docs/en/knowledgebase/getting-started/windows-users"}),"this tutorial")," to setup your build environment "),Object(o.b)("p",{parentName:"div"},"Linux-based machine"),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Clone Bit.Country Blockchain code")),Object(o.b)("p",{parentName:"div"},"Go to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/bit-country/Bit-Country-Blockchain"}),"Bit.Country repo"),", clone the repo from correct commit hash."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-git"}),"# clone the code locally\n\ngit clone https://github.com/bit-country/Bit-Country-Blockchain.git\n\n# change directory\n\ncd Bit-Country-Blockchain\n\n# select correct commit hash\ngit checkout 387b953085dfc21f44cf083d89c0fb3bb7931056\n")),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Install Rust")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl https://sh.rustup.rs -sSf | sh\n")),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Initialize your Wasm Build environment")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/init.sh\n")),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"if init.sh file is not found, make sure you are currently inside Bit-Country-Blockchain directory")),Object(o.b)("p",{parentName:"div"},"After initializing you can then start building by using the cargo command:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cargo build --release --features=with-bitcountry-runtime\n")),Object(o.b)("p",{parentName:"div"},"Once the build has finished you will have the bitcountry-node binary available in the target/release folder. You can start a node for Tewai Chain from the root of the directory like so:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A\n")),Object(o.b)("p",{parentName:"div"},"You should see your node begin to sync blocks."),Object(o.b)("p",{parentName:"div"},"Feel free to play around with the other available options, which you can inspect by executing:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --help\n")),Object(o.b)("p",{parentName:"div"},"Then you can start bonding NUUM to become validator or nominator"),Object(o.b)("h4",Object(n.a)({parentName:"div"},{id:"using-docker"}),Object(o.b)("strong",{parentName:"h4"},"Using Docker")),Object(o.b)("p",{parentName:"div"},"We publish the latest version to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/bitcountry/bitcountry-node/tags?page=1&ordering=last_updated"}),"Docker Hub")," that can be pulled and ran locally to connect to the network. In order to do this first make sure that you have Docker installed locally. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"How to install and run Docker")),Object(o.b)("h4",Object(n.a)({parentName:"div"},{id:"downloading-the-docker-image"}),"Downloading the docker image"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker pull bitcountry/bitcountry-node:0.2\n")),Object(o.b)("h4",Object(n.a)({parentName:"div"},{id:"running-the-docker-image"}),"Running the docker image"),Object(o.b)("p",{parentName:"div"},"You can test if the docker image is running by using the following command, but the node id\nand the chain data will be deleted after you shut down the docker container:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker run bitcountry/bitcountry-node:0.2 --chain tewai\n")),Object(o.b)("p",{parentName:"div"},"Now, it's time to set up your node to connect to Tewai Chain Bootnode, you need to choose which folder that you would like to store your chain data. Ensure the folder is exists and you have write permission in the folder."),Object(o.b)("p",{parentName:"div"},"Assuming the path you want to use locally is ",Object(o.b)("em",{parentName:"p"},"/tewaiDb/bitcountry-node"),",\nthe command would be:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker run -network=host -v /tewaiDb/bitcountry-node:/bitcountry-db bitcountry/bitcountry-node:0.2 -d /bitcountry-db --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A\n")),Object(o.b)("p",{parentName:"div"},"That's it, your node should be running and syncing with other nodes."),Object(o.b)("h2",Object(n.a)({parentName:"div"},{id:"become-a-validator-and-earn-a-reward"}),Object(o.b)("strong",{parentName:"h2"},"Become a Validator and earn a reward")),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"$NUUM on Tewai Chain Testnet is for testing purpose, they have no value or reflection of NUUM on public mainnet")),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"run-the-node-as-validator"}),"Run the node as validator"),Object(o.b)("p",{parentName:"div"},"Once your node from step 1 is fully synced then you can stop the node by Control + C, and run the node again with --validator and --name arguments.\n",Object(o.b)("strong",{parentName:"p"},"Running from source")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A\n")),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Running from docker")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker run bitcountry/bitcountry-node:0.2 --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A\n")),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"bond-nuum"}),"Bond NUUM"),Object(o.b)("p",{parentName:"div"},"Go to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/explorer/node"}),"Tewai Chain Explorer")),Object(o.b)("p",{parentName:"div"},"Bond the ",Object(o.b)("strong",{parentName:"p"},"$NUUM")," of the Stash account. These ",Object(o.b)("strong",{parentName:"p"},"$NUUM")," will be put at stake for the security of the network and can be slashed.\nSelect the Controller. This is the account that will decide when to start or stop validating."),Object(o.b)("p",{parentName:"div"},"First, go to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/staking"}),"Staking"),' section. Click on "Account Actions", and then the "+ Stash" button.'),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"generate-session-keys"}),"Generate Session Keys"),Object(o.b)("p",{parentName:"div"},"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on Tewai Chain."),Object(o.b)("p",{parentName:"div"},"Your generate session keys on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://explorer.bit.country/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/rpc"}),"Tewai Explorer")),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"You need to change the node connection to your validator node in order to use rpc author call")),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"submitting-the-setkeys-transaction"}),"Submitting the setKeys Transaction"),Object(o.b)("p",{parentName:"div"},"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account."),Object(o.b)("p",{parentName:"div"},'Go to Staking > Account Actions, and click "Set Session Key" on the bonding account you generated earlier. Enter the output from author_rotateKeys in the field and click "Set Session Key".'),Object(o.b)("p",{parentName:"div"},"Submit this extrinsic and you are now ready to start validating."),Object(o.b)("h3",Object(n.a)({parentName:"div"},{id:"validate"}),"Validate"),Object(o.b)("p",{parentName:"div"},"To verify that your node is live and synchronized, head to Telemetry and find your node. Note that this will show all nodes on the Bit.Country Tewai Chain network, which is why it is important to select a unique name!"),Object(o.b)("p",{parentName:"div"},'If everything looks good, go ahead and click on "Validate" in Explorer UI.'),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Congratulations!")," If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a Bit.Country Tewai Chain validator!"))))}d.isMDXComponent=!0},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=d(a),l=n,m=p["".concat(i,".").concat(l)]||p[l]||u[l]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=l;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);