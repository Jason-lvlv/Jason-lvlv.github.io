(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c258a5c"],{2728:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._m(0),n("div",{staticClass:"app-inner"},[e.address?n("div",{staticClass:"link-address"},[n("div",{staticClass:"link"},[e._v(" "+e._s(e.reAddress)+" ")]),n("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.reAddress,expression:"reAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[e._v(" 复制邀请链接 ")])]):e._e(),e._m(1),n("div",{staticClass:"recommand"},[e._m(2),n("div",{staticClass:"list-outer"},[e._m(3),n("div",{staticClass:"body"},[n("div",{staticClass:"item"},[e._m(4),n("div",{staticClass:"amount"},[e._v(" $ "+e._s(e.isTokenBtnDisbaled?"1":e.airdropBalance)+" ")]),n("div",{staticClass:"receive"},[e._v(" $ "+e._s(e.airDropDrawed)+" ")]),n("div",{staticClass:"operation"},[n("div",{class:{disabled:!e.isTokenBtnDisbaled&&"0"===e.airdropBalance||!e.isConnected},on:{click:e.receiveDrop}},[e._v("领取")])])])])])]),n("div",{staticClass:"reward"},[e._m(5),e.inviteListState?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:["loading",{isLoading:e.listLoading}]},[e._v(" "+e._s(e.inviteListText)+" ")]):n("div",{staticClass:"list-outer"},e._l(e.inviteList,(function(t,a){return n("div",{key:a,staticClass:"item"},[e._v(" "+e._s(t)+" ")])})),0)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"commin-title"},[a("div",{staticClass:"title-inner"},[a("img",{attrs:{src:n("7de1"),alt:""}}),a("span",{staticClass:"tit"},[e._v("邀请新用户领空投")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rules"},[n("p",{staticClass:"tit"},[e._v("邀请奖励规则：")]),n("p",[e._v("1、新用户必须使用邀请人的邀请链接进入网站，并领取空投才视为邀请成功，")]),n("p",[e._v("2、新用户受邀后，邀请人与受邀者同时获得一份空投奖励，")]),n("p",[e._v("3、受邀人作为新的邀请人，再次邀请新用户成功后受邀人的邀请人也获得一份空投，依次类推最大邀请层级为四级，")]),n("p",[e._v("4、邀请人关系成立后，邀请双方不仅会获得空投奖励，同时会获得下级挖矿收益一定比例奖励，详细奖励参官方考奖励公告,")]),n("p",[e._v("5、所有人挖矿收益的一定比例将会平均分配给上级，没有上级而未分配部分将进行销毁，")]),n("p",[e._v("6、挖矿推荐奖励的发放，要求被奖励的账户的锁仓金额达到被推荐人锁仓金额的10%，如果没达到，也直接销毁。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"com-title"},[e._v(" 我的空投奖励 "),n("span",[e._v("（受邀用户成功领取空投才能视为邀请成功）")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("div",{staticClass:"item"},[e._v("币种")]),n("div",{staticClass:"item"},[e._v("待领取奖励")]),n("div",{staticClass:"item"},[e._v("已领取奖励")]),n("div",{staticClass:"item opera"},[e._v("操作")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kind"},[a("img",{attrs:{src:n("cf05"),alt:""}}),e._v(" H2O ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"com-title"},[e._v(" 邀请详情 "),n("span",[e._v("（一级）")])])}],r=n("1da1"),o=n("5530"),i=(n("96cf"),n("34e5")),c=n("2f62"),u={name:"Index",data:function(){return{}},mounted:function(){console.log("this.$route.query",this.$route.query),console.log("airdropBalance",this.airdropBalance),console.log("airDropDrawed",this.airDropDrawed)},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])({address:function(e){return e.base.address},isConnected:function(e){return e.base.isConnected},listLoading:function(e){return e.base.inviteList.loading},inviteList:function(e){return e.base.inviteList.list},airdropBalance:function(e){return e.base.airdropBalance},airDropDrawed:function(e){return e.base.airDropDrawed}})),{},{recommandAddress:function(){var e=this.$route.query;return e.re},inviteListText:function(){var e="";return this.isConnected?this.listLoading?e="":this.inviteList.length||(e="暂无邀请详情"):e="请先链接钱包",e},inviteListState:function(){return!this.isConnected||this.listLoading||!this.inviteList.length},isTokenBtnDisbaled:function(){return"0"===this.airDropDrawed&&"0"===this.airdropBalance},reAddress:function(){return"http://47.241.171.176/index.html#/airdrop?re=".concat(this.address)}}),methods:{receiveDrop:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isTokenBtnDisbaled||"0"!==e.airdropBalance){t.next=2;break}return t.abrupt("return");case 2:n=e.recommandAddress,n||(n=e.address),Object(i["h"])(n);case 5:case"end":return t.stop()}}),t)})))()},receiveMint:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},copySuccess:function(){this.$notify({title:"复制成功!",type:"success",duration:3e3})}}},d=u,l=(n("6dd9"),n("2877")),h=Object(l["a"])(d,a,s,!1,null,"17f6c834",null);t["default"]=h.exports},"34e5":function(e,t,n){"use strict";n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return f}));var a=n("1da1"),s=(n("96cf"),n("d3b7"),n("25f0"),n("b893")),r=n("b292"),o=n("56f5"),i=n("511e"),c=n("b569"),u=function(e){console.log("receiveAirdrop",e);var t=__ownInstance__.$store.state.base.address,n=__ownInstance__.$store.state.base.airdropAddress,s=new web3.eth.Contract(r,n),o=s.methods.draw(e).encodeABI(),i=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:i}),new Promise((function(e,s){var r;web3.eth.getTransactionCount(t).then(function(){var c=Object(a["a"])(regeneratorRuntime.mark((function a(c){var u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return u=a.sent,a.next=5,web3.eth.estimateGas({from:t,to:n,data:o});case 5:d=a.sent,console.log("estimateGas",d),l=[{from:t,to:n,data:o,gasPrice:web3.utils.toHex(u),gas:web3.utils.toHex(d)}],web3.eth.sendTransaction(l[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(r=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("getAirdropValue"),__ownInstance__.$store.dispatch("getAirDropDrawed"),__ownInstance__.$store.dispatch("changeTradeStatus",{id:i,val:1,hash:r}),e(r)})).on("confirmation",(function(e,t){})).on("error",(function(e){var t=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:i,val:2,isUserDeny:t,hash:r}),console.log("err",e),s(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:i,val:2,hash:r}),s(e)}))}))},d=function(e,t,n,r){var i=__ownInstance__.$store.state.base.address,c=n&&r?web3.utils.toHex(Object(s["e"])(n,r)):web3.utils.toHex(Object(s["f"])(1.157920892373163*Math.pow(10,59))),u=new web3.eth.Contract(o,e),d=t||__ownInstance__.$store.state.base.bankAddress,l=u.methods.approve(d,c).encodeABI();return new Promise((function(t,n){web3.eth.getTransactionCount(i).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:r=a.sent,o=[{chainId:__ownInstance__.$store.state.base.chainId,nonce:web3.utils.toHex(s),gasLimit:web3.utils.toHex(6e6),gasPrice:web3.utils.toHex(r),to:e,from:i,data:l}],ethereum.request({method:"eth_sendTransaction",params:o}).then((function(e){t(e)})).catch((function(e){n(e)}));case 5:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}())}))},l=function(e,t,n){console.log("depositPutIn",n);var r="0x0000000000000000000000000000000000000000"===e,o=__ownInstance__.$store.state.base.address,c=__ownInstance__.$store.state.base.bankAddress,u=new web3.eth.Contract(i,c),d=Object(s["e"])(n,t),l=r?"0x0":web3.utils.toHex(d),h=u.methods.deposit(e,l).encodeABI(),_=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:_}),new Promise((function(e,t){var n;web3.eth.getTransactionCount(o).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var i,u,l,w;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return i=a.sent,u={from:o,to:c,data:h},r&&(u.value=web3.utils.toHex(d)),a.next=7,web3.eth.estimateGas(u);case 7:l=a.sent,console.log("estimateGas",l),w=[{from:o,to:c,data:h,gasPrice:web3.utils.toHex(i),gas:web3.utils.toHex(l)}],r&&(w[0].value=web3.utils.toHex(d)),web3.eth.sendTransaction(w[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(n=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:_,val:1,hash:n}),e(n)})).on("confirmation",(function(e,t){})).on("error",(function(e){var a=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:_,val:2,isUserDeny:a,hash:n}),console.log("err",e),t(e)}));case 12:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:_,val:2,hash:n}),t(e)}))}))},h=function(e,t,n){console.log("depositPutOut",n);var r=__ownInstance__.$store.state.base.address,o=__ownInstance__.$store.state.base.bankAddress,c=new web3.eth.Contract(i,o),u=Object(s["e"])(n,t),d=c.methods.withdraw(e,web3.utils.toHex(u)).encodeABI(),l=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:l}),new Promise((function(e,t){var n;web3.eth.getTransactionCount(r).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var i,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return i=a.sent,a.next=5,web3.eth.estimateGas({from:r,to:o,data:d});case 5:c=a.sent,console.log("estimateGas",c),u=[{from:r,to:o,data:d,gasPrice:web3.utils.toHex(i),gas:web3.utils.toHex(c)}],web3.eth.sendTransaction(u[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(n=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:l,val:1,hash:n}),e(n)})).on("confirmation",(function(e,t){})).on("error",(function(e){var a=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:l,val:2,isUserDeny:a,hash:n}),console.log("err",e),t(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:l,val:2,hash:n}),t(e)}))}))},_=function(e,t,n,r){console.log("pledgePutIn",r),console.log("pledgePutInAmount",n);var o=__ownInstance__.$store.state.base.address,i=__ownInstance__.$store.state.base.fairLaunchAddress,u=new web3.eth.Contract(c,i),d=Object(s["e"])(n,t),l=u.methods.deposit(e,r,web3.utils.toHex(d)).encodeABI(),h=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:h}),new Promise((function(e,t){var n;web3.eth.getTransactionCount(o).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var r,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return r=a.sent,a.next=5,web3.eth.estimateGas({from:o,to:i,data:l});case 5:c=a.sent,console.log("estimateGas",c),u=[{from:o,to:i,data:l,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(c)}],web3.eth.sendTransaction(u[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(n=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:1,hash:n}),e(n)})).on("confirmation",(function(e,t){})).on("error",(function(e){var a=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,isUserDeny:a,hash:n}),console.log("err",e),t(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,hash:n}),t(e)}))}))},w=function(e,t,n,r){console.log("pledgePutOut",r),console.log("pledgePutAmount",n);var o=__ownInstance__.$store.state.base.address,i=__ownInstance__.$store.state.base.fairLaunchAddress,u=new web3.eth.Contract(c,i),d=Object(s["e"])(n,t),l=u.methods.withdraw(e,r,web3.utils.toHex(d)).encodeABI(),h=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:h}),new Promise((function(e,t){var n;web3.eth.getTransactionCount(o).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var r,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return r=a.sent,a.next=5,web3.eth.estimateGas({from:o,to:i,data:l});case 5:c=a.sent,console.log("estimateGas",c),u=[{from:o,to:i,data:l,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(c)}],web3.eth.sendTransaction(u[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(n=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:1,hash:n}),e(n)})).on("confirmation",(function(e,t){})).on("error",(function(e){var a=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,isUserDeny:a,hash:n}),console.log("err",e),t(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,hash:n}),t(e)}))}))},v=function(e){console.log("getIROReward",e);var t=__ownInstance__.$store.state.base.address,n=__ownInstance__.$store.state.base.fairLaunchAddress,s=new web3.eth.Contract(c,n),r=s.methods.harvest(e).encodeABI(),o=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:o}),new Promise((function(e,s){var i;web3.eth.getTransactionCount(t).then(function(){var c=Object(a["a"])(regeneratorRuntime.mark((function a(c){var u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return u=a.sent,a.next=5,web3.eth.estimateGas({from:t,to:n,data:r});case 5:d=a.sent,console.log("estimateGas",d),l=[{from:t,to:n,data:r,gasPrice:web3.utils.toHex(u),gas:web3.utils.toHex(d)}],web3.eth.sendTransaction(l[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(i=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:1,hash:i}),e(i)})).on("confirmation",(function(e,t){})).on("error",(function(e){var t=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:2,isUserDeny:t,hash:i}),console.log("err",e),s(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){console.log("getIROReward_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:2,hash:i}),s(e)}))}))},f=function(e,t,n,r,o,c){console.log("token0",e),console.log("token1",t),console.log("转账金额",n),console.log("借款金额",r);var u=__ownInstance__.$store.state.base.address,d=Object(s["e"])(n,o),l=Object(s["e"])(r,c),h=web3.eth.abi.encodeParameters(["address","address","uint256","uint256","uint256"],[t,e,0,d,0]),_="0x24b5891E1Ce2D85ec650Fc0CD18736f8B08f53e7",w=web3.eth.abi.encodeParameters(["address","bytes"],[_,h]),v=__ownInstance__.$store.state.base.bankAddress,f=new web3.eth.Contract(i,v),p=web3.utils.toHex(l),g=f.methods.work(0,1,p,w).encodeABI(),m=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:m}),new Promise((function(e,t){var n;web3.eth.getTransactionCount(u).then(function(){var s=Object(a["a"])(regeneratorRuntime.mark((function a(s){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:r=a.sent,o=[{from:u,to:v,data:g,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(4e5)}],web3.eth.sendTransaction(o[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(n=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:1,hash:n}),e(n)})).on("confirmation",(function(e,t){})).on("error",(function(e){var a=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:2,isUserDeny:a,hash:n}),console.log("err",e),t(e)}));case 5:case"end":return a.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:2,hash:n}),t(e)}))}))}},"53d3":function(e,t,n){},"6dd9":function(e,t,n){"use strict";n("53d3")}}]);