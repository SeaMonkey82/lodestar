"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[7382],{3874:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=s(4848),r=s(8453);const a={},o="Installation",i={id:"getting-started/installation",title:"Installation",description:"Docker Installation",source:"@site/pages/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/lodestar/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/getting-started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/lodestar/getting-started/quick-start"},next:{title:"Starting a Node",permalink:"/lodestar/getting-started/starting-a-node"}},l={},d=[{value:"Docker Installation",id:"docker-installation",level:2},{value:"Build from Source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Clone repository",id:"clone-repository",level:3},{value:"Install packages",id:"install-packages",level:3},{value:"Build source code",id:"build-source-code",level:3},{value:"Lodestar CLI",id:"lodestar-cli",level:3},{value:"Install from NPM [not recommended]",id:"install-from-npm-not-recommended",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h2,{id:"docker-installation",children:"Docker Installation"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/chainsafe/lodestar",children:(0,t.jsx)(n.code,{children:"chainsafe/lodestar"})})," Docker Hub repository is maintained actively. It contains the ",(0,t.jsx)(n.code,{children:"lodestar"})," CLI preinstalled."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Docker Hub image tagged as ",(0,t.jsx)(n.code,{children:"chainsafe/lodestar:next"})," is run on CI every commit on our ",(0,t.jsx)(n.code,{children:"unstable"})," branch.\nFor ",(0,t.jsx)(n.code,{children:"stable"})," releases, the image is tagged as ",(0,t.jsx)(n.code,{children:"chainsafe/lodestar:latest"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have Docker installed by issuing the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker -v\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It should return a non error message such as ",(0,t.jsx)(n.code,{children:"Docker version xxxx, build xxxx"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pull, run the image and Lodestar should now be ready to use"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker pull chainsafe/lodestar\ndocker run chainsafe/lodestar --help\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Docker is the recommended setup for Lodestar. Use our ",(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar-quickstart",children:"Lodestar Quickstart scripts"})," with Docker for detailed instructions."]})}),"\n",(0,t.jsx)(n.h2,{id:"build-from-source",children:"Build from Source"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to have ",(0,t.jsx)(n.a,{href:"https://classic.yarnpkg.com/en/docs/install",children:"Yarn installed"}),". It is also recommended to ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"install NVM (Node Version Manager)"})," and use the LTS version (currently v20) of ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/",children:"NodeJS"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["NodeJS versions older than the current LTS are not supported by Lodestar. We recommend running the latest Node LTS.\nIt is important to make sure the NodeJS version is not changed after reboot by setting a default ",(0,t.jsx)(n.code,{children:"nvm alias default <version> && nvm use default"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Node Version Manager (NVM) will only install NodeJS for use with the active user. If you intend on setting up Lodestar to run under another user, we recommend using ",(0,t.jsx)(n.a,{href:"https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions",children:"NodeSource's source for NodeJS"})," so you can install NodeJS globally."]})}),"\n",(0,t.jsx)(n.h3,{id:"clone-repository",children:"Clone repository"}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository locally and build from the stable release branch."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone -b stable https://github.com/chainsafe/lodestar.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Switch to created directory."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd lodestar\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-packages",children:"Install packages"}),"\n",(0,t.jsxs)(n.p,{children:["Install across all packages. Lodestar follows a ",(0,t.jsx)(n.a,{href:"https://github.com/lerna/lerna",children:"monorepo"})," structure, so all commands below must be run in the project root."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-source-code",children:"Build source code"}),"\n",(0,t.jsx)(n.p,{children:"Build across all packages."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn run build\n"})}),"\n",(0,t.jsx)(n.h3,{id:"lodestar-cli",children:"Lodestar CLI"}),"\n",(0,t.jsx)(n.p,{children:"Lodestar should now be ready for use."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./lodestar --help\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/lodestar/reference/cli",children:"Command Line Reference"})," for further information."]}),"\n",(0,t.jsx)(n.h2,{id:"install-from-npm-not-recommended",children:"Install from NPM [not recommended]"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["For mainnet (production) usage, we only recommend installing with docker due to ",(0,t.jsx)(n.a,{href:"https://hackaday.com/2021/10/22/supply-chain-attack-npm-library-used-by-facebook-and-others-was-compromised/",children:"NPM supply chain attacks"}),". Until a ",(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar/issues/3596",children:"safer installation method has been found"}),", do not use this install method except for experimental purposes only."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);