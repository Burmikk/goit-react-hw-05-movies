"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[293],{293:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),c=n(439),i=n(757),a=n.n(i),s=n(791),o=n(185),u="search-form_form__0My9K",f="search-form_input__bVLvo",m="search-form_btn__WVSW6",l=n(184),v=function(e){var t=e.onSearch,n=(0,s.useState)(""),r=(0,c.Z)(n,2),i=r[0],a=r[1],v=(0,s.useRef)();(0,s.useEffect)((function(){v.current.focus()}),[]);return(0,l.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),t(i),a("")},children:[(0,l.jsx)("input",{className:f,type:"text",onChange:function(e){var t=e.target.value;a(t)},value:i,ref:v}),(0,l.jsx)("button",{className:m,children:(0,l.jsx)(o.dVI,{})})]})},h=n(87),_=n(268),p=n(297),d=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1],o=(0,s.useState)(""),u=(0,c.Z)(o,2),f=u[0],m=u[1],d=(0,h.lr)(),g=(0,c.Z)(d,2),x=g[0],b=g[1],j=x.get("search");(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.UN)(j);case 3:t=e.sent,n=t.data,i(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message||"Something wrong! Try later!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();j&&e()}),[j]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{onSearch:function(e){e.trim()&&b({search:e})}}),f&&(0,l.jsx)("p",{children:f}),n.length>0&&(0,l.jsx)(p.Z,{movies:n}),j&&0===n.length&&!f&&(0,l.jsxs)("p",{children:["Cant find movie: ",j]})]})}},297:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87),c=n(689),i="movie-list_list__Bqqy4",a="movie-list_item__zVeEK",s="movie-list_title__TqaCp",o="movie-list_img__fmKtD",u=n(184),f=function(e){var t=e.movies,n=(0,c.TH)(),f=t.map((function(e){var t=e.id,c=e.title,i=e.poster_path;return(0,u.jsx)("li",{className:a,children:(0,u.jsxs)(r.rU,{state:{from:n},to:"/movies/".concat(t),children:[(0,u.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/original".concat(i),alt:"",width:"300"}),(0,u.jsx)("p",{className:s,children:c})]})},t)}));return(0,u.jsx)("ul",{className:i,children:f})}},268:function(e,t,n){n.d(t,{Df:function(){return c},JI:function(){return i},M1:function(){return a},UN:function(){return o},tx:function(){return s}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"85b4dc1af4e574bfc90c25d3ef4bf4bc"}}),c=function(){return r.get("/trending/movie/day")},i=function(e){return r.get("/movie/".concat(e))},a=function(e){return r.get("/movie/".concat(e,"/credits"))},s=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}}}]);
//# sourceMappingURL=293.980f31d0.chunk.js.map