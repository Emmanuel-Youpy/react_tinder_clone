(this.webpackJsonptinder_clone=this.webpackJsonptinder_clone||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},76:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(0),s=c.n(n),i=c(26),r=c.n(i),j=(c(64),c(65),c(66),c(46)),o=c.n(j),l=c(104),d=c(47),m=c.n(d),h=c(45),b=c.n(h),u=c(6),p=c(24);var O=function(e){var t=e.backButton,c=Object(u.f)();return Object(a.jsxs)("div",{className:"header",children:[t?Object(a.jsx)(l.a,{onClick:function(){return c.replace(t)},children:Object(a.jsx)(b.a,{fontSize:"large",className:"header_icon"})}):Object(a.jsx)(l.a,{children:Object(a.jsx)(o.a,{className:"header_icon",fontSize:"large"})}),Object(a.jsx)(p.b,{to:"/",children:Object(a.jsx)("img",{className:"header_logo",src:"https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"})}),Object(a.jsx)(p.b,{to:"/chat",children:Object(a.jsx)(l.a,{children:Object(a.jsx)(m.a,{className:"header_icon",fontSize:"large"})})})]})},f=c(25),x=c(48),g=c.n(x),N=(c(76),c(49)),v=c.n(N).a.initializeApp({apiKey:"AIzaSyCcf_6cLw4u4PGfN77HJy712xKn5RTkQbs",authDomain:"tinder-clone-5d828.firebaseapp.com",databaseURL:"https://tinder-clone-5d828.firebaseio.com",projectId:"tinder-clone-5d828",storageBucket:"tinder-clone-5d828.appspot.com",messagingSenderId:"49286061796",appId:"1:49286061796:web:98db402480fe3be909d6f1",measurementId:"G-DHGEZC0NZQ"}).firestore();var w=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=v.collection("people").onSnapshot((function(e){return s(e.docs.map((function(e){return e.data()})))}));return function(){e()}}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"tinderCards_cardContainer",children:c.map((function(e){return Object(a.jsx)(g.a,{className:"swipe",preventSwipe:["up","down"],children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"card",children:Object(a.jsx)("h3",{children:e.name})})},e.name)}))})})},S=(c(87),c(88),c(105));var _=function(e){var t=e.name,c=e.message,n=e.profilePic,s=e.timestamp;return Object(a.jsx)(p.b,{to:"/chat/".concat(t),children:Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsx)(S.a,{className:"chat_image",src:n}),Object(a.jsxs)("div",{className:"chat_details",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:c})]}),Object(a.jsx)("p",{className:"chat_timestamp",children:s})]})})};var y=function(){return Object(a.jsxs)("div",{className:"chats",children:[Object(a.jsx)(_,{name:"Emily",message:"how are you today \ud83d\ude0a",timestamp:"32 minutes ago",profilePic:"https://i.insider.com/5f6f4d7f74fe5b0018a8da62?width=1100&format=jpeg&auto=webp"}),Object(a.jsx)(_,{name:"Nikki",message:"hello \u2764",timestamp:"41 minutes ago",profilePic:"https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg"}),Object(a.jsx)(_,{name:"Riri",message:"My \u2764",timestamp:"49 minutes ago",profilePic:"https://media.glamour.com/photos/5f3817383acddfd2070cb733/6:7/w_2231,h_2603,c_limit/rihanna.jpg"}),Object(a.jsx)(_,{name:"Cardi",message:"Where you at?",timestamp:"55 minutes ago",profilePic:"https://pyxis.nymag.com/v1/imgs/27d/98e/e48494c9a28fe6dc86f23618875ca03694-cardi-b.rsquare.w330.jpg"})]})},k=c(50),B=c.n(k),C=c(51),z=c.n(C),I=c(52),P=c.n(I),F=c(53),D=c.n(F),E=c(54),L=c.n(E);c(89);var T=function(){return Object(a.jsxs)("div",{className:"swipeButtons",children:[Object(a.jsx)(l.a,{className:"swipeButtons_repeat",children:Object(a.jsx)(B.a,{fontSize:"large"})}),Object(a.jsx)(l.a,{className:"swipeButtons_left",children:Object(a.jsx)(z.a,{fontSize:"large"})}),Object(a.jsx)(l.a,{className:"swipeButtons_star",children:Object(a.jsx)(P.a,{fontSize:"large"})}),Object(a.jsx)(l.a,{className:"swipeButtons_right",children:Object(a.jsx)(D.a,{fontSize:"large"})}),Object(a.jsx)(l.a,{className:"swipeButtons_lightening",children:Object(a.jsx)(L.a,{fontSize:"large"})})]})},A=c(20);c(90);var G=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([{name:"Nikki",image:"https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg",message:"yo"},{name:"Nikki",image:"https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg",message:"Am at your place"},{message:"On my way"}]),r=Object(f.a)(i,2),j=r[0],o=r[1];return Object(a.jsxs)("div",{className:"chatScreen",children:[Object(a.jsx)("p",{className:"chatScreen_timestamp",children:"You matched with ellen on 26/08/20"}),j.map((function(e){return e.name?Object(a.jsxs)("div",{className:"chatScreen_message",children:[Object(a.jsx)(S.a,{className:"chatScreen_image",alt:e.name,src:e.image}),Object(a.jsx)("p",{className:"chatScreen_text",children:e.message})]}):Object(a.jsx)("div",{className:"chatScreen_message",children:Object(a.jsx)("p",{className:"chatScreen_textUser",children:e.message})})})),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"chatScreen_input",children:[Object(a.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},className:"chatScreen_inputField",type:"text",placeholder:"Type a message"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(A.a)(j),[{message:c}])),s("")},className:"inputButton",children:"Send"})]})})]})};var J=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsxs)(u.a,{path:"/chat/:person",children:[Object(a.jsx)(O,{backButton:"/chat"}),Object(a.jsx)(G,{})]}),Object(a.jsxs)(u.a,{path:"/chat",children:[Object(a.jsx)(O,{backButton:"/"}),Object(a.jsx)(y,{})]}),Object(a.jsxs)(u.a,{path:"/",children:[Object(a.jsx)(O,{}),Object(a.jsx)(w,{}),Object(a.jsx)(T,{})]})]})})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),R()}},[[91,1,2]]]);
//# sourceMappingURL=main.84a45a92.chunk.js.map