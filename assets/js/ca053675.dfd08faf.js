"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2973],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Oasis Core Developer Documentation",u={unversionedId:"index",id:"index",title:"Oasis Core Developer Documentation",description:"Architecture",source:"@site/external/oasis-core/docs/index.md",sourceDirName:".",slug:"/",permalink:"/oasis-core/",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",next:{title:"Build Environment Setup and Building",permalink:"/oasis-core/development-setup/build-environment-setup-and-building"}},p={},c=[{value:"Development Setup",id:"development-setup",level:2},{value:"High-Level Components",id:"high-level-components",level:2},{value:"Common Functionality",id:"common-functionality",level:2},{value:"Processes",id:"processes",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oasis-core-developer-documentation"},"Oasis Core Developer Documentation"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Architecture",src:n(3349).Z,width:"581",height:"181"})),(0,i.kt)("h2",{id:"development-setup"},"Development Setup"),(0,i.kt)("p",null,"Here are instructions on how to set up the local build environment, run the\ntests and some examples on how to prepare test networks for local development of\nOasis Core components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build Environment Setup and Building",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/building"},"Building")))),(0,i.kt)("li",{parentName:"ul"},"Running Tests and Development Networks",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/running-tests"},"Running Tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/oasis-net-runner"},"Local Network Runner With a Simple Runtime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/single-validator-node-network"},"Single Validator Node Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/deploying-a-runtime"},"Deploying a Runtime"))))),(0,i.kt)("h2",{id:"high-level-components"},"High-Level Components"),(0,i.kt)("p",null,"At the highest level, Oasis Core is divided into two major layers: the\n",(0,i.kt)("em",{parentName:"p"},"consensus layer")," and the ",(0,i.kt)("em",{parentName:"p"},"runtime layer")," as shown on the figure above."),(0,i.kt)("p",null,"The idea behind the consensus layer is to provide a minimal set of features\nrequired to securely operate independent runtimes running in the runtime layer.\nIt provides the following services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Epoch-based time keeping and a random beacon."),(0,i.kt)("li",{parentName:"ul"},"Basic staking operations required to operate a PoS blockchain."),(0,i.kt)("li",{parentName:"ul"},"An entity, node and runtime registry that distributes public keys and\nmetadata."),(0,i.kt)("li",{parentName:"ul"},"Runtime committee scheduling, commitment processing and minimal state keeping.")),(0,i.kt)("p",null,"On the other side, each runtime defines its own state and state transitions\nindependent from the consensus layer, submitting only short proofs that\ncomputations were performed and results were stored. This means that runtime\nstate and logic are completely decoupled from the consensus layer, and the\nconsensus layer only provides information on what state (summarized by a\ncryptographic hash of a Merklized data structure) is considered canonical at any\ngiven point in time."),(0,i.kt)("p",null,"See the following sections for more details on specific components and their\nimplementations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/"},"Consensus Layer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/transactions"},"Transactions")),(0,i.kt)("li",{parentName:"ul"},"Services",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/epochtime"},"Epoch Time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/beacon"},"Random Beacon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/staking"},"Staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/registry"},"Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/scheduler"},"Committee Scheduler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/governance"},"Governance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/roothash"},"Root Hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/keymanager"},"Key Manager")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/genesis"},"Genesis Document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/test-vectors"},"Transaction Test Vectors")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/"},"Runtime Layer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/#operation-model"},"Operation Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/runtime-host-protocol"},"Runtime Host Protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/identifiers"},"Identifiers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/messages"},"Messages")))),(0,i.kt)("li",{parentName:"ul"},"Oasis Node (",(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/oasis-node/rpc"},"RPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/oasis-node/metrics"},"Metrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/oasis-node/cli"},"CLI"))))),(0,i.kt)("h2",{id:"common-functionality"},"Common Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/encoding"},"Serialization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/crypto"},"Cryptography")),(0,i.kt)("li",{parentName:"ul"},"Protocols",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/authenticated-grpc"},"Authenticated gRPC")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/mkvs"},"Merklized Key-Value Store (MKVS)"))),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/adr/"},"Architectural Decision Records")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/release-process"},"Release Process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/versioning"},"Versioning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/oasis-core/SECURITY"},"Security"))))}d.isMDXComponent=!0},3349:function(e,t,n){t.Z=n.p+"assets/images/oasis-core-high-level-4dd19f00411531fadd7a32ea1d596e6f.svg"}}]);