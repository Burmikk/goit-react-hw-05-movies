"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(861),c=n(439),i=n(757),u=n.n(i),a=n(791),o=n(689),s=n(268),f=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1],v=(0,o.UO)();(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.tx)(v.movieId);case 3:t=e.sent,n=t.data,i(n.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[v.movieId]);var h=[];return 0!==n.length&&(h=n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:t}),(0,f.jsx)("p",{children:n})]},r)}))),(0,f.jsx)("ul",{children:n.length?h:"We dont have any reviews for this movie"})}},268:function(e,t,n){n.d(t,{Df:function(){return c},JI:function(){return i},M1:function(){return u},UN:function(){return o},tx:function(){return a}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"85b4dc1af4e574bfc90c25d3ef4bf4bc"}}),c=function(){return r.get("/trending/movie/day")},i=function(e){return r.get("/movie/".concat(e))},u=function(e){return r.get("/movie/".concat(e,"/credits"))},a=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}}}]);
//# sourceMappingURL=186.9f7332a5.chunk.js.map