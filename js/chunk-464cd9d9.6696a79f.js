(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-464cd9d9"],{"0b42":function(t,e,n){var r=n("e8b5"),o=n("68ee"),i=n("861d"),a=n("b622"),s=a("species"),c=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,o(e)&&(e===c||r(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?c:e}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},b727:function(t,e,n){var r=n("0366"),o=n("e330"),i=n("44ad"),a=n("7b0b"),s=n("07fa"),c=n("65f0"),u=o([].push),f=function(t){var e=1==t,n=2==t,o=3==t,f=4==t,d=6==t,p=7==t,l=5==t||d;return function(v,m,b,h){for(var w,_,x=a(v),y=i(x),A=r(m,b),k=s(y),g=0,C=h||c,E=e?C(v,k):n||p?C(v,0):void 0;k>g;g++)if((l||g in y)&&(w=y[g],_=A(w,g,x),t))if(e)E[g]=_;else if(_)switch(t){case 3:return!0;case 5:return w;case 6:return g;case 2:u(E,w)}else switch(t){case 4:return!1;case 7:u(E,w)}return d?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"home"}},[t._m(0),n("div",{staticClass:"opcoes"},t._l(t.olimpiadas,(function(e,r){return n("a",{key:r,attrs:{href:"#/"+e.rota},domProps:{textContent:t._s(e.nome)}})})),0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Selecione uma competição"),n("br"),t._v("para ver os resultados disponíveis")])}],i=(n("d81d"),{name:"Home",data:function(){return{olimpiadas:[]}},mounted:function(){this.olimpiadas=this.$config.resultados.map((function(t){return{nome:t.nome,rota:t.id}}))}}),a=i,s=(n("21bb"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,null,null);e["default"]=c.exports},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=i("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-464cd9d9.6696a79f.js.map