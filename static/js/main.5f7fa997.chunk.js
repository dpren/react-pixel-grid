(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{25:function(e,t,n){e.exports=n(58)},30:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(20),c=n.n(u),i=(n(30),n(5)),o=n(22),f=n(23),s=n(24),l=n(21),m=n.n(l),b=function(e){var t=e.data,n=void 0===t?[]:t,u=e.options,c=void 0===u?{}:u,i=Object(s.a)(e,["data","options"]),l=Object(r.useRef)({}),b=Object(r.useRef)(),p=Object(r.useRef)([]);return Object(r.useEffect)((function(){return l.current=m()(n,Object(f.a)({},c,{root:b.current})),function(){p.current=[],l.current.canvas&&l.current.canvas.remove()}}),[].concat(Object(o.a)(Object.values(c).flat()),[n.length])),Object(r.useEffect)((function(){l.current.frame&&l.current.frame((function(){var e=p.current.shift();e&&l.current.update(e)}))}),[]),Object(r.useEffect)((function(){p.current.length>30&&(console.warn("PixelGrid update queue > 30; flushing"),p.current=[]),p.current.push(n)})),a.a.createElement("div",Object.assign({ref:b},i))},p=function(e){return Array(Math.pow(e,2)).fill(0)},v=p(150);var j="#f00",O="#0f0",d="#00f",g="#000",h=function(){var e=Object(r.useState)(v),t=Object(i.a)(e,2),n=t[0],u=t[1],c=Object(r.useState)(4),o=Object(i.a)(c,2),f=o[0],s=o[1],l=Object(r.useState)(1),m=Object(i.a)(l,2),h=m[0],E=m[1],x=Object(r.useState)(150),y=Object(i.a)(x,2),M=y[0],S=y[1],w=Object(r.useState)(60),C=Object(i.a)(w,2),N=C[0],T=C[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return u(p(M||0).fill(0).map(Math.random))}),1e3/(N||1e-5));return function(){return clearInterval(e)}}),[M,N]),a.a.createElement(a.a.Fragment,null,"px size: ",a.a.createElement("input",{type:"number",value:f,min:0,max:20,onChange:function(e){return s(Math.min(20,Number(e.currentTarget.value)))}}),"padding: ",a.a.createElement("input",{type:"number",value:h,min:0,max:20,onChange:function(e){return E(Math.min(20,Number(e.currentTarget.value)))}}),"resolution: ",a.a.createElement("input",{type:"number",value:M,min:1,max:600,onChange:function(e){return S(Math.min(600,Number(e.currentTarget.value)))}}),"fps: ",a.a.createElement("input",{type:"number",value:N,min:1,max:100,onChange:function(e){return T(Math.min(80,Number(e.currentTarget.value)))}}),a.a.createElement(b,{data:n,options:{size:f,padding:h,background:[1,1,1]}}),a.a.createElement(b,{data:[g,j,g,O,g,d,j,g,O,g,d,g,g,j,g,O,g,d,j,g,O,g,d,g,g,j,g,O,g,d,j,g,O,g,d,g],options:{padding:0}}))};c.a.render(a.a.createElement(h,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5f7fa997.chunk.js.map