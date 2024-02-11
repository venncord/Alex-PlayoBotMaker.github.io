(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{5620:function(_,e,o){"use strict";o.d(e,{Z:function(){return h}});var t=o(7437),r=o(753),m=o(5824),l=o(2265);function h(_){let{question:e,answer:o}=_,[h,a]=(0,l.useState)(!1);return(0,t.jsxs)("details",{className:"group",children:[(0,t.jsxs)("summary",{onClick:()=>a(!h),className:"flex items-center justify-between p-4 cursor-pointer border-b border-neutral-800 transition-all hover:bg-neutral-900/10 hover:border-neutral-800/50 duration-300",children:[(0,t.jsx)("span",{className:"tracking-tight text-neutral-300",children:e}),(0,t.jsx)(r.Z,{className:"opacity-50 flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"})]}),(0,t.jsx)(m.E.div,{className:"".concat(h?"block":"hidden"," p-4 text-neutral-500 tracking-tight text-left"),animate:{opacity:h?1:0},transition:{duration:.3},children:o})]})}},7451:function(_,e,o){"use strict";var t=o(7437),r=o(2265),m=o(2169);function l(){return(0,t.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",height:"100px",width:"100px",viewBox:"0 0 100 100",className:"h-12 w-12 text-white",children:[(0,t.jsx)("path",{className:"stroke-solid",fill:"none",stroke:"white",d:"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"}),(0,t.jsx)("path",{className:"stroke-dotted",fill:"none",stroke:"white",d:"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"}),(0,t.jsx)("path",{className:"icon",fill:"white",d:"M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"})]})}e.Z=_=>{let{videoId:e,platform:o}=_,[h,a]=(0,r.useState)(!1);return(0,t.jsx)("div",{className:"relative overflow-hidden rounded shadow h-full w-full rounded-xl shadow-xl ring-1 ring-neutral-400/10 md:-ml-4 lg:-ml-0 min-h-[20rem]",children:h?(0,t.jsx)("iframe",{className:"h-full w-full",src:"https://www.youtube.com/embed/".concat(e,"?autoplay=1"),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,t.jsx)("div",{className:(0,m.cn)("video-facade-"+o.toLowerCase(),"video-facade flex h-full w-full cursor-pointer items-center justify-center bg-black"),onClick:function(){a(!0)},children:(0,t.jsx)(l,{})})})}},8722:function(_,e,o){"use strict";o.d(e,{Z:function(){return l}});var t=o(7437),r=o(1396),m=o.n(r);function l(){return(0,t.jsxs)("footer",{className:"w-full bg-gradient-to-t from-rose-950/[.15] to-transparent",children:[(0,t.jsxs)("div",{className:"mx-auto flex max-w-[85rem] flex-row items-center justify-between px-6 py-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,t.jsxs)("span",{className:"text-sm text-neutral-300",children:["\xa9 ",new Date().getFullYear()," Codex - All rights reserved."]}),(0,t.jsx)("p",{className:"text-xs text-neutral-400",children:"Made with ❤️ by Codex LLC"})]}),(0,t.jsx)(m(),{href:"mailto:",passHref:!0,className:"text-xs text-neutral-400 hover:text-neutral-100",children:(0,t.jsx)("button",{className:"outline-button",children:"Contact us"})})]}),(0,t.jsx)("div",{className:"h-1 bg-[radial-gradient(closest-side,#df5898,#ba3f5c,#fad7d7,transparent)] opacity-50"})]})}},3938:function(_,e,o){"use strict";o.d(e,{lr:function(){return d},KI:function(){return x},d$:function(){return u},Pz:function(){return p},am:function(){return c}});var t=o(7437),r=o(2265),m=o(9394),l=o(9370),h=o(2169);let a=(0,o(9213).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-neutral-300",{variants:{variant:{default:"shadow bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90",destructive:"shadow-sm bg-red-900 text-neutral-50 hover:bg-red-900/90",outline:"border shadow-sm border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50",secondary:"shadow-sm bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80",ghost:"hover:bg-neutral-800 hover:text-neutral-50",link:"underline-offset-4 hover:underline text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),n=r.forwardRef((_,e)=>{let{className:o,variant:r,size:m,...l}=_;return(0,t.jsx)("button",{className:(0,h.cn)(a({variant:r,size:m,className:o})),ref:e,...l})});n.displayName="Button";let s=r.createContext(null);function i(){let _=r.useContext(s);if(!_)throw Error("useCarousel must be used within a <Carousel />");return _}let d=r.forwardRef((_,e)=>{let{orientation:o="horizontal",opts:m,setApi:a,plugins:n,className:i,children:d,...x}=_,[u,c]=(0,l.Z)({...m,axis:"horizontal"===o?"x":"y"},n),[p,g]=r.useState(!1),[f,b]=r.useState(!1),w=r.useCallback(_=>{_&&(g(_.canScrollPrev()),b(_.canScrollNext()))},[]),y=r.useCallback(()=>{null==c||c.scrollPrev()},[c]),v=r.useCallback(()=>{null==c||c.scrollNext()},[c]),j=r.useCallback(_=>{"ArrowLeft"===_.key?(_.preventDefault(),y()):"ArrowRight"===_.key&&(_.preventDefault(),v())},[y,v]);return r.useEffect(()=>{c&&a&&a(c)},[c,a]),r.useEffect(()=>{if(c)return w(c),c.on("reInit",w),c.on("select",w),()=>{null==c||c.off("select",w)}},[c,w]),(0,t.jsx)(s.Provider,{value:{carouselRef:u,api:c,opts:m,orientation:o||((null==m?void 0:m.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:v,canScrollPrev:p,canScrollNext:f},children:(0,t.jsx)("div",{ref:e,onKeyDownCapture:j,className:(0,h.cn)("relative",i),role:"region","aria-roledescription":"carousel",...x,children:d})})});d.displayName="Carousel";let x=r.forwardRef((_,e)=>{let{className:o,...r}=_,{carouselRef:m,orientation:l}=i();return(0,t.jsx)("div",{ref:m,className:"overflow-hidden",children:(0,t.jsx)("div",{ref:e,className:(0,h.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",o),...r})})});x.displayName="CarouselContent";let u=r.forwardRef((_,e)=>{let{className:o,...r}=_,{orientation:m}=i();return(0,t.jsx)("div",{ref:e,role:"group","aria-roledescription":"slide",className:(0,h.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===m?"pl-4":"pt-4",o),...r})});u.displayName="CarouselItem";let c=r.forwardRef((_,e)=>{let{className:o,variant:r="outline",size:l="icon",...a}=_,{orientation:s,scrollPrev:d,canScrollPrev:x}=i();return(0,t.jsxs)(n,{ref:e,variant:r,size:l,className:(0,h.cn)("absolute  h-8 w-8 rounded-full","horizontal"===s?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!x,onClick:d,...a,children:[(0,t.jsx)(m.Y4O,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});c.displayName="CarouselPrevious";let p=r.forwardRef((_,e)=>{let{className:o,variant:r="outline",size:l="icon",...a}=_,{orientation:s,scrollNext:d,canScrollNext:x}=i();return(0,t.jsxs)(n,{ref:e,variant:r,size:l,className:(0,h.cn)("absolute h-8 w-8 rounded-full","horizontal"===s?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!x,onClick:d,...a,children:[(0,t.jsx)(m.LZ3,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext"},2169:function(_,e,o){"use strict";o.d(e,{cn:function(){return m}});var t=o(7042),r=o(4769);function m(){for(var _=arguments.length,e=Array(_),o=0;o<_;o++)e[o]=arguments[o];return(0,r.m6)((0,t.W)(e))}},9609:function(_){_.exports={"sr-only":"home_sr-only__tT5qm","pointer-events-none":"home_pointer-events-none__0aoMh",visible:"home_visible__RDdIr",fixed:"home_fixed__j_Lym",absolute:"home_absolute__1pbb6",relative:"home_relative__3ermx","inset-x-0":"home_inset-x-0__NYAaw","inset-y-0":"home_inset-y-0__G0XZY","-bottom-12":"home_-bottom-12__o_ZH9","-left-12":"home_-left-12__kQr1F","-right-12":"home_-right-12__IsTd2","-top-12":"home_-top-12__Gb7D_","-top-40":"home_-top-40__2A5or","left-0":"home_left-0__1ybY5","left-1":"home_left-1__e4qSp","left-1/2":"home_left-1__2__UCx8D","left-[calc(50%+3rem)]":"home_left-__calc__50____3rem______m5bqY","left-[calc(50%-11rem)]":"home_left-__calc__50__-11rem______9vtd2","top-0":"home_top-0__ka_cJ","top-1":"home_top-1__VT06d","top-1/2":"home_top-1__2__jFGUJ",isolate:"home_isolate__9fHFH","-z-10":"home_-z-10__c4IxQ","z-0":"home_z-0__QqcWS","z-10":"home_z-10__MktCi","z-[100]":"home_z-__100____Hb0Hx","z-[10]":"home_z-__10____n7Yi4","mx-2":"home_mx-2__ZW2ex","mx-4":"home_mx-4___kdQz","mx-auto":"home_mx-auto__oRK44","my-2":"home_my-2__EyLX3","my-40":"home_my-40__E1G1M","-ml-4":"home_-ml-4__FnIxB","-mt-1":"home_-mt-1__qNMr0","-mt-4":"home_-mt-4__OqsFV","mb-10":"home_mb-10__pDF56","mb-40":"home_mb-40__qGlCM","mb-5":"home_mb-5__auBPj","mb-8":"home_mb-8__8OgZK","ml-1":"home_ml-1__pPXJa","ml-1.5":"home_ml-1__5__06dxb","ml-2":"home_ml-2__OUN2e","ml-4":"home_ml-4__a9Gr4","mr-2":"home_mr-2__21ZXI","mt-1":"home_mt-1__QGWH_","mt-10":"home_mt-10__l8HX7","mt-12":"home_mt-12__YNxNI","mt-2":"home_mt-2__1MMP9","mt-20":"home_mt-20____oha","mt-36":"home_mt-36__DQvbR","mt-4":"home_mt-4__6xEFU","mt-52":"home_mt-52__81Ihr","mt-6":"home_mt-6__G8tbd","mt-64":"home_mt-64__qtu8H","mt-8":"home_mt-8__Fr250",block:"home_block___H34T","inline-block":"home_inline-block__rjyL3",inline:"home_inline__GmtDh",flex:"home_flex__l6wLb","inline-flex":"home_inline-flex__z0X58",grid:"home_grid__rI631",hidden:"home_hidden__tgJi2","aspect-[1155/678]":"home_aspect-__1155__678____Bc9Ee","h-1":"home_h-1___TjED","h-10":"home_h-10__Bi0Qy","h-12":"home_h-12__Z_p06","h-16":"home_h-16__UMGGs","h-20":"home_h-20__KtiGF","h-4":"home_h-4__nLwiL","h-5":"home_h-5__o6OQm","h-8":"home_h-8__sgw_o","h-9":"home_h-9__wkvnO","h-[285px]":"home_h-__285px____evLC_","h-full":"home_h-full__lV5wB","min-h-[20rem]":"home_min-h-__20rem____5RAOh","min-h-full":"home_min-h-full__eI6tI","min-h-screen":"home_min-h-screen__00qYe","w-12":"home_w-12__r9gMO","w-2/3":"home_w-2__3__ZYzVa","w-20":"home_w-20__Eos_s","w-4":"home_w-4__VQ1xM","w-5":"home_w-5__CEeDW","w-8":"home_w-8__2XwgZ","w-9":"home_w-9__He2LK","w-[36.125rem]":"home_w-__36__125rem____WxrAh","w-full":"home_w-full__GyebF","min-w-0":"home_min-w-0__Svq_1","max-w-2xl":"home_max-w-2xl__O_C_q","max-w-6xl":"home_max-w-6xl__MygT8","max-w-7xl":"home_max-w-7xl__gMwsx","max-w-[85rem]":"home_max-w-__85rem____fVe9d","max-w-lg":"home_max-w-lg__rJGiF","max-w-sm":"home_max-w-sm__gBjE8","max-w-xl":"home_max-w-xl__s_NQO","flex-1":"home_flex-1__lOWxf","flex-shrink-0":"home_flex-shrink-0__IAwOo","shrink-0":"home_shrink-0__SGtQ9","grow-0":"home_grow-0__MV8Ks","basis-full":"home_basis-full__Wuql3","-translate-x-1/2":"home_-translate-x-1__2__dmhQx","-translate-y-1/2":"home_-translate-y-1__2__Pqyo6","rotate-90":"home_rotate-90__MUjUK","rotate-[30deg]":"home_rotate-__30deg____i_zYx",transform:"home_transform__EHPG3","transform-gpu":"home_transform-gpu__EBkcU","animate-bounce":"home_animate-bounce__7G2b6",bounce:"home_bounce__0Go9V","cursor-pointer":"home_cursor-pointer__fVGOV",resize:"home_resize__DCFWk","grid-cols-1":"home_grid-cols-1__ZGVG5","grid-cols-2":"home_grid-cols-2__E0cuY","flex-row":"home_flex-row__hCjUr","flex-col":"home_flex-col__DXfgO","items-start":"home_items-start__gmI4h","items-center":"home_items-center___S_NI","justify-center":"home_justify-center__AADeJ","justify-between":"home_justify-between__7lzmj","gap-1":"home_gap-1__pqzlI","gap-6":"home_gap-6__iR_80","gap-x-3":"home_gap-x-3__eRudW","gap-x-8":"home_gap-x-8__M_P1a","gap-y-10":"home_gap-y-10__qLsap","gap-y-16":"home_gap-y-16__L1ggl","space-x-1":"home_space-x-1__6ZQ7U","space-x-1.5":"home_space-x-1__5__qb3dF","space-x-2":"home_space-x-2__IKdgv","space-y-1":"home_space-y-1__njcOm","space-y-2":"home_space-y-2__A1dF8","space-y-32":"home_space-y-32__mK7rm","space-y-4":"home_space-y-4__ADzl4","space-y-8":"home_space-y-8__WRQrT","overflow-hidden":"home_overflow-hidden__Zlovj","whitespace-nowrap":"home_whitespace-nowrap__woei2","break-words":"home_break-words__s3V6_",rounded:"home_rounded__zPMWk","rounded-2xl":"home_rounded-2xl__sE7lV","rounded-full":"home_rounded-full__yVl5I","rounded-lg":"home_rounded-lg__7pCVO","rounded-md":"home_rounded-md__AvmqD","rounded-xl":"home_rounded-xl__Pj962",border:"home_border__b8jW1","border-b":"home_border-b__jPp5p","border-t":"home_border-t__om51I","border-neutral-400/10":"home_border-neutral-400__10__2Qw46","border-neutral-800":"home_border-neutral-800___lhCT","border-white/10":"home_border-white__10___unU3","border-white/5":"home_border-white__5__bVtsb","bg-black":"home_bg-black__uiecF","bg-neutral-100/5":"home_bg-neutral-100__5__1WtkH","bg-neutral-50":"home_bg-neutral-50__LxG0N","bg-neutral-800":"home_bg-neutral-800__isb3q","bg-neutral-950":"home_bg-neutral-950__nLhtI","bg-red-900":"home_bg-red-900__LBe1K","bg-white/5":"home_bg-white__5__JkPim","bg-white/[0.5%]":"home_bg-white____0__5______iLb12","bg-white/[1%]":"home_bg-white____1______S0zqt","bg-[radial-gradient(closest-side,#df5898,#ba3f5c,#fad7d7,transparent)]":"home_bg-__radial-gradient__closest-side_2c___df5898_2c___ba3f5c_2c___fad7d7_2c_transparent______B6XZm","bg-gradient-to-br":"home_bg-gradient-to-br__Ssz0A","bg-gradient-to-t":"home_bg-gradient-to-t__Pu6Hj","bg-gradient-to-tr":"home_bg-gradient-to-tr__tk0lL","from-[#ba3f5c]":"home_from-____ba3f5c____weqmp","from-[#e22551]":"home_from-____e22551____Wdtyh","from-rose-500":"home_from-rose-500__bMAnJ","from-rose-600/[.025]":"home_from-rose-600______025____nWb4J","from-rose-950/[.15]":"home_from-rose-950______15____G7th_","from-transparent":"home_from-transparent__2adA2","via-[#df5898]":"home_via-____df5898____3mdG7","via-[#fad7d7]":"home_via-____fad7d7____iOzY2","to-[#ba3f5c]":"home_to-____ba3f5c____drjMl","to-[#d32642]":"home_to-____d32642____Zo1i6","to-[#fad7d7]":"home_to-____fad7d7____DUFtk","to-rose-400":"home_to-rose-400__o4fUY","to-transparent":"home_to-transparent__HwBz2","to-white/5":"home_to-white__5__Lohse","p-0":"home_p-0__s7wLh","p-1":"home_p-1__e9ush","p-14":"home_p-14__5yWI5","p-2":"home_p-2__YPO4K","p-4":"home_p-4___jXKH","p-5":"home_p-5__fgT2v","p-[1.9rem]":"home_p-__1__9rem____rITF9","p-[2rem]":"home_p-__2rem____p_JOa","px-2":"home_px-2__pV9he","px-3":"home_px-3__dVjrR","px-4":"home_px-4__mlBRn","px-5":"home_px-5__0bUV7","px-6":"home_px-6__Tcv5p","px-8":"home_px-8__YJums","py-12":"home_py-12__Pw7rN","py-2":"home_py-2__VTqLc","py-3":"home_py-3__bcYak","py-4":"home_py-4__FadWj","py-5":"home_py-5__r1y7Q","py-6":"home_py-6__R__AQ","pb-3":"home_pb-3__ekN5r","pl-4":"home_pl-4__TFKZd","pl-9":"home_pl-9__2G4Vp","pt-1":"home_pt-1__3_gy7","pt-2":"home_pt-2__HmVkK","pt-4":"home_pt-4__MakQY","pt-40":"home_pt-40__g7_8K","text-left":"home_text-left__t0bLT","text-center":"home_text-center__Y8mkx","text-3xl":"home_text-3xl__f489O","text-5xl":"home_text-5xl___8Bex","text-6xl":"home_text-6xl__aGz50","text-[0.75rem]":"home_text-__0__75rem____ygqOW","text-base":"home_text-base__n__75","text-lg":"home_text-lg__E9LDP","text-sm":"home_text-sm__aodnR","text-xl":"home_text-xl__M_FDd","text-xs":"home_text-xs__vLS31","font-bold":"home_font-bold___8xjH","font-medium":"home_font-medium__GlBen","font-semibold":"home_font-semibold__LZIhb",uppercase:"home_uppercase__BnNoU","leading-6":"home_leading-6__dU2Zd","leading-7":"home_leading-7__I4rY4","leading-snug":"home_leading-snug__0EeYK","leading-tight":"home_leading-tight__wfOdf","tracking-tight":"home_tracking-tight__2eRF0","tracking-tighter":"home_tracking-tighter__WTNPt","tracking-wide":"home_tracking-wide__1nW_K","tracking-wider":"home_tracking-wider__6z4_l","text-gray-400":"home_text-gray-400__Knn0u","text-green-500":"home_text-green-500__N2upg","text-neutral-100":"home_text-neutral-100__docru","text-neutral-300":"home_text-neutral-300__j_6py","text-neutral-400":"home_text-neutral-400__uiZpc","text-neutral-50":"home_text-neutral-50__a6nUM","text-neutral-500":"home_text-neutral-500__XWY3Z","text-neutral-900":"home_text-neutral-900__F5lZq","text-rose-500":"home_text-rose-500__Olfq4","text-white":"home_text-white__adEmA","text-white/50":"home_text-white__50__MPi6R","text-white/80":"home_text-white__80__wVO_S","text-white/90":"home_text-white__90__h5ncX","underline-offset-4":"home_underline-offset-4__c_SVS","opacity-10":"home_opacity-10___ugun","opacity-100":"home_opacity-100__KJiAV","opacity-20":"home_opacity-20__Py5Zm","opacity-30":"home_opacity-30__RW_Tj","opacity-50":"home_opacity-50__4MskZ","opacity-90":"home_opacity-90__n6vMb",shadow:"home_shadow__T9mM7","shadow-md":"home_shadow-md__VSeNu","shadow-sm":"home_shadow-sm__BxL5o","shadow-xl":"home_shadow-xl___SRL6",outline:"home_outline__2fc_y","ring-1":"home_ring-1__SjonA","ring-neutral-400/10":"home_ring-neutral-400__10__GWLgV","blur-[100px]":"home_blur-__100px____6xqIX","blur-[200px]":"home_blur-__200px____xoln6","backdrop-blur":"home_backdrop-blur__pmHmZ","backdrop-blur-xl":"home_backdrop-blur-xl__7p5B9",transition:"home_transition__Cv3Td","transition-all":"home_transition-all__GsYxq","transition-colors":"home_transition-colors__lb2Oy","duration-300":"home_duration-300__idOaX",heading:"home_heading__kVprB","grid-container":"home_grid-container__Hn_DR",cta:"home_cta__OYjUt",scroll:"home_scroll__G0neq","hover:-translate-y-3":"home_hover__-translate-y-3__kcrbZ","hover:scale-105":"home_hover__scale-105__DZT2U","hover:border-neutral-800/50":"home_hover__border-neutral-800__50__FBoxZ","hover:bg-neutral-50/90":"home_hover__bg-neutral-50__90__TPZbc","hover:bg-neutral-800":"home_hover__bg-neutral-800__Y8_dw","hover:bg-neutral-800/80":"home_hover__bg-neutral-800__80__XDlXj","hover:bg-neutral-900/10":"home_hover__bg-neutral-900__10__NFHHR","hover:bg-red-900/90":"home_hover__bg-red-900__90__q62SV","hover:bg-white/5":"home_hover__bg-white__5__8vB2B","hover:text-neutral-100":"home_hover__text-neutral-100__uvmHt","hover:text-neutral-50":"home_hover__text-neutral-50__7SYt0","hover:underline":"home_hover__underline__dnjPw","hover:opacity-80":"home_hover__opacity-80__IMh9q","focus:outline-none":"home_focus__outline-none__5mXBG","focus-visible:outline-none":"home_focus-visible__outline-none__mKtlD","focus-visible:ring-1":"home_focus-visible__ring-1__FFy2l","focus-visible:ring-neutral-300":"home_focus-visible__ring-neutral-300__H8zvc","disabled:pointer-events-none":"home_disabled__pointer-events-none__3_X6Y","disabled:opacity-50":"home_disabled__opacity-50__52Bay",group:"home_group__ETOsG","group-open:-rotate-180":"home_group-open__-rotate-180__2gNis","sm:-top-80":"home_sm__-top-80__z41Z6","sm:left-[calc(50%+36rem)]":"home_sm__left-__calc__50____36rem______0ZwDC","sm:left-[calc(50%-30rem)]":"home_sm__left-__calc__50__-30rem______VK0g8","sm:mt-6":"home_sm__mt-6__5WGq8","sm:flex":"home_sm__flex__2meTz","sm:hidden":"home_sm__hidden__0HPhv","sm:w-[72.1875rem]":"home_sm__w-__72__1875rem____c63yu","sm:items-stretch":"home_sm__items-stretch__2B6rl","sm:justify-between":"home_sm__justify-between__F7Wvq","sm:gap-y-20":"home_sm__gap-y-20__hE5gg","sm:p-10":"home_sm__p-10__JsOri","sm:p-[3rem]":"home_sm__p-__3rem____4xhrk","sm:px-6":"home_sm__px-6__MoVzN","sm:text-4xl":"home_sm__text-4xl__1XI_4","md:absolute":"home_md__absolute__GdMKo","md:sticky":"home_md__sticky__4p8R2","md:top-48":"home_md__top-48__EZoIL","md:-ml-4":"home_md__-ml-4___hWGr","md:flex":"home_md__flex__MNHTI","md:basis-1/2":"home_md__basis-1__2__t9_Mt","md:space-x-10":"home_md__space-x-10__Oi8_4","md:p-10":"home_md__p-10__ZVZjF","md:p-[4rem]":"home_md__p-__4rem____Vzwwt","md:text-4xl":"home_md__text-4xl__gKWWw","lg:relative":"home_lg__relative__2Zxon","lg:-left-6":"home_lg__-left-6__Wx9_8","lg:-top-60":"home_lg__-top-60__KaBla","lg:mx-0":"home_lg__mx-0__0M1Dx","lg:-ml-0":"home_lg__-ml-0__B0nKx","lg:mt-0":"home_lg__mt-0__lBHEX","lg:flex":"home_lg__flex__nW8iP","lg:max-w-lg":"home_lg__max-w-lg__rYItJ","lg:max-w-none":"home_lg__max-w-none__d67wI","lg:flex-shrink-0":"home_lg__flex-shrink-0__6PamS","lg:skew-y-[-2deg]":"home_lg__skew-y-__-2deg____o8JeA","lg:grid-cols-2":"home_lg__grid-cols-2__2OjYj","lg:items-center":"home_lg__items-center__u2L1O","lg:justify-between":"home_lg__justify-between__fOptj","lg:rounded-md":"home_lg__rounded-md__Edm2w","lg:border":"home_lg__border__AdOnt","lg:border-white/5":"home_lg__border-white__5__P4cJH","lg:bg-gradient-to-tr":"home_lg__bg-gradient-to-tr__xfYrw","lg:p-10":"home_lg__p-10__HKwrE","lg:p-[6rem]":"home_lg__p-__6rem____2sRm_","lg:p-[7rem]":"home_lg__p-__7rem____3Fd4m","lg:px-0":"home_lg__px-0__Y1sIR","lg:px-8":"home_lg__px-8__BxOn1","lg:py-16":"home_lg__py-16__RbiuY","lg:py-24":"home_lg__py-24__vZSEF","lg:pr-8":"home_lg__pr-8__Aexyf","lg:text-5xl":"home_lg__text-5xl__xoTDx","lg:text-6xl":"home_lg__text-6xl__Uc8TF","xl:left-10":"home_xl__left-10__aaISW","xl:mx-0":"home_xl__mx-0__ooBCG","xl:mt-0":"home_xl__mt-0__K4kvO","xl:w-2/3":"home_xl__w-2__3__MNbez","xl:w-4/6":"home_xl__w-4__6__586dg","xl:w-[600px]":"home_xl__w-__600px____SbetG","xl:max-w-7xl":"home_xl__max-w-7xl__nRtkf","xl:flex-row":"home_xl__flex-row__Wk4LF","xl:justify-between":"home_xl__justify-between__V0xl6","xl:p-10":"home_xl__p-10__LLWli","2xl:w-2/3":"home__32xl__w-2__3___jg49","2xl:p-10":"home__32xl__p-10__3__Lf",enter:"home_enter__pxe3r",exit:"home_exit__EBQu_"}}}]);