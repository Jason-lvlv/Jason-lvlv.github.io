(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffdce8b0"],{"34e5":function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return y}));var a=n("1da1"),i=(n("96cf"),n("d3b7"),n("25f0"),n("b893")),s=n("b292"),r=n("56f5"),o=n("511e"),p=function(e){console.log("receiveAirdrop",e);var t=__ownInstance__.$store.state.base.address,n=__ownInstance__.$store.state.base.airdropAddress,i=new web3.eth.Contract(s,n),r=i.methods.draw(e).encodeABI(),o=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:o}),new Promise((function(e,i){var s;web3.eth.getTransactionCount(t).then(function(){var p=Object(a["a"])(regeneratorRuntime.mark((function a(p){var u,d,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return u=a.sent,a.next=5,web3.eth.estimateGas({from:t,to:n,data:r});case 5:d=a.sent,console.log("estimateGas",d),y=[{from:t,to:n,data:r,gasPrice:web3.utils.toHex(u),gas:web3.utils.toHex(d)}],web3.eth.sendTransaction(y[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(s=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("getAirdropValue"),__ownInstance__.$store.dispatch("getAirDropDrawed"),__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:1,hash:s}),e(s)})).on("confirmation",(function(e,t){})).on("error",(function(e){var t=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:2,isUserDeny:t,hash:s}),console.log("err",e),i(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return p.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:o,val:2,hash:s}),i(e)}))}))},u=function(e,t,n,s){var o=__ownInstance__.$store.state.base.address,p=n&&s?web3.utils.toHex(Object(i["d"])(n,s)):web3.utils.toHex(Object(i["e"])(1.157920892373163*Math.pow(10,59))),u=new web3.eth.Contract(r,e),d=t||__ownInstance__.$store.state.base.bankAddress,y=u.methods.approve(d,p).encodeABI();return new Promise((function(t,n){web3.eth.getTransactionCount(o).then(function(){var i=Object(a["a"])(regeneratorRuntime.mark((function a(i){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:s=a.sent,r=[{chainId:__ownInstance__.$store.state.base.chainId,nonce:web3.utils.toHex(i),gasLimit:web3.utils.toHex(6e6),gasPrice:web3.utils.toHex(s),to:e,from:o,data:y}],ethereum.request({method:"eth_sendTransaction",params:r}).then((function(e){t(e)})).catch((function(e){n(e)}));case 5:case"end":return a.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}())}))},d=function(e){console.log("depositPutIn",e);var t=__ownInstance__.$store.state.base.tokenAddress,n=__ownInstance__.$store.state.base.address,s=__ownInstance__.$store.state.base.bankAddress,r=new web3.eth.Contract(o,s),p=Object(i["d"])(e,__ownInstance__.$store.state.base.depositToken.decimals),u=r.methods.deposit(t,web3.utils.toHex(p)).encodeABI(),d=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:d}),new Promise((function(e,t){var i;web3.eth.getTransactionCount(n).then(function(){var r=Object(a["a"])(regeneratorRuntime.mark((function a(r){var o,p,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return o=a.sent,a.next=5,web3.eth.estimateGas({from:n,to:s,data:u});case 5:p=a.sent,console.log("estimateGas",p),y=[{from:n,to:s,data:u,gasPrice:web3.utils.toHex(o),gas:web3.utils.toHex(p)}],web3.eth.sendTransaction(y[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(i=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:1,hash:i}),e(i)})).on("confirmation",(function(e,t){})).on("error",(function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:2,isUserDeny:n,hash:i}),console.log("err",e),t(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:2,hash:i}),t(e)}))}))},y=function(e){console.log("depositPutOut",e);var t=__ownInstance__.$store.state.base.tokenAddress,n=__ownInstance__.$store.state.base.address,s=__ownInstance__.$store.state.base.bankAddress,r=new web3.eth.Contract(o,s),p=Object(i["d"])(e,__ownInstance__.$store.state.base.depositToken.decimals),u=r.methods.withdraw(t,web3.utils.toHex(p)).encodeABI(),d=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:d}),new Promise((function(e,t){var i;web3.eth.getTransactionCount(n).then(function(){var r=Object(a["a"])(regeneratorRuntime.mark((function a(r){var o,p,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return o=a.sent,a.next=5,web3.eth.estimateGas({from:n,to:s,data:u});case 5:p=a.sent,console.log("estimateGas",p),y=[{from:n,to:s,data:u,gasPrice:web3.utils.toHex(o),gas:web3.utils.toHex(p)}],web3.eth.sendTransaction(y[0]).on("transactionHash",(function(e){console.log("hash",e),e&&(i=e)})).on("receipt",(function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:1,hash:i}),e(i)})).on("confirmation",(function(e,t){})).on("error",(function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:2,isUserDeny:n,hash:i}),console.log("err",e),t(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:d,val:2,hash:i}),t(e)}))}))}},"511e":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debtShare","type":"uint256"}],"name":"AddDebt","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"killer","type":"address"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"left","type":"uint256"}],"name":"Kill","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debtShare","type":"uint256"}],"name":"RemoveDebt","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"back","type":"uint256"}],"name":"Work","type":"event"},{"inputs":[],"name":"acceptGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"addBank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"banks","outputs":[{"internalType":"address","name":"tokenAddr","type":"address"},{"internalType":"address","name":"ibTokenAddr","type":"address"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"canDeposit","type":"bool"},{"internalType":"bool","name":"canWithdraw","type":"bool"},{"internalType":"uint256","name":"totalVal","type":"uint256"},{"internalType":"uint256","name":"totalDebt","type":"uint256"},{"internalType":"uint256","name":"totalDebtShare","type":"uint256"},{"internalType":"uint256","name":"totalReserve","type":"uint256"},{"internalType":"uint256","name":"lastInterestTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"calInterest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"config","outputs":[{"internalType":"contract BankConfig","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"canBorrow","type":"bool"},{"internalType":"address","name":"coinToken","type":"address"},{"internalType":"address","name":"currencyToken","type":"address"},{"internalType":"address","name":"borrowToken","type":"address"},{"internalType":"address","name":"goblin","type":"address"},{"internalType":"uint256","name":"minDebt","type":"uint256"},{"internalType":"uint256","name":"maxDebt","type":"uint256"},{"internalType":"uint256","name":"openFactor","type":"uint256"},{"internalType":"uint256","name":"liquidateFactor","type":"uint256"}],"name":"createProduction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"createkillWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"debtShare","type":"uint256"}],"name":"debtShareToVal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"debtVal","type":"uint256"}],"name":"debtValToShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"devAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_symbol","type":"string"}],"name":"genIBToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPosition","outputs":[{"components":[{"internalType":"uint256","name":"posid","type":"uint256"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"address","name":"borrowToken","type":"address"},{"internalType":"uint256","name":"positionsValue","type":"uint256"},{"internalType":"uint256","name":"totalValue","type":"uint256"},{"internalType":"address","name":"goblin","type":"address"}],"internalType":"struct Bank.Pos[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserPosition","outputs":[{"components":[{"internalType":"uint256","name":"posid","type":"uint256"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"address","name":"borrowToken","type":"address"},{"internalType":"uint256","name":"positionsValue","type":"uint256"},{"internalType":"uint256","name":"totalValue","type":"uint256"},{"internalType":"address","name":"goblin","type":"address"}],"internalType":"struct Bank.Pos[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ibTokenCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract BankConfig","name":"_config","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"posId","type":"uint256"}],"name":"kill","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"killWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingGovernor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"posId","type":"uint256"}],"name":"positionInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"positions","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"productionId","type":"uint256"},{"internalType":"uint256","name":"debtShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"productions","outputs":[{"internalType":"address","name":"coinToken","type":"address"},{"internalType":"address","name":"currencyToken","type":"address"},{"internalType":"address","name":"borrowToken","type":"address"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"canBorrow","type":"bool"},{"internalType":"address","name":"goblin","type":"address"},{"internalType":"uint256","name":"minDebt","type":"uint256"},{"internalType":"uint256","name":"maxDebt","type":"uint256"},{"internalType":"uint256","name":"openFactor","type":"uint256"},{"internalType":"uint256","name":"liquidateFactor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setDevAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pendingGovernor","type":"address"}],"name":"setPendingGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"totalToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract BankConfig","name":"_config","type":"address"}],"name":"updateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"pAmount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"withdrawReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"posId","type":"uint256"},{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"borrow","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"work","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]')}}]);