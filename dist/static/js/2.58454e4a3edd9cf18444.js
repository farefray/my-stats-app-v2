webpackJsonp([2,6,16,31,44,45,46],{"+NFJ":function(t,e,a){"use strict";var i=a("XLwt"),o=a.n(i);a("tcAE");e.a={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:3e3},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:3e3},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:3e3}]})}}}},"+VJ6":function(t,e,a){"use strict";var i=a("mvHQ"),o=a.n(i),n=a("5yNZ"),s={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.done})},completed:function(t){return t.filter(function(t){return t.done})}},r=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1}];e.a={components:{Todo:n.a},data:function(){return{visibility:"all",filters:s,todos:JSON.parse(window.localStorage.getItem("todos"))||r}},computed:{allChecked:function(){return this.todos.every(function(t){return t.done})},filteredTodos:function(){return s[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(t){return!t.done}).length}},methods:{setLocalStorgae:function(){window.localStorage.setItem("todos",o()(this.todos))},addTodo:function(t){var e=t.target.value;e.trim()&&(this.todos.push({text:e,done:!1}),this.setLocalStorgae()),t.target.value=""},toggleTodo:function(t){t.done=!t.done,this.setLocalStorgae()},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorgae()},editTodo:function(t){var e=t.todo,a=t.value;e.text=a,this.setLocalStorgae()},clearCompleted:function(){this.todos=this.todos.filter(function(t){return!t.done}),this.setLocalStorgae()},toggleAll:function(t){var e=this,a=t.done;this.todos.forEach(function(t){t.done=a,e.setLocalStorgae()})}},filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}},"0kv5":function(t,e,a){"use strict";var i=a("XLwt"),o=a.n(i);a("tcAE"),e.a={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.chart.setOption({title:{text:"WEEKLY WRITE ARTICLES",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["industries","technology","forex","gold","forecasts","markets"]},calculable:!0,series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",data:[{value:320,name:"industries"},{value:240,name:"technology"},{value:149,name:"forex"},{value:100,name:"gold"},{value:59,name:"forecasts"},{value:49,name:"markets"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}}},"17YV":function(t,e,a){"use strict";var i=a("WBHA"),o=a.n(i);e.a={name:"dashboard-editor",components:{countTo:o.a},data:function(){return{statisticsData:{article_count:4,pageviews_count:100*Math.random()+100}}},computed:{}}},"1GA+":function(t,e,a){var i=a("q14U");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("003a0f5c",i,!0)},"1Rx3":function(t,e,a){"use strict";function i(t){a("F87c")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Gyap"),n=a("azhG"),s=a("VU/8"),r=i,l=s(o.a,n.a,!1,r,"data-v-8b8c6936",null);e.default=l.exports},"2NVz":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-guest-container"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"info-item"},[a("count-to",{staticClass:"info-item-num",attrs:{startVal:0,endVal:t.statisticsData.article_count,duration:3400}}),t._v(" "),a("span",{staticClass:"info-item-text"},[t._v("users registered")])],1),t._v(" "),a("div",{staticClass:"info-item"},[a("count-to",{staticClass:"info-item-num",attrs:{startVal:0,endVal:t.statisticsData.pageviews_count,duration:3600}}),t._v(" "),a("span",{staticClass:"info-item-text"},[t._v("bets stored")])],1)])],1)],1),t._v(" "),a("div")],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},"4c1b":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'.pan-item[data-v-530f5f14]{width:200px;height:200px;border-radius:50%;display:inline-block;position:relative;cursor:default;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2)}.pan-info-roles-container[data-v-530f5f14]{padding:20px;text-align:center}.pan-thumb[data-v-530f5f14]{width:100%;height:100%;background-size:100%;border-radius:50%;overflow:hidden;position:absolute;-webkit-transform-origin:95% 40%;transform-origin:95% 40%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.pan-thumb[data-v-530f5f14]:after{content:"";width:8px;height:8px;position:absolute;border-radius:50%;top:40%;left:95%;margin:-4px 0 0 -4px;background:radial-gradient(ellipse at center,#0e0e0e 0,#7d7e7d 100%);-webkit-box-shadow:0 0 1px hsla(0,0%,100%,.9);box-shadow:0 0 1px hsla(0,0%,100%,.9)}.pan-info[data-v-530f5f14]{position:absolute;width:inherit;height:inherit;border-radius:50%;overflow:hidden;-webkit-box-shadow:inset 0 0 0 5px rgba(0,0,0,.05);box-shadow:inset 0 0 0 5px rgba(0,0,0,.05)}.pan-info h3[data-v-530f5f14]{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:18px;margin:0 60px;padding:22px 0 0;height:85px;font-family:Open Sans,Arial,sans-serif;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,.3)}.pan-info p[data-v-530f5f14]{color:#fff;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid hsla(0,0%,100%,.5)}.pan-info p a[data-v-530f5f14]{display:block;color:#333;width:80px;height:80px;background:hsla(0,0%,100%,.3);border-radius:50%;color:#fff;font-style:normal;font-weight:700;text-transform:uppercase;font-size:9px;letter-spacing:1px;padding-top:24px;margin:7px auto 0;font-family:Open Sans,Arial,sans-serif;opacity:0;-webkit-transition:opacity .3s ease-in-out .2s,background .2s linear 0s,-webkit-transform .3s ease-in-out .2s;transition:opacity .3s ease-in-out .2s,background .2s linear 0s,-webkit-transform .3s ease-in-out .2s;transition:transform .3s ease-in-out .2s,opacity .3s ease-in-out .2s,background .2s linear 0s;transition:transform .3s ease-in-out .2s,opacity .3s ease-in-out .2s,background .2s linear 0s,-webkit-transform .3s ease-in-out .2s;-webkit-transform:translateX(60px) rotate(90deg);transform:translateX(60px) rotate(90deg)}.pan-info p a[data-v-530f5f14]:hover{background:hsla(0,0%,100%,.5)}.pan-item:hover .pan-thumb[data-v-530f5f14]{-webkit-transform:rotate(-110deg);transform:rotate(-110deg)}.pan-item:hover .pan-info p a[data-v-530f5f14]{opacity:1;-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg)}',""])},"5yNZ":function(t,e,a){"use strict";var i=a("sf7I"),o=a("gdZj"),n=a("VU/8"),s=n(i.a,o.a,!1,null,null,null);e.a=s.exports},ARoL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("bPRz"),o=a("ju5l"),n=a("VU/8"),s=n(i.a,o.a,!1,null,null,null);e.default=s.exports},Bxbm:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),a("img",{staticClass:"pan-thumb",attrs:{src:t.image}})])},o=[],n={render:i,staticRenderFns:o};e.a=n},DY7s:function(t,e,a){"use strict";function i(t){a("1GA+")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Miuj"),n=a("f4q7"),s=a("VU/8"),r=i,l=s(o.a,n.a,!1,r,"data-v-8d1036ba",null);e.default=l.exports},EHTb:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className,style:{height:t.height,width:t.width}})},o=[],n={render:i,staticRenderFns:o};e.a=n},F87c:function(t,e,a){var i=a("G+Dg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("3c0a6c84",i,!0)},"G+Dg":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".dashboard-editor-container[data-v-8b8c6936]{margin:30px}.dashboard-editor-container .btn-group[data-v-8b8c6936]{margin-bottom:60px}.dashboard-editor-container .box-card-header[data-v-8b8c6936]{position:relative;height:160px}.dashboard-editor-container .panThumb[data-v-8b8c6936]{z-index:100;height:150px;width:150px;position:absolute;left:0;right:0;margin:auto}.dashboard-editor-container .display_name[data-v-8b8c6936]{font-size:30px;display:block}.dashboard-editor-container .info-item[data-v-8b8c6936]{display:inline-block;margin-top:10px;font-size:14px}.dashboard-editor-container .info-item[data-v-8b8c6936]:last-of-type{margin-left:15px}",""])},Gyap:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),n=a("NYxO"),s=a("WBHA"),r=a.n(s),l=a("kCe2"),d=a("sRSc"),c=a("woPf"),p=a("IKLf"),u=a("TyIG"),f=a("jrCs");e.a={name:"dashboard-admin",components:{countTo:r.a,panThumb:l.a,todoList:d.a,Github:c.a,pieChart:p.default,lineChart:f.default,barChart:u.default},data:function(){return{statisticsData:{article_count:1024,pageviews_count:1024}}},computed:o()({},Object(n.b)(["name","avatar","roles"]))}},IKLf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("0kv5"),o=a("EHTb"),n=a("VU/8"),s=n(i.a,o.a,!1,null,null,null);e.default=s.exports},Miuj:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),n=a("NYxO"),s=a("kCe2"),r=a("woPf");e.a={name:"dashboard-editor",components:{PanThumb:s.a,Github:r.a},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:o()({},Object(n.b)(["name","avatar","roles"]))}},OoJa:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},RWST:function(t,e,a){var i=a("lu1x");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2a9fa372",i,!0)},TyIG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+NFJ"),o=a("VNYI"),n=a("VU/8"),s=n(i.a,o.a,!1,null,null,null);e.default=s.exports},VNYI:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className,style:{height:t.height,width:t.width}})},o=[],n={render:i,staticRenderFns:o};e.a=n},WBHA:function(t,e,a){!function(e,a){t.exports=a()}(0,function(){return function(t){function e(i){if(a[i])return a[i].exports;var o=a[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",o=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;o.test(a);)a=a.replace(o,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=o.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",o.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,o="webkit moz ms o".split(" "),n=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=n=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=n=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var r=void 0,l=0;l<o.length&&(!n||!s);l++)r=o[l],e.requestAnimationFrame=n=n||window[r+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[r+"CancelAnimationFrame"]||window[r+"CancelRequestAnimationFrame"];n&&s||(e.requestAnimationFrame=n=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),o=window.setTimeout(function(){t(e+a)},a);return i=e+a,o},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=n,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,i){var o,n=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,n=t.default);var r="function"==typeof n?n.options:n;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),i){var l=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),r.computed=l}return{esModule:o,exports:n,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])})},aIhh:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#4AB7BD",color:"#fff",position:"absolute",top:"50px",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},o=[],n={render:i,staticRenderFns:o};e.a=n},anIR:function(t,e,a){"use strict";var i=a("XLwt"),o=a.n(i),n=a("0xDb");a("tcAE"),e.a={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHanlder=Object(n.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)),document.getElementsByClassName("sidebar-container")[0].addEventListener("transitionend",this.__resizeHanlder)},beforeDestroy:function(){if(this.chart){this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder);document.getElementsByClassName("sidebar-container")[0].removeEventListener("transitionend",this.__resizeHanlder),this.chart.dispose(),this.chart=null}},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1},grid:{left:10,right:10,bottom:20,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},yAxis:{},series:[{name:"visitors",itemStyle:{normal:{areaStyle:{}}},smooth:!0,type:"line",data:[100,120,161,134,105,160,165],animationDuration:2600,animationEasing:"cubicInOut"},{name:"buyers",smooth:!0,type:"line",itemStyle:{normal:{color:"rgba(2, 197, 233, 0.2)",lineStyle:{color:"rgba(2, 197, 233, 0.2)"},areaStyle:{color:"rgba(99,194,255, 0.6)"}}},data:[120,82,91,154,162,140,130],animationDuration:2e3,animationEasing:"quadraticOut"}]})}}}},azBQ:function(t,e,a){var i=a("OoJa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("60bca28a",i,!0)},azhG:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("github"),t._v(" "),a("el-row",{staticClass:"btn-group"},[a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn blue-btn",attrs:{to:"/components/index"}},[t._v("Components")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn light-blue-btn",attrs:{to:"/charts/index"}},[t._v("Charts")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn pink-btn",attrs:{to:"/excel/download"}},[t._v("Excel")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn green-btn",attrs:{to:"/predictions/events"}},[t._v("Predictions")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn tiffany-btn",attrs:{to:"/example/form/edit"}},[t._v("Form")])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[a("pan-thumb",{staticClass:"panThumb",attrs:{image:t.avatar}},[t._v(" 你的权限:\n\t\t\t\t\t\t"),t._l(t.roles,function(e){return a("span",{key:e,staticClass:"pan-info-roles"},[t._v(t._s(e))])})],2)],1),t._v(" "),a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"info-item"},[a("count-to",{staticClass:"info-item-num",attrs:{startVal:0,endVal:t.statisticsData.article_count,duration:3400}}),t._v(" "),a("span",{staticClass:"info-item-text"},[t._v("文章")])],1),t._v(" "),a("div",{staticClass:"info-item"},[a("count-to",{staticClass:"info-item-num",attrs:{startVal:0,endVal:t.statisticsData.pageviews_count,duration:3600}}),t._v(" "),a("span",{staticClass:"info-item-text"},[t._v("浏览量")]),t._v(" "),a("icon-svg",{staticClass:"dashboard-editor-icon",attrs:{"icon-class":"b"}})],1)])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("pie-chart")],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("bar-chart")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("line-chart")],1),t._v(" "),a("el-col",{attrs:{span:9}},[a("todo-list")],1)],1)],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},bPRz:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),n=a("NYxO"),s=a("1Rx3"),r=a("DY7s"),l=a("wKhG");e.a={name:"dashboard",components:{adminDashboard:s.default,editorDashboard:r.default,guestDashboard:l.default},data:function(){return{currentRole:"guestDashboard"}},computed:o()({},Object(n.b)(["roles"])),created:function(){this.roles&&(this.roles.indexOf("admin")>=0?this.currentRole="adminDashboard":this.roles.indexOf("editor")>=0&&(this.currentRole="editorDashboard"))}}},dEwe:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className,style:{height:t.height,width:t.width}})},o=[],n={render:i,staticRenderFns:o};e.a=n},f4q7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:" clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v(" 你的权限:\n      "),t._l(t.roles,function(e){return a("span",{key:e,staticClass:"pan-info-roles"},[t._v(t._s(e))])})],2),t._v(" "),a("github"),t._v(" "),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("dashboard")])])],1),t._v(" "),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},o=[],n={render:i,staticRenderFns:o};e.a=n},gdZj:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[a("div",{staticClass:"view"},[a("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){t.toggleTodo(t.todo)}}}),t._v(" "),a("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),t._v(" "),a("button",{staticClass:"destroy",on:{click:function(e){t.deleteTodo(t.todo)}}})]),t._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.doneEdit(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancelEdit(e)}],blur:t.doneEdit}})])},o=[],n={render:i,staticRenderFns:o};e.a=n},jrCs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("anIR"),o=a("dEwe"),n=a("VU/8"),s=n(i.a,o.a,!1,null,null,null);e.default=s.exports},ju5l:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},kCe2:function(t,e,a){"use strict";function i(t){a("ocR/")}var o=a("spIx"),n=a("Bxbm"),s=a("VU/8"),r=i,l=s(o.a,n.a,!1,r,"data-v-530f5f14",null);e.a=l.exports},lu1x:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'.todoapp{font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;color:#4d4d4d;min-width:230px;max-width:550px;margin:40px auto 0;font-weight:300}.todoapp,.todoapp button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.todoapp button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.todoapp :focus{outline:0}.todoapp .hidden{display:none}.todoapp .todoapp{background:#fff;margin:130px 0 40px;position:relative;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp .todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.todoapp .edit,.todoapp .new-todo{position:relative;margin:0;width:100%;font-size:18px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.todoapp .new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.todoapp .main{position:relative;z-index:2;border-top:1px solid #e6e6e6}.todoapp .toggle-all{text-align:center;border:none;opacity:0;position:absolute}.todoapp .toggle-all+label{width:60px;height:34px;font-size:0;position:absolute;top:-52px;left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.todoapp .toggle-all+label:before{content:"\\276F";font-size:22px;color:#e6e6e6;padding:10px 27px}.todoapp .toggle-all:checked+label:before{color:#737373}.todoapp .todo-list{margin:0;padding:0;list-style:none}.todoapp .todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todoapp .todo-list li:last-child{border-bottom:none}.todoapp .todo-list li.editing{border-bottom:none;padding:0}.todoapp .todo-list li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}.todoapp .todo-list li.editing .view{display:none}.todoapp .todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.todoapp .todo-list li .toggle+label{background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:0;background-size:36px}.todoapp .todo-list li .toggle:checked+label{background-size:36px;background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E")}.todoapp .todo-list li label{word-break:break-all;padding:15px 15px 15px 50px;display:block;line-height:1;font-size:14px;-webkit-transition:color .4s;transition:color .4s}.todoapp .todo-list li.completed label{color:#d9d9d9;text-decoration:line-through}.todoapp .todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}.todoapp .todo-list li .destroy:hover{color:#af5b5e}.todoapp .todo-list li .destroy:after{content:"\\D7"}.todoapp .todo-list li:hover .destroy{display:block}.todoapp .todo-list li .edit{display:none}.todoapp .todo-list li.editing:last-child{margin-bottom:-1px}.todoapp .footer{color:#777;position:relative;padding:10px 15px;height:40px;text-align:center;border-top:1px solid #e6e6e6}.todoapp .footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todoapp .todo-count{float:left;text-align:left}.todoapp .todo-count strong{font-weight:300}.todoapp .filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:-20px}.todoapp .filters li{display:inline}.todoapp .filters li a{color:inherit;margin:3px;font-size:12px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.todoapp .filters li a:hover{border-color:rgba(175,47,47,.1)}.todoapp .filters li a.selected{border-color:rgba(175,47,47,.2)}.todoapp .clear-completed,.todoapp html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.todoapp .clear-completed:hover{text-decoration:underline}.todoapp .info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);text-align:center}.todoapp .info p{line-height:1}.todoapp .info a{color:inherit;text-decoration:none;font-weight:400}.todoapp .info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio:0){.todoapp .todo-list li .toggle,.todoapp .toggle-all{background:none}.todoapp .todo-list li .toggle{height:40px}}@media (max-width:430px){.todoapp .footer{height:50px}.todoapp .filters{bottom:10px}}',""])},mVmb:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[a("header",{staticClass:"header"},[a("input",{staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"TODO LIST?"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addTodo(e)}}})]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[a("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(e){t.toggleAll({done:!t.allChecked})}}}),t._v(" "),a("label",{attrs:{for:"toggle-all"}}),t._v(" "),a("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(e,i){return a("todo",{key:i,attrs:{todo:e},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})}))]),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),a("ul",{staticClass:"filters"},t._l(t.filters,function(e,i){return a("li",{key:i},[a("a",{class:{selected:t.visibility===i},on:{click:function(e){e.preventDefault(),t.visibility=i}}},[t._v(t._s(t._f("capitalize")(i)))])])})),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.todos.length>t.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:t.clearCompleted}},[t._v("\n      Clear completed\n    ")])])])},o=[],n={render:i,staticRenderFns:o};e.a=n},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},"ocR/":function(t,e,a){var i=a("4c1b");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("f5d0e85c",i,!0)},q14U:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},qkKv:function(t,e,a){var i=a("FeBl"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},sRSc:function(t,e,a){"use strict";function i(t){a("RWST")}var o=a("+VJ6"),n=a("mVmb"),s=a("VU/8"),r=i,l=s(o.a,n.a,!1,r,null,null);e.a=l.exports},sf7I:function(t,e,a){"use strict";e.a={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,e,a){var i=e.value,o=a.context;i&&o.$nextTick(function(){t.focus()})}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var e=t.todo,a=t.value;this.$emit("editTodo",{todo:e,value:a})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var e=t.target.value.trim(),a=this.todo;e?this.editing&&(this.editTodo({todo:a,value:e}),this.editing=!1):this.deleteTodo({todo:a})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}}},spIx:function(t,e,a){"use strict";e.a={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:100},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}},wKhG:function(t,e,a){"use strict";function i(t){a("azBQ")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("17YV"),n=a("2NVz"),s=a("VU/8"),r=i,l=s(o.a,n.a,!1,r,"data-v-8d329f30",null);e.default=l.exports},woPf:function(t,e,a){"use strict";var i=a("aIhh"),o=a("VU/8"),n=o(null,i.a,!1,null,null,null);e.a=n.exports}});