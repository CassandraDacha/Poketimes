(this.webpackJsonppoketimes=this.webpackJsonppoketimes||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),l=(a(35),a(10)),c=a(11),s=a(14),u=a(12),m=a(15),p=a(7),d=a(9),E=Object(d.f)((function(e){return i.a.createElement("nav",{className:"nav-wrapper red darken-3"},i.a.createElement("div",{className:"container"},i.a.createElement(p.b,{className:"brand-logo",to:"/"},"Poke' Times"),i.a.createElement("ul",{className:"right"},i.a.createElement("li",null,i.a.createElement(p.c,{exact:!0,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(p.c,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(p.c,{to:"/contact"},"Contact")))))})),h=a(27),b=a.n(h),v=a(13),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.posts,t=e.length?e.map((function(e){return i.a.createElement("div",{className:"post card",key:e.id},i.a.createElement("img",{src:b.a,alt:"A Pokeball"}),i.a.createElement("div",{className:"card-content"},i.a.createElement(p.b,{to:"/"+e.id},i.a.createElement("span",{className:"card-title red-text"},e.title)),i.a.createElement("p",null,e.body)))})):i.a.createElement("div",{className:"center"},"No posts to show");return i.a.createElement("div",null,i.a.createElement("div",{className:"container home"},i.a.createElement("h4",{className:"center"},"Home"),t))}}]),t}(n.Component),g=Object(v.b)((function(e){return{posts:e.posts}}))(f),N=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("h4",{className:"center"},"About"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))},O=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("h4",{className:"center"},"Contact"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){a.props.deletePost(a.props.post.id),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.post?i.a.createElement("div",{className:"post"},i.a.createElement("h4",{className:"center"},this.props.post.title),i.a.createElement("p",null,this.props.post.body),i.a.createElement("div",{className:"center"},i.a.createElement("button",{className:"btn grey",onClick:this.handleClick},"Delete Post"))):i.a.createElement("div",{className:"center"},"Loading post...");return i.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),y=Object(v.b)((function(e,t){var a=t.match.params.post_id;return{post:e.posts.find((function(e){return e.id===a}))}}),(function(e){return{deletePost:function(t){return e(function(e){return{type:"DELETE_POST",id:e}}(t))}}}))(j),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(E,null),i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/",component:g}),i.a.createElement(d.a,{path:"/about",component:N}),i.a.createElement(d.a,{path:"/contact",component:O}),i.a.createElement(d.a,{path:"/:post_id",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(19),w=a(29),C={posts:[{id:"1",title:"Squirtle Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"2",title:"Charmander Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"3",title:"a Helix Fossil was Found",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;if(console.log(t),"DELETE_POST"===t.type){var a=e.posts.filter((function(e){return e.id!==t.id}));return Object(w.a)({},e,{posts:a})}return e},x=Object(q.b)(L);o.a.render(i.a.createElement(v.a,{store:x},i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.61a7ae53.chunk.js.map