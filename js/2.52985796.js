(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[a("div",{staticClass:"header",class:t.background},[a("q-toolbar",[a("q-toolbar-title",[a("div",{staticClass:"title"},[a("b",[t._v(t._s(t.title))]),a("span",{attrs:{id:"dark-mode-light-mode-icon"},on:{click:t.setDarkMode}},["dark"!==t.background?a("q-icon",{attrs:{name:"light_mode"}}):a("q-icon",{attrs:{name:"dark_mode"}})],1)])])],1)],1)]),a("div",{staticClass:"content"},[a("q-page-container",{class:t.background},[a("router-view",{attrs:{background:t.background}})],1)],1)],1)},r=[],s={data(){return{title:"TODO"}},methods:{setDarkMode(){this.$store.dispatch("darkMode/setDarkMode")}},computed:{background(){return this.$store.getters["darkMode/getDarkMode"]?"light":"dark"}},mounted(){console.log(this.$store.getters["darkMode/getDarkMode"])}},n=s,d=(a("b881"),a("2877")),i=a("4d5a"),c=a("e359"),l=a("65c6"),u=a("6ac5"),k=a("0016"),b=a("09e3"),g=a("eebe"),h=a.n(g),p=Object(d["a"])(n,o,r,!1,null,"495a665e",null);e["default"]=p.exports;h()(p,"components",{QLayout:i["a"],QHeader:c["a"],QToolbar:l["a"],QToolbarTitle:u["a"],QIcon:k["a"],QPageContainer:b["a"]})},a635:function(t,e,a){},b881:function(t,e,a){"use strict";a("a635")}}]);