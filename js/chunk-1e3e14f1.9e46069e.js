(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3e14f1"],{"369b":function(t,e,s){"use strict";var a=s("6d52"),i=s.n(a);i.a},"6d52":function(t,e,s){},"7a5b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"members-container"},[s("div",{staticClass:"members-content"},t._l(t.members,function(e,a){return s("div",{key:a,staticClass:"box"},[s("div",{staticClass:"members"},[s("img",{attrs:{src:e.imgPath,alt:""}}),s("p",{staticClass:"name"},[t._v(t._s(t.$t("m.about.name"))+"："+t._s(e.name))]),s("p",{staticClass:"position"},[t._v(t._s(t.$t("m.about.position"))+"："+t._s(e.position))]),s("p",{staticClass:"desc"},[t._v(t._s(t.$t("m.about.introduction"))+"："+t._s(e.description))])])])}),0),s("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.page,pageSize:12},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},pagination:t.getList}})],1)},i=[],n=(s("96cf"),s("3b8d")),r=s("365c"),o=s("333d"),c={components:{Pagination:o["a"]},data:function(){return{members:[],listQuery:{page:1,limit:12},total:1}},methods:{getMemberList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["g"])("/mi/gaf?currentPage=".concat(this.listQuery.page,"&pageSize=").concat(this.listQuery.limit));case 2:if(e=t.sent,e){t.next=6;break}return this.$message.error("网络错误"),t.abrupt("return");case 6:this.members=e.list,this.total=e.total;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getList:function(){this.getMemberList()}},created:function(){this.getList()}},u=c,l=(s("369b"),s("2877")),m=Object(l["a"])(u,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1e3e14f1.9e46069e.js.map