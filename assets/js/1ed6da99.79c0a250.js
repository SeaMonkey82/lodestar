"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[3872],{7610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),o=t(8453);const r={},i="Frequently Asked Questions",a={id:"faqs",title:"Frequently Asked Questions",description:"This section of the documentation will cover common questions and encounters often asked by users and developers.",source:"@site/pages/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/lodestar/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/faqs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Testnet",permalink:"/lodestar/advanced-topics/setting-up-a-testnet"}},d={},c=[{value:"Troubleshooting Lodestar",id:"troubleshooting-lodestar",level:2},{value:"Using Kubernetes",id:"using-kubernetes",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,s.jsx)(n.p,{children:"This section of the documentation will cover common questions and encounters often asked by users and developers."}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting-lodestar",children:"Troubleshooting Lodestar"}),"\n",(0,s.jsx)(n.h3,{id:"using-kubernetes",children:"Using Kubernetes"}),"\n",(0,s.jsxs)(n.admonition,{title:'"Unknown arguments error"',type:"note",children:[(0,s.jsxs)(n.p,{children:["Lodestar reads all environment variables prefixed with ",(0,s.jsx)(n.code,{children:"LODESTAR"})," and will try to parse\nthem similar to command line arguments, meaning any unknown argument will cause an error."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u2716 Unknown arguments: servicePort, servicePortEthConsensusP2p,\nport9000Tcp, port9000TcpPort, port9000TcpProto, port9000TcpAddr, serviceHost\n"})}),(0,s.jsxs)(n.p,{children:["The extra arguments are present because Kubernetes automatically\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#environment-variables",children:"adds environment variables"}),"\nto the Pod based on the name (",(0,s.jsx)(n.code,{children:"metadata.name"}),") defined in the associated ",(0,s.jsx)(n.code,{children:"Service"}),".\nTo resolve the issue, this name has to be changed to something that does not start with ",(0,s.jsx)(n.code,{children:"lodestar"}),"."]}),(0,s.jsxs)(n.p,{children:["Reference Issue: ",(0,s.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar/issues/6045",children:"#6045"})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);