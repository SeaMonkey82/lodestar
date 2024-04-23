"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[7444],{2413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(4848),i=t(8453);const s={title:"Starting a Node"},r="Beacon management",a={id:"getting-started/starting-a-node",title:"Starting a Node",description:"The following instructions are required to setup and run a Lodestar beacon node.",source:"@site/pages/getting-started/starting-a-node.md",sourceDirName:"getting-started",slug:"/getting-started/starting-a-node",permalink:"/lodestar/getting-started/starting-a-node",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/getting-started/starting-a-node.md",tags:[],version:"current",frontMatter:{title:"Starting a Node"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/lodestar/getting-started/installation"},next:{title:"Data Retention",permalink:"/lodestar/data-retention"}},c={},l=[{value:"Connect to mainnet or a public testnet",id:"connect-to-mainnet-or-a-public-testnet",level:2},{value:"Configure the Lodestar JWT authentication token",id:"configure-the-lodestar-jwt-authentication-token",level:2},{value:"Generate a secret key",id:"generate-a-secret-key",level:3},{value:"Configure Lodestar to locate the JWT secret",id:"configure-lodestar-to-locate-the-jwt-secret",level:3},{value:"Ensure JWT is configured with your execution node",id:"ensure-jwt-is-configured-with-your-execution-node",level:3},{value:"Run a beacon node",id:"run-a-beacon-node",level:2},{value:"Checkpoint Sync",id:"checkpoint-sync",level:3},{value:"Guide to the sync logs",id:"guide-to-the-sync-logs",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"beacon-management",children:"Beacon management"}),"\n",(0,o.jsx)(n.p,{children:"The following instructions are required to setup and run a Lodestar beacon node."}),"\n",(0,o.jsx)(n.h2,{id:"connect-to-mainnet-or-a-public-testnet",children:"Connect to mainnet or a public testnet"}),"\n",(0,o.jsx)(n.p,{children:"Running a Lodestar node on mainnet or a testnet only requires basic familiarity with the terminal."}),"\n",(0,o.jsx)(n.p,{children:"Make sure Lodestar is installed in your local environment, following the chosen install method. The following command should return a non error message."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar --help\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For a complete list of beacon node CLI commands and options, see the ",(0,o.jsxs)(n.a,{href:"/lodestar/beacon-management/beacon-cli",children:[(0,o.jsx)(n.code,{children:"beacon"})," CLI Command"]})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["To select a known testnet or mainnet, use the ",(0,o.jsx)(n.code,{children:"--network"})," flag. ",(0,o.jsx)(n.code,{children:"mainnet"})," is selected by default, and a list of available networks is listed with the ",(0,o.jsx)(n.code,{children:"--help"})," flag. Setting the ",(0,o.jsx)(n.code,{children:"--network"})," flag will conveniently configure the beacon node or validator client for the selected network. For power users, any configuration option should be able to be overridden."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-lodestar-jwt-authentication-token",children:"Configure the Lodestar JWT authentication token"}),"\n",(0,o.jsxs)(n.p,{children:["Post-Merge Ethereum will require ",(0,o.jsx)(n.a,{href:"https://github.com/ethereum/execution-apis/blob/main/src/engine/authentication.md",children:"secure authentication with the Engine API"})," connection on your chosen Execution node."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Post-Merge Ethereum ",(0,o.jsx)(n.strong,{children:"requires"})," a secure, authenticated connection to the Execution client on port 8551. We recommend setting this up now to ensure a proper configuration before the Merge."]})}),"\n",(0,o.jsx)(n.h3,{id:"generate-a-secret-key",children:"Generate a secret key"}),"\n",(0,o.jsxs)(n.p,{children:["You must generate a secret 32-byte (64 characters) hexadecimal string that will be used to authenticate with an execution node. You can use the following command in most terminals to generate a random secret: ",(0,o.jsx)(n.code,{children:"openssl rand -hex 32"}),". Or you can use an ",(0,o.jsx)(n.a,{href:"https://codebeautify.org/generate-random-hexadecimal-numbers",children:"online generator"}),". Save this secret key into a text file and note where you store this file."]}),"\n",(0,o.jsx)(n.h3,{id:"configure-lodestar-to-locate-the-jwt-secret",children:"Configure Lodestar to locate the JWT secret"}),"\n",(0,o.jsxs)(n.p,{children:["When starting up a Lodestar beacon node in any configuration, ensure you add the ",(0,o.jsx)(n.code,{children:"--jwtSecret $JWT_SECRET_PATH"})," flag to point to the saved secret key file."]}),"\n",(0,o.jsx)(n.h3,{id:"ensure-jwt-is-configured-with-your-execution-node",children:"Ensure JWT is configured with your execution node"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Go Ethereum:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--authrpc.jwtsecret /data/jwtsecret"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://geth.ethereum.org/docs/interface/merge",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Nethermind:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--JsonRpc.JwtSecretFile /data/jwtsecret"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#jwtsecretfile",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Besu:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--engine-jwt-secret=<FILE>"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#engine-jwt-secret",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Erigon:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--authrpc.jwtsecret"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://github.com/ledgerwatch/erigon?tab=readme-ov-file#beacon-chain-consensus-layer",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"run-a-beacon-node",children:"Run a beacon node"}),"\n",(0,o.jsx)(n.p,{children:"To start a Lodestar beacon run the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar beacon --network $NETWORK_NAME --jwtSecret $JWT_SECRET_PATH\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will assume an execution-layer client is available at the default\nlocation of ",(0,o.jsx)(n.code,{children:"https://localhost:8545"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In case execution-layer clients are available at different locations, use ",(0,o.jsx)(n.code,{children:"--execution.urls"})," to specify these locations in the command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar beacon --network $NETWORK_NAME --jwtSecret $JWT_SECRET_PATH --execution.urls $EL_URL1 $EL_URL2\n"})}),"\n",(0,o.jsx)(n.p,{children:"Immediately you should see confirmation that the node has started"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:12:45.274[]                 info: Lodestar network=mainnet, version=v1.7.2, commit=\nApr-20 15:12:45.327[]                 info: Connected to LevelDB database path=/data/mt1/chain-db\nApr-20 15:12:57.747[]                 info: Initializing beacon from a valid db state slot=6264480, epoch=195765, stateRoot=0x8133cd4d0be59c3e94405f902fe0ad68ffaa5013b525dddb6285b91ad79716f6, isWithinWeakSubjectivityPeriod=true\nApr-20 15:13:18.077[network]          info: PeerId 16Uiu2HAmDsGet67va6VCnaW2Tu1Ae2yujiDMnmURMMWNvssER7ZQ, Multiaddrs /ip4/127.0.0.1/tcp/9000/p2p/16Uiu2HAmDsGet67va6VCnaW2Tu1Ae2yujiDMnmURMMWNvssER7ZQ,/ip4/10.244.0.199/tcp/9000/p2p/16Uiu2HAmDsGet67va6VCnaW2Tu1Ae2yujiDMnmURMMWNvssER7ZQ\nApr-20 15:13:18.270[rest]             info: Started REST API server address=http://127.0.0.1:9596\nApr-20 15:13:18.271[]                 warn: Low peer count peers=0\nApr-20 15:13:18.280[]                 info: Searching peers - peers: 0 - slot: 6264964 - head: (slot - 484) 0x7ee6\u20262a15 - exec-block: syncing(17088043 0x9442\u2026) - finalized: 0xe359\u20264d7e:195763\nApr-20 15:13:23.009[chain]            info: Validated transition configuration with execution client terminalTotalDifficulty=0xc70d808a128d7380000, terminalBlockHash=0x0000000000000000000000000000000000000000000000000000000000000000, terminalBlockNumber=0x0\nApr-20 15:13:29.287[]                 info: Syncing - ? left - 0.00 slots/s - slot: 6264965 - head: (slot - 485) 0x7ee6\u20262a15 - exec-block: syncing(17088043 0x9442\u2026) - finalized: 0xe359\u20264d7e:195763 - peers: 1\nApr-20 15:14:41.003[]                 info: Syncing - 22 seconds left - 4.92 slots/s - slot: 6264971 - head: (slot - 108) 0xd15f\u2026b605 - exec-block: valid(17088414 0x3dba\u2026) - finalized: 0x70fd\u20265157:195775 - peers: 4\nApr-20 15:14:53.001[]                 info: Syncing - 9 seconds left - 5.00 slots/s - slot: 6264972 - head: (slot - 45) 0x44e4\u202620a4 - exec-block: valid(17088475 0xca61\u2026) - finalized: 0x9cbd\u2026ba83:195776 - peers: 8\nApr-20 15:15:01.443[network]          info: Subscribed gossip core topics\nApr-20 15:15:01.446[sync]             info: Subscribed gossip core topics\nApr-20 15:15:05.000[]                 info: Synced - slot: 6264973 - head: 0x90ea\u2026c655 - exec-block: valid(17088521 0xca9b\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 6\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If your node is stuck with ",(0,o.jsx)(n.code,{children:"Searching for peers"})," review your network configuration to make sure your ports are open."]})}),"\n",(0,o.jsxs)(n.p,{children:["By default, Lodestar stores all configuration and chain data at the path ",(0,o.jsx)(n.code,{children:"$XDG_DATA_HOME/lodestar/$NETWORK_NAME"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A young testnet should take a few hours to sync. If you see multiple or consistent errors in the logs, please open a ",(0,o.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar/issues/new",children:"Github issue"})," or reach out to us in ",(0,o.jsx)(n.a,{href:"https://discord.gg/yjyvFRP",children:"Discord"}),". Just by reporting anomalies you are helping accelerate the progress of Ethereum Consensus, thanks for contributing!"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"It is dangerous to expose your Beacon APIs publicly as there is no default authentication mechanism provided. Ensure your beacon node host is not exposing ports 8545 or 9596 outside of your internal network."})}),"\n",(0,o.jsx)(n.h3,{id:"checkpoint-sync",children:"Checkpoint Sync"}),"\n",(0,o.jsxs)(n.p,{children:['If you are starting your node from a blank db, like starting from genesis, or from the last saved state in db and the network is now far ahead, your node will be susceptible to "long range attacks." Ethereum\'s solution to this is via something called weak subjectivity. ',(0,o.jsx)(n.a,{href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/",children:"Read Vitalik's illuminating post explaining weak subjectivity."}),"."]}),"\n",(0,o.jsx)(n.p,{children:'If you have a synced beacon node available (e.g., your friend\'s node or an infrastructure provider) and a trusted checkpoint you can rely on, you can start off your beacon node in under a minute! And at the same time kicking the "long range attack" in its butt!'}),"\n",(0,o.jsxs)(n.p,{children:["Just supply these ",(0,o.jsx)(n.strong,{children:"extra arguments"})," to your beacon node command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--checkpointSyncUrl <synced node url> [--wssCheckpoint <trusted checkpoint in root:epoch format>]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In case you really trust ",(0,o.jsx)(n.code,{children:"checkpointSyncUrl"})," then you may skip providing ",(0,o.jsx)(n.code,{children:"wssCheckpoint"}),", which will then result into your beacon node syncing and starting off the recently finalized state from the trusted URL."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Please use this option very carefully (and at your own risk), a malicious server URL can put you on the wrong chain with a danger of you losing your funds by social engineering.\nIf possible, validate your ",(0,o.jsx)(n.code,{children:"wssCheckpoint"})," from multiple places (e.g. different client distributions) or from other trusted sources. This will highly reduce the risk of starting off on a malicious chain.\nThis list of ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints/",children:"public endpoints"})," maintained by the Ethereum community may be used for reference."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Taking too long to sync?"})}),"\n",(0,o.jsxs)(n.p,{children:["After your node has been offline for a while, it might be the case that it takes a long time to sync even though a ",(0,o.jsx)(n.code,{children:"checkpointSyncUrl"})," is specified.\nThis is due to the fact that the last db state is still within the weak subjectivity period (~15 days on mainnet) which causes the node\nto sync from the db state instead of the checkpoint state."]}),"\n",(0,o.jsxs)(n.p,{children:["It is possible to force syncing from checkpoint state by supplying the ",(0,o.jsx)(n.code,{children:"--forceCheckpointSync"})," flag. This option is only recommended if it is absolutely\nnecessary for the node to be synced right away to fulfill its duties as there is an inherent risk each time the state is obtained from an external source."]}),"\n",(0,o.jsx)(n.h3,{id:"guide-to-the-sync-logs",children:"Guide to the sync logs"}),"\n",(0,o.jsx)(n.p,{children:"Lodestar beacon sync log aims to provide information of utmost importance about your node and yet be succinct at the same time. You may see the sync logs in the following format:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"[Sync status] - [ Slot info ] - [Head info] - [Exec block info] - [Finalized info] - [Peers info]"})}),"\n",(0,o.jsx)(n.p,{children:"See the following example of different kinds of sync log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:24:08.034[]                 info: Searching peers - peers: 0 - slot: 6265018 - head: 6264018 0xed93\u20267b0a - exec-block: syncing(17088476 0x9649\u2026) - finalized: 0xbf30\u20267e7c:195777\nApr-20 15:24:17.000[]                 info: Searching peers - peers: 0 - slot: 6265019 - head: 6264018 0xed93\u20267b0a - exec-block: syncing(17088476 0x9649\u2026) - finalized: 0xbf30\u20267e7c:195777\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:13:41.298[]                 info: Syncing - 2.5 minutes left - 2.78 slots/s - slot: 6264966 - head: 6262966 0x5cec\u2026f5b8 - exec-block: valid(17088105 0x6f74\u2026) - finalized: 0x5cc0\u20263874:195764 - peers: 1\nApr-20 15:13:41.298[]                 info: Syncing - 2 minutes left - 2.78 slots/s - slot: 6264967 - head: 6263965 0x5cec\u2026f5b8 - exec-block: valid(17088105 0x6f74\u2026) - finalized: 0x5cc0\u20263874:195764 - peers: 1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:13:53.151[]                 info: Syncing - 1.6 minutes left - 3.82 slots/s - slot: 6264967 - head: (slot -360) 0xe0cf\u20269f3c - exec-block: valid(17088167 0x2d6a\u2026) - finalized: 0x8f3f\u20262f81:195766 - peers: 5\nApr-20 15:14:05.425[]                 info: Syncing - 1.1 minutes left - 4.33 slots/s - slot: 6264968 - head: (slot -297) 0x3655\u20261658 - exec-block: valid(17088231 0xdafd\u2026) - finalized: 0x9475\u2026425a:195769 - peers: 2\nApr-20 15:14:53.001[]                 info: Syncing - 9 seconds left - 5.00 slots/s - slot: 6264972 - head: (slot -45) 0x44e4\u202620a4 - exec-block: valid(17088475 0xca61\u2026) - finalized: 0x9cbd\u2026ba83:195776 - peers: 8\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:15:01.443[network]          info: Subscribed gossip core topics\nApr-20 15:15:01.446[sync]             info: Subscribed gossip core topics\nApr-20 15:15:05.000[]                 info: Synced - slot: 6264973 - head: 0x90ea\u2026c655 - exec-block: valid(17088521 0xca9b\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 6\nApr-20 15:15:17.003[]                 info: Synced - slot: 6264974 - head: 0x4f7e\u20260e3a - exec-block: valid(17088522 0x08b1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 6\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:15:41.001[]                 info: Synced - slot: 6264976 - head: (slot -1) 0x17c6\u202671a7 - exec-block: valid(17088524 0x5bc1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\nApr-20 15:15:53.001[]                 info: Synced - slot: 6264977 - head: (slot -2) 0x17c6\u202671a7 - exec-block: valid(17088524 0x5bc1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:16:05.000[]                 info: Synced - slot: 6264978 - head: 0xc9fd\u202628c5 - exec-block: valid(17088526 0xb5bf\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\nApr-20 15:16:17.017[]                 info: Synced - slot: 6264979 - head: 0xde91\u2026d4cb - exec-block: valid(17088527 0xa488\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 7\n"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Sync status: Takes three values : ",(0,o.jsx)(n.code,{children:"Synced"})," or ",(0,o.jsx)(n.code,{children:"Syncing"})," (along with sync speed info) or ",(0,o.jsx)(n.code,{children:"Searching"})," if node is is still looking for viable peers from where it can download blocks."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Slot (clock) info: What is the current ongoing slot as per the chain genesis"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Head info: It specifies where the local chain head hash is. In case its far behind the Slot (clock) then it independently shows the head slot else it show how far behind from the Slot it is if difference < 1000."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Execution block info: It provides the execution information about the head whether its confirmed ",(0,o.jsx)(n.code,{children:"valid"})," or execution layer is still ",(0,o.jsx)(n.code,{children:"syncing"})," to it, as well as its number and a short hash to easy identification."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Finalized info: What is the current local ",(0,o.jsx)(n.code,{children:"finalized"})," checkpoint in the format of ",(0,o.jsx)(n.code,{children:"[checkpoint root]:[checkpoint epoch]"}),", for e.g.: ",(0,o.jsx)(n.code,{children:"0xd7ba\u20268386:189636"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Peer info: Current total number of outbound or inbound peers, for e.g.: ",(0,o.jsx)(n.code,{children:"peers: 27"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more insight into how a Lodestar beacon node is functioning, you may setup lodestar metrics and use the prepared Grafana dashboards that are found in the repository. Check out our section on ",(0,o.jsx)(n.a,{href:"/lodestar/logging-and-metrics/prometheus-grafana",children:"Prometheus and Grafana"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);