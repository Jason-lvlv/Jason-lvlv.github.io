(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2808eb52"],{"119d":function(e,t,n){"use strict";n("3969")},3969:function(e,t,n){},"3a48":function(e,t,n){"use strict";var s=n("aa08"),i=n.n(s),a=n("f024"),r=n.n(a),o=n("da63"),c=n.n(o);t["a"]={H2O:{L:r.a,D:c.a},hH2O:{L:r.a,D:c.a},rH2O:{L:r.a,D:c.a},BNB:{L:i.a,D:i.a},default:i.a}},a427:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deposit-detail-page"},[n("div",{staticClass:"app-container"},[n("div",{staticClass:"kind"},[n("img",{attrs:{src:e.currentTokenImage(e.name)}}),n("span",[e._v(e._s(e.name))])]),n("div",{staticClass:"property"},e._l(e.propertyList,(function(t){return n("div",{key:t.id,staticClass:"item"},[n("span",{staticClass:"num"},[e._v(e._s(t.id))]),n("span",{staticClass:"name"},[e._v(e._s("et"===e.type?"Withdraw Tokens":"Deposit Tokens"))])])})),0),n("p",{staticClass:"title"},[n("span",[e._v(e._s("et"===e.type?"I’d like to withdraw":"I’d like to deposit"))])]),n("div",{staticClass:"input-area"},[n("div",{staticClass:"balance"},[n("span",{staticClass:"info"},[e._v("Balance：")]),n("span",{staticClass:"num"},[e._v(e._s(e.toFixed(e.tokenBalance,6)||"--")+" "+e._s(e.name))])]),n("div",{class:["inputBox",{overMax:e.isConnected&&e.isOverMax}]},[n("img",{attrs:{src:e.currentTokenImage(e.name),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.depositNum,expression:"depositNum"}],attrs:{type:"text",minLength:"1",maxLength:"79"},domProps:{value:e.depositNum},on:{input:[function(t){t.target.composing||(e.depositNum=t.target.value)},e.inputEvent]}}),n("button",{on:{click:e.clickAllBtn}},[e._v("MAX")])])]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected&&e.isOverMax,expression:"isConnected&&isOverMax"}],staticClass:"warn-tips"},[e._v("Sorry, the balance is insufficient")]),n("div",{staticClass:"receive"},[n("p",{staticClass:"tit"},[e._v("You will receive：")]),n("p",{staticClass:"num"},[e._v(e._s(e.depositNum*e.rewardRate||"--")+" "+e._s(e.subname))])]),"de"===e.type?n("div",{staticClass:"warn"},[e._v(" Notice: remember to stake hToken on 'Stake' page to get H2O staking reward ")]):e._e(),n("div",{staticClass:"submitBtns"},[n("button",{directives:[{name:"loading",rawName:"v-loading",value:e.GettingApprove,expression:"GettingApprove"}],class:["enter",{disabled:e.btnDisabled}],attrs:{disabled:e.btnDisabled},on:{click:e.submitOrder}},[e._v(" "+e._s(e.submitBtnText)+" ")]),n("button",{staticClass:"cancal",on:{click:e.returnPage}},[e._v("BACK")])])])])},i=[],a=n("5530"),r=n("1da1"),o=(n("96cf"),n("b0c0"),n("a9e3"),n("d3b7"),n("3a48")),c=n("2f62"),d=n("34e5"),u=n("4729"),p=(n("b893"),{name:"depositDetail",data:function(){return{propertyList:[{id:1,name:"币种"}],days:[{id:1,name:"30天"},{id:2,name:"60天"},{id:3,name:"90天"},{id:4,name:"180天"}],activeDayIndex:4,depositNum:"",rewardRate:1,tokenBalance:"--",tokenAddress:"",originAddress:"",name:"",subname:"",approved:0,decimals:18,origindecimals:18}},created:function(){try{var e=sessionStorage.getItem("deInfo"),t=JSON.parse(e);this.tokenAddress=t.token,this.originAddress=t.originToken,this.origindecimals=t.origindecimals,this.decimals=t.decimals,"et"===this.type?(this.name=t.name_h,this.subname=t.name):(this.name=t.name,this.subname=t.name_h)}catch(n){}},mounted:function(){},watch:{isConnected:{immediate:!0,handler:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e&&t.tokenAddress&&!t.approve&&("et"!==t.type?t.getTokenBalanceApprove():t.getTokenBalance());case 1:case"end":return n.stop()}}),n)})))()}},tokenAddress:{handler:function(e){this.isConnected&&e&&("et"!==this.type?this.getTokenBalanceApprove():this.getTokenBalance())}}},computed:Object(a["a"])({btnDisabled:function(){return this.isConnected&&!(2===this.approved&&"et"!==this.type)&&!Boolean(Number(this.depositNum))||this.isOverMax},type:function(){return this.$route.query.type},themeText:function(){return"et"===this.type?"Withdraw":"Deposit"},GettingApprove:function(){return this.isConnected&&0===this.approved},submitBtnText:function(){return this.isConnected?2===this.approved&&"et"!==this.type?"Approve":this.themeText:"Connect Wallet"},isOverMax:function(){return"--"===this.tokenBalance&&Number(this.depositNum)||"--"!==this.tokenBalance&&Number(this.depositNum)>Number(this.tokenBalance)}},Object(c["c"])({isConnected:function(e){return e.base.isConnected},address:function(e){return e.base.address},mainTheme:function(e){return e.comps.mainTheme}})),methods:{inputEvent:function(e){this.depositNum=this.$inputLimit(e,6,!0)},toggleDays:function(e){this.activeDayIndex=e.id},returnPage:function(){this.depositNum="",this.$router.go(-1)},submitOrder:function(){var e=this;if(!this.isConnected)return this.$connect();if(2!==this.approved||"et"===this.type){var t="et"===this.type?d["d"]:d["c"];t(this.originAddress,this.origindecimals,this.depositNum).finally((function(){e.depositNum="",e.getTokenBalanceApprove(!0),e.$store.commit("setDepositCurrent",e.tokenAddress)}))}else Object(d["b"])(this.tokenAddress).then((function(){e.approved=1}))},clickAllBtn:function(){this.isConnected&&this.tokenBalance&&(this.depositNum=this.tokenBalance)},getTokenBalanceApprove:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(u["g"])(t.tokenAddress,t.decimals);case 2:if(s=n.sent,console.log("balance",s),t.tokenBalance=s,"0x0000000000000000000000000000000000000000"!==t.tokenAddress){n.next=8;break}return t.approved=1,n.abrupt("return");case 8:!e&&Object(u["K"])(t.tokenAddress,t.decimals,s).then((function(e){t.approved=e?1:2}));case 9:case"end":return n.stop()}}),n)})))()},getTokenBalance:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["m"])(e.tokenAddress,e.decimals);case 2:return n=t.sent,t.next=5,Object(u["H"])(e.originAddress,e.origindecimals);case 5:return s=t.sent,isNaN(n)||isNaN(s)||(e.rewardRate=Number(s)/Number(n),console.log("rewardRate",e.rewardRate)),t.next=9,Object(u["g"])(e.tokenAddress,e.decimals);case 9:i=t.sent,console.log("balance",i),e.tokenBalance=i,e.approved=1;case 13:case"end":return t.stop()}}),t)})))()},currentTokenImage:function(e){var t="light"===this.mainTheme?"L":"D";return o["a"][e]&&o["a"][e][t]?o["a"][e][t]:o["a"].default}}}),l=p,m=(n("119d"),n("2877")),v=Object(m["a"])(l,s,i,!1,null,"7832ba9a",null);t["default"]=v.exports},aa08:function(e,t){e.exports="data:image/png;base64,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"}}]);