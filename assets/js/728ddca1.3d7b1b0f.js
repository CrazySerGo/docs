"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[7421],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9992:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="Architectural Decision Records",l={unversionedId:"adr/index",id:"adr/index",title:"Architectural Decision Records",description:"This is a location to record all architecture decisions in the Oasis Core",source:"@site/external/oasis-core/docs/adr/index.md",sourceDirName:"adr",slug:"/adr/",permalink:"/oasis-core/adr/",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Merklized Key-Value Store (MKVS)",permalink:"/oasis-core/mkvs"},next:{title:"ADR 0000: Architectural Decision Records",permalink:"/oasis-core/adr/0000-architectural-decision-records"}},u={},p=[{value:"Format",id:"format",level:2},{value:"Process for Creating New ADRs",id:"process-for-creating-new-adrs",level:2},{value:"Current Records",id:"current-records",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architectural-decision-records"},"Architectural Decision Records"),(0,o.kt)("p",null,"This is a location to record all architecture decisions in the Oasis Core\nproject via ",(0,o.kt)("a",{parentName:"p",href:"https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html"},"Architectural Decision Records")," (ADRs)."),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("p",null,"Each record has a unique number associated with it to make it easier to\ncross-reference them. The records are stored as Markdown files in this\ndirectory, named using the following convention:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<adr-number>-<short-title>.md\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<adr-number>")," is the assigned zero-padded ADR number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<short-title>")," is the ADR's title in ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Letter_case#Special_case_styles"},"Kebab case"),".")),(0,o.kt)("p",null,"The content of each ADR should follow ",(0,o.kt)("a",{parentName:"p",href:"/oasis-core/adr/template"},"the template"),". In short, an ADR should\nprovide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a changelog of all modifications so far,"),(0,o.kt)("li",{parentName:"ul"},"context on the relevant goals and the current state,"),(0,o.kt)("li",{parentName:"ul"},"proposed changes to achieve the goals,"),(0,o.kt)("li",{parentName:"ul"},"summary of pros and cons,"),(0,o.kt)("li",{parentName:"ul"},"references and"),(0,o.kt)("li",{parentName:"ul"},"the decision that was made.")),(0,o.kt)("h2",{id:"process-for-creating-new-adrs"},"Process for Creating New ADRs"),(0,o.kt)("p",null,"There is a lightweight process for proposing, discussing and deciding on ADRs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/CONTRIBUTING.md#contributing-code"},"your branch"),", create a new ADR file in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/adr")," following the convention\nand template specified above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/.changelog/README.md"},"changelog fragment")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"doc"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Update the index of current records below.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a pull request and mark it as ready for review. The commit message for\nintroducing an ADR should have the title of the ADR, following by a short\nsummary:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ADR 0000: Architectural Decision Records\n\nIntroduce architectural decision records (ADRs) for keeping track of\narchitecture decisions in a transparent way.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ADR will be discussed by other members of the community and the project\ncommitters. After a sufficient amount of discussion, acceptance or rejection\ndecision will be taken in accoordance with the governance process and the\npull request will be merged, introducing a new ADR."))),(0,o.kt)("p",null,"After the ADR is merged an implementation may be undertaken by following the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/CONTRIBUTING.md"},"contribution process"),"."),(0,o.kt)("h2",{id:"current-records"},"Current Records"),(0,o.kt)("p",null,"The following records currently exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0000-architectural-decision-records"},"ADR 0000")," - Architectural Decision Records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0001-tm-multi-root-apphash"},"ADR 0001")," - Multiple Roots Under the Tendermint Application Hash"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0002-go-modules-compatible-git-tags"},"ADR 0002")," - Go Modules Compatible Git Tags"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0003-consensus-runtime-token-transfer"},"ADR 0003")," - Consensus/Runtime Token Transfer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0004-runtime-governance"},"ADR 0004")," - Runtime Governance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0005-runtime-compute-slashing"},"ADR 0005")," - Runtime Compute Node Slashing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0006-consensus-governance"},"ADR 0006")," - Consensus Governance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0007-improved-random-beacon"},"ADR 0007")," - Improved Random Beacon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0008-standard-account-key-generation"},"ADR 0008")," - Standard Account Key Generation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0009-ed25519-semantics"},"ADR 0009")," - Ed25519 Signature Verification Semantics"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0010-vrf-elections"},"ADR 0010")," - VRF-based Committee Elections"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0011-incoming-runtime-messages"},"ADR 0011")," - Incoming Runtime Messages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oasis-core/adr/0012-runtime-message-results"},"ADR 0012")," - Runtime Message Results")))}m.isMDXComponent=!0}}]);