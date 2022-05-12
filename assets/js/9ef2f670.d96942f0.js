"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1522],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="ADR 0009: Ed25519 Signature Verification Semantics",c={unversionedId:"adr/0009-ed25519-semantics",id:"adr/0009-ed25519-semantics",title:"ADR 0009: Ed25519 Signature Verification Semantics",description:"Changelog",source:"@site/external/oasis-core/docs/adr/0009-ed25519-semantics.md",sourceDirName:"adr",slug:"/adr/0009-ed25519-semantics",permalink:"/oasis-core/adr/0009-ed25519-semantics",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"ADR 0008: Standard Account Key Generation",permalink:"/oasis-core/adr/0008-standard-account-key-generation"},next:{title:"ADR 10: VRF-based Committee Elections",permalink:"/oasis-core/adr/0010-vrf-elections"}},u={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Reject Non-canonical s",id:"reject-non-canonical-s",level:3},{value:"Reject Small Order A/R",id:"reject-small-order-ar",level:3},{value:"Accept Non-canonical A/R",id:"accept-non-canonical-ar",level:3},{value:"Cofactored Verification Equation",id:"cofactored-verification-equation",level:3},{value:"Accept A/R With Non-zero Torsion",id:"accept-ar-with-non-zero-torsion",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Future Improvements",id:"future-improvements",level:3},{value:"Recomendations For Future Projects",id:"recomendations-for-future-projects",level:2},{value:"References",id:"references",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-0009-ed25519-signature-verification-semantics"},"ADR 0009: Ed25519 Signature Verification Semantics"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2021-05-10: Initial version")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Informative"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In programming, it's often the buts in the specification that kill you."),(0,a.kt)("p",{parentName:"blockquote"},"-- Boris Beizer")),(0,a.kt)("p",null,'For a large host of reasons, mostly historical, there are numerous definitions\nof "Ed25519 signature validation" in the wild, which have the potential to\nbe mutually incompatible.  This ADR serves to provide a rough high-level\noverview of the issue, and to document the current definition of "Ed25519\nsignature verification" as used by Oasis Core.'),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"The Oasis Core consensus layer (and all of the Go components) currently uses\nthe following Ed25519 verification semantics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non-canonical s is rejected (MUST enforce ",(0,a.kt)("inlineCode",{parentName:"li"},"s < L"),")"),(0,a.kt)("li",{parentName:"ul"},"Small order A/R are rejected"),(0,a.kt)("li",{parentName:"ul"},"Non-canonical A/R are accepted"),(0,a.kt)("li",{parentName:"ul"},"The cofactored verification equation MUST be used (",(0,a.kt)("inlineCode",{parentName:"li"},"[8][S]B = [8]R + [8][k]A"),")"),(0,a.kt)("li",{parentName:"ul"},"A/R may have a non-zero torsion component.")),(0,a.kt)("h3",{id:"reject-non-canonical-s"},"Reject Non-canonical s"),(0,a.kt)("p",null,"Ed25519 signatures are trivially malleable unless the scalar component is\nconstrained to ",(0,a.kt)("inlineCode",{parentName:"p"},"0 <= s < L"),", as is possible to create valid signatures\nfrom an existing public key/message/signature tuple by adding L to s."),(0,a.kt)("p",null,"This check is mandated in all recent formulations of Ed25519 including\nbut not limited to RFC 8032 and FIPS 186-5, and most modern implementations\nwill include this check."),(0,a.kt)("p",null,"Note: Only asserting that ",(0,a.kt)("inlineCode",{parentName:"p"},"s[31] & 224 == 0")," as done in older implementations\nis insufficient."),(0,a.kt)("h3",{id:"reject-small-order-ar"},"Reject Small Order A/R"),(0,a.kt)("p",null,"Rejecting small order A is required to make the signature scheme strongly\nbinding (resilience to key/message substitution attacks)."),(0,a.kt)("p",null,"Rejecting (or accepting) small order R is not believed to have a security\nimpact."),(0,a.kt)("h3",{id:"accept-non-canonical-ar"},"Accept Non-canonical A/R"),(0,a.kt)("p",null,"The discrete logarithm of the Ed25519 points that have a valid non-canonical\nencoding and are not small order is unknown, and accepting them is not\nbelieved to have a security impact."),(0,a.kt)("p",null,"Note: RFC 8032 and FIPS 186-5 require rejecting non-canonically encoded\npoints."),(0,a.kt)("h3",{id:"cofactored-verification-equation"},"Cofactored Verification Equation"),(0,a.kt)("p",null,"There are two forms of the Ed25519 verification equation commonly in use,\n",(0,a.kt)("inlineCode",{parentName:"p"},"[S]B = R + [k]A")," (cofactor-less), and ",(0,a.kt)("inlineCode",{parentName:"p"},"[8][S]B = [8]R + [8][k]A"),"\n(cofactored), which are mutually incompatible in that it is possible\nto produce signatures that pass with one and fail with the other."),(0,a.kt)("p",null,"The cofactored verification equation is explicitly required by FIPS 186-5,\nand is the only equation that is compatible with batch signature verification.\nAdditionally, the more modern lattice-reduction based technique for fast\nsignature verification is incompatible with existing implementations unless\ncofactored."),(0,a.kt)("h3",{id:"accept-ar-with-non-zero-torsion"},"Accept A/R With Non-zero Torsion"),(0,a.kt)("p",null,"No other library enforces this, the check is extremely expensive, and\nwith how Oasis Core currently uses Ed25519 signatures, this has no security\nimpact.  In the event that Oasis Core does exotic things that, for example,\nrequire that the public key is in the prime-order subgroup, this must be\nchanged."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("p",null,"The verification semantics in use by Oasis Core provides the following\nproperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SUF-CMA security"),(0,a.kt)("li",{parentName:"ul"},"Non-repudiation (strong binding)"),(0,a.kt)("li",{parentName:"ul"},"Compatibility with batch and lattice reduction based verification.")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("p",null,'The combination of "reject small order A/R" and "accept non-canonical A/R"\nis difficult to test as it is not easily possible to generate valid\nsignatures that meet both conditions.'),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("h3",{id:"future-improvements"},"Future Improvements"),(0,a.kt)("p",null,"WARNING: Any changes to verification semantics are consensus breaking."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Consider switching to the "Algorithm 2" definition, for ease of testing\nand because it is the default behavior provided by curve25519-voi.'),(0,a.kt)("li",{parentName:"ul"},"Consider switching to ZIP-215 semantics, to be inline with other projects,\nmore library support (Give up on strong binding)."),(0,a.kt)("li",{parentName:"ul"},"Switching to ristretto255 (sr25519) eliminates these problems entirely.")),(0,a.kt)("h2",{id:"recomendations-for-future-projects"},"Recomendations For Future Projects"),(0,a.kt)("p",null,"The definition used in Oasis Core is partly historical.  New code should\nstrongly consider using one of FIPS 186-5, Algorithm 2, or ZIP-215 semantics."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/1244.pdf"},"Taming the many EdDSAs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zips.z.cash/zip-0215"},"Explicitly Defining and Modifying Ed25519 Validation Rules"))))}m.isMDXComponent=!0}}]);