(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4e8d"],{"91dc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section section-shaped section-zero min-vh-100 d-flex justify-content-center align-items-center"},[a("div",{staticClass:"shape shape-style-1 bg-gradient-lighter"}),a("div",{staticClass:"container pt-lg-md"},[a("div",{staticClass:"row justify-content-center"},["not-have-permission"!==e.type_active?a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"card border-0"},[["register","remember","login","login-token"].includes(e.type_active)?a("div",{staticClass:"card-header bg-white border-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-8"},["register"===e.type_active?a("h5",{staticClass:"mb-0 clean-text-css"},[e._v(e._s(e.$t("ct-register")))]):"login"===e.type_active?a("h5",{staticClass:"mb-0 clean-text-css"},[e._v(e._s(e.$t("ct-sign-in")))]):"login-token"===e.type_active?a("h5",{staticClass:"mb-0 clean-text-css"},[e._v(e._s(e.$t("ct-access-with-token")))]):"remember"===e.type_active?a("h5",{staticClass:"mb-0 clean-text-css"},[e._v(e._s(e.$t("ct-remember")))]):e._e()]),a("div",{staticClass:"col-4 text-right"},[a("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.back()}}},[e._v(e._s(e.$t("ct-home")))])])])]):e._e(),a("div",{staticClass:"card-body bg-secondary px-lg-5 py-lg-4"},["register"===e.type_active?a("register",{attrs:{areas_register:e.areas_register},on:{change:e.changeType,back:e.back}}):"login"===e.type_active?a("login",{attrs:{areas_register:e.areas_register},on:{change:e.changeType,back:e.back}}):"login-token"===e.type_active?a("login-token",{on:{change:e.changeType,back:e.back}}):"remember"===e.type_active?a("remember-password",{on:{change:e.changeType,back:e.back}}):a("not-have-permission",{on:{change:e.changeType,back:e.back}})],1)]),"register"===e.type_active||"remember"===e.type_active||"login"===e.type_active?a("div",{staticClass:"mx-2 mt-2 mb-4 d-flex"},[a("div",{staticClass:"text-left flex-grow-1"},["register"===e.type_active||"remember"===e.type_active?a("a",{staticClass:"text-light",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("login")}}},[e._v(e._s(e.$t("ct-sign-in")))]):"login"===e.type_active?a("a",{staticClass:"text-light",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("register")}}},[e._v(e._s(e.$t("ct-register")))]):e._e()]),a("div",{staticClass:"text-right  flex-grow-1"},["remember"!==e.type_active?a("a",{staticClass:"text-light",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("remember")}}},[e._v(e._s(e.$t("ct-forgot-password")))]):e._e()])]):e._e()]):"not-have-permission"===e.type_active?a("div",{staticClass:"col-12 col-lg-6"},[a("not-have-permission",{on:{back:e.back}})],1):e._e()])])])},i=[],c=a("769d"),n=a("536e"),r=a("2bf5"),o=a("16a4"),l=a("fccd"),g={name:"DefaultPage",props:["type_active","areas_register","active_page"],components:{Register:c["a"],Login:n["a"],LoginToken:r["a"],RememberPassword:o["a"],NotHavePermission:l["a"]},methods:{back:function(){this.$emit("back")},changeType:function(e){this.$emit("change",e)},getActualPage:function(){return this.active_page}}},p=g,v=a("2877"),_=Object(v["a"])(p,s,i,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0e4e8d.6a7e7b42.js.map