webpackJsonp([28],{"/U5g":function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,".social-signup-container[data-v-bef6fce6]{margin:20px 0}.social-signup-container .sign-btn[data-v-bef6fce6]{display:inline-block;cursor:pointer}.social-signup-container .icon[data-v-bef6fce6]{color:#fff;font-size:30px;margin-top:6px}.social-signup-container .qq-svg-container[data-v-bef6fce6],.social-signup-container .wx-svg-container[data-v-bef6fce6]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;padding-top:1px;border-radius:4px;margin-bottom:20px;margin-right:5px}.social-signup-container .wx-svg-container[data-v-bef6fce6]{background-color:#8dc349}.social-signup-container .qq-svg-container[data-v-bef6fce6]{background-color:#6ba2d6;margin-left:50px}",""])},Tvb2:function(n,e,t){var i=t("/U5g");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("f56d35b6",i,!0)},UWiJ:function(n,e,t){"use strict";var i=t("V5Rg");e.a={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var e=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),t="https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+e+"&response_type=code&scope=snsapi_login#wechat_redirect";Object(i.a)(t,n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var e=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),t="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+e;Object(i.a)(t,n,540,540)}}}},V5Rg:function(n,e,t){"use strict";function i(n,e,t,i){var c=void 0!==window.screenLeft?window.screenLeft:screen.left,o=void 0!==window.screenTop?window.screenTop:screen.top,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=a/2-t/2+c,d=s/2-i/2+o,l=window.open(n,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+i+", top="+d+", left="+r);window.focus&&l.focus()}e.a=i},bIpF:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(e){n.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("icon-svg",{staticClass:"icon",attrs:{"icon-class":"weixin"}})],1),n._v(" 微信\n  ")]),n._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(e){n.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("icon-svg",{staticClass:"icon",attrs:{"icon-class":"QQ"}})],1),n._v(" QQ\n  ")])])},c=[],o={render:i,staticRenderFns:c};e.a=o},dZXH:function(n,e,t){"use strict";function i(n){t("Tvb2")}Object.defineProperty(e,"__esModule",{value:!0});var c=t("UWiJ"),o=t("bIpF"),a=t("VU/8"),s=i,r=a(c.a,o.a,!1,s,"data-v-bef6fce6",null);e.default=r.exports}});