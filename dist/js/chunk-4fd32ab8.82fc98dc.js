(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fd32ab8"],{"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[t.showBack?n("i",{staticClass:"iconfont icondajiantou back-btn",on:{click:t.back}}):t._e(),n("span",[t._v(t._s(t.title))]),n("div",{staticClass:"right-box"},[t._t("default")],2)]),n("div",{staticClass:"fill-header"})])},r=[],c=(n("c0d6"),{props:{title:{type:String,default:""},showBack:{type:Boolean,default:!1}},data:function(){return{}},methods:{back:function(){this.$router.back(-1)}}}),o=c,i=(n("1b52"),n("2877")),s=Object(i["a"])(o,a,r,!1,null,"5057cbdb",null);e["a"]=s.exports},"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),c=n("6821"),o=n("6a99"),i=n("69a8"),s=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=c(t),e=o(e,!0),s)try{return f(t,e)}catch(n){}if(i(t,e))return r(!a.f.call(t,e),t[e])}},"1b52":function(t,e,n){"use strict";var a=n("e597"),r=n.n(a);r.a},"32df":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{title:t.title}}),n("Footer"),t._v("\n  这是收藏夹\n")],1)},r=[],c=n("0418"),o=n("fd2d"),i={components:{Header:c["a"],Footer:o["a"]},name:"collection",data:function(){return{title:"收藏夹"}}},s=i,f=n("2877"),u=Object(f["a"])(s,a,r,!1,null,"44f979cd",null);e["default"]=u.exports},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var c,o=e.constructor;return o!==n&&"function"==typeof o&&(c=o.prototype)!==n.prototype&&a(c)&&r&&r(t,c),t}},"7b47":function(t,e,n){},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),c=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:c}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),c=n("79e5"),o=n("fdef"),i="["+o+"]",s="​",f=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),l=function(t,e,n){var r={},i=c(function(){return!!o[t]()||s[t]()!=s}),f=r[t]=i?e(p):o[t];n&&(r[n]=f),a(a.P+a.F*i,"String",r)},p=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},af6f:function(t,e,n){"use strict";var a=n("7b47"),r=n.n(a);r.a},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),c=n("2d95"),o=n("5dbc"),i=n("6a99"),s=n("79e5"),f=n("9093").f,u=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,d="Number",v=a[d],_=v,b=v.prototype,g=c(n("2aeb")(b))==d,h="trim"in String.prototype,y=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():p(e,3);var n,a,r,c=e.charCodeAt(0);if(43===c||45===c){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,s=e.slice(2),f=0,u=s.length;f<u;f++)if(o=s.charCodeAt(f),o<48||o>r)return NaN;return parseInt(s,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(g?s(function(){b.valueOf.call(n)}):c(n)!=d)?o(new _(y(e)),n,v):y(e)};for(var N,m=n("9e1e")?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;m.length>I;I++)r(_,N=m[I])&&!r(v,N)&&l(v,N,u(_,N));v.prototype=b,b.constructor=v,n("2aba")(a,d,v)}},e597:function(t,e,n){},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/home","active-class":"active"}},[n("i",{staticClass:"iconfont iconzhuye"}),n("span",[t._v("主页")])]),n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/collection","active-class":"active"}},[n("i",{staticClass:"iconfont iconshoucangjia"}),n("span",[t._v("收藏夹")])]),n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/mine","active-class":"active"}},[0!=t.new_msg_count&&t.is_login?n("mt-badge",{staticClass:"badge",attrs:{type:"error",size:"small"}},[t._v(t._s(t.new_msg_count))]):t._e(),n("i",{staticClass:"iconfont icontouxiang"}),n("span",[t._v("我的")])],1)],1)},r=[],c=(n("c5f6"),{props:{new_msg_count:{type:Number,default:0},is_login:{type:Boolean,default:!1}},data:function(){return{}}}),o=c,i=(n("af6f"),n("2877")),s=Object(i["a"])(o,a,r,!1,null,"37bc7b52",null);e["a"]=s.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);