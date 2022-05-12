"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2757],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},867:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={},l="Generating and Signing Transactions",p={unversionedId:"usage/transactions",id:"usage/transactions",title:"Generating and Signing Transactions",description:"Before following the instructions below, make sure your Ledger wallet is",source:"@site/external/oasis-core-ledger/docs/usage/transactions.md",sourceDirName:"usage",slug:"/usage/transactions",permalink:"/oasis-core-ledger/usage/transactions",tags:[],version:"current",lastUpdatedAt:1648153797,formattedLastUpdatedAt:"3/24/2022",frontMatter:{},sidebar:"oasisSdk",previous:{title:"Exporting Public Key to Entity",permalink:"/oasis-core-ledger/usage/entity"},next:{title:"Identifying Wallets",permalink:"/oasis-core-ledger/usage/wallets"}},c={},d=[],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generating-and-signing-transactions"},"Generating and Signing Transactions"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before following the instructions below, make sure your Ledger wallet is\nunlocked and the Oasis App is open."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While the Oasis App is available in ",(0,o.kt)("em",{parentName:"p"},"Developer mode"),', opening the App brings\nup the "Pending Ledger review" screen.\nYou need to press both buttons at once to close that screen and transition to\nthe ',(0,o.kt)("em",{parentName:"p"},"ordinary"),' "Oasis Ready" screen where the Oasis App is ready to be used.'))),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools"},"Use Your Tokens' Setup")," document of the general\n",(0,o.kt)("a",{parentName:"p",href:"/"},"Oasis Docs"),", you need to set the appropriate ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup#common-cli-flags"},"Base and Signer CLI flags")," for\neach transaction you want to generate."),(0,o.kt)("p",null,"Make sure you set the following environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GENESIS_FILE"),": Location of the genesis file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEDGER_SIGNER_PATH"),": Location of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ledger-signer")," binary.\nSee ",(0,o.kt)("a",{parentName:"li",href:"/oasis-core-ledger/usage/setup#remembering-path-to-ledger-signer-plugin"},"Setup")," for more details.")),(0,o.kt)("p",null,"For convenience, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"TX_FLAGS")," environment variable like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TX_FLAGS=(--genesis.file "$GENESIS_FILE"\n  --signer.dir entity\n  --signer.backend plugin\n  --signer.plugin.name ledger\n  --signer.plugin.path "$LEDGER_SIGNER_PATH"\n)\n')),(0,o.kt)("p",null,"Make sure you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"entity")," with the name of the directory that contains the\n",(0,o.kt)("inlineCode",{parentName:"p"},"entity.json")," file for you Ledger wallet's account.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/oasis-core-ledger/usage/entity"},"Exporting Public Key to Entity")," for more details."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case you will have more than one Ledger wallet connected, you will need to\nspecify which wallet to use by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_id")," configuration key in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--signer.plugin.config")," flag, i.e."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'--signer.plugin.config "wallet_id:<LEDGER-WALLET-ID>"\n')),(0,o.kt)("p",{parentName:"div"},"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<LEDGER-WALLET-ID>")," is replaced with the ID of your Ledger wallet.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/oasis-core-ledger/usage/wallets"},"Identifying Wallets")," for more details."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to use different account index for the same Ledger wallet, you\nwill need to specify it by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," configuration key in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--signer.plugin.config")," flag, i.e."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'--signer.plugin.config "index:<LEDGER-ACCOUNT-INDEX>"\n')),(0,o.kt)("p",{parentName:"div"},"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<LEDGER-ACCOUNT-INDEX>")," is replaced with the account index you want to\nuse."),(0,o.kt)("p",{parentName:"div"},"If you need to specify multiple configuration keys in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--signer.plugin.config")," flag, you can separate them with a comma (",(0,o.kt)("inlineCode",{parentName:"p"},","),"), e.g."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'--signer.plugin.config "wallet_id:1fc3be,index:5"\n')))),(0,o.kt)("p",null,"Then, you can generate and sign a transaction by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'oasis-node stake account gen_<TX-TYPE> \\\n  "${TX_FLAGS[@]}" \\\n  --transaction.file tx.json \\\n  --transaction.nonce <NONCE> \\\n  --transaction.fee.gas <GAS-LIMIT> \\\n  --transaction.fee.amount <FEE>\n')),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<TX-TYPE>"),": type of transaction, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"transfer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"escrow"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"reclaim_escrow"),",\n..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<NONCE>"),": your account's current nonce,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<GAS-LIMIT>"),": maximum amount of gas this transaction can spend,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<FEE>"),": amount of tokens you will pay as a fee for this transaction.")),(0,o.kt)("p",null,"Besides these common transaction flags, you will need to specify additional\ntransaction flags specific to the chosen transaction type. Run\n",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node stake account gen_<TX-TYPE> --help")," for more details."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For a more detailed explanation of the common transaction flags, see\n",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup#common-transaction-flags"},"Common Transaction Flags")," section of the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools"},"Use Your Tokens' Setup")," doc."))),(0,o.kt)("p",null,"For example, to generate and sign a transfer transaction of 100 tokens to an\naccount with address ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis1qpcgnf84hnvvfvzup542rhc8kjyvqf4aqqlj5kqh"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'oasis-node stake account gen_transfer \\\n  "${TX_FLAGS[@]}" \\\n  --stake.amount 100000000000 \\\n  --stake.transfer.destination oasis1qpcgnf84hnvvfvzup542rhc8kjyvqf4aqqlj5kqh \\\n  --transaction.file tx.json \\\n  --transaction.nonce 1 \\\n  --transaction.fee.gas 2000 \\\n  --transaction.fee.amount 2000\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The amounts passed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"--stake.amount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--transaction.fee.amount")," flags\nare specified in nROSE units, i.e. 1 ROSE equals 1,000,000,000 nROSE."))),(0,o.kt)("p",null,"This will output a preview of the generated transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You are about to sign the following transaction:\n  Nonce:  1\n  Fee:\n    Amount: ROSE 0.000002\n    Gas limit: 2000\n    (gas price: ROSE 0.000000001 per gas unit)\n  Method: staking.Transfer\n  Body:\n    To:     oasis1qpcgnf84hnvvfvzup542rhc8kjyvqf4aqqlj5kqh\n    Amount: ROSE 100.0\nOther info:\n  Genesis document's hash: a245619497e580dd3bc1aa3256c07f68b8dcc13f92da115eadc3b231b083d3c4\n")),(0,o.kt)("p",null,"and ask you to verify the transaction's fields on your Ledger wallet's screen."),(0,o.kt)("p",null,"After you've confirmed the transaction's fields are correct, sign the\ntransaction on your Ledger wallet by double-pressing the ",(0,o.kt)("em",{parentName:"p"},"Sign transaction"),"\nscreen."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The next step after signing a transaction is to submit it to the network via\nan online Oasis node by running:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node consensus submit_tx \\\n  -a $ADDR \\\n  --transaction.file tx_transfer.json\n")),(0,o.kt)("p",{parentName:"div"},"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/transfer-tokens"},"Transfer Tokens")," document of the general\n",(0,o.kt)("a",{parentName:"p",href:"/"},"Oasis Docs"),"."))))}u.isMDXComponent=!0}}]);