(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-704e32b8"],{2728:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[t._m(0),i("div",{staticClass:"app-inner"},[t.address?i("div",{staticClass:"link-address"},[i("div",{staticClass:"link"},[t._v(" "+t._s(t.reAddress)+" ")]),i("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.reAddress,expression:"reAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[t._v(" 复制邀请链接 ")])]):t._e(),t._m(1),i("div",{staticClass:"recommand"},[t._m(2),i("div",{staticClass:"list-outer"},[t._m(3),i("div",{staticClass:"body"},[i("div",{staticClass:"item"},[t._m(4),i("div",{staticClass:"amount"},[t._v(" $ "+t._s(t.isTokenBtnDisbaled?"1":t.airdropBalance)+" ")]),i("div",{staticClass:"receive"},[t._v(" $ "+t._s(t.airDropDrawed)+" ")]),i("div",{staticClass:"operation"},[i("div",{class:{disabled:!t.isTokenBtnDisbaled&&"0"===t.airdropBalance||!t.isConnected},on:{click:t.receiveDrop}},[t._v("领取")])])])])])]),i("div",{staticClass:"reward"},[t._m(5),t.inviteListState?i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:["loading",{isLoading:t.listLoading}]},[t._v(" "+t._s(t.inviteListText)+" ")]):i("div",{staticClass:"list-outer"},t._l(t.inviteList,(function(e,s){return i("div",{key:s,staticClass:"item"},[t._v(" "+t._s(e)+" ")])})),0)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commin-title"},[s("div",{staticClass:"title-inner"},[s("img",{attrs:{src:i("cf05"),alt:""}}),s("span",{staticClass:"tit"},[t._v("邀请新用户领空投")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rules"},[i("p",{staticClass:"tit"},[t._v("邀请奖励规则：")]),i("p",[t._v("1、新用户必须使用邀请人的邀请链接进入网站，并领取空投才视为邀请成功，")]),i("p",[t._v("2、新用户受邀后，邀请人与受邀者同时获得一份空投奖励，")]),i("p",[t._v("3、受邀人作为新的邀请人，再次邀请新用户成功后受邀人的邀请人也获得一份空投，依次类推最大邀请层级为四级，")]),i("p",[t._v("4、邀请人关系成立后，邀请双方不仅会获得空投奖励，同时会获得下级挖矿收益一定比例奖励，详细奖励参官方考奖励公告,")]),i("p",[t._v("5、所有人挖矿收益的一定比例将会平均分配给上级，没有上级而未分配部分将进行销毁，")]),i("p",[t._v("6、挖矿推荐奖励的发放，要求被奖励的账户的锁仓金额达到被推荐人锁仓金额的10%，如果没达到，也直接销毁。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"com-title"},[t._v(" 我的空投奖励 "),i("span",[t._v("（受邀用户成功领取空投才能视为邀请成功）")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head"},[i("div",{staticClass:"item"},[t._v("币种")]),i("div",{staticClass:"item"},[t._v("待领取奖励")]),i("div",{staticClass:"item"},[t._v("已领取奖励")]),i("div",{staticClass:"item opera"},[t._v("操作")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"kind"},[s("img",{attrs:{src:i("cf05"),alt:""}}),t._v(" H2O ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"com-title"},[t._v(" 邀请详情 "),i("span",[t._v("（一级）")])])}],n=i("1da1"),r=i("5530"),c=(i("96cf"),i("34e5")),o=i("2f62"),d={name:"Index",data:function(){return{}},mounted:function(){console.log("this.$route.query",this.$route.query),console.log("airdropBalance",this.airdropBalance),console.log("airDropDrawed",this.airDropDrawed)},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({address:function(t){return t.base.address},isConnected:function(t){return t.base.isConnected},listLoading:function(t){return t.base.inviteList.loading},inviteList:function(t){return t.base.inviteList.list},airdropBalance:function(t){return t.base.airdropBalance},airDropDrawed:function(t){return t.base.airDropDrawed}})),{},{recommandAddress:function(){var t=this.$route.query;return t.re},inviteListText:function(){var t="";return this.isConnected?this.listLoading?t="":this.inviteList.length||(t="暂无邀请详情"):t="请先链接钱包",t},inviteListState:function(){return!this.isConnected||this.listLoading||!this.inviteList.length},isTokenBtnDisbaled:function(){return"0"===this.airDropDrawed&&"0"===this.airdropBalance},reAddress:function(){return"http://47.241.171.176/index.html#/airdrop?re=".concat(this.address)}}),methods:{receiveDrop:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isTokenBtnDisbaled||"0"!==t.airdropBalance){e.next=2;break}return e.abrupt("return");case 2:i=t.recommandAddress,i||(i=t.address),Object(c["d"])(i);case 5:case"end":return e.stop()}}),e)})))()},receiveMint:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},copySuccess:function(){this.$notify({title:"复制成功!",type:"success",duration:3e3})}}},l=d,u=(i("2fbd"),i("2877")),v=Object(u["a"])(l,s,a,!1,null,"1b99a51d",null);e["default"]=v.exports},"2fbd":function(t,e,i){"use strict";i("9762")},9762:function(t,e,i){}}]);