"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[7513],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,g=u["".concat(l,".").concat(c)]||u[c]||p[c]||r;return t?i.createElement(g,o(o({ref:n},m),{},{components:t})):i.createElement(g,o({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8617:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={},l="Deploying a Runtime",d={unversionedId:"development-setup/deploying-a-runtime",id:"development-setup/deploying-a-runtime",title:"Deploying a Runtime",description:"Before proceeding, make sure to look at the [prerequisites] required for running",source:"@site/external/oasis-core/docs/development-setup/deploying-a-runtime.md",sourceDirName:"development-setup",slug:"/development-setup/deploying-a-runtime",permalink:"/oasis-core/development-setup/deploying-a-runtime",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Single Validator Node Network",permalink:"/oasis-core/development-setup/single-validator-node-network"},next:{title:"Consensus Layer",permalink:"/oasis-core/consensus/"}},m={},p=[{value:"Provision a Single Validator Node Network",id:"provision-a-single-validator-node-network",level:2},{value:"Initializing a Runtime",id:"initializing-a-runtime",level:2},{value:"Submitting the Runtime Register Transaction",id:"submitting-the-runtime-register-transaction",level:2},{value:"Confirm Runtime is Registered",id:"confirm-runtime-is-registered",level:2},{value:"Running a Runtime Node",id:"running-a-runtime-node",level:2},{value:"Updating Entity Nodes",id:"updating-entity-nodes",level:2}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-runtime"},"Deploying a Runtime"),(0,r.kt)("p",null,"Before proceeding, make sure to look at the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/prerequisites"},"prerequisites")," required for running\nan Oasis Core environment followed by ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/building"},"build instructions")," for the respective\nenvironment (non-SGX or SGX), using the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/oasis-net-runner"},(0,r.kt)("inlineCode",{parentName:"a"},"oasis-net-runner"))," and see ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/runtime/"},"runtime\ndocumentation")," for a general documentation on runtimes."),(0,r.kt)("p",null,"These instructions will show how to register and deploy a runtime node on a\nlocal development network."),(0,r.kt)("h2",{id:"provision-a-single-validator-node-network"},"Provision a Single Validator Node Network"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/oasis-net-runner"},(0,r.kt)("inlineCode",{parentName:"a"},"oasis-net-runner"))," to provision a validator node network without any\nregistered runtimes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir /tmp/runtime-example\n\noasis-net-runner \\\n  --basedir.no_temp_dir \\\n  --basedir /tmp/runtime-example \\\n  --fixture.default.node.binary go/oasis-node/oasis-node \\\n  --fixture.default.setup_runtimes=false \\\n  --fixture.default.deterministic_entities \\\n  --fixture.default.fund_entities \\\n  --fixture.default.num_entities 2\n")),(0,r.kt)("p",null,"The following steps should be run in a separate terminal window. To simplify the\ninstructions set up an ",(0,r.kt)("inlineCode",{parentName:"p"},"ADDR")," environment variable pointing to the UNIX socket\nexposed by the started node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export ADDR=unix:/tmp/runtime-example/net-runner/network/validator-0/internal.sock\n")),(0,r.kt)("p",null,"Confirm the network is running by listing all registered entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis-node registry entity list -a $ADDR -v\n")),(0,r.kt)("p",null,"Should give output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"v":2,"id":"JTUtHd4XYQjh//e6eYU7Pa/XMFG88WE+jixvceIfWrk=","nodes":["LQu4ZtFg8OJ0MC4M4QMeUR7Is6Xt4A/CW+PK/7TPiH0="]}\n{"v":2,"id":"+MJpnSTzc11dNI5emMa+asCJH5cxBiBCcpbYE4XBdso="}\n{"v":2,"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU="}\n')),(0,r.kt)("p",null,"In following steps we will register and run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/tests/runtimes/simple-keyvalue"},"simple-keyvalue")," runtime on the\nnetwork."),(0,r.kt)("h2",{id:"initializing-a-runtime"},"Initializing a Runtime"),(0,r.kt)("p",null,"To generate and sign a runtime registration transaction that will initialize and\nregister the runtime we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"registry runtime gen_register")," command.\nWhen initializing a runtime we need to provide the runtime descriptor."),(0,r.kt)("p",null,"For additional information about runtimes and parameters see the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/runtime/"},"runtime\ndocumentation")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/registry/api?tab=doc#Runtime"},"code reference"),"."),(0,r.kt)("p",null,"Before generating the registration transaction, gather the following data and\nset up environment variables to simplify instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENTITY_DIR")," - Path to the entity directory created when starting the\ndevelopment network. This entity will be the runtime owner. The genesis used\nin the provisioning initial network step funds the all entities in entities.\nIn the following instructions we will be using the ",(0,r.kt)("inlineCode",{parentName:"li"},"entity-2")," entity (located\nin ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/runtime-example/net-runner/network/entity-2/")," directory)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENTITY_ID")," - ID of the entity that will be the owner of the runtime. You can\nget the entity ID from ",(0,r.kt)("inlineCode",{parentName:"li"},"$ENTITY_DIR/entity.json")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GENESIS_JSON")," - Path to the genesis.json file used in the development\nnetwork. (defaults to:\n",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/runtime-example/net-runner/network/genesis.json"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RUNTIME_ID")," - See ",(0,r.kt)("a",{parentName:"li",href:"/oasis-core/runtime/identifiers"},"runtime identifiers")," on how to choose a runtime\nidentifier. In this example we use\n",(0,r.kt)("inlineCode",{parentName:"li"},"8000000000000000000000000000000000000000000000000000000001234567")," which is a\ntest identifier that will not work outside local tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RUNTIME_GENESIS_JSON")," - Path to the runtime genesis state file. The runtime\nused in this example does not use a genesis file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NONCE")," - Entity account nonce. If you followed the guide, nonce ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," would be\nthe initial nonce to use for the entity. Note: make sure to keep updating the\nnonce when generating new transactions. To query for current account nonce\nvalue use ",(0,r.kt)("a",{parentName:"li",href:"/oasis-core/oasis-node/cli#info"},"stake account info")," CLI.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export ENTITY_DIR=/tmp/runtime-example/net-runner/network/entity-2/\nexport ENTITY_ID=+MJpnSTzc11dNI5emMa+asCJH5cxBiBCcpbYE4XBdso=\nexport GENESIS_JSON=/tmp/runtime-example/net-runner/network/genesis.json\nexport RUNTIME_ID=8000000000000000000000000000000000000000000000000000000001234567\nexport RUNTIME_DESCRIPTOR=/tmp/runtime-example/runtime_descriptor.json\nexport NONCE=0\n")),(0,r.kt)("p",null,"Prepare a runtime descriptor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat << EOF > "${RUNTIME_DESCRIPTOR}"\n{\n  "v": 2,\n  "id": "${RUNTIME_ID}",\n  "entity_id": "${ENTITY_ID}",\n  "genesis": {\n    "state_root": "c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a",\n    "state": null,\n    "storage_receipts": null,\n    "round": 0\n  },\n  "kind": 1,\n  "tee_hardware": 0,\n  "versions": {\n    "version": {}\n  },\n  "executor": {\n    "group_size": 1,\n    "group_backup_size": 0,\n    "allowed_stragglers": 0,\n    "round_timeout": 5,\n    "max_messages": 32\n  },\n  "txn_scheduler": {\n    "algorithm": "simple",\n    "batch_flush_timeout": 1000000000,\n    "max_batch_size": 1000,\n    "max_batch_size_bytes": 16777216,\n    "propose_batch_timeout": 5\n  },\n  "storage": {\n    "group_size": 1,\n    "min_write_replication": 1,\n    "max_apply_write_log_entries": 100000,\n    "max_apply_ops": 2,\n    "checkpoint_interval": 10000,\n    "checkpoint_num_kept": 2,\n    "checkpoint_chunk_size": 8388608\n  },\n  "admission_policy": {\n    "entity_whitelist": {\n      "entities": {\n        "${ENTITY_ID}": {}\n      }\n    }\n  },\n  "staking": {},\n  "governance_model": "entity"\n}\nEOF\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis-node registry runtime gen_register \\\n  --transaction.fee.gas 1000 \\\n  --transaction.fee.amount 0 \\\n  --transaction.file /tmp/runtime-example/register_runtime.tx \\\n  --transaction.nonce $NONCE \\\n  --genesis.file $GENESIS_JSON \\\n  --signer.backend file \\\n  --signer.dir $ENTITY_DIR \\\n  --runtime.descriptor /tmp/runtime-example/runtime-descriptor.json\n  --debug.dont_blame_oasis \\\n  --debug.allow_test_keys\n")),(0,r.kt)("p",null,"After confirmation, this command outputs a signed transaction in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/runtime-example/register_runtime.tx")," file. In the next step we will submit\nthe transaction to complete the runtime registration."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When registering a runtime on a ",(0,r.kt)("em",{parentName:"p"},"non-development")," network you will likely want\nto modify default parameters. Additionally, since we are running this on a debug\nnetwork, we had to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug.dont_blame_oasis")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"debug.allow_test_keys")," flags."))),(0,r.kt)("h2",{id:"submitting-the-runtime-register-transaction"},"Submitting the Runtime Register Transaction"),(0,r.kt)("p",null,"To register the runtime, submit the generated transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis-node consensus submit_tx \\\n    --transaction.file /tmp/runtime-example/register_runtime.tx \\\n    --address $ADDR\n")),(0,r.kt)("h2",{id:"confirm-runtime-is-registered"},"Confirm Runtime is Registered"),(0,r.kt)("p",null,"To confirm the runtime is registered use the ",(0,r.kt)("inlineCode",{parentName:"p"},"registry runtime list")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis-node registry runtime list \\\n  --verbose \\\n  --include_suspended \\\n  --address $ADDR\n")),(0,r.kt)("p",null,"Should give output similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "v": 2,\n  "id": "8000000000000000000000000000000000000000000000000000000001234567",\n  "entity_id": "+MJpnSTzc11dNI5emMa+asCJH5cxBiBCcpbYE4XBdso=",\n  "genesis": {\n    "state_root": "c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a",\n    "state": null,\n    "storage_receipts": null,\n    "round": 0\n  },\n  "kind": 1,\n  "tee_hardware": 0,\n  "versions": {\n    "version": {}\n  },\n  "executor": {\n    "group_size": 1,\n    "group_backup_size": 0,\n    "allowed_stragglers": 0,\n    "round_timeout": 5,\n    "max_messages": 32\n  },\n  "txn_scheduler": {\n    "algorithm": "simple",\n    "batch_flush_timeout": 1000000000,\n    "max_batch_size": 1000,\n    "max_batch_size_bytes": 16777216,\n    "propose_batch_timeout": 5\n  },\n  "storage": {\n    "group_size": 1,\n    "min_write_replication": 1,\n    "max_apply_write_log_entries": 100000,\n    "max_apply_ops": 2,\n    "checkpoint_interval": 10000,\n    "checkpoint_num_kept": 2,\n    "checkpoint_chunk_size": 8388608\n  },\n  "admission_policy": {\n    "entity_whitelist": {\n      "entities": {\n        "+MJpnSTzc11dNI5emMa+asCJH5cxBiBCcpbYE4XBdso=": {}\n      }\n    }\n  },\n  "staking": {},\n  "governance_model": "entity"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since we did not setup any runtime nodes, the runtime\nwill get ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/runtime/#suspending-runtimes"},"suspended")," until nodes for the runtime register."))),(0,r.kt)("p",null,"In the next step we will setup and run a runtime node."),(0,r.kt)("h2",{id:"running-a-runtime-node"},"Running a Runtime Node"),(0,r.kt)("p",null,"We will now run a node that will act as a compute, storage and client node for\nthe runtime."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In a real word scenario there would be multiple nodes\nrunning the runtime, each likely serving as a single type only."))),(0,r.kt)("p",null,"Before running the node, gather the following data parameters and set up\nenvironment variables to simplify instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RUNTIME_BINARY")," - Path to the runtime binary that will be run on the node. We\nwill use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/tree/master/tests/runtimes/simple-keyvalue"},"simple-keyvalue")," runtime. If you followed the ",(0,r.kt)("a",{parentName:"li",href:"/oasis-core/development-setup/building"},"build\ninstructions")," the built binary is available at\n",(0,r.kt)("inlineCode",{parentName:"li"},"./target/default/debug/simple-keyvalue"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SEED_NODE_ADDRESS")," - Address of the seed node in the development network.\nSeed node address can be seen in the ",(0,r.kt)("inlineCode",{parentName:"li"},"oasis-net-runner")," logs, when the network\nis initially provisioned.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export RUNTIME_BINARY=/workdir/target/default/debug/simple-keyvalue\nexport SEED_NODE_ADDRESS=<seed-node-tendermint-addr>@127.0.0.1:20000\n\n# Runtime node data dir.\nmkdir -m 0700 /tmp/runtime-example/runtime-node\n\n# Start runtime node.\noasis-node \\\n  --datadir /tmp/runtime-example/runtime-node \\\n  --log.level debug \\\n  --log.format json \\\n  --log.file /tmp/runtime-example/runtime-node/node.log \\\n  --grpc.log.debug \\\n  --worker.registration.entity $ENTITY_DIR/entity.json \\\n  --genesis.file $GENESIS_JSON \\\n  --worker.storage.enabled \\\n  --worker.compute.enabled \\\n  --runtime.provisioner unconfined \\\n  --runtime.supported $RUNTIME_ID \\\n  --runtime.paths $RUNTIME_ID=$RUNTIME_BINARY \\\n  --consensus.tendermint.debug.addr_book_lenient \\\n  --consensus.tendermint.debug.allow_duplicate_ip \\\n  --consensus.tendermint.p2p.seed $SEED_NODE_ADDRESS \\\n  --debug.dont_blame_oasis \\\n  --debug.allow_test_keys\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This also enables unsafe debug-only flags which must never be used in a\nproduction setting as they may result in node compromise."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When running a runtime node in a production setting, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"worker.p2p.addresses")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"worker.client.addresses")," flags need to be configured\nas well."))),(0,r.kt)("p",null,"Following steps should be run in a new terminal window."),(0,r.kt)("h2",{id:"updating-entity-nodes"},"Updating Entity Nodes"),(0,r.kt)("p",null,"Before the newly started runtime node can register itself as a runtime node, we\nneed to update the entity information in registry, to include the started node."),(0,r.kt)("p",null,"Before proceeding, gather the runtime node id and store it in a variable. If you\nfollowed above instructions, the node id can be seen in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/runtime-example/runtime-node/identity_pub.pem")," (or using the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/oasis-node/cli#status"},"node control\nstatus command"),")."),(0,r.kt)("p",null,"Update the entity and generate a transaction that will update the registry\nstate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# NOTE: this ID is not generated deterministically make sure to change the ID\n# with your node id.\nexport NODE_ID=NOPhD7UlMZBO8fNyo2xLFanlmvl+EmZ5s4mM2z9nEBg=\n\noasis-node registry entity update \\\n  --signer.dir $ENTITY_DIR  \\\n  --entity.node.id $NODE_ID\n\noasis-node registry entity gen_register \\\n  --genesis.file $GENESIS_JSON \\\n  --signer.backend file \\\n  --signer.dir $ENTITY_DIR \\\n  --transaction.file /tmp/runtime-example/update_entity.tx \\\n  --transaction.fee.gas 2000 \\\n  --transaction.fee.amount 0 \\\n  --transaction.nonce $NONCE \\\n  --debug.dont_blame_oasis \\\n  --debug.allow_test_keys\n")),(0,r.kt)("p",null,"Submit the generated transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis-node consensus submit_tx \\\n    --transaction.file /tmp/runtime-example/update_entity.tx \\\n    --address $ADDR\n")),(0,r.kt)("p",null,"Confirm the entity in the registry has been updated by querying the registry\nstate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'oasis-node registry entity list -a $ADDR -v\n\n{"v":1,"id":"JTUtHd4XYQjh//e6eYU7Pa/XMFG88WE+jixvceIfWrk=","nodes":["LQu4ZtFg8OJ0MC4M4QMeUR7Is6Xt4A/CW+PK/7TPiH0="]}\n{"v":1,"id":"+MJpnSTzc11dNI5emMa+asCJH5cxBiBCcpbYE4XBdso=","nodes":["vWUfSmjrHSlN5tSSO3/Qynzx+R/UlwPV9u+lnodQ00c="]}\n{"v":1,"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","allow_entity_signed_nodes":true}\n')),(0,r.kt)("p",null,"Node is now able to register and the runtime should get resumed, make sure this\nhappens by querying the registry for runtimes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Ensure node is registered\noasis-node registry node list -a $ADDR -v | grep "$NODE_ID"\n\n# Ensure runtime is resumed.\noasis-node registry runtime list -a $ADDR -v\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You might need to wait few seconds for an epoch\ntransition so that the node is registered and runtime gets resumed."))))}c.isMDXComponent=!0}}]);