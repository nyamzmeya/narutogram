(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{232:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var s=n(3),r=n(244),i=n(1),c=(n(0),n(62)),a=n.n(c),o=n(116),u=function(t){t.input;var e=t.meta,n=e.touched,s=e.error,r=t.children,c=n&&s;return Object(i.jsxs)("div",{className:a.a.formsControl+" "+(c?a.a.error:" "),children:[r,c&&Object(i.jsx)("span",{children:s})]})},j=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(i.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(i.jsx)("textarea",Object(s.a)(Object(s.a)({},e),n))}))},d=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(i.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(i.jsx)("input",Object(s.a)(Object(s.a)({},e),n))}))},p=function(t,e,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(s.a)({placeholder:t,name:e,component:n,validate:r},c)),a]})}},234:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var s=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}}},240:function(t,e,n){"use strict";e.a=n.p+"static/media/avatar.da337d6a.png"},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(64);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(s=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);s=!0);}catch(o){r=!0,i=o}finally{try{s||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},257:function(t,e,n){t.exports={profile:"Main_profile__1wNnu",status:"Main_status__3YHvy"}},299:function(t,e,n){t.exports={desc:"Description_desc__2mfEL",info:"Description_info__2bI0t"}},300:function(t,e,n){t.exports={posts:"Posts_posts__m06sJ"}},301:function(t,e,n){t.exports={myposts:"MyPost_myposts__2AwNB"}},304:function(t,e,n){"use strict";n.r(e);var s=n(26),r=n(27),i=n(29),c=n(28),a=n(1),o=n(257),u=n.n(o),j=n(0),d=n.n(j),p=n(299),b=n.n(p),l=n(240),f=function(t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:b.a.avatar,children:Object(a.jsx)("img",{src:t.avatar||l.a,alt:"description",height:"300p"})}),Object(a.jsxs)("div",{className:b.a.info,children:[Object(a.jsxs)("div",{children:["Name: ",t.name]}),Object(a.jsx)("p",{}),Object(a.jsxs)("div",{children:["Age: ",t.age]}),Object(a.jsx)("p",{}),Object(a.jsxs)("div",{children:["Information: ",t.info]})]})]})},h=function(t){var e=t.description.map((function(t){return Object(a.jsx)(f,{avatar:t.avatar,name:t.name,info:t.info,age:t.age})}));return Object(a.jsx)("div",{className:b.a.desc,children:e})},O=n(18),v=n(94),m=n(300),x=n.n(m),y=n(301),g=n.n(y),_=function(t){return Object(a.jsxs)("div",{className:g.a.mypost,children:[Object(a.jsx)("div",{children:t.post}),Object(a.jsxs)("div",{children:["likes ",t.likes]})]})},S=n(116),A=n(117),N=n(234),P=n(232),k=Object(N.a)(10),w=Object(A.a)({form:"post"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(S.a,{placeholder:"Post",name:"post",component:P.c,validate:[N.b,k]})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Publish"})})]})})),I=function(t){var e=t.profilePage.posts.map((function(t){return Object(a.jsx)(_,{post:t.post,likes:t.likes})}));return Object(a.jsxs)("div",{className:x.a.posts,children:[Object(a.jsx)("div",{children:"Posts"}),Object(a.jsx)("p",{}),e,Object(a.jsx)("p",{}),Object(a.jsx)(w,{onSubmit:function(e){t.postAdd(e.post)}})]})},C=Object(O.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{postAdd:function(e){t(Object(v.postAddActionCreator)(e))}}}))(I),M=n(63),D=n(33),E=n(243),F=function(t){var e=Object(j.useState)(!1),n=Object(E.a)(e,2),s=n[0],r=n[1],i=Object(j.useState)(t.status),c=Object(E.a)(i,2),o=c[0],d=c[1];Object(j.useEffect)((function(){d(t.status)}),[t.status]);return Object(a.jsxs)("div",{className:u.a.status,children:[!s&&Object(a.jsx)("div",{children:Object(a.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"------"})}),s&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(o)},value:o})})]})},J=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.authorisedUserId;t||this.props.history.push("/auth"),this.props.getStatus(t)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:u.a.profile,children:[Object(a.jsx)(h,{description:this.props.description,saveAvatar:this.props.saveAvatar}),Object(a.jsx)(F,{status:this.props.status,updateStatus:this.props.updateStatus}),Object(a.jsx)(C,{})]})}}]),n}(d.a.Component),B=Object(D.compose)(Object(O.b)((function(t){return{description:t.profilePage.description,status:t.profilePage.status,authorisedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getStatus:v.getStatus,updateStatus:v.updateStatus}),M.a)(J);e.default=B}}]);
//# sourceMappingURL=4.ad2c4ccd.chunk.js.map