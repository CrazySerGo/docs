"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9532],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9910:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Cobalt Upgrade",p={unversionedId:"mainnet/previous-upgrades/cobalt-upgrade",id:"mainnet/previous-upgrades/cobalt-upgrade",title:"Cobalt Upgrade",description:"This document provides an overview of the proposed criteria and changes for the Cobalt Mainnet upgrade. This has been reviewed and approved by community members and validators of the Oasis Network and is being reproduced and summarized here for easy access.",source:"@site/docs/general/mainnet/previous-upgrades/cobalt-upgrade.md",sourceDirName:"mainnet/previous-upgrades",slug:"/mainnet/previous-upgrades/cobalt-upgrade",permalink:"/general/mainnet/previous-upgrades/cobalt-upgrade",editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/mainnet/previous-upgrades/cobalt-upgrade.md",tags:[],version:"current",lastUpdatedAt:1652342868,formattedLastUpdatedAt:"5/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"Previous Upgrades",permalink:"/general/mainnet/previous-upgrades/"},next:{title:"Upgrade to Mainnet",permalink:"/general/mainnet/previous-upgrades/mainnet-upgrade"}},m={},d=[{value:"Major Features",id:"major-features",level:2},{value:"Mechanics of the Upgrade",id:"mechanics-of-the-upgrade",level:2},{value:"Proposed State Changes",id:"proposed-state-changes",level:2},{value:"<strong>General</strong>",id:"general",level:3},{value:"<strong>Epoch Time</strong>",id:"epoch-time",level:3},{value:"<strong>Registry</strong>",id:"registry",level:3},{value:"<strong>Root Hash</strong>",id:"root-hash",level:3},{value:"<strong>Staking</strong>",id:"staking",level:3},{value:"<strong>Committee Scheduler</strong>",id:"committee-scheduler",level:3},{value:"<strong>Random Beacon</strong>",id:"random-beacon",level:3},{value:"<strong>Governance</strong>",id:"governance",level:3},{value:"<strong>Consensus</strong>",id:"consensus",level:3},{value:"Other",id:"other",level:3},{value:"Runtime State Root Migration",id:"runtime-state-root-migration",level:3},{value:"Launch Support",id:"launch-support",level:2}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cobalt-upgrade"},"Cobalt Upgrade"),(0,i.kt)("p",null,"This document provides an overview of the proposed criteria and changes for the Cobalt Mainnet upgrade. This has been ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/community/discussions/18"},"reviewed and approved by community members and validators of the Oasis Network")," and is being reproduced and summarized here for easy access."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As proposed by the community, the Cobalt upgrade on Mainnet will kick off around April 28, 2021 at 16:00 UTC."))),(0,i.kt)("h2",{id:"major-features"},"Major Features"),(0,i.kt)("p",null,"All features for the Cobalt upgrade are implemented as part of ",(0,i.kt)("strong",{parentName:"p"},"Oasis Core 21.1.1")," which is a protocol-breaking release. Summary of the major features is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Light Clients and Checkpoint Sync"),": In order to make bootstrapping of new network nodes much faster, the upgrade will introduce support for light clients and restoring state from checkpoints provided by other nodes in the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Random Beacon"),": The random beacon is used by the consensus layer for ParaTime committee elections and is a critical component in providing security for ParaTimes with an open admission policy. The improved random beacon implementation is based on SCRAPE and provides unbiased output as long as at least one participant is honest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"On-Chain Governance"),": The new on-chain governance service provides a simple framework for submitting governance proposals, validators voting on proposals and once an upgrade proposal passes, having a way to perform the upgrade in a controlled manner which minimizes downtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support for Beneficiary Allowances"),": Each account is able to configure beneficiaries which are allowed to withdraw tokens from it in addition to the account owner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ROSE Transfers Between the Consensus Layer and ParaTimes"),": The proposed upgrade introduces a mechanism where ParaTimes can emit messages as part of processing any ParaTime block. These messages can trigger operations in the consensus layer on the ParaTime's behalf. ParaTimes get their own accounts in the consensus layer which can hold ROSE and ParaTimes are able to request them be transferred to other accounts or to withdraw from other accounts when allowed via the allowances mechanism."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A Path Towards Self-Governing ParaTimes"),": By building on the ParaTime messages mechanism, the proposed upgrade extends ParaTime governance options and enables a path towards ParaTimes that can define their own governance mechanisms.")),(0,i.kt)("p",null,"In addition to the specified additional features we also propose the validator set size to be increased from the current 80 to 100 validators as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/community/discussions/5#discussioncomment-282746"},"suggested earlier by the community"),"."),(0,i.kt)("h2",{id:"mechanics-of-the-upgrade"},"Mechanics of the Upgrade"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section will be updated with more details as we get closer to the upgrade."))),(0,i.kt)("p",null,"Upgrading the Mainnet will require a coordinated upgrade of the Network. All nodes will need to configure a new genesis file that they can generate or verify independently and reset/archive any state from Mainnet. Once enough (representing 2/3+ of stake) nodes have taken this step, the upgraded network will start."),(0,i.kt)("p",null,"For the actual steps that node operators need to make on their nodes, see the ",(0,i.kt)("a",{parentName:"p",href:"/general/run-a-node/upgrade-log#2021-04-28-16-00-utc-cobalt-upgrade"},"Upgrade Log"),"."),(0,i.kt)("h2",{id:"proposed-state-changes"},"Proposed State Changes"),(0,i.kt)("p",null,"The following parts of the genesis document will be updated:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For a more detailed explanation of the parameters below, see the ",(0,i.kt)("a",{parentName:"p",href:"/general/oasis-network/genesis-doc#parameters"},"Genesis Document")," docs."))),(0,i.kt)("h3",{id:"general"},(0,i.kt)("strong",{parentName:"h3"},"General")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"height"))," will be set to the height of the Mainnet state dump + 1, i.e.",(0,i.kt)("inlineCode",{parentName:"li"},"3027601"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"genesis_time"))," will be set to",(0,i.kt)("inlineCode",{parentName:"li"},"2021-04-28T16:00:00Z"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"chain_id"))," will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"oasis-2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"halt_epoch"))," will be set to",(0,i.kt)("inlineCode",{parentName:"li"},"13807"),"(approximately 1 year from the Cobalt upgrade).")),(0,i.kt)("h3",{id:"epoch-time"},(0,i.kt)("strong",{parentName:"h3"},"Epoch Time")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"epochtime")),"object will be removed since it became obsolete with the new ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core/adr/0007-improved-random-beacon"},"improved random beacon"),". It will be replaced with the new ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon"))," object described ",(0,i.kt)("a",{parentName:"p",href:"/general/mainnet/previous-upgrades/cobalt-upgrade#random-beacon"},"below"),"."),(0,i.kt)("h3",{id:"registry"},(0,i.kt)("strong",{parentName:"h3"},"Registry")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.params.enable_runtime_governance_models")," ")," is a new parameter that specifies the set of ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core/consensus/services/registry#runtimes"},"runtime governance models")," that are allowed to be used when creating/updating registrations. It will be set to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "entity": true,\n  "runtime": true\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.runtimes"))," list contains the registered runtimes' descriptors. In the Cobalt upgrade, it will be migrated from a list of ",(0,i.kt)("em",{parentName:"p"},"signed")," runtime descriptors to a list of runtime descriptors. The migration will be done automatically with the ",(0,i.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis")," command.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.suspended_runtimes"))," list contains the suspended registered runtimes' descriptors. In the Cobalt upgrade, it will be migrated from a list of ",(0,i.kt)("em",{parentName:"p"},"signed")," suspended runtime descriptors to a list of suspended runtime descriptors. The migration will be done automatically with the ",(0,i.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis")," command.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inactive registered entities in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.entities"))," (and their corresponding nodes in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.nodes")),") that don't pass the ",(0,i.kt)("a",{parentName:"p",href:"/general/oasis-network/genesis-doc#node-and-paratime-token-thresholds"},"minimum staking thresholds")," will be removed. The removal will be done automatically with the ",(0,i.kt)("inlineCode",{parentName:"p"},"oasis-node debug fix-genesis")," command."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Removing entities from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.entities"))," will effectively deregister them but the entities' accounts in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.ledger"))," will remain intact."),(0,i.kt)("p",{parentName:"div"},"Deregistered entities can always re-register by submitting the ",(0,i.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-validator#generating-entity-registration-transaction"},"entity registration transaction")," after the upgrade."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.node_statuses"))," object contains the registered nodes' statuses. In the Cobalt upgrade, each node's status will get a new parameter: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"election_eligible_after")),". This parameter specifies at which epoch a node is eligible to be ",(0,i.kt)("a",{parentName:"li",href:"/oasis-core/consensus/services/scheduler"},"scheduled into various committees"),". All nodes will have the parameter set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," which means they are immediately eligible. The migration will be done automatically with the ",(0,i.kt)("inlineCode",{parentName:"li"},"oasis-node debug fix-genesis")," command.")),(0,i.kt)("h3",{id:"root-hash"},(0,i.kt)("strong",{parentName:"h3"},"Root Hash")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"roothash.params.max_runtime_messages")," ")," is a new parameter that specifies the global limit on the number of ",(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/messages"},"messages")," that can be emitted in each round by the runtime. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"256"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"roothash.params.max_evidence_age"))," is a new parameter that specifies the maximum age (in the number of rounds) of submitted evidence for ",(0,i.kt)("a",{parentName:"li",href:"/oasis-core/adr/0005-runtime-compute-slashing"},"compute node slashing"),". It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),".")),(0,i.kt)("h3",{id:"staking"},(0,i.kt)("strong",{parentName:"h3"},"Staking")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.governance_deposits")," ")," are the tokens collected from governance proposal deposits. The initial balance will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"0"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.params.allow_escrow_messages"))," is a new parameter indicating whether to enable support for the newly added ",(0,i.kt)("inlineCode",{parentName:"li"},"AddEscrow")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ReclaimEscrow")," ",(0,i.kt)("a",{parentName:"li",href:"/oasis-core/runtime/messages"},"runtime messages")," . It will be set to",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.params.slashing.0"))," will be renamed to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.params.slashing.consensus-equivocation")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.params.slashing.consensus-light-client-attack.amount"))," is a new parameter controlling how much to slash for light client attack. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"100000000000"')," (i.e. 100,000,000,000 base units, or 100 ROSE tokens)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"staking.params.slashing.consensus-light-client-attack.freeze_interval")," ")," is a new parameter controlling the duration (in epochs) for which a node that has been slashed for light client attack is \u201cfrozen,\u201d or barred from participating in the network's consensus committee. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"18446744073709551615")," (i.e. the maximum value for a 64-bit unsigned integer) which means that any node slashed for light client attack will be, in effect, permanently banned from the network.")),(0,i.kt)("h3",{id:"committee-scheduler"},(0,i.kt)("strong",{parentName:"h3"},"Committee Scheduler")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"scheduler.params.max_validators"))," is the maximum size of the consensus committee (i.e. the validator set). It will be increased from ",(0,i.kt)("inlineCode",{parentName:"li"},"80")," to",(0,i.kt)("inlineCode",{parentName:"li"},"100"),".")),(0,i.kt)("h3",{id:"random-beacon"},(0,i.kt)("strong",{parentName:"h3"},"Random Beacon")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon"))," object contains parameters controlling the new ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core/adr/0007-improved-random-beacon"},"improved random beacon")," introduced in the Cobalt upgrade."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.base"))," is the network's starting epoch. It will be set to the epoch of Mainnet's state dump + 1, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"5047"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.backend"))," configures the random beacon backend to use. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"pvss"')," indicating that the beacon implementing a ",(0,i.kt)("a",{parentName:"li",href:"/oasis-core/adr/0007-improved-random-beacon"},"PVSS (publicly verifiable secret sharing) scheme")," should be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters.participants"))," is the number of participants to be selected for each beacon generation protocol round. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters.threshold"))," is the minimum number of participants which must successfully contribute entropy for the final output to be considered valid. It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters.commit_interval"))," is the duration of the Commit phase (in blocks). It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"400"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters.reveal_interval"))," is the duration of the Reveal phase (in blocks). It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"196"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"beacon.params.pvss_parameters.transition_delay"))," is the duration of the post Reveal phase (in blocks). It will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,i.kt)("h3",{id:"governance"},(0,i.kt)("strong",{parentName:"h3"},"Governance")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance"))," object contains parameters controlling the network's ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core/consensus/services/governance"},"on-chain governance")," introduced in the Cobalt upgrade",(0,i.kt)("strong",{parentName:"p"},".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.min_proposal_deposit"))," is the amount of tokens (in base units) that are deposited when creating a new proposal. It will be set to  ",(0,i.kt)("inlineCode",{parentName:"p"},'"10000000000000"')," (i.e. 10,000,000,000,000 base units, or 10,000 ROSE tokens).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.voting_period"))," is the number of epochs after which the voting for a proposal is closed and the votes are tallied. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"168"),", which is expected to be approximately 7 days.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.quorum"))," is the minimum percentage of voting power that needs to be cast on a proposal for the result to be valid. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"75")," (i.e. 75%)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.threshold"))," is the minimum percentage of ",(0,i.kt)("inlineCode",{parentName:"p"},"VoteYes")," votes in order for a proposal to be accepted. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"90"),"(i.e. 90%).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.upgrade_min_epoch_diff"))," is the minimum number of epochs between the current epoch and the proposed upgrade epoch for the upgrade proposal to be valid. Additionally, it specifies the minimum number of epochs between two consecutive pending upgrades."),(0,i.kt)("p",{parentName:"li"},"It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"336"),", which is expected to be approximately 14 days.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"governance.params.upgrade_cancel_min_epoch_diff"))," is the minimum number of epochs between the current epoch and the proposed upgrade epoch for the upgrade cancellation proposal to be valid. It will be set to",(0,i.kt)("inlineCode",{parentName:"p"},"192"),", which is expected to be approximately 8 days."))),(0,i.kt)("h3",{id:"consensus"},(0,i.kt)("strong",{parentName:"h3"},"Consensus")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.max_evidence_num"))," parameter will be removed and replaced by the"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.max_evidence_size"))," parameter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.max_evidence_size"))," is a new parameter specifying the maximum evidence size in bytes. It replaces the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.max_evidence_num"))," parameter and will be set to",(0,i.kt)("inlineCode",{parentName:"p"},"51200")," (51,200 bytes, or 50 kB).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.state_checkpoint_interval"))," parameter controls the interval (in blocks) on which state checkpoints should be taken. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.state_checkpoint_num_kept"))," parameter specifies the number of past state checkpoints to keep. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"consensus.params.state_checkpoint_chunk_size"))," parameters controls the chunk size (in bytes) that should be used when creating state checkpoints. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"8388608")," (8,388,608 bytes, or 8 MB)."))),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"extra_data"))," will be set back to the value in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/mainnet-artifacts/releases/tag/2020-11-18"},"Mainnet genesis file")," to include the Oasis network's genesis quote: ",(0,i.kt)("em",{parentName:"p"},"\u201d"),(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes%3F"},(0,i.kt)("em",{parentName:"a"},"Quis custodiet ipsos custodes?")),(0,i.kt)("em",{parentName:"p"},"\u201d ","[","submitted by Oasis Community Member Daniyar Borangaziyev]:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"extra_data": {\n  "quote": "UXVpcyBjdXN0b2RpZXQgaXBzb3MgY3VzdG9kZXM/IFtzdWJtaXR0ZWQgYnkgT2FzaXMgQ29tbXVuaXR5IE1lbWJlciBEYW5peWFyIEJvcmFuZ2F6aXlldl0="\n}\n')))),(0,i.kt)("h3",{id:"runtime-state-root-migration"},"Runtime State Root Migration"),(0,i.kt)("p",null,"Additionally, each runtime's state root will need to be updated for the ",(0,i.kt)("a",{parentName:"p",href:"/general/run-a-node/upgrade-log#runtime-operators"},"runtime storage migration")," that is performed during this upgrade."),(0,i.kt)("p",null,"At this time, there is only one active runtime on the Mainnet, namely ",(0,i.kt)("a",{parentName:"p",href:"https://www.oasiseth.org"},"Second State's Oasis Ethereum ParaTime")," with ID (Base64-encoded) ",(0,i.kt)("inlineCode",{parentName:"p"},"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wM="),"."),(0,i.kt)("p",null,"After completing the runtime storage migration, Second State will communicate the new state root of their runtime and the genesis document needs to be updated as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"roothash.runtime_states.<RUNTIME-ID>.state_root"))," will be set to the (Base64-encoded) migrated state root."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.runtimes.[id=<RUNTIME-ID>].genesis.state_root"))," will be set to the (Base64-encoded) migrated state root."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.runtimes.[id=<RUNTIME-ID>].genesis.state"))," will be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"registry.runtimes.[id=<RUNTIME-ID>].genesis.round"))," will be set to the same value as ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"roothash.runtime_states.<RUNTIME-ID>.round")),".")),(0,i.kt)("h2",{id:"launch-support"},"Launch Support"),(0,i.kt)("p",null,"The Oasis team will be offering live video support during the Cobalt upgrade. Video call link and calendar details will be shared with node operators via email and Slack."),(0,i.kt)("p",null,"For any additional support, please reach out via the ",(0,i.kt)("a",{parentName:"p",href:"/general/oasis-network/connect-with-us"},(0,i.kt)("strong",{parentName:"a"},"#nodeoperators")," Oasis Community Slack channel")," with your questions, comments, and feedback related to Cobalt upgrade."),(0,i.kt)("p",null,"To follow the network, please use one of the many ",(0,i.kt)("a",{parentName:"p",href:"/general/community-resources/community-made-resources#block-explorers-validator-leaderboards"},"community block explorers"),"."))}u.isMDXComponent=!0}}]);