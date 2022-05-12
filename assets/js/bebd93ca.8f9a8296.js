"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4970],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2366:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={},u="Runtime IDs",c={unversionedId:"runtime/identifiers",id:"runtime/identifiers",title:"Runtime IDs",description:"Identifiers for runtimes are represented by the [common.Namespace] type.",source:"@site/external/oasis-core/docs/runtime/identifiers.md",sourceDirName:"runtime",slug:"/runtime/identifiers",permalink:"/oasis-core/runtime/identifiers",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Runtime Host Protocol",permalink:"/oasis-core/runtime/runtime-host-protocol"},next:{title:"Runtime Messages",permalink:"/oasis-core/runtime/messages"}},p={},l=[],m={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-ids"},"Runtime IDs"),(0,o.kt)("p",null,"Identifiers for runtimes are represented by the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common?tab=doc#Namespace"},(0,o.kt)("inlineCode",{parentName:"a"},"common.Namespace"))," type."),(0,o.kt)("p",null,"The first 64 bits are reserved for specifying flags expressing various\nproperties of the runtime, and the last 192 bits are used as the runtime\nidentifier."),(0,o.kt)("p",null,"Currently the following flags are defined (bit positions assume the flags\nvector is interpreted as an unsigned 64 bit big endian integer):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bit 63: The runtime is a test runtime and not for production networks."),(0,o.kt)("li",{parentName:"ul"},"Bit 62: The runtime is a key manager runtime."),(0,o.kt)("li",{parentName:"ul"},"Bits 61-0: Reserved for future expansion and MUST be set to 0.")),(0,o.kt)("p",null,"Note: Unless the registry consensus parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"DebugAllowTestRuntimes")," is\nset, attempts to register a test runtime will be rejected."))}f.isMDXComponent=!0}}]);