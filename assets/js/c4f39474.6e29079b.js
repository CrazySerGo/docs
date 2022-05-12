"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4433],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="ADR 0007: Improved Random Beacon",p={unversionedId:"adr/0007-improved-random-beacon",id:"adr/0007-improved-random-beacon",title:"ADR 0007: Improved Random Beacon",description:"Changelog",source:"@site/external/oasis-core/docs/adr/0007-improved-random-beacon.md",sourceDirName:"adr",slug:"/adr/0007-improved-random-beacon",permalink:"/oasis-core/adr/0007-improved-random-beacon",tags:[],version:"current",lastUpdatedAt:1651668011,formattedLastUpdatedAt:"5/4/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"ADR 0006: Consensus Governance",permalink:"/oasis-core/adr/0006-consensus-governance"},next:{title:"ADR 0008: Standard Account Key Generation",permalink:"/oasis-core/adr/0008-standard-account-key-generation"}},c={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Node Descriptor",id:"node-descriptor",level:3},{value:"Consensus Parameters",id:"consensus-parameters",level:3},{value:"Consensus State and Events",id:"consensus-state-and-events",level:3},{value:"Transactions",id:"transactions",level:2},{value:"Beacon Generation",id:"beacon-generation",level:3},{value:"Commit Phase",id:"commit-phase",level:4},{value:"Reveal Phase",id:"reveal-phase",level:4},{value:"Complete (Transition Wait) Phase",id:"complete-transition-wait-phase",level:4},{value:"Misc. Changes/Notes",id:"misc-changesnotes",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],h={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-0007-improved-random-beacon"},"ADR 0007: Improved Random Beacon"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2020-10-22: Initial version")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Any one who considers arithmetical methods of producing random digits\nis, of course, in a state of sin."),(0,o.kt)("p",{parentName:"blockquote"},"--Dr. John von  Neumann")),(0,o.kt)("p",null,"The existing random beacon used by Oasis Core, is largely a placeholder\nimplementation that naively uses the previous block's commit hash as the\nentropy input.  As such it is clearly insecure as it is subject to\nmanipulation."),(0,o.kt)("p",null,"A better random beacon which is harder for an adversary to manipulate\nis required to provide entropy for secure committee elections."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,'At a high level, this ADR proposes implementing an on-chain random beacon\nbased on "SCRAPE: Scalabe Randomness Attested by Public Entities" by\nCascudo and David.  The new random beacon will use a commit-reveal scheme\nbacked by a PVSS scheme so that as long as the threshold of participants\nis met, and one participant is honest, secure entropy will be generated.'),(0,o.kt)("p",null,"Note: This document assumes the reader understands SCRAPE. Details\nregarding the underlying SCRAPE implementation are omitted for brevity."),(0,o.kt)("h3",{id:"node-descriptor"},"Node Descriptor"),(0,o.kt)("p",null,"The node descriptor of each node will be extended to include the following\ndatastructure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'type Node struct {\n  // ... existing fields omitted ...\n\n  // Beacon contains information for this node\'s participation\n  // in the random beacon protocol.\n  //\n  // TODO: This is optional for now, make mandatory once enough\n  // nodes provide this field.\n  Beacon *BeaconInfo `json:"beacon,omitempty"`\n}\n\n// BeaconInfo contains information for this node\'s participation in\n// the random beacon protocol.\ntype BeaconInfo struct {\n  // Point is the elliptic curve point used for the PVSS algorithm.\n  Point scrape.Point `json:"point"`\n}\n')),(0,o.kt)("p",null,"Each node will generate and maintain a long term elliptic curve point\nand scalar pair (public/private key pair), the point (public key) of\nwhich will be included in the node descriptor."),(0,o.kt)("p",null,"For the purposes of the initial implementation, the curve will be P-256."),(0,o.kt)("h3",{id:"consensus-parameters"},"Consensus Parameters"),(0,o.kt)("p",null,"The beacon module will have the following consensus parameters that\ncontrol behavior."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'type SCRAPEParameters struct {\n  Participants  uint64 `json:"participants"`\n  Threshold     uint64 `json:"threshold"`\n  PVSSThreshold uint64 `json:"pvss_threshold"`\n\n  CommitInterval  int64 `json:"commit_interval"`\n  RevealInterval  int64 `json:"reveal_interval"`\n  TransitionDelay int64 `json:"transition_delay"`\n}\n')),(0,o.kt)("p",null,"Fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Participants")," - The number of participants to be selected for each\nbeacon generation protocol round.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Threshold")," - The minimum number of participants which must\nsuccessfully contribute entropy for the final output to be\nconsidered valid.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PVSSThreshold")," - The minimum number of participants that are\nrequired to reconstruct a PVSS secret from the corresponding\ndecrypted shares (Note: This usually should just be set to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Threshold"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CommitInterval")," - The duration of the Commit phase, in blocks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"RevealInterval")," - The duration of the Reveal phase, in blocks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TransitionDelay")," - The duration of the post Reveal phase delay, in blocks."))),(0,o.kt)("h3",{id:"consensus-state-and-events"},"Consensus State and Events"),(0,o.kt)("p",null,"The on-chain beacon will maintain and make available the following consensus\nstate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'// RoundState is a SCRAPE round state.\ntype RoundState uint8\n\nconst (\n  StateInvalid  RoundState = 0\n  StateCommit   RoundState = 1\n  StateReveal   RoundState = 2\n  StateComplete RoundState = 3\n)\n\n// SCRAPEState is the SCRAPE backend state.\ntype SCRAPEState struct {\n  Height int64 `json:"height,omitempty"`\n\n  Epoch EpochTime  `json:"epoch,omitempty"`\n  Round uint64     `json:"round,omitempty"`\n  State RoundState `json:"state,omitempty"`\n\n  Instance     *scrape.Instance      `json:"instance,omitempty"`\n  Participants []signature.PublicKey `json:"participants,omitempty"`\n  Entropy      []byte                `json:"entropy,omitempty"`\n\n  BadParticipants map[signature.PublicKey]bool `json:"bad_participants,omitempty"`\n\n  CommitDeadline   int64 `json:"commit_deadline,omitempty"`\n  RevealDeadline   int64 `json:"reveal_deadline,omitempty"`\n  TransitionHeight int64 `json:"transition_height,omitempty"`\n\n  RuntimeDisableHeight int64 `json:"runtime_disable_height,omitempty"`\n}\n')),(0,o.kt)("p",null,"Fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Height")," - The block height at which the last event was emitted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Epoch")," - The epoch in which this beacon is being generated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Round")," - The epoch beacon generation round.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"State")," - The beacon generation step (commit/reveal/complete).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Instance")," - The SCRAPE protocol state (encrypted/decrypted shares of\nall participants).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Participants")," - The node IDs of the nodes selected to participate\nin this beacon generation round.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Entropy")," - The final raw entropy, if any.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BadParticipants")," - A map of nodes that were selected, but have failed\nto execute the protocol correctly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CommitDeadline")," - The height in blocks by which participants must\nsubmit their encrypted shares.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"RevealDeadline")," - The height in blocks by which participants must\nsubmit their decrypted shares.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TransitionHeight")," - The height at which the epoch will transition\nassuming this round completes successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeDisableHeight")," - The height at which, upon protocol failure,\nruntime transactions will be disabled.  This height will be set to\nthe transition height of the 0th round."))),(0,o.kt)("p",null,"Upon transition to a next step of the protocol, the on-chain beacon will\nemit the following event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'// SCRAPEEvent is a SCRAPE backend event.\ntype SCRAPEEvent struct {\n  Height int64 `json:"height,omitempty"`\n\n  Epoch EpochTime  `json:"epoch,omitempty"`\n  Round uint64     `json:"round,omitempty"`\n  State RoundState `json:"state,omitempty"`\n\n  Participants []signature.PublicKey `json:"participants,omitempty"`\n}\n')),(0,o.kt)("p",null,"Field definitions are identical to that of those in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEState"),"\ndatastructure."),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"Participating nodes will submit the following transactions when required,\nsigned by the node identity key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'var (\n  // MethodSCRAPECommit is the method name for a SCRAPE commitment.\n  MethodSCRAPECommit = transaction.NewMethodName(ModuleName, "SCRAPECommit", SCRAPECommit{})\n\n  // MethodSCRAPEReveal is the method name for a SCRAPE reveal.\n  MethodSCRAPEReveal = transaction.NewMethodName(ModuleName, "SCRAPEReveal", SCRAPEReveal{})\n)\n\n// SCRAPECommit is a SCRAPE commitment transaction payload.\ntype SCRAPECommit struct {\n  Epoch EpochTime `json:"epoch"`\n  Round uint64    `json:"round"`\n\n  Commit *scrape.Commit `json:"commit,omitempty"`\n}\n\n// SCRAPEReveal is a SCRAPE reveal transaction payload.\ntype SCRAPEReveal struct {\n  Epoch EpochTime `json:"epoch"`\n  Round uint64    `json:"round"`\n\n  Reveal *scrape.Reveal `json:"reveal,omitempty"`\n}\n')),(0,o.kt)("p",null,"Fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Epoch")," - The epoch in which the transaction is applicable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Round")," - The epoch beacon generation round for the transaction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Commit")," - The SCRAPE commit consisting of PVSS shares encrypted to\nevery participant.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Reveal")," - The SCRAPE reveal consisting of the decrypted result of\nPVSS shares received from every participant."))),(0,o.kt)("h3",{id:"beacon-generation"},"Beacon Generation"),(0,o.kt)("p",null,"The beacon generation process is split into three sequential stages,\nroughly corresponding to the steps in the SCRAPE protocol.  Any failures\nin the Commit and Reveal phases result in a failed protocol round, and\nthe generation process will restart after disqualifying participants who\nhave induced the failure."),(0,o.kt)("h4",{id:"commit-phase"},"Commit Phase"),(0,o.kt)("p",null,"Upon epoch transition or a prior failed round the commit phase is initiated\nthe consensus application will select  ",(0,o.kt)("inlineCode",{parentName:"p"},"Particpants")," nodes from the current\nvalidator set (in order of decending stake) to serve as entropy contributors."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEState")," structure is (re)-initialized, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEEvent")," is\nbroadcast to signal to the participants that they should generate and\nsubmit their encrypted shares via a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPECommit")," transaction."),(0,o.kt)("p",null,"Each commit phase lasts exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"CommitInterval")," blocks, at the end of which,\nthe round will be closed to further commits."),(0,o.kt)("p",null,"At the end of the commit phase, the SCRAPE protocol state is evaluated\nto ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Threshold"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"PVSSThreshold")," nodes have published encrypted\nshares, and if an insufficient number of nodes have published in either\ncase, the round is considered to have failed."),(0,o.kt)("p",null,"The following behaviors are currently candidates for a node being marked\nas malicious/non-particpatory (",(0,o.kt)("inlineCode",{parentName:"p"},"BadParticipant"),") and subject to exclusion\nfrom future rounds and slashing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Not submitting a commitment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Malformed commitments (corrupted/fails to validate/etc).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Attempting to alter an existing commitment for a given Epoch/Round."))),(0,o.kt)("h4",{id:"reveal-phase"},"Reveal Phase"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommitInterval")," has passed, assuming that a sufficient number of\ncommits have been received, the consensus application transitions into the\nreveal phase by updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEState")," structure and broadcasting a\n",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEEvent")," to signal to the participants that they should reveal the\ndecrypted values of the encrypted shares received from other participants\nvia a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEReveal")," transaction."),(0,o.kt)("p",null,"Each reveal phase lasts exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"RevealInterval")," blocks, at the end of which,\nthe round will be closed to further reveals."),(0,o.kt)("p",null,"At the end of the reveal phase, the SCRAPE protocol state is evaluated to\nensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Threshold"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"PVSSThreshold")," nodes have published decrypted\nshares, and if an insufficient number of nodes have published in either\ncase, the round is considered to have failed."),(0,o.kt)("p",null,"The following behaviors are currently candidates for a node being marked\nas malicious/non-participatory (",(0,o.kt)("inlineCode",{parentName:"p"},"BadParticipant"),") and subject to exclusion\nfrom future rounds and slashing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Not submitting a reveal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Malformed commitments (corrupted/fails to validate/etc).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Attempting to alter an existing reveal for a given Epoch/Round."))),(0,o.kt)("p",null,"Note: It is possible for anybody who can observe consensus state to derive\nthe entropy the moment a threshold number of ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEReveal")," transactions\nhave been processed.  Therefore the reveal phase should be a small fraction\nof the desired epoch as it is possible to derive the results of the\ncommittee elections for the next epoch mid-reveal phase."),(0,o.kt)("h4",{id:"complete-transition-wait-phase"},"Complete (Transition Wait) Phase"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"RevealInterval")," has passed, assuming that a sufficient number\nof reveals have been received, the consensus application recovers the\nfinal entropy output (the hash of the secret shared by each participant)\nand transitions into the complete (transition wait) phase by updating the\n",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEState")," structure and broadcasting a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRAPEEvent")," to signal to\nparticipants the completion of the round."),(0,o.kt)("p",null,"No meaningful protocol activity happens one a round has successfully\ncompleted, beyond the scheduling of the next epoch transition."),(0,o.kt)("h3",{id:"misc-changesnotes"},"Misc. Changes/Notes"),(0,o.kt)("p",null,"Nodes MUST not be slashed for non-participation if they have not had\nthe opportunity to propose any blocks during the relevant interval."),(0,o.kt)("p",null,"Processing commitments and reveals is currently rather CPU intensive\nand thus each block SHOULD only contain one of each to prevent the\nconsesus from stalling."),(0,o.kt)("p",null,"To thwart attempts to manipulate committee placement by virute of the\nfact that it is possible to observe the entropy used for elections early\nnodes that register between the completion of the final commit phase and\nthe epoch transition in any given epoch MUST be excluded from committee\neligibility."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The random beacon output is unbaised, provided that at least one\nparticipant is honest.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The amount of consensus state required is relatively small.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All protocol messages and steps can be verified on-chain, and misbehavior\ncan be attributed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The final output can be generated on-chain."))),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Epoch intervals are theoretically variable under this proposal, as the\nbeacon generation needs to be re-ran with new participants upon failure.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A new failure mode is introduced at the consensus layer, where the\nbeacon generation protocol exhausts eligible participants.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Without using pairing based cryptography, the number of participants\nin the beacon generation is limited to a small subset of the anticipated\nactive validator set.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is a time window where the next beacon can be derived by anyone\nwith access to the consensus state before the epoch transition actually\nhappens.  This should be mitigated by having a relatively short reveal\nperiod.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The commit and reveal steps of the protocol are rather slow, especially\nas the number of participants increases."))),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Due to performance reasons, the curve used by the PVSS scheme will\nbe P-256 instead of Ed25519.  The point and scalar pairs that each\nnode generates on this curve are exclusively for use in the random\nbeacon protocol and are not used anywhere else.")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2017/216.pdf"},"SCRAPE: SCalabe Randomness Attested by Public Entities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/pull/3180"},"oasis-core#3180"))))}m.isMDXComponent=!0}}]);