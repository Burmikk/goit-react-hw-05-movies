"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[710],{710:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),i=n(439),c=n(757),u=n.n(c),a=n(791),o=n(184),s=function(t){var e=t.onSearch,n=(0,a.useState)(""),r=(0,i.Z)(n,2),c=r[0],u=r[1],s=(0,a.useRef)();(0,a.useEffect)((function(){s.current.focus()}),[]);return(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c),u("")},children:[(0,o.jsx)("input",{type:"text",onChange:function(t){var e=t.target.value;u(e)},value:c,ref:s}),(0,o.jsx)("button",{children:"Find"})]})},f=n(87),l=n(268),v=n(297),h=function(){var t=(0,a.useState)([]),e=(0,i.Z)(t,2),n=e[0],c=e[1],h=(0,a.useState)(""),m=(0,i.Z)(h,2),p=m[0],d=m[1],g=(0,f.lr)(),x=(0,i.Z)(g,2),_=x[0],j=x[1],b=_.get("search");(0,a.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.UN)(b);case 3:e=t.sent,n=e.data,c(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d(t.t0.message||"Something wrong! Try later!");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();b&&t()}),[b]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{onSearch:function(t){t.trim()&&j({search:t})}}),p&&(0,o.jsx)("p",{children:p}),n.length>0&&(0,o.jsx)("ul",{children:(0,o.jsx)(v.Z,{movies:n})}),b&&0===n.length&&!p&&(0,o.jsxs)("p",{children:["Cant find movie: ",b]})]})}},297:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(87),i=n(689),c="movie-list_item__zVeEK",u="movie-list_title__TqaCp",a=n(184),o=function(t){var e=t.movies,n=(0,i.TH)();return e.map((function(t){var e=t.id,i=t.title,o=t.poster_path;return(0,a.jsx)("li",{className:c,children:(0,a.jsxs)(r.rU,{state:{from:n},to:"/movies/".concat(e),children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(o),alt:"",width:"300"}),(0,a.jsx)("p",{className:u,children:i})]})},e)}))}},268:function(t,e,n){n.d(e,{Df:function(){return i},JI:function(){return c},M1:function(){return u},UN:function(){return o},tx:function(){return a}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"85b4dc1af4e574bfc90c25d3ef4bf4bc"}}),i=function(){return r.get("/trending/movie/day")},c=function(t){return r.get("/movie/".concat(t))},u=function(t){return r.get("/movie/".concat(t,"/credits"))},a=function(t){return r.get("/movie/".concat(t,"/reviews"))},o=function(t){return r.get("/search/movie",{params:{query:t}})}}}]);
//# sourceMappingURL=710.16e064ff.chunk.js.map