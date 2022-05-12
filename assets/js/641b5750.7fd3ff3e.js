"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4644],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={},c="Get Account Nonce",l={unversionedId:"manage-tokens/advanced/oasis-cli-tools/get-account-nonce",id:"manage-tokens/advanced/oasis-cli-tools/get-account-nonce",title:"Get Account Nonce",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce.md",sourceDirName:"manage-tokens/advanced/oasis-cli-tools",slug:"/manage-tokens/advanced/oasis-cli-tools/get-account-nonce",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce",editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/get-account-nonce.md",tags:[],version:"current",lastUpdatedAt:1652342868,formattedLastUpdatedAt:"5/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"Get Account Info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"},next:{title:"Obtain Account Address From Entity's ID",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/address"}},d={},u=[{value:"Get Your Entity&#39;s Nonce",id:"get-your-entitys-nonce",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-account-nonce"},"Get Account Nonce"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example assumes you have read and followed the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections."))),(0,r.kt)("p",null,"To get more a particular staking account's, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx"),", nonce, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake account nonce \\\n  -a $ADDR \\\n  --stake.account.address oasis1qrvsa8ukfw3p6kw2vcs0fk9t59mceqq7fyttwqgx\n")),(0,r.kt)("h3",{id:"get-your-entitys-nonce"},"Get Your Entity's Nonce"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example assumes you have the ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," tool installed on your system."))),(0,r.kt)("p",null,"If you want to get your entity's nonce, you can use the following combination of commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ENTITY_DIR=<PATH-TO-YOUR-ENTITY>\nADDRESS=$(oasis-node stake pubkey2address --public_key \\\n  $(cat $ENTITY_DIR/entity.json | jq .id -r))\nNONCE=$(oasis-node stake account nonce --stake.account.address $ADDRESS -a $ADDR)\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<PATH-TO-YOUR-ENTITY>")," is the path to your entity's descriptor, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/serverdir/node/entity/"),"."))}m.isMDXComponent=!0}}]);