(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4440:function(e,t){var r;/*!
Copyright (c) 2018 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},2492:function(e,t,r){Promise.resolve().then(r.bind(r,8561))},8561:function(e,t,r){"use strict";let i,o;r.r(t),r.d(t,{default:function(){return eZ}});var n,s=r(7437),a=r(6385),l=r.n(a);r(1359);var c=r(2265),d=r(5824),u=r(4440),p=r.n(u),m=r(4033),f=r(1396),h=r.n(f),x=r(4962),g=r.n(x),y=r(6691),b=r.n(y);let v={visible:e=>({opacity:1,transition:{delay:.12*e},ease:"easeInOut"}),hidden:{opacity:0}};function w(e,t,r,i){let o=(0,m.usePathname)()===t;return(0,s.jsx)(d.E.li,{className:"flex-1",variants:v,initial:"hidden",animate:"visible",custom:r,children:(0,s.jsx)(h(),{href:t,className:"block tracking-wider uppercase py-2 px-4 text-center text-xs hover:opacity-80 transition-all duration-300 ".concat(o?"text-white/80":"text-white/50"),target:t.startsWith("http")?"_blank":"",onClick:()=>i(!1),children:e})})}function j(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 absolute text-neutral-100",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e,children:[(0,s.jsx)("path",{d:"M2.5 2.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M2.5 7.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M2.5 12.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function E(e){return(0,s.jsxs)("svg",{className:"h-5 w-5 absolute text-neutral-100",viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",...e,children:[(0,s.jsx)("path",{d:"M18 6L6 18"}),(0,s.jsx)("path",{d:"M6 6l12 12"})]})}var k=()=>{let[e,t]=(0,c.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"border border-white/5 fixed transition-all duration-300 p-2 top-0 inset-x-0 z-[100] backdrop-blur-xl fixed w-full",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,s.jsxs)("button",{onClick:()=>t(!e),className:p()(g().burger,"transform inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300"),"aria-controls":"mobile-menu","aria-expanded":"false",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,s.jsx)(j,{"data-hide":e}),(0,s.jsx)(E,{"data-hide":!e})]})}),(0,s.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-between",children:[(0,s.jsx)(h(),{href:"/",className:"flex flex-row items-center space-x-1.5",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b(),{src:"static/icons/icon.svg",alt:"Codex",width:32,height:32}),(0,s.jsx)("h2",{className:"flex items-center tracking-wide uppercase font-semibold",children:"Codex"})]})}),(0,s.jsxs)("ul",{className:"hidden sm:flex items-center",children:[w("Home","/",0),w("iOS","/ios",1),w("Android","/android",2),(0,s.jsx)("li",{className:"flex-1",children:(0,s.jsx)(h(),{href:"https://discord.gg/robloxexploits",target:"_blank",children:(0,s.jsx)(d.E.button,{variants:v,custom:1,initial:"hidden",animate:"visible",className:"whitespace-nowrap ml-2 text-xs text-white/90 transition-all duration-300 hover:bg-white/5 uppercase rounded-lg border border border-white/10 px-5 py-3",children:"Discord"})})})]})]})]})}),(0,s.jsx)(d.E.div,{className:"".concat(e?"block":"hidden pointer-events-none"," sm:hidden"),initial:{opacity:0,height:0},animate:{opacity:e?1:0,height:e?"auto":0},transition:{duration:.3,ease:"easeInOut"},children:(0,s.jsxs)("ul",{className:"px-2 pt-2 pb-3 space-y-1 border-t border-white/5",children:[w("Home","/",0,t),w("iOS","/ios",1,t),w("Android","/android",2,t),w("Discord","https://discord.gg/robloxexploits",3,t)]})})]})})},C=r(1332),N=r(4132),O=r(538);function P(){let e=(0,c.useRef)(!1);return(0,O.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var _=r(8243),R=r(961);class A extends c.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function $({children:e,isPresent:t}){let r=(0,c.useId)(),i=(0,c.useRef)(null),o=(0,c.useRef)({width:0,height:0,top:0,left:0});return(0,c.useInsertionEffect)(()=>{let{width:e,height:n,top:s,left:a}=o.current;if(t||!i.current||!e||!n)return;i.current.dataset.motionPopId=r;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),c.createElement(A,{isPresent:t,childRef:i,sizeRef:o},c.cloneElement(e,{ref:i}))}let S=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:o,presenceAffectsLayout:n,mode:s})=>{let a=(0,R.h)(L),l=(0,c.useId)(),d=(0,c.useMemo)(()=>({id:l,initial:t,isPresent:r,custom:o,onExitComplete:e=>{for(let t of(a.set(e,!0),a.values()))if(!t)return;i&&i()},register:e=>(a.set(e,!1),()=>a.delete(e))}),n?void 0:[r]);return(0,c.useMemo)(()=>{a.forEach((e,t)=>a.set(t,!1))},[r]),c.useEffect(()=>{r||a.size||!i||i()},[r]),"popLayout"===s&&(e=c.createElement($,{isPresent:r},e)),c.createElement(_.O.Provider,{value:d},e)};function L(){return new Map}var z=r(781),M=r(3276),F=r(8704);let I=e=>e.key||"",D=({children:e,custom:t,initial:r=!0,onExitComplete:i,exitBeforeEnter:o,presenceAffectsLayout:n=!0,mode:s="sync"})=>{o&&(s="wait",(0,F.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[a]=function(){let e=P(),[t,r]=(0,c.useState)(0),i=(0,c.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,c.useCallback)(()=>N.Z_.postRender(i),[i]),t]}(),l=(0,c.useContext)(z.p).forceRender;l&&(a=l);let d=P(),u=function(e){let t=[];return c.Children.forEach(e,e=>{(0,c.isValidElement)(e)&&t.push(e)}),t}(e),p=u,m=new Set,f=(0,c.useRef)(p),h=(0,c.useRef)(new Map).current,x=(0,c.useRef)(!0);if((0,O.L)(()=>{x.current=!1,function(e,t){e.forEach(e=>{let r=I(e);t.set(r,e)})}(u,h),f.current=p}),(0,M.z)(()=>{x.current=!0,h.clear(),m.clear()}),x.current)return c.createElement(c.Fragment,null,p.map(e=>c.createElement(S,{key:I(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:n,mode:s},e)));p=[...p];let g=f.current.map(I),y=u.map(I),b=g.length;for(let e=0;e<b;e++){let t=g[e];-1===y.indexOf(t)&&m.add(t)}return"wait"===s&&m.size&&(p=[]),m.forEach(e=>{if(-1!==y.indexOf(e))return;let r=h.get(e);if(!r)return;let o=g.indexOf(e);p.splice(o,0,c.createElement(S,{key:I(r),isPresent:!1,onExitComplete:()=>{h.delete(e),m.delete(e);let t=f.current.findIndex(t=>t.key===e);if(f.current.splice(t,1),!m.size){if(f.current=u,!1===d.current)return;a(),i&&i()}},custom:t,presenceAffectsLayout:n,mode:s},r))}),p=p.map(e=>{let t=e.key;return m.has(t)?e:c.createElement(S,{key:I(e),isPresent:!0,presenceAffectsLayout:n,mode:s},e)}),"production"!==C.O&&"wait"===s&&p.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),c.createElement(c.Fragment,null,m.size?p:p.map(e=>(0,c.cloneElement)(e)))},H={data:""},B=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||H,T=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,W=/\/\*[^]*?\*\/|  +/g,U=/\n+/g,Y=(e,t)=>{let r="",i="",o="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+s+";":i+="f"==n[1]?Y(s,n):n+"{"+Y(s,"k"==n[1]?"":t)+"}":"object"==typeof s?i+=Y(s,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Y.p?Y.p(n,s):n+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+i},Z={},q=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+q(e[r]);return t}return e},G=(e,t,r,i,o)=>{var n;let s=q(e),a=Z[s]||(Z[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!Z[a]){let t=s!==e?e:(e=>{let t,r,i=[{}];for(;t=T.exec(e.replace(W,""));)t[4]?i.shift():t[3]?(r=t[3].replace(U," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(U," ").trim();return i[0]})(e);Z[a]=Y(o?{["@keyframes "+a]:t}:t,r?"":"."+a)}let l=r&&Z.g?Z.g:null;return r&&(Z.g=Z[a]),n=Z[a],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=i?n+t.data:t.data+n),a},V=(e,t,r)=>e.reduce((e,i,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":Y(e,""):!1===e?"":e}return e+i+(null==n?"":n)},"");function J(e){let t=this||{},r=e.call?e(t.p):e;return G(r.unshift?r.raw?V(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,B(t.target),t.g,t.o,t.k)}J.bind({g:1});let K,Q,X,ee=J.bind({k:1});function et(e,t){let r=this||{};return function(){let i=arguments;function o(n,s){let a=Object.assign({},n),l=a.className||o.className;r.p=Object.assign({theme:Q&&Q()},a),r.o=/ *go\d+/.test(l),a.className=J.apply(r,i)+(l?" "+l:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),X&&c[0]&&X(a),K(c,a)}return t?t(o):o}}var er=e=>"function"==typeof e,ei=(e,t)=>er(e)?e(t):e,eo=(i=0,()=>(++i).toString()),en=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},es=new Map,ea=e=>{if(es.has(e))return;let t=setTimeout(()=>{es.delete(e),ep({type:4,toastId:e})},1e3);es.set(e,t)},el=e=>{let t=es.get(e);t&&clearTimeout(t)},ec=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&el(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?ec(e,{type:1,toast:r}):ec(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?ea(i):e.toasts.forEach(e=>{ea(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},ed=[],eu={toasts:[],pausedAt:void 0},ep=e=>{eu=ec(eu,e),ed.forEach(e=>{e(eu)})},em={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ef=(e={})=>{let[t,r]=(0,c.useState)(eu);(0,c.useEffect)(()=>(ed.push(r),()=>{let e=ed.indexOf(r);e>-1&&ed.splice(e,1)}),[t]);let i=t.toasts.map(t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||em[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:i}},eh=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||eo()}),ex=e=>(t,r)=>{let i=eh(t,e,r);return ep({type:2,toast:i}),i.id},eg=(e,t)=>ex("blank")(e,t);eg.error=ex("error"),eg.success=ex("success"),eg.loading=ex("loading"),eg.custom=ex("custom"),eg.dismiss=e=>{ep({type:3,toastId:e})},eg.remove=e=>ep({type:4,toastId:e}),eg.promise=(e,t,r)=>{let i=eg.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(eg.success(ei(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e)).catch(e=>{eg.error(ei(t.error,e),{id:i,...r,...null==r?void 0:r.error})}),e};var ey=(e,t)=>{ep({type:1,toast:{id:e,height:t}})},eb=()=>{ep({type:5,time:Date.now()})},ev=e=>{let{toasts:t,pausedAt:r}=ef(e);(0,c.useEffect)(()=>{if(r)return;let e=Date.now(),i=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&eg.dismiss(t.id);return}return setTimeout(()=>eg.dismiss(t.id),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[t,r]);let i=(0,c.useCallback)(()=>{r&&ep({type:6,time:Date.now()})},[r]),o=(0,c.useCallback)((e,r)=>{let{reverseOrder:i=!1,gutter:o=8,defaultPosition:n}=r||{},s=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),a=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<a&&e.visible).length;return s.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:ey,startPause:eb,endPause:i,calculateOffset:o}}},ew=ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ej=ee`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eE=ee`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ek=et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ew} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ej} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,eC=ee`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,eN=et("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${eC} 1s linear infinite;
`,eO=ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,eP=ee`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,e_=et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eP} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,eR=et("div")`
  position: absolute;
`,eA=et("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,e$=ee`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eS=et("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${e$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,eL=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?c.createElement(eS,null,t):t:"blank"===r?null:c.createElement(eA,null,c.createElement(eN,{...i}),"loading"!==r&&c.createElement(eR,null,"error"===r?c.createElement(ek,{...i}):c.createElement(e_,{...i})))},ez=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eM=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eF=et("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eI=et("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eD=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=en()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ez(r),eM(r)];return{animation:t?`${ee(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ee(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eH=c.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?eD(e.position||t||"top-center",e.visible):{opacity:0},n=c.createElement(eL,{toast:e}),s=c.createElement(eI,{...e.ariaProps},ei(e.message,e));return c.createElement(eF,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof i?i({icon:n,message:s}):c.createElement(c.Fragment,null,n,s))});n=c.createElement,Y.p=void 0,K=n,Q=void 0,X=void 0;var eB=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let n=c.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:n,className:t,style:r},o)},eT=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:en()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},eW=J`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eU=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,containerStyle:n,containerClassName:s})=>{let{toasts:a,handlers:l}=ev(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(r=>{let n=r.position||t,s=eT(n,l.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return c.createElement(eB,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?eW:"",style:s},"custom"===r.type?ei(r.message,r):o?o(r):c.createElement(eH,{toast:r,position:n}))}))};let eY={hidden:{opacity:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};var eZ=e=>{let{children:t}=e,r=(0,c.useRef)(null);return(0,s.jsx)(D,{mode:"wait",children:(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("meta",{name:"description",content:"Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"}),(0,s.jsx)("meta",{name:"theme-color",content:"#d32642"}),(0,s.jsx)("meta",{name:"robots",content:"index,follow"}),(0,s.jsx)("link",{rel:"manifest",href:"manifest.json"}),(0,s.jsx)("link",{rel:"canonical",href:"https://www.codex.lol"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.codex.lol"}),(0,s.jsx)("meta",{property:"og:title",content:"Codex Roblox Executor - #1 Free Android, iOS & PC Exploit"}),(0,s.jsx)("meta",{property:"og:description",content:"Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-32x32.png"}),(0,s.jsx)("title",{children:"Codex Roblox Executor - #1 Free Android, iOS & PC Exploit"})]}),(0,s.jsxs)("body",{className:l().className,children:[(0,s.jsx)("svg",{width:"0",height:"0",children:(0,s.jsxs)("linearGradient",{id:"red-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[(0,s.jsx)("stop",{stopColor:"#e22551",offset:"0%"}),(0,s.jsx)("stop",{stopColor:"#ba3f5c",offset:"100%"})]})}),(0,s.jsx)(k,{}),(0,s.jsxs)(d.E.main,{variants:eY,initial:"hidden",animate:"enter",exit:"exit",transition:{type:"linear",duration:1},"data-scroll-container":"true",ref:r,children:[(0,s.jsx)(eU,{position:"bottom-right"}),(0,s.jsx)(d.E.div,{initial:"initial",animate:"visible",variants:eY,children:t})]})]})]})})}},1359:function(){},4962:function(e){e.exports={burger:"mobile-menu_burger__A_ajg"}},6385:function(e){e.exports={style:{fontFamily:"'__Manrope_e5ef9a', '__Manrope_Fallback_e5ef9a'",fontStyle:"normal"},className:"__className_e5ef9a"}},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[414,971,938,744],function(){return e(e.s=2492)}),_N_E=e.O()}]);