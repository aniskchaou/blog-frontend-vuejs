(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/admin"}},[t._v("Administration")])],1),a("router-view")],1)},r=[],s=(a("5c0b"),a("2877")),i={},l=Object(s["a"])(i,n,r,!1,null,null,null),c=l.exports,d=a("f309");o["a"].use(d["a"]);var u=new d["a"]({}),p=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{attrs:{id:"inspire"}},[a("Header"),a("v-main",{staticStyle:{padding:"5px 0px 0px 0px"}},[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("Posts",{attrs:{posts:t.posts}})],1)],1),a("br"),a("br"),a("Footer")],1)],1)},m=[],f=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear())+" Developed by "),a("a",{attrs:{href:"https://github.com/aniskchaou/blog-frontend-vuejs"}},[t._v(" Anis KCHAOU ")])])])}),b=[],h={name:"Footer"},g=h,_=a("6544"),x=a.n(_),w=a("553a"),V=Object(s["a"])(g,f,b,!1,null,null,null),k=V.exports;x()(V,{VFooter:w["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[a("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[a("router-link",{attrs:{to:"/admin"}},[t._v("POSTS")])],1)],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("MyBlog")])],1)],1)},y=[],C={name:"Header",props:{source:String},data:function(){return{drawer:!1}}},j=C,O=a("40dc"),A=a("5bc1"),S=a("132d"),T=a("8860"),$=a("da13"),D=a("1800"),I=a("5d23"),E=a("f774"),L=a("2a7f"),F=Object(s["a"])(j,P,y,!1,null,null,null),H=F.exports;x()(F,{VAppBar:O["a"],VAppBarNavIcon:A["a"],VIcon:S["a"],VList:T["a"],VListItem:$["a"],VListItemAction:D["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:E["a"],VToolbarTitle:L["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[t._l(t.posts,(function(e){return a("v-card",{key:e.id,staticClass:"mx-auto",staticStyle:{margin:"20px"},attrs:{"max-width":"300"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",width:"300px",src:e.image}},[a("v-card-title",[t._v(t._s(e.title))])],1),a("v-card-text",{staticClass:"text--primary"},[a("div",[a("v-chip",{staticClass:"ma-2",attrs:{color:"primary","text-color":"white"}},[t._v(t._s(e.date))])],1),a("DetailPost",{attrs:{post:e}})],1)],1)})),a("br"),a("br")],2)},R=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"error",dark:"",fab:"",small:"",absolute:"",bottom:"",center:""}},"v-btn",n,!1),o),[t._v(" + ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.post.title))]),a("v-card-text",[t._v(t._s(t.post.post))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},N=[],U={props:["post"],data:function(){return{dialog:!1}},methods:{close:function(){this.dialog=!1}}},J=U,q=a("8336"),Y=a("b0af"),K=a("99d9"),z=a("169a"),G=a("0fd9"),Q=a("2fa4"),W=Object(s["a"])(J,B,N,!1,null,null,null),X=W.exports;x()(W,{VBtn:q["a"],VCard:Y["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VDialog:z["a"],VRow:G["a"],VSpacer:Q["a"]});var Z={name:"Posts",props:["posts"],components:{DetailPost:X}},tt=Z,et=a("cc20"),at=a("adda"),ot=Object(s["a"])(tt,M,R,!1,null,null,null),nt=ot.exports;x()(ot,{VCard:Y["a"],VCardText:K["b"],VCardTitle:K["c"],VChip:et["a"],VImg:at["a"],VRow:G["a"]});var rt={name:"Layout",data:function(){return{API_URL:"https://blog-nodejs-backend.herokuapp.com/all",posts:[]}},components:{Footer:k,Header:H,Posts:nt},methods:{gestPosts:function(){var t=this;fetch(this.API_URL).then((function(t){return t.json()})).then((function(e){t.posts=e.result}))}},beforeMount:function(){this.gestPosts(),console.log(this.posts)}},st=rt,it=a("7496"),lt=a("a523"),ct=a("f6c4"),dt=Object(s["a"])(st,v,m,!1,null,null,null),ut=dt.exports;x()(dt,{VApp:it["a"],VContainer:lt["a"],VMain:ct["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{attrs:{id:"inspire"}},[a("AdminHeader"),a("v-main",{staticStyle:{padding:"25px 0px 0px 256px"}},[a("v-container",{attrs:{fluid:""}},[a("AdminPosts",{attrs:{posts:t.posts}})],1)],1),a("AdminFooter")],1)],1)},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs8:"",md12:""}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[a("AddPost"),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Title")]),a("th",[t._v("Author")]),a("th",[t._v("Date")]),a("th",[t._v("Actions")])])]),a("tbody",t._l(t.posts,(function(e){return a("tr",{key:e.id},[a("td",[a("img",{attrs:{height:"60",width:"60",src:e.image}})]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.author))]),a("td",[a("v-chip",{staticClass:"ma-2",attrs:{color:"primary","text-color":"white"}},[t._v(t._s(e.date))])],1),a("td",[a("EditPost",{attrs:{post:e}}),a("DeletePost",{attrs:{post:e}})],1)])})),0)]},proxy:!0}])})],1)],1)],1)},ft=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"success",dark:"",small:"",absolute:"",top:"",left:"",fab:""}},"v-btn",n,!1),o),[t._v(" + ")]),a("br"),a("br")]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create Post")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Title"},model:{value:t.newPost.title,callback:function(e){t.$set(t.newPost,"title",e)},expression:"newPost.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Author"},model:{value:t.newPost.author,callback:function(e){t.$set(t.newPost,"author",e)},expression:"newPost.author"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Image URL"},model:{value:t.newPost.image,callback:function(e){t.$set(t.newPost,"image",e)},expression:"newPost.image"}})],1),a("v-col",{attrs:{cols:"23",sm:"6",md:"12"}},[a("v-textarea",{attrs:{label:"Description"},model:{value:t.newPost.post,callback:function(e){t.$set(t.newPost,"post",e)},expression:"newPost.post"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-date-picker",{attrs:{label:"Date"},model:{value:t.newPost.date,callback:function(e){t.$set(t.newPost,"date",e)},expression:"newPost.date"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addPost}},[t._v("Create")])],1)],1)],1)],1)},ht=[],gt={data:function(){return{dialog:!1,picker:(new Date).toISOString().substr(0,10),newPost:{}}},methods:{addPost:function(){var t=this,e={title:this.newPost.title,author:this.newPost.author,post:this.newPost.post,date:this.newPost.date,image:this.newPost.image};fetch("https://blog-nodejs-backend.herokuapp.com/add",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(t){return console.log(e),t.json()})).then((function(e){t.$emit("newPost",e.result),t.newPost={},t.dialog=!1,t.$router.go("/admin")}))}}},_t=gt,xt=a("62ad"),wt=a("2e4b"),Vt=a("8654"),kt=a("a844"),Pt=Object(s["a"])(_t,bt,ht,!1,null,null,null),yt=Pt.exports;x()(Pt,{VBtn:q["a"],VCard:Y["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:xt["a"],VContainer:lt["a"],VDatePicker:wt["a"],VDialog:z["a"],VRow:G["a"],VSpacer:Q["a"],VTextField:Vt["a"],VTextarea:kt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"warning",dark:"",fab:"",outlined:"",small:""}},"v-btn",n,!1),o),[a("v-icon",[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Edit Post")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[t.post?a("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[t.post?a("v-text-field",{attrs:{label:"Author",required:""},model:{value:t.post.author,callback:function(e){t.$set(t.post,"author",e)},expression:"post.author"}}):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[t.post?a("v-text-field",{attrs:{label:"Image URL",required:""},model:{value:t.post.image,callback:function(e){t.$set(t.post,"image",e)},expression:"post.image"}}):t._e()],1),a("v-col",{attrs:{cols:"23",sm:"6",md:"12"}},[t.post?a("v-textarea",{attrs:{label:"Description"},model:{value:t.post.post,callback:function(e){t.$set(t.post,"post",e)},expression:"post.post"}}):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[t.post?a("v-date-picker",{attrs:{label:"Date"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}}):t._e()],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.editPost(t.post)}}},[t._v("Edit")])],1)],1)],1)],1)},jt=[],Ot={props:["post"],data:function(){return{dialog:!1,picker:(new Date).toISOString().substr(0,10),newPost:{}}},methods:{editPost:function(t){var e=this,a={id:t.id,title:t.title,author:t.author,post:t.post,date:t.date,image:t.image};console.log(a),fetch("https://blog-nodejs-backend.herokuapp.com/edit",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(t){return console.log(a),t.json()})).then((function(t){e.$emit("newPost",t.result),e.dialog=!1,e.$router.go("/admin")}))}}},At=Ot,St=Object(s["a"])(At,Ct,jt,!1,null,null,null),Tt=St.exports;x()(St,{VBtn:q["a"],VCard:Y["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:xt["a"],VContainer:lt["a"],VDatePicker:wt["a"],VDialog:z["a"],VIcon:S["a"],VRow:G["a"],VSpacer:Q["a"],VTextField:Vt["a"],VTextarea:kt["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"error",dark:"",fab:"",outlined:"",small:""}},"v-btn",n,!1),o),[a("v-icon",[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Delete Post")]),a("v-card-text",[t._v("Are you sure you want to delete this post ?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deletePost(t.post)}}},[t._v("Delete")])],1)],1)],1)],1)},Dt=[],It={props:["post"],data:function(){return{dialog:!1}},methods:{deletePost:function(t){var e=this,a={id:t.id};fetch("https://blog-nodejs-backend.herokuapp.com/delete",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(t){return console.log(a),t.json()})).then((function(t){e.$emit("posts",t.result),e.dialog=!1,e.$router.go("/admin")}))}}},Et=It,Lt=Object(s["a"])(Et,$t,Dt,!1,null,null,null),Ft=Lt.exports;x()(Lt,{VBtn:q["a"],VCard:Y["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VDialog:z["a"],VIcon:S["a"],VRow:G["a"],VSpacer:Q["a"]});var Ht={name:"AdminHeader",props:["posts"],data:function(){return{dialog:!1,newPost:{}}},components:{AddPost:yt,EditPost:Tt,DeletePost:Ft},methods:{reload:function(){console.log("hey")}}},Mt=Ht,Rt=a("0e8f"),Bt=a("1f4f"),Nt=Object(s["a"])(Mt,mt,ft,!1,null,null,null),Ut=Nt.exports;x()(Nt,{VCard:Y["a"],VCardText:K["b"],VChip:et["a"],VFlex:Rt["a"],VSimpleTable:Bt["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[a("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[a("router-link",{attrs:{to:"/admin"}},[t._v("POSTS")])],1)],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("POSTS")])],1)],1)},qt=[],Yt={name:"AdminHeader",props:{source:String},data:function(){return{drawer:null}}},Kt=Yt,zt=Object(s["a"])(Kt,Jt,qt,!1,null,null,null),Gt=zt.exports;x()(zt,{VAppBar:O["a"],VAppBarNavIcon:A["a"],VIcon:S["a"],VList:T["a"],VListItem:$["a"],VListItemAction:D["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:E["a"],VToolbarTitle:L["a"]});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"blue-grey",app:""}},[a("span",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])])},Wt=[],Xt={name:"Footer"},Zt=Xt,te=Object(s["a"])(Zt,Qt,Wt,!1,null,null,null),ee=te.exports;x()(te,{VFooter:w["a"]});var ae={name:"Admin",components:{AdminPosts:Ut,AdminHeader:Gt,AdminFooter:ee},data:function(){return{API_URL:"https://blog-nodejs-backend.herokuapp.com/all",posts:[]}},methods:{gestPosts:function(){var t=this;fetch(this.API_URL).then((function(t){return t.json()})).then((function(e){t.posts=e.result}))}},beforeMount:function(){this.gestPosts(),console.log(this.posts)}},oe=ae,ne=Object(s["a"])(oe,pt,vt,!1,null,null,null),re=ne.exports;x()(ne,{VApp:it["a"],VContainer:lt["a"],VMain:ct["a"]}),o["a"].use(p["a"]);var se=[{path:"/",name:"Home",component:ut},{path:"/admin",name:"Admin",component:re}],ie=new p["a"]({mode:"history",base:"/",routes:se}),le=ie;o["a"].config.productionTip=!1,new o["a"]({vuetify:u,router:le,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("9c0c"),n=a.n(o);n.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.96c4771a.js.map