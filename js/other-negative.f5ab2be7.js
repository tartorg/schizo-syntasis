(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["other-negative"],{"00fe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Room",{attrs:{items:t.items,positions:t.mockedPosition,"room-size":[30,10,30],"background-video":"self-emptiness/IMG_1915.MOV"}})},o=[],i=(n("d81d"),n("cb29"),n("d403")),a=n("fdc2"),c={name:"SelfEmptinessRoom",components:{Room:i["a"]},data:function(){return{items:["other-negative/otherneg1.glb","other-negative/otherneg2.glb","other-negative/otherneg3.glb","other-negative/otherneg4.glb","other-negative/otherneg5.glb","other-negative/otherneg6.glb"]}},computed:{mockedPosition:function(){return this.items.map((function(){return Array(3).fill(null).map((function(){return Object(a["a"])(0,100)/100}))}))}}},u=c,s=n("2877"),f=Object(s["a"])(u,r,o,!1,null,null,null);e["default"]=f.exports},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5f35":function(t,e){t.exports={publicPath:"/schizo-syntasis"}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"81d5":function(t,e,n){"use strict";var r=n("7b0b"),o=n("23cb"),i=n("50c4");t.exports=function(t){var e=r(this),n=i(e.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);while(s>c)e[c++]=t;return e}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("50c4"),s=n("8418"),f=n("65f0"),d=n("1dde"),l=n("b622"),p=n("2d00"),h=l("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},w=!m||!g;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,o,i,a=c(this),d=f(a,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],y(i)){if(o=u(i.length),l+o>v)throw TypeError(b);for(n=0;n<o;n++,l++)n in i&&s(d,l,i[n])}else{if(l>=v)throw TypeError(b);s(d,l++,i)}return d.length=l,d}})},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),i=n("fc6a"),a=n("a640"),c=[].join,u=o!=Object,s=a("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,d=6==t,l=7==t,p=5==t||d;return function(h,v,b,m){for(var g,y,w=i(h),x=o(w),k=r(v,b,3),P=a(x.length),A=0,j=m||c,M=e?j(h,P):n||l?j(h,0):void 0;P>A;A++)if((p||A in x)&&(g=x[A],y=k(g,A,w),t))if(e)M[A]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:u.call(M,g)}else switch(t){case 4:return!1;case 7:u.call(M,g)}return d?-1:s||f?f:M}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},cb29:function(t,e,n){var r=n("23e7"),o=n("81d5"),i=n("44d2");r({target:"Array",proto:!0},{fill:o}),i("fill")},d403:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-scene",[n("a-assets",[n("video",{attrs:{id:t.backgroundVideo,autoplay:"",loop:"",subtitles:"backgroundVideo",description:"background video",src:t.videoPath}})]),t._l(t.itemsPath,(function(e,r){return n("a-entity",{key:e,attrs:{"gltf-model":e,position:t.itemsPosition[r]}})})),t._t("default"),n("a-videosphere",{attrs:{src:"#"+t.backgroundVideo}})],2)},o=[],i=(n("d81d"),n("a15b"),n("99af"),n("5f35")),a={name:"Room",props:["items","positions","roomSize","backgroundVideo"],computed:{itemsPosition:function(){var t=this,e=this.roomSize.map((function(t){return-t/2}));return this.positions.map((function(n){return n.map((function(n,r){return n*t.roomSize[r]+e[r]})).join(" ")}))},itemsPath:function(){return this.items.map((function(t){return t.path?"url(".concat(i["publicPath"],"/assets/").concat(t.path,")"):"url(".concat(i["publicPath"],"/assets/").concat(t,")")}))},videoPath:function(){return"".concat(i["publicPath"],"/assets/").concat(this.backgroundVideo)}}},c=a,u=n("2877"),s=Object(u["a"])(c,r,o,!1,null,null,null);e["a"]=s.exports},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=i("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdc2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}}}]);
//# sourceMappingURL=other-negative.f5ab2be7.js.map