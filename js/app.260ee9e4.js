(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"115a":function(e,t,a){"use strict";var n=a("7d67"),r=a.n(n);r.a},"3b2d":function(e,t,a){"use strict";var n=a("940e"),r=a.n(n);r.a},4651:function(e,t,a){},"47b0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[!0!==e.$route.meta.noHeader?a("Header"):e._e(),a("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header_space"}),a("div",{staticClass:"header"},[a("div",{staticClass:"brand_holder"},[a("span",{staticClass:"brand"}),a("span",{staticClass:"vertical-line"}),a("h1",[e._v("LIVE")])]),a("div",{staticClass:"nav-holder"},[a("ul",[a("li",[a("a",[e._v("Classes")])]),a("li",[a("a",[e._v("Pricing")])]),a("li",{staticStyle:{color:"#999"}},[e._v(" ● ")]),a("li",[a("a",[e._v("Create Account "),a("b",[e._v("or")]),e._v(" Log In")])])])])])])}],l={name:"header"},c=l,u=(a("3b2d"),a("2877")),m=Object(u["a"])(c,o,i,!1,null,"2092e9f8",null),d=m.exports,p={name:"App",components:{Header:d}},f=p,h=(a("034f"),Object(u["a"])(f,r,s,!1,null,null,null)),v=h.exports,g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; Refresh..."),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("45fc");var w=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Welcome to administrator page")]),a("h2",[e._v(e._s(e.msg))])])},_=[],C={data:function(){return{msg:"The superheros"}}},x=C,y=(a("c564"),Object(u["a"])(x,b,_,!1,null,"2dd0f09e",null)),S=y.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Welcome to Book Stream page")]),a("h2",[e._v(e._s(e.msg))])])},$=[],j={data:function(){return{msg:"where the streams are booked"}}},O=j,k=(a("e626"),Object(u["a"])(O,N,$,!1,null,"e85565a6",null)),E=k.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Welcome to regular users page")]),a("h2",[e._v(e._s(e.msg))])])},P=[],q={data:function(){return{msg:"The commoners"}}},A=q,T=(a("691e"),Object(u["a"])(A,I,P,!1,null,"760c298e",null)),U=T.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"login-box"},[e._m(0),a("form",{staticClass:"flex-form"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"email address",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("span",{staticClass:"icon username"})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("span",{staticClass:"icon password"})]),a("input",{attrs:{type:"submit",value:"LOG IN"},on:{click:e.handleSubmit}})])]),a("router-link",{staticClass:"sign-up-button",attrs:{to:"/register",tag:"button"}},[e._v(" Dont have an account"),a("b",[e._v("? Sign up here.")])])],1)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand_holder",staticStyle:{height:"70px","margin-top":"45px","margin-bottom":"25px"}},[a("span",{staticClass:"brand"}),a("span",{staticClass:"vertical-line"}),a("h1",[e._v("LIVE")])])}],J={components:{},data:function(){return{email:"",password:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.password.length>0&&this.$http.post("http://localhost:3000/login",{email:this.email,password:this.password}).then((function(e){var a=e.data.user.is_admin;localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")&&(t.$emit("loggedIn"),null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):1===a?t.$router.push("admin"):t.$router.push("dashboard"))})).catch((function(e){}))}}},W=J,M=(a("d54b"),Object(u["a"])(W,L,H,!1,null,"9183afbc",null)),D=M.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"signup"}},[a("div",{staticClass:"signup-box"},[e._m(0),a("form",{staticClass:"flex-form"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName",placeholder:"first name",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("span",{staticClass:"icon username"})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName",placeholder:"last name",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("span",{staticClass:"icon username"})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"email address",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("span",{staticClass:"icon username"})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("span",{staticClass:"icon password"})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",name:"passwordConfirm",placeholder:"repeat password",required:""},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}}),a("span",{staticClass:"icon password"})]),a("input",{attrs:{type:"submit",value:"CREATE ACCOUNT"},on:{click:e.handleSubmit}})])]),a("router-link",{staticClass:"login-button",attrs:{to:"/login",tag:"button"}},[e._v(" Already have an account"),a("b",[e._v("? Log in here.")])])],1)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand_holder",staticStyle:{height:"70px","margin-top":"45px","margin-bottom":"25px"}},[a("span",{staticClass:"brand"}),a("span",{staticClass:"vertical-line"}),a("h1",[e._v("LIVE")])])}],F=(a("b0c0"),{props:["nextUrl"],data:function(){return{firstName:"",lastName:"",email:"",password:"",passwordConfirm:""}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),this.password===this.passwordConfirm&&this.password.length>0){var a="http://localhost:3000/register";null==this.is_admin&&1!==this.is_admin||(a="http://localhost:3000/register-admin"),this.$http.post(a,{name:this.name,email:this.email,password:this.password,is_admin:this.is_admin}).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")&&(t.$emit("loggedIn"),null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):t.$router.push("/"))})).catch((function(e){}))}else this.password="",this.passwordConfirm=""}}}),R=F,G=(a("115a"),Object(u["a"])(R,V,B,!1,null,"452c3aa2",null)),z=G.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Welcome to Watch Stream page")]),a("h2",[e._v(e._s(e.msg))])])},Q=[],X={data:function(){return{msg:"where the streams are watched"}}},Y=X,Z=(a("d3c6"),Object(u["a"])(Y,K,Q,!1,null,"478fda12",null)),ee=Z.exports;n["a"].use(w["a"]);var te=new w["a"]({mode:"hash",routes:[{path:"/login",name:"login",component:D,meta:{guest:!0,noHeader:!0}},{path:"/register",name:"register",component:z,meta:{guest:!0,noHeader:!0}},{path:"/",name:"home",component:U,meta:{requiresAuth:!0}},{path:"/book-stream",name:"book-stream",component:E,meta:{requiresAuth:!0}},{path:"/watch-stream",name:"watch-stream",component:ee,meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:S,meta:{requiresAuth:!0,is_admin:!0}}]});te.beforeEach((function(e,t,a){if(e.matched.some((function(e){return e.meta.requiresAuth})))if(null==localStorage.getItem("jwt"))a({path:"/login",params:{nextUrl:e.fullPath}});else{var n=JSON.parse(localStorage.getItem("user"));e.matched.some((function(e){return e.meta.is_admin}))?1===n.is_admin?a():a({name:"home"}):a()}else e.matched.some((function(e){return e.meta.guest}))?null==localStorage.getItem("jwt")?a():a({name:"home"}):a()}));var ae=te,ne=a("2f62");n["a"].use(ne["a"]);var re=new ne["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:ae,store:re,render:function(e){return e(v)}}).$mount("#app")},"691e":function(e,t,a){"use strict";var n=a("47b0"),r=a.n(n);r.a},"7d67":function(e,t,a){},"85ec":function(e,t,a){},"940e":function(e,t,a){},af1c:function(e,t,a){},c564:function(e,t,a){"use strict";var n=a("af1c"),r=a.n(n);r.a},d3c6:function(e,t,a){"use strict";var n=a("4651"),r=a.n(n);r.a},d54b:function(e,t,a){"use strict";var n=a("dc0d"),r=a.n(n);r.a},dc0d:function(e,t,a){},e626:function(e,t,a){"use strict";var n=a("fc55"),r=a.n(n);r.a},fc55:function(e,t,a){}});
//# sourceMappingURL=app.260ee9e4.js.map