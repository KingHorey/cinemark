"use strict";(()=>{var e={};e.id=905,e.ids=[905],e.modules={10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{e.exports=require("assert")},94735:e=>{e.exports=require("events")},29021:e=>{e.exports=require("fs")},81630:e=>{e.exports=require("http")},55591:e=>{e.exports=require("https")},21820:e=>{e.exports=require("os")},33873:e=>{e.exports=require("path")},27910:e=>{e.exports=require("stream")},83997:e=>{e.exports=require("tty")},79551:e=>{e.exports=require("url")},28354:e=>{e.exports=require("util")},74075:e=>{e.exports=require("zlib")},10393:(e,r,t)=>{t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>l});var s=t(70260),a=t(28203),i=t(25155),n=t.n(i),o=t(67292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["(main)",{children:["series",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,12021)),"/home/kinghorey/Library/Projects/nextJS/bingebox/frontend/app/(main)/series/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,27324)),"/home/kinghorey/Library/Projects/nextJS/bingebox/frontend/app/(main)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/home/kinghorey/Library/Projects/nextJS/bingebox/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/kinghorey/Library/Projects/nextJS/bingebox/frontend/app/(main)/series/[id]/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(main)/series/[id]/page",pathname:"/series/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},12021:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var s=t(62740),a=t(64871),i=t(37662),n=t(17391),o=t(76301),d=t(89276),l=t(22098),p=t(47549);let u=async({params:e})=>{let{data:r}=await a.dz.get(`/series/info/${e}/`),t=r.data,{key:o,site:p}=t,u="";return"YouTube"===p&&(u=`https://www.youtube.com/embed/${o}`),(0,s.jsxs)("div",{className:"space-y-10",children:[(0,s.jsx)(d.A,{children:(0,s.jsx)(l.default,{banner:t.banner,movie:u,title:t.original_name})}),(0,s.jsxs)("div",{className:"flex md:flex-row flex-col md:space-x-10 xs:space-y-10 md:space-y-0",children:[(0,s.jsx)(i.A,{overview:r.data.overview,series:t.seasons}),(0,s.jsx)(n.A,{releaseYear:r.data.release_date,languages:r.data.language,genres:r.data.genre,rating:0,director:r?.data?.director})]})]})},x=async({params:e})=>{let{id:r}=await e;return(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)("div",{className:"w-full h-[500px] flex items-center justify-center",children:(0,s.jsx)(p.A,{className:"animate-spin duration-500 transition-all",size:24,stroke:"white"})}),children:(0,s.jsx)(u,{params:r})})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[989,931,57,476,418,85,187,288,635,581,582,330],()=>t(10393));module.exports=s})();