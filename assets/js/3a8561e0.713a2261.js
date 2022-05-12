"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5764],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return c}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=i,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||r;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294);function i(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:i},n)}},9877:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(7462),i=a(7294),r=a(2389),o=a(9366),s=a(6010),l="tabItem_LplD";function d(e){var n,a,r,d=e.lazy,u=e.block,m=e.defaultValue,p=e.values,c=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),b=f.tabGroupChoices,w=f.setTabGroupChoices,y=(0,i.useState)(g),T=y[0],x=y[1],C=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=b[c];null!=O&&O!==T&&k.some((function(e){return e.value===O}))&&x(O)}var z=function(e){var n=e.currentTarget,a=C.indexOf(n),t=k[a].value;t!==T&&(P(n),x(t),null!=c&&w(c,t))},E=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=C.indexOf(e.currentTarget)+1;a=C[t]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.currentTarget)-1;a=C[i]||C[C.length-1]}null==(n=a)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},k.map((function(e){var n=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:z,onClick:z},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=a?a:n)}))),d?(0,i.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function u(e){var n=(0,r.Z)();return i.createElement(d,(0,t.Z)({key:String(n)},e))}},74:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var t=a(7462),i=a(3366),r=(a(7294),a(3905)),o=a(9877),s=a(8215),l=["components"],d={description:"This page describes how to run a ParaTime client node on the Oasis Network."},u="Run a ParaTime Client Node",m={unversionedId:"run-a-node/set-up-your-node/run-a-paratime-client-node",id:"run-a-node/set-up-your-node/run-a-paratime-client-node",title:"Run a ParaTime Client Node",description:"This page describes how to run a ParaTime client node on the Oasis Network.",source:"@site/docs/general/run-a-node/set-up-your-node/run-a-paratime-client-node.mdx",sourceDirName:"run-a-node/set-up-your-node",slug:"/run-a-node/set-up-your-node/run-a-paratime-client-node",permalink:"/general/run-a-node/set-up-your-node/run-a-paratime-client-node",editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/run-a-node/set-up-your-node/run-a-paratime-client-node.mdx",tags:[],version:"current",lastUpdatedAt:1652342868,formattedLastUpdatedAt:"5/12/2022",frontMatter:{description:"This page describes how to run a ParaTime client node on the Oasis Network."},sidebar:"docs",previous:{title:"Run a ParaTime Node",permalink:"/general/run-a-node/set-up-your-node/run-a-paratime-node"},next:{title:"Run an IAS Proxy",permalink:"/general/run-a-node/set-up-your-node/run-an-ias-proxy"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The ParaTime Bundle",id:"the-paratime-bundle",level:3},{value:"Install ParaTime Bundle",id:"install-paratime-bundle",level:3},{value:"Install Bubblewrap Sandbox (at least version 0.3.3)",id:"install-bubblewrap-sandbox-at-least-version-033",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2}],h={toc:c};function v(e){var n=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-paratime-client-node"},"Run a ParaTime Client Node"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These instructions are for setting up a ",(0,r.kt)("em",{parentName:"p"},"ParaTime client")," node which only observes ParaTime activity and can submit transactions. If you want to run a ",(0,r.kt)("em",{parentName:"p"},"ParaTime")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-a-paratime-node"},"instructions for running a ParaTime node"),". Similarly, if you want to run a ",(0,r.kt)("em",{parentName:"p"},"validator")," or a ",(0,r.kt)("em",{parentName:"p"},"non-validator")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-validator"},"instructions for running a validator node")," or ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-non-validator"},"instructions for running a non-validator node"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are looking for some concrete ParaTimes that you can run, see ",(0,r.kt)("a",{parentName:"p",href:"/general/contribute-to-the-network/run-a-paratime-node"},"the list of ParaTimes and their parameters"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Oasis Core refers to ParaTimes as runtimes internally, so all configuration options will have runtime in their name."))),(0,r.kt)("p",null,"This guide will cover setting up your ParaTime client node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before following this guide, make sure you've followed the ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/prerequisites/"},"Prerequisites")," and ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-non-validator"},"Run a Non-validator Node")," sections and have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oasis Node binary installed and configured on your system."),(0,r.kt)("li",{parentName:"ul"},"The chosen top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/")," working directory prepared. In addition to ",(0,r.kt)("inlineCode",{parentName:"li"},"etc")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," directories, also prepare the following directories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin"),": This will store binaries needed by Oasis Node for running the ParaTimes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtimes"),": This will store the ParaTime bundles.")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Feel free to name your working directory as you wish, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/oasis/"),"."),(0,r.kt)("p",{parentName:"div"},"Just make sure to use the correct working directory path in the instructions below."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Genesis file copied to ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/etc/genesis.json"),".")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reading the rest of the ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-a-paratime-node"},"ParaTime node setup instructions")," may also be useful."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To speed up bootstraping your new node, we recommend ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/advanced/copy-state-from-one-node-to-the-other"},"copying node's state from your existing node")," or ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/advanced/sync-node-using-state-sync"},"syncing it using state sync"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running a ParaTime client node doesn't require registering an entity or its nodes."),(0,r.kt)("p",{parentName:"div"},"It also doesn't require having any stake."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running a client node for a ParaTime that runs in a Trusted Execution Environment (TEE) doesn't require having the same  TEE available on the ParaTime client node."),(0,r.kt)("p",{parentName:"div"},"For example, running a ParaTime client node for an SGX-enabled ParaTime like Cipher doesn't require having SGX on the ParaTime client node."))),(0,r.kt)("h3",{id:"the-paratime-bundle"},"The ParaTime Bundle"),(0,r.kt)("p",null,"In order to run a ParaTime node you need to obtain the ParaTime bundle that\nneeds to come from a trusted source. The bundle (usually with an ",(0,r.kt)("inlineCode",{parentName:"p"},".orc"),"\nextension that stands for Oasis Runtime Container) contains all the needed\nParaTime binaries together with the identifier and version metadata to ease\ndeployment."),(0,r.kt)("p",null,"When the ParaTime is running in a Trusted Execution Environment (TEE) the bundle\nwill also contain all the required artifacts (e.g. SGXS version of the binary\nand any enclave signatures)."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Like the genesis document, make sure you obtain these from a trusted source."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"compiling-the-paratime-binary-from-source-code"},(0,r.kt)("strong",{parentName:"h4"},"Compiling the ParaTime Binary from Source Code")),(0,r.kt)("p",{parentName:"div"},"In case you decide to build the ParaTime binary from source yourself, make sure\nthat you follow our ",(0,r.kt)("a",{parentName:"p",href:"/oasis-sdk/runtime/reproducibility"},"guidelines for deterministic compilation"),"\nto ensure that you receive the exact same binary."))),(0,r.kt)("h3",{id:"install-paratime-bundle"},"Install ParaTime Bundle"),(0,r.kt)("p",null,"For each ParaTime, you need to obtain its bundle and install it to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"runtimes")," subdirectory of your node's working directory."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For example, for the ",(0,r.kt)("a",{parentName:"p",href:"/general/oasis-network/network-parameters#cipher-paratime"},"Cipher ParaTime"),",\nyou would have to obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"cipher-paratime.orc")," bundle and install it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"/node/runtimes/cipher-paratime.orc"),"."))),(0,r.kt)("h3",{id:"install-bubblewrap-sandbox-at-least-version-033"},"Install Bubblewrap Sandbox (at least version 0.3.3)"),(0,r.kt)("p",null,"ParaTime client nodes execute ParaTime binaries inside a sandboxed environment provided by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap"},"Bubblewrap"),". In order to install it, please follow these instructions, depending on your distribution:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Ubuntu 18.10+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install bubblewrap\n"))),(0,r.kt)(s.Z,{value:"Fedora",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install bubblewrap\n"))),(0,r.kt)(s.Z,{value:"other",label:"Other Distributions",mdxType:"TabItem"},"On other systems, you can download the latest [source release provided by the Bubblewrap project](https://github.com/containers/bubblewrap/releases) and build it yourself.",(0,r.kt)("p",null,"Make sure you have the necessary development tools installed on your system and the ",(0,r.kt)("inlineCode",{parentName:"p"},"libcap")," development headers. On Ubuntu, you can install them with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential libcap-dev\n")),(0,r.kt)("p",null,"After obtaining the Bubblewrap source tarball, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap/releases/download/v0.4.1/bubblewrap-0.4.1.tar.xz"},"bubblewrap-0.4.1.tar.xz"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xf bubblewrap-0.4.1.tar.xz\ncd bubblewrap-0.4.1\n./configure --prefix=/usr\nmake\nsudo make install\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that Oasis Node expects Bubblewrap to be installed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin/bwrap")," by default."))))),(0,r.kt)("p",null,"Ensure you have a new enough version by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bwrap --version\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ubuntu 18.04 LTS (and earlier) provide overly-old ",(0,r.kt)("inlineCode",{parentName:"p"},"bubblewrap"),". Follow ",(0,r.kt)("em",{parentName:"p"},"Other Distributions")," section on those systems."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In order to configure the ParaTime client node, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc/config.yml")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'datadir: /node/data\n\nlog:\n  level:\n    default: info\n    tendermint: info\n    tendermint/context: error\n  format: JSON\n\ngenesis:\n  file: /node/etc/genesis.json\n\nconsensus:\n  tendermint:    \n    p2p:\n      # List of seed nodes to connect to.\n      # NOTE: You can add additional seed nodes to this list if you want.\n      seed:\n        - "{{ seed_node_address }}"\n\nruntime:\n  mode: client\n  paths:\n    # Paths to ParaTime bundles for all of the supported ParaTimes.\n    - "{{ runtime_orc_path }}"\n')),(0,r.kt)("p",null,"Before using this configuration you should collect the following information to replace  the  variables present in the configuration file:."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{{ seed_node_address }}"),": The seed node address in the form ",(0,r.kt)("inlineCode",{parentName:"li"},"ID@IP:port"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can find the current Oasis Seed Node address in the ",(0,r.kt)("a",{parentName:"li",href:"/general/oasis-network/network-parameters"},"Network Parameters"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{{ runtime_orc_path }}"),": Path to the ",(0,r.kt)("a",{parentName:"li",href:"/general/run-a-node/set-up-your-node/run-a-paratime-client-node#the-paratime-bundle"},"ParaTime bundle")," of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/runtimes/foo-paratime.orc"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can find the current Oasis-supported ParaTimes in the ",(0,r.kt)("a",{parentName:"li",href:"/general/oasis-network/network-parameters#paratimes"},"Network Paramers"),".")))),(0,r.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,r.kt)("p",null,"You can start the node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,r.kt)("h2",{id:"checking-node-status"},"Checking Node Status"),(0,r.kt)("p",null,"To ensure that your node is properly connected with the network, you can run the following command after the node has started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node control status -a unix:/node/data/internal.sock\n")))}v.isMDXComponent=!0}}]);