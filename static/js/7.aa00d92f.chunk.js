(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{242:function(e,t,n){e.exports={users:"Users_users__1QPA0",container:"Users_container__3ITbq",item2:"Users_item2__3TkH1",item1:"Users_item1__2COGc",selectedPage:"Users_selectedPage__3mA_Y"}},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(64);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){s=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},305:function(e,t,n){"use strict";n.r(t);var r=n(26),s=n(27),o=n(29),a=n(28),i=n(1),u=n(18),c=n(108),l=function(e){return e.usersPage.users},f=function(e){return e.usersPage.totalUsersCount},p=function(e){return e.usersPage.pageSize},g=function(e){return e.usersPage.currentPage},h=function(e){return e.usersPage.followingUsers},j=n(0),d=n.n(j),b=n(23),m=(n(69),n(15)),w=n(242),U=n.n(w),O=function(e){return Object(i.jsxs)("div",{className:U.a.container,children:[Object(i.jsxs)("div",{className:U.a.item1,children:[Object(i.jsx)(m.b,{to:"/user/"+e.userId,children:Object(i.jsx)("img",{src:"https://images6.fanpop.com/image/photos/37400000/Naruto-Hinata-unohana-the-fanpop-user-37453826-500-484.jpg"})}),Object(i.jsx)("div",{children:e.followcheck?Object(i.jsx)("button",{disabled:e.followingUsers.some((function(t){return t===e.userId})),onClick:function(){e.unfollow(e.userId)},children:"Unfollow"}):Object(i.jsx)("button",{disabled:e.followingUsers.some((function(t){return t===e.userId})),onClick:function(){e.follow(e.userId)},children:"Follow"})})]}),Object(i.jsxs)("div",{className:U.a.item2,children:[Object(i.jsx)("div",{children:e.name}),Object(i.jsx)("div",{children:e.status})]})]})},P=n(243),C=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var s=Object(j.useState)(1),o=Object(P.a)(s,2),a=o[0],u=o[1],c=Math.ceil(t/10),l=10*(a-1)+1,f=10*a,p=n.filter((function(e){return e>=l&&e<=f})).map((function(t){return Object(i.jsx)("span",{className:e.currentPage===t&&U.a.selectedPage,onClick:function(n){e.onPageChange(t)},children:t})}));return Object(i.jsxs)("div",{children:[a>1&&Object(i.jsx)("button",{onClick:function(){return u(a-1)},children:"\xab"}),p,a!=c&&Object(i.jsx)("button",{onClick:function(){return u(a+1)},children:"\xbb"})]})},v=function(e){var t=e.users.map((function(t){return Object(i.jsx)(O,{userId:t.id,status:t.status,name:t.name,followcheck:t.followed,follow:e.follow,unfollow:e.unfollow,followingUsers:e.followingUsers})}));return Object(i.jsxs)("div",{className:U.a.users,children:[e.isFetching?Object(i.jsx)(b.a,{}):null,Object(i.jsx)(C,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChange:e.onPageChange,currentPage:e.currentPage}),t]})},x=n(33),y=n(63),_=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(i.jsx)(v,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.followUser,unfollow:this.props.unfollowUser,onPageChange:this.onPageChange,followingUsers:this.props.followingUsers})}}]),n}(d.a.Component),S=Object(x.compose)(Object(u.b)((function(e){return{users:l(e),pageSize:p(e),totalUsersCount:f(e),currentPage:g(e),followingUsers:h(e)}}),{setCurrentPage:c.setCurrentPage,setTotalUsersCount:c.setTotalUsersCount,getUsers:c.getUsers,followUser:c.followUser,unfollowUser:c.unfollowUser}),y.a)(_);t.default=S}}]);
//# sourceMappingURL=7.aa00d92f.chunk.js.map