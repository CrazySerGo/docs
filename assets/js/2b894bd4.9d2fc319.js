"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5305],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},c="Get Account Info",l={unversionedId:"manage-tokens/advanced/oasis-cli-tools/get-account-info",id:"manage-tokens/advanced/oasis-cli-tools/get-account-info",title:"Get Account Info",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-info.md",sourceDirName:"manage-tokens/advanced/oasis-cli-tools",slug:"/manage-tokens/advanced/oasis-cli-tools/get-account-info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info",editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-info.md",tags:[],version:"current",lastUpdatedAt:1652342868,formattedLastUpdatedAt:"5/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"List Accounts",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/list-accounts"},next:{title:"Get Account Nonce",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce"}},u={},d=[{value:"General Account",id:"general-account",level:2},{value:"Escrow Account",id:"escrow-account",level:2},{value:"Commission Schedule",id:"commission-schedule",level:3},{value:"Stake Accumulator",id:"stake-accumulator",level:3}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-account-info"},"Get Account Info"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example assumes you have read and followed the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections."))),(0,r.kt)("p",null,"To get more information about a particular staking account, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake account info \\\n  -a $ADDR \\\n  --stake.account.address oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx\n")),(0,r.kt)("p",null,"This will output all staking information about this particular account, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"General Account:\n  Balance: ROSE 376.594833237\n  Nonce:   0\nEscrow Account:\n  Active:\n    Balance:      ROSE 10528.684187046\n    Total Shares: 10000000000000\n  Debonding:\n    Balance:      ROSE 0.0\n    Total Shares: 0\n  Commission Schedule:\n    Rates: (none)\n    Rate Bounds: (none)\n  Stake Accumulator:\n    Claims:\n      - Name: registry.RegisterEntity\n        Staking Thresholds:\n          - Global: entity\n      - Name: registry.RegisterNode.9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc=\n        Staking Thresholds:\n          - Global: node-validator\n")),(0,r.kt)("h2",{id:"general-account"},"General Account"),(0,r.kt)("p",null,"We can observe that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General account's ",(0,r.kt)("strong",{parentName:"li"},"balance"),", the amount of tokens that are available to the account owner, is ","~","377 tokens."),(0,r.kt)("li",{parentName:"ul"},"General account's ",(0,r.kt)("strong",{parentName:"li"},"nonce"),", the incremental number that must be unique for each account's transaction, is 0. That means there haven't been any transactions made with this account as the source. Therefore, the next transaction should have nonce equal to 0.")),(0,r.kt)("h2",{id:"escrow-account"},"Escrow Account"),(0,r.kt)("p",null,"We can observe that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The amount of tokens that are ",(0,r.kt)("strong",{parentName:"li"},"actively bounded")," to the escrow account is ","~","10529 tokens."),(0,r.kt)("li",{parentName:"ul"},"The total number of ",(0,r.kt)("strong",{parentName:"li"},"shares")," for the tokens actively bounded to the escrow account is 10 trillion."),(0,r.kt)("li",{parentName:"ul"},"The amount of tokens that are currently ",(0,r.kt)("strong",{parentName:"li"},"debonding")," is 0."),(0,r.kt)("li",{parentName:"ul"},"The total number of ",(0,r.kt)("strong",{parentName:"li"},"shares")," for the tokens that are currently debonding is 0.")),(0,r.kt)("h3",{id:"commission-schedule"},"Commission Schedule"),(0,r.kt)("p",null,"An entity can also charge commission for tokens that are delegated to it. It would defined the commission schedule ",(0,r.kt)("strong",{parentName:"p"},"rate steps")," and the commission schedule ",(0,r.kt)("strong",{parentName:"p"},"rate bound steps"),". For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/amend-commission-schedule"},"Amend Commission Schedule")," documentation."),(0,r.kt)("h3",{id:"stake-accumulator"},"Stake Accumulator"),(0,r.kt)("p",null,"Each escrow account also has a corresponding stake accumulator. It stores ",(0,r.kt)("strong",{parentName:"p"},"stake claims")," for an escrow account and ensures all claims are satisfied at any given point. Adding a new claim is only possible if all of the existing claims plus the new claim can be satisfied."),(0,r.kt)("p",null,"We can observe that the stake accumulator currently has two claims:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.RegisterEntity")," claim is for registering an entity."),(0,r.kt)("p",{parentName:"li"},"It needs to satisfy the global threshold for registering an entity (",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),") which is defined by the staking consensus parameters."),(0,r.kt)("p",{parentName:"li"},"To see the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," global staking threshold, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node stake info")," command as described in ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common Staking Info")," doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.RegisterNode.9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc=")," claim is for registering the node with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"9Epy5pYPGa91IJlJ8Ivb5iby+2ii8APXdfQoMZDEIDc="),"."),(0,r.kt)("p",{parentName:"li"},"It needs to satisfy the global staking threshold for registering a validator node (",(0,r.kt)("inlineCode",{parentName:"p"},"node-validator"),") which is defined by the staking consensus parameters."),(0,r.kt)("p",{parentName:"li"},"To see the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-validator")," global staking threshold, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node stake info")," command as described in ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common Staking Info")," doc."),(0,r.kt)("p",{parentName:"li"},"In addition to the global thresholds, each runtime the node is registering for may define their own thresholds. In case the node is registering for multiple runtimes, it needs to satisfy the sum of thresholds of all the runtimes it is registering for."),(0,r.kt)("p",{parentName:"li"},"For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/consensus/services/registry#register-node"},"Oasis Core Developer Docs on registering a node"),"."))))}p.isMDXComponent=!0}}]);