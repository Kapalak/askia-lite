(this["webpackJsonpaskia-lite"]=this["webpackJsonpaskia-lite"]||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(91),s=n.n(a),r=n(15),c=(n(102),n(2)),o=n(3),i=n(20),l=n(4),d=n(5),u=n(0),j=n(7),h=(n(103),n(104),n(22)),m=n.n(h),b="http://localhost:8080/api/auth/",O=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return m.a.post(b+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return m.a.post(b+"signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}}]),e}()),v=n(26),p=n(46),g=n(1),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(i.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(o.a)(n,[{key:"validationSchema",value:function(){return p.a().shape({username:p.b().required("This field is required!"),password:p.b().required("This field is required!")})}},{key:"handleLogin",value:function(e){var t=this,n=e.username,a=e.password;this.setState({message:"",loading:!0}),O.login(n,a).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.message;return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"card card-container",children:[Object(g.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(g.jsx)(v.d,{initialValues:{username:"",password:""},validationSchema:this.validationSchema,onSubmit:this.handleLogin,children:Object(g.jsxs)(v.c,{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username"}),Object(g.jsx)(v.b,{name:"username",type:"text",className:"form-control"}),Object(g.jsx)(v.a,{name:"username",component:"div",className:"alert alert-danger"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)(v.b,{name:"password",type:"password",className:"form-control"}),Object(g.jsx)(v.a,{name:"password",component:"div",className:"alert alert-danger"})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:[t&&Object(g.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(g.jsx)("span",{children:"Login"})]})}),n&&Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:n})})]})})]})})}}]),n}(u.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:"This is a PoC for SignalR"},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{accessToken:""}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(g.jsx)(j.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(g.jsx)("div",{className:"container",children:this.state.userReady?Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsxs)("h3",{children:[Object(g.jsx)("strong",{children:e.username})," Profile"]})}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(g.jsx)("strong",{children:"Authorities:"}),Object(g.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))})]}):null})}}]),n}(u.Component);function N(){var e=localStorage.getItem("user"),t=null;return e&&(t=JSON.parse(e)),t&&t.accessToken?{Authorization:"Bearer "+t.accessToken}:{Authorization:""}}var y="http://localhost:8080/api/test/",S=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(y+"all")}},{key:"getUserBoard",value:function(){return m.a.get(y+"user",{headers:N()})}},{key:"getModeratorBoard",value:function(){return m.a.get(y+"mod",{headers:N()})}},{key:"getAdminBoard",value:function(){return m.a.get(y+"admin",{headers:N()})}}]),e}()),w={on:function(e,t){document.addEventListener(e,(function(e){return t(e)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&w.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&w.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&w.dispatch("logout")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("header",{className:"jumbotron",children:Object(g.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(i.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")}),w.on("logout",this.logOut)}},{key:"componentWillUnmount",value:function(){w.remove("logout",this.logOut)}},{key:"logOut",value:function(){O.logout(),this.setState({showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(g.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Askia Lite"}),Object(g.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(g.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(g.jsx)("div",{className:"navbar-nav ml-auto",children:Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})})})]}),Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{exact:!0,path:["/","/home"],component:f}),Object(g.jsx)(j.b,{exact:!0,path:"/login",component:x}),Object(g.jsx)(j.b,{exact:!0,path:"/profile",component:k}),Object(g.jsx)(j.b,{path:"/user",component:B}),Object(g.jsx)(j.b,{path:"/mod",component:C}),Object(g.jsx)(j.b,{path:"/admin",component:U})]})})]})}}]),n}(u.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};s.a.render(Object(g.jsx)(r.a,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),M()}},[[231,1,2]]]);
//# sourceMappingURL=main.db82e58e.chunk.js.map