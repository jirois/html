(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3203"],{"019e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-theme-1 section section-shaped section-zero min-vh-100 d-flex justify-content-center align-items-center"},[a("div",{staticClass:"row justify-content-center container"},["not-have-permission"!==e.type_active?a("div",{staticClass:"col-12 col-lg-6 container-main shadow"},[a("div",{staticClass:"modal-header border-0"},["login-token"!==e.type_active?a("ul",{staticClass:"nav text-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"login"===e.type_active},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("login")}}},[e._v(e._s(e.$t("ct-sign-in")))])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"register"===e.type_active},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("register")}}},[e._v(e._s(e.$t("ct-register")))])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"remember"===e.type_active},on:{click:function(t){return t.preventDefault(),e.changeType("remember")}}},[e._v(e._s(e.$t("ct-remember")))])])]):"login-token"===e.type_active?a("ul",{staticClass:"nav text-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"login-token"===e.type_active},attrs:{href:"#"},on:{click:function(e){e.preventDefault()}}},[e._v(e._s(e.$t("ct-access-with-token")))])])]):e._e()]),a("div",{staticClass:"tab-content modal-body border-0"},[a("div",{staticClass:"tab-pane fade",class:{"show active":"register"===e.type_active}},["register"===e.type_active?a("register",{attrs:{areas_register:e.areas_register},on:{change:e.changeType,back:e.back}}):e._e()],1),a("div",{staticClass:"tab-pane fade",class:{"show active":"remember"===e.type_active}},["remember"===e.type_active?a("remember-password",{on:{change:e.changeType,back:e.back}}):e._e()],1),a("div",{staticClass:"tab-pane fade",class:{"show active":"login"===e.type_active}},["login"===e.type_active?a("login",{on:{change:e.changeType,back:e.back}}):e._e()],1),a("div",{staticClass:"tab-pane fade",class:{"show active":"login-token"===e.type_active}},["login-token"===e.type_active?a("login-token",{on:{change:e.changeType,back:e.back}}):e._e()],1)])]):"not-have-permission"===e.type_active?a("div",{staticClass:"col-12 col-lg-6"},[a("not-have-permission",{on:{back:e.back}})],1):e._e()])])},i=[],c=a("2bf5"),n=a("769d"),o=a("536e"),r=a("16a4"),l=a("fccd"),v={name:"ThreeTabsPopup",props:["type_active","areas_register","active_page"],components:{Register:n["a"],Login:o["a"],LoginToken:c["a"],RememberPassword:r["a"],NotHavePermission:l["a"]},methods:{back:function(){this.$emit("back")},changeType:function(e){this.$emit("change",e)},getActualPage:function(){return this.active_page}}},p=v,g=a("2877"),_=Object(g["a"])(p,s,i,!1,null,"096350e2",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0a3203.cedb6800.js.map