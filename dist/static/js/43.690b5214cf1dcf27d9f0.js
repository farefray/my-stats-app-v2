webpackJsonp([43],{V9V6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("r1MR"),o=n("gtkv"),a=n("VU/8"),s=a(r.a,o.a,!1,null,null,null);t.default=s.exports},gtkv:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("e",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("你的权限： "+e._s(e.roles))]),e._v("\n  Switch the permissions：\n  "),n("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[n("el-radio-button",{attrs:{label:"editor"}})],1)],1)},o=[],a={render:r,staticRenderFns:o};t.a=a},r1MR:function(e,t,n){"use strict";var r=n("Dd8w"),o=n.n(r),a=n("NYxO");t.a={data:function(){return{role:""}},computed:o()({},Object(a.b)(["roles"])),watch:{role:function(e){var t=this;this.$store.dispatch("ChangeRole",e).then(function(){t.$router.push({path:"/permission/index?"+ +new Date})})}}}}});