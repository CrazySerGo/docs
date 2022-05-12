"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2081],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,c=k["".concat(p,".").concat(u)]||k[u]||m[u]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="ADR 0002: Go Modules Compatible Git Tags",s={unversionedId:"adr/0002-go-modules-compatible-git-tags",id:"adr/0002-go-modules-compatible-git-tags",title:"ADR 0002: Go Modules Compatible Git Tags",description:"Changelog",source:"@site/external/oasis-core/docs/adr/0002-go-modules-compatible-git-tags.md",sourceDirName:"adr",slug:"/adr/0002-go-modules-compatible-git-tags",permalink:"/oasis-core/adr/0002-go-modules-compatible-git-tags",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"ADR 0001: Multiple Roots Under the Tendermint Application Hash",permalink:"/oasis-core/adr/0001-tm-multi-root-apphash"},next:{title:"ADR 0003: Consensus/Runtime Token Transfer",permalink:"/oasis-core/adr/0003-consensus-runtime-token-transfer"}},d={},m=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"References",id:"references",level:2}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-0002-go-modules-compatible-git-tags"},"ADR 0002: Go Modules Compatible Git Tags"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2020-09-04: Initial version")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Projects that depend on ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/mod/github.com/oasisprotocol/oasis-core/go"},"Oasis Core's Go module"),", i.e.\n",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/oasisprotocol/oasis-core/go"),", need a way to depend on its particular\nversion."),(0,i.kt)("p",null,"Go Modules only allow ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning 2.0.0")," for\n",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/ref/mod#versions"},"versioning of the modules")," which makes it hard to work\nwith ",(0,i.kt)("a",{parentName:"p",href:"/oasis-core/versioning"},"Oasis Core's CalVer (calendar versioning) scheme"),"."),(0,i.kt)("p",null,"The currently used scheme for Go Modules compatible Git tags is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go/v0.YY.MINOR[.MICRO]\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"YY")," represents the short year (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"19"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", ...),")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MINOR")," represents the minor version starting with zero (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", ...),")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MICRO"),' represents the final number in the version (sometimes referred to as\nthe "patch" segment) (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", ...)."),(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"MICRO")," version is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", it is omitted."))),(0,i.kt)("p",null,"It turns out this only works for Oasis Core versions with the ",(0,i.kt)("inlineCode",{parentName:"p"},"MICRO")," version\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," since the Go Modules compatible Git tag omits the ",(0,i.kt)("inlineCode",{parentName:"p"},".MICRO")," part and is\nthus compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/ref/mod#versions"},"Go Modules versioning requirements"),"."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"The proposed design is to tag Oasis Core releases with the following Go Modules\ncompatible Git tags (in addition to the ordinary Git tags):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go/v0.YY0MINOR.MICRO\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YY")," represents the short year (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"19"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"21"),", ...),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0MINOR")," represents the zero-padded minor version starting with zero (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"00"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"01"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"02"),", ..., ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"11"),", ...),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MICRO"),' represents the final number in the version (sometimes referred to as\nthe "patch" segment) (e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", ...).")),(0,i.kt)("p",null,"Here are some examples of how the ordinary and the corresponding Go Modules\ncompatible Git tags would look like:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Ordinary Git tag"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Go Modules compatible Git tag"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.9"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.9")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2009.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.9.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.9.1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2009.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.9.2"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.9.2")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2009.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.10"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.10")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2010.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.10.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.10.1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2010.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20.10.2"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v20.10.2")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2010.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.0")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2100.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.0.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.0.1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2100.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.0.2"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.0.2")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2100.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2101.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.1.1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.1.1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2101.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21.1.2"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"v21.1.2")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"go/v0.2101.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"...")))),(0,i.kt)("p",null,"Using such a scheme makes the version of the Oasis Core Go module fully\ncompatible with the ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/ref/mod#versions"},"Go Modules versioning requirements")," and thus\nenables users to use the familiar Go tools to check for new module versions,\ni.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"go list -m -u all"),", or to obtain and require a module, i.e.\n",(0,i.kt)("inlineCode",{parentName:"p"},"go get github.com/oasisprotocol/oasis-core/go@latest"),"."),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"An alternative scheme would be to use the following Go Modules compatible Git\ntags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go/v0.YY.MINOR-MICRO\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YY")," represents the short year (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"19"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"21"),", ...),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MINOR")," represents the minor version starting with zero (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", ...),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MICRO"),' represents the final number in the version (sometimes referred to as\nthe "patch" segment) (e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", ...).")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-MICRO")," suffix would make Go treat all such versions as a\n",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/ref/mod#glos-pre-release-version"},"Go Modules pre-release version"),"."),(0,i.kt)("p",null,"The consequence of that would be that all Go tools would treat such versions as\npre-releases."),(0,i.kt)("p",null,"For example, let's say the Oasis Core Go module would have the following Go\nversion tags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go/v0.20.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go/v0.20.10-0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go/v0.20.10-1"))),(0,i.kt)("p",null,"and a module that depends on the Oasis Core Go module would currently require\nversion ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.20.9"),"."),(0,i.kt)("p",null,"One downside would be that the ",(0,i.kt)("inlineCode",{parentName:"p"},"go list -m -u all")," command would not notify a\nuser that an update, i.e. version ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.20.10-1"),", is available."),(0,i.kt)("p",null,"The second downside would be that using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"go get github.com/oasisprotocol/oasis-core/go@latest")," command would treat\nversion ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.20.9")," as the latest version and download and require this version of\nthe Oasis Core Go module instead of the real latest version,  ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.20.10-1")," in\nthis example."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This allow users to depend on a bugfix/patch release of the Oasis Core Go\nmodule in a ",(0,i.kt)("a",{parentName:"li",href:"https://golang.org/ref/mod#versions"},"Go Modules versioning requirements")," compatible way,\ni.e. without having to resort to pinning the requirement to a particular\nOasis Core commit.")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The connection between an ordinary Git tag and a Go Modules compatible Git tag\nis not very obvious."),(0,i.kt)("p",{parentName:"li"},"For example, it might not be immediately obvious that ",(0,i.kt)("inlineCode",{parentName:"p"},"v21.0")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"go/v0.2100.0")," refer to the same thing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using a zero-padded minor version fixed to two characters would limit the\nnumber of releases in a year to 100 releases."))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dgraph-io/badger"},"BadgerDB")," uses a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dgraph-io/badger/releases"},"similar scheme for tagging Go Modules compatible Git tags"),"\nfor their CalVer versioning scheme.")))}u.isMDXComponent=!0}}]);