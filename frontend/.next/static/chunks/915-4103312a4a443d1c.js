"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{6352:(e,t,n)=>{n.d(t,{C1:()=>k,bL:()=>T});var r=n(2115),o=n(8068),i=n(8166),l=n(3610),a=n(1488),s=n(858),u=n(7510),c=n(7028),d=n(3360),p=n(5155),f="Checkbox",[m,v]=(0,i.A)(f),[h,y]=m(f),x=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:i,checked:s,defaultChecked:u,required:c,disabled:f,value:m="on",onCheckedChange:v,form:y,...x}=e,[g,b]=r.useState(null),T=(0,o.s)(t,e=>b(e)),k=r.useRef(!1),N=!g||y||!!g.closest("form"),[R=!1,L]=(0,a.i)({prop:s,defaultProp:u,onChange:v}),j=r.useRef(R);return r.useEffect(()=>{let e=null==g?void 0:g.form;if(e){let t=()=>L(j.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[g,L]),(0,p.jsxs)(h,{scope:n,state:R,disabled:f,children:[(0,p.jsx)(d.sG.button,{type:"button",role:"checkbox","aria-checked":C(R)?"mixed":R,"aria-required":c,"data-state":E(R),"data-disabled":f?"":void 0,disabled:f,value:m,...x,ref:T,onKeyDown:(0,l.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.m)(e.onClick,e=>{L(e=>!!C(e)||!e),N&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),N&&(0,p.jsx)(w,{control:g,bubbles:!k.current,name:i,value:m,checked:R,required:c,disabled:f,form:y,style:{transform:"translateX(-100%)"},defaultChecked:!C(u)&&u})]})});x.displayName=f;var g="CheckboxIndicator",b=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...o}=e,i=y(g,n);return(0,p.jsx)(c.C,{present:r||C(i.state)||!0===i.state,children:(0,p.jsx)(d.sG.span,{"data-state":E(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});b.displayName=g;var w=e=>{let{control:t,checked:n,bubbles:o=!0,defaultChecked:i,...l}=e,a=r.useRef(null),c=(0,s.Z)(n),d=(0,u.X)(t);r.useEffect(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==n&&t){let r=new Event("click",{bubbles:o});e.indeterminate=C(n),t.call(e,!C(n)&&n),e.dispatchEvent(r)}},[c,n,o]);let f=r.useRef(!C(n)&&n);return(0,p.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=i?i:f.current,...l,tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function C(e){return"indeterminate"===e}function E(e){return C(e)?"indeterminate":e?"checked":"unchecked"}var T=x,k=b},7028:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(2115),o=n(8068),i=n(6611),l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[o,l]=r.useState(),s=r.useRef({}),u=r.useRef(e),c=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(s.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=s.current,n=u.current;if(n!==e){let r=c.current,o=a(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),u.current=e}},[e,p]),(0,i.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(s.current).includes(e.animationName);if(e.target===o&&r&&(p("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=a(s.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(s.current=getComputedStyle(e)),l(e)},[])}}(t),s="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),u=(0,o.s)(l.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof n||l.isPresent?r.cloneElement(s,{ref:u}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},9710:(e,t,n)=>{n.d(t,{Kq:()=>H,UC:()=>K,ZL:()=>G,bL:()=>X,l9:()=>q});var r=n(2115),o=n(3610),i=n(8068),l=n(8166),a=n(9674),s=n(7668),u=n(3215),c=n(7323),d=n(7028),p=n(3360),f=n(2317),m=n(1488),v=n(3543),h=n(5155),[y,x]=(0,l.A)("Tooltip",[u.Bk]),g=(0,u.Bk)(),b="TooltipProvider",w="tooltip.open",[C,E]=y(b),T=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,s]=r.useState(!0),u=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,h.jsx)(C,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:r.useCallback(e=>{u.current=e},[]),disableHoverableContent:i,children:l})};T.displayName=b;var k="Tooltip",[N,R]=y(k),L=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,d=E(k,e.__scopeTooltip),p=g(t),[f,v]=r.useState(null),y=(0,s.B)(),x=r.useRef(0),b=null!=a?a:d.disableHoverableContent,C=null!=c?c:d.delayDuration,T=r.useRef(!1),[R=!1,L]=(0,m.i)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(w))):d.onClose(),null==l||l(e)}}),j=r.useMemo(()=>R?T.current?"delayed-open":"instant-open":"closed",[R]),M=r.useCallback(()=>{window.clearTimeout(x.current),x.current=0,T.current=!1,L(!0)},[L]),O=r.useCallback(()=>{window.clearTimeout(x.current),x.current=0,L(!1)},[L]),P=r.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>{T.current=!0,L(!0),x.current=0},C)},[C,L]);return r.useEffect(()=>()=>{x.current&&(window.clearTimeout(x.current),x.current=0)},[]),(0,h.jsx)(u.bL,{...p,children:(0,h.jsx)(N,{scope:t,contentId:y,open:R,stateAttribute:j,trigger:f,onTriggerChange:v,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?P():M()},[d.isOpenDelayed,P,M]),onTriggerLeave:r.useCallback(()=>{b?O():(window.clearTimeout(x.current),x.current=0)},[O,b]),onOpen:M,onClose:O,disableHoverableContent:b,children:n})})};L.displayName=k;var j="TooltipTrigger",M=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...l}=e,a=R(j,n),s=E(j,n),c=g(n),d=r.useRef(null),f=(0,i.s)(t,d,a.onTriggerChange),m=r.useRef(!1),v=r.useRef(!1),y=r.useCallback(()=>m.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,h.jsx)(u.Mz,{asChild:!0,...c,children:(0,h.jsx)(p.sG.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.m)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||s.isPointerInTransitRef.current||(a.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,o.m)(e.onPointerLeave,()=>{a.onTriggerLeave(),v.current=!1}),onPointerDown:(0,o.m)(e.onPointerDown,()=>{m.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,o.m)(e.onFocus,()=>{m.current||a.onOpen()}),onBlur:(0,o.m)(e.onBlur,a.onClose),onClick:(0,o.m)(e.onClick,a.onClose)})})});M.displayName=j;var O="TooltipPortal",[P,I]=y(O,{forceMount:void 0}),_=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:o}=e,i=R(O,t);return(0,h.jsx)(P,{scope:t,forceMount:n,children:(0,h.jsx)(d.C,{present:n||i.open,children:(0,h.jsx)(c.Z,{asChild:!0,container:o,children:r})})})};_.displayName=O;var D="TooltipContent",A=r.forwardRef((e,t)=>{let n=I(D,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,l=R(D,e.__scopeTooltip);return(0,h.jsx)(d.C,{present:r||l.open,children:l.disableHoverableContent?(0,h.jsx)(F,{side:o,...i,ref:t}):(0,h.jsx)(U,{side:o,...i,ref:t})})}),U=r.forwardRef((e,t)=>{let n=R(D,e.__scopeTooltip),o=E(D,e.__scopeTooltip),l=r.useRef(null),a=(0,i.s)(t,l),[s,u]=r.useState(null),{trigger:c,onClose:d}=n,p=l.current,{onPointerInTransitChange:f}=o,m=r.useCallback(()=>{u(null),f(!1)},[f]),v=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),f(!0)},[f]);return r.useEffect(()=>()=>m(),[m]),r.useEffect(()=>{if(c&&p){let e=e=>v(e,p),t=e=>v(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,v,m]),r.useEffect(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,s=t[i].x,u=t[i].y;a>r!=u>r&&n<(s-l)*(r-a)/(u-a)+l&&(o=!o)}return o}(n,s);r?m():o&&(m(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,s,d,m]),(0,h.jsx)(F,{...e,ref:a})}),[S,B]=y(k,{isInside:!1}),F=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:s,...c}=e,d=R(D,n),p=g(n),{onClose:m}=d;return r.useEffect(()=>(document.addEventListener(w,m),()=>document.removeEventListener(w,m)),[m]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&m()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,m]),(0,h.jsx)(a.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:m,children:(0,h.jsxs)(u.UC,{"data-state":d.stateAttribute,...p,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,h.jsx)(f.xV,{children:o}),(0,h.jsx)(S,{scope:n,isInside:!0,children:(0,h.jsx)(v.b,{id:d.contentId,role:"tooltip",children:i||o})})]})})});A.displayName=D;var W="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=g(n);return B(W,n).isInside?null:(0,h.jsx)(u.i3,{...o,...r,ref:t})}).displayName=W;var H=T,X=L,q=M,G=_,K=A}}]);