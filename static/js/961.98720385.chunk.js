"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{961:function(e,t,n){n.r(t);var r=n(861),i=n(439),c=n(757),s=n.n(c),a=n(791),o=n(689),u=n(268),d=n(87),h=n(184);t.default=function(){var e,t=(0,a.useState)([]),n=(0,i.Z)(t,2),c=n[0],l=n[1],f=(0,a.useState)(""),v=(0,i.Z)(f,2),m=v[0],p=v[1],x=(0,o.UO)(),j=(0,o.s0)(),g=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.JI)(x.movieId);case 3:t=e.sent,n=t.data,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p(e.t0.message||"Something wrong! Try later!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[x.movieId]);var w=c.poster_path,b=c.title,_=c.overview,k=c.vote_average,U=c.genres,y=(void 0===U?[]:U).map((function(e){var t=e.id,n=e.name;return(0,h.jsx)("li",{children:n},t)}));return(0,h.jsx)(h.Fragment,{children:m?(0,h.jsxs)("p",{children:[m," "]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{onClick:function(){return j(g)},children:"Go back"}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(w),alt:"",width:"300"}),(0,h.jsx)("h2",{children:b}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*k),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:_}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("ul",{children:y}),(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{state:{from:g},to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{state:{from:g},to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.j3,{})]})})}},268:function(e,t,n){n.d(t,{Df:function(){return i},JI:function(){return c},M1:function(){return s},UN:function(){return o},tx:function(){return a}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"85b4dc1af4e574bfc90c25d3ef4bf4bc"}}),i=function(){return r.get("/trending/movie/day")},c=function(e){return r.get("/movie/".concat(e))},s=function(e){return r.get("/movie/".concat(e,"/credits"))},a=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}}}]);
//# sourceMappingURL=961.98720385.chunk.js.map