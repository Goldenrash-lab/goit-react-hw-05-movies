"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[699],{8081:function(n,t,e){e.d(t,{HI:function(){return s},IQ:function(){return u},Jh:function(){return p},Od:function(){return x},gH:function(){return d}});var r=e(5861),i=e(7757),a=e.n(i),c=e(5294).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2U4MDI1ZmM0MDMzMTBmYTA2NTU4OWIwMDEwZDZiZSIsInN1YiI6IjY1NzliZTE4NGQyM2RkMDEwMDYwMWZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IynrrUZhiKXNakepSY2p5zx3b2PZ_SpqiFtMiymL-jE"},params:{api_key:"cce8025fc403310fa065589b0010d6be"}});function u(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/3/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/3/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/3/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/3/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/3/trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3828:function(n,t,e){e.d(t,{CK:function(){return f},Fg:function(){return p},XJ:function(){return s}});var r,i,a,c=e(168),u=e(1087),o=e(5867),s=o.ZP.h2(r||(r=(0,c.Z)(["\n  padding-top: 25px;\n  display: flex;\n  justify-content: flex-start;\n  text-transform: uppercase;\n  font-size: 35px;\n"]))),f=o.ZP.ol(i||(i=(0,c.Z)(["\n  line-height: 2;\n  display: grid;\n  padding: 0;\n  justify-content: center;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n\n  & li {\n    list-style-type: none;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    counter-increment: item;\n    border: 1px dashed #000000;\n    max-width: 450px;\n    padding: 5px;\n    transition: all 0.3s;\n  }\n\n  & li:hover {\n    border-color: #ffffff;\n    color: #ffffff;\n    background-color: #000000;\n  }\n  & li:hover::before {\n    background-color: #ffffff;\n    color: #000000;\n  }\n\n  & li:before {\n    content: counter(item);\n\n    /* display: inline-block; */\n    display: flex;\n    justify-content: center;\n    /* flex-direction: row; */\n    align-items: center;\n    width: 20px;\n    height: 20px;\n    font-family: 'Indie Flower', cursive;\n    margin-right: 5px;\n    background-color: #000000;\n    color: #ffffff;\n    font-weight: bold;\n    font-size: 100%;\n    /* padding: 0 8px 8px; */\n    border-radius: 3px;\n    line-height: 1.3;\n\n    transition: all 0.3s;\n  }\n"]))),p=(0,o.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  width: 100%;\n"])))},2699:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(5861),i=e(9439),a=e(7757),c=e.n(a),u=e(2791),o=e(2598),s=e(7689),f=e(1686),p=e(3828),l=e(8081),d=e(184),h=function(){var n=(0,u.useState)(null),t=(0,i.Z)(n,2),e=t[0],a=t[1],h=(0,u.useState)(!1),x=(0,i.Z)(h,2),m=x[0],y=x[1],v=(0,s.TH)();function g(){return(g=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,(0,l.Od)();case 4:t=n.sent,e=t.results,y(!1),a(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),f.Notify.failure(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[m&&(0,d.jsx)(o.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),(0,d.jsx)(p.XJ,{children:"Trending today"}),(0,d.jsx)(p.CK,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(p.Fg,{to:"movies/".concat(n.id),state:v,children:n.title||n.name})},n.id)}))})]})},x=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h,{})})}}}]);
//# sourceMappingURL=699.8d3f8926.chunk.js.map