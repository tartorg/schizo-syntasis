(function(e){function t(t){for(var o,i,u=t[0],s=t[1],c=t[2],p=0,m=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/schizo-syntasis/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,r,a,!1,null,null,null),c=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("DemoScene")],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Room",{attrs:{items:e.room1.items,positions:e.mockedPosition,"room-size":[50,50,50],"background-video":"room1/IMG_1915.MOV"}})},d=[],b=(n("cb29"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-scene",[n("a-assets",[n("video",{attrs:{id:e.backgroundVideo,autoplay:"",loop:"",src:e.videoPath}})]),e._l(e.itemsPath,(function(t,o){return n("a-entity",{key:t,attrs:{"gltf-model":t,position:e.itemsPosition[o]}})})),n("a-videosphere",{attrs:{src:"#"+e.backgroundVideo}})],2)}),h=[],v=(n("99af"),n("a15b"),n("3835")),g=n("5f35"),y={name:"Room",props:["items","positions","roomSize","backgroundVideo"],computed:{itemsPosition:function(){var e=this,t=Object(v["a"])(this.roomSize,3),n=t[0],o=t[1],r=t[2],a=[-n/2,-o/2,-r/2];return this.positions.map((function(t){return t.map((function(t,n){return t*e.roomSize[n]+a[n]})).join(" ")}))},itemsPath:function(){return this.items.map((function(e){return"url(".concat(g["publicPath"],"/assets/").concat(e,")")}))},videoPath:function(){return"".concat(g["publicPath"],"/assets/").concat(this.backgroundVideo)}}},P=y,O=Object(i["a"])(P,b,h,!1,null,null,null),_=O.exports,j={name:"DemoScene",components:{Room:_},data:function(){return{room1:{items:["room1/unreal1.glb","room1/unreal2.glb","room1/unreal3.glb","room1/unreal4.glb","room1/unreal5.glb","room1/unreal6.glb","room1/unreal7.glb","room1/unreal8.glb","room1/unreal9.glb"]}}},computed:{mockedPosition:function(){return this.room1.items.map((function(){return Array(3).fill(null).map(Math.random)}))}}},w=j,k=Object(i["a"])(w,f,d,!1,null,null,null),S=k.exports,x={name:"Home",components:{DemoScene:S}},M=x,z=Object(i["a"])(M,p,m,!1,null,null,null),E=z.exports;o["a"].use(l["a"]);var V=[{path:"/",name:"Home",component:E}],$=new l["a"]({routes:V}),D=$,R=n("2f62");o["a"].use(R["a"]);var T=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b048");o["a"].config.productionTip=!1,o["a"].config.ignoredElements=["a-scene","a-assets","a-asset-item","a-entity","a-camera","a-sky","a-videosphere"],new o["a"]({router:D,store:T,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"5f35":function(e,t){e.exports={publicPath:"/schizo-syntasis"}},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ec1cbccf.js.map