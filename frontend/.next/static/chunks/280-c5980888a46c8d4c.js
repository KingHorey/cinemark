"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{7280:(e,r,t)=>{t.d(r,{default:()=>j});var s=t(5155),a=t(6046),n=t(7396),l=t(5565),i=t(2115),o=t(6710),d=t(1466),c=t(853),m=t(4035),u=t(4085),f=t(2336),p=t(745),x=t(9606),g=t(3955),h=t(2679);let b=e=>{let{setShowSearch:r}=e,{replace:t}=(0,a.useRouter)(),n=(0,a.useSearchParams)(),l=(0,x.mN)({resolver:(0,h.u)(g._x)}),i=async e=>{let r=new URLSearchParams(n);e.name?r.set("q",e.name):r.delete("q"),r.set("category",e.category),t("/search/?".concat(r.toString()))};return(0,s.jsx)("div",{className:"w-full md:absolute left-0 backdrop-blur-lg h-[100px] top-0 flex items-center p-2 rounded-md z-50",onClick:e=>{e.stopPropagation()},children:(0,s.jsx)(m.lV,{...l,children:(0,s.jsxs)("form",{className:"flex text-white xs:flex-col xs:space-y-4 md:space-y-0 md:flex-row lg:items-center lg:space-x-5 w-full relative",onSubmit:l.handleSubmit(i),children:[(0,s.jsxs)("div",{className:"flex w-full xs:gap-x-3",children:[(0,s.jsx)(m.zB,{name:"category",control:l.control,render:e=>{let{field:r}=e;return(0,s.jsx)(m.eI,{className:"w-[120px] z-[999] relative ",children:(0,s.jsx)(m.MJ,{children:(0,s.jsxs)(p.l6,{onValueChange:e=>r.onChange(e),value:r.value,children:[(0,s.jsx)(p.bq,{className:"border-gray-400/30 z-[999] relative",children:(0,s.jsx)(p.yv,{placeholder:"Select Movie Type"})}),(0,s.jsxs)(p.gC,{className:"bg-offBlack hover:bg-offBlack text-white border-gray-400/30 relative md:absolute md:-bottom-28 cursor-pointer z-[1000000]",children:[(0,s.jsx)(p.eb,{value:"movies",className:"hover:bg-offBlack cursor-pointer",children:"Movie"}),(0,s.jsx)(p.eb,{value:"series",className:"hover:bg-offBlack cursor-pointer",children:"Series"})]})]})})})}}),(0,s.jsx)(m.zB,{control:l.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsx)(m.eI,{className:"w-4/5 border-gray-400/30",children:(0,s.jsx)(m.MJ,{children:(0,s.jsx)(f.p,{...r,placeholder:"Search for a movie",className:"border-gray-400/30 p-2"})})})}})]}),(0,s.jsxs)("div",{className:"flex xs:w-full lg:w-fit gap-x-5 items-center h-full my-0",children:[(0,s.jsx)(u.$,{className:"text-xs font-semibold shadow-lg xs:border xs:border-gray-400/30",children:l.formState.isSubmitting?"Searching...":"Search"}),(0,s.jsx)(u.$,{variant:"destructive",onClick:()=>r(!1),className:"text-xs font-semibold",children:"Cancel"})]})]})})})},z=[{label:"Home",href:"/"},{label:"Movies & Shows",href:"/movies"},{label:"Support",href:"/support"},{label:"Subscriptions",href:"/subscriptions"}],j=()=>{let e=(0,a.usePathname)(),[r,t]=(0,i.useState)(!1),[m,u]=(0,i.useState)(!1);return(0,s.jsx)("header",{children:(0,s.jsxs)("nav",{className:"flex items-center p-4 w-full mx-auto z-[999999] relative",children:[(0,s.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,s.jsx)(l.default,{src:"/Vector.svg",width:50,height:50,alt:"Cinemark logo"}),(0,s.jsx)("p",{className:"font-bold text-white",children:"Cinemark"})]}),(0,s.jsxs)("div",{className:"md:hidden justify-end ml-auto cursor-pointer",tabIndex:0,onClick:()=>u(!m),children:[(0,s.jsx)(o.A,{stroke:"white",fill:"white",className:"items-end"}),m&&(0,s.jsx)("div",{className:"absolute z-10 right-0 backdrop-blur-lg w-full ",children:(0,s.jsxs)("div",{className:"text-white flex flex-col w-full gap-y-5 p-3 ",children:[z.map((r,t)=>(0,s.jsx)(n.default,{href:r.href,className:"".concat(r.href===e&&"rounded-md font-bold p-2 w-full"," hover:bg-offBlack/70 transition-all duration-300 p-2 rounded-md w-full"),children:r.label},t)),(0,s.jsxs)("div",{className:"flex flex-col gap-x-5",children:[(0,s.jsx)(b,{setShowSearch:t}),(0,s.jsx)(n.default,{href:"/login",children:(0,s.jsx)(d.A,{size:20,stroke:"white",className:"cursor-pointer"})})]})]})})]}),(0,s.jsxs)("div",{className:"flex flex-row justify-between items-center w-full xs:hidden md:flex",children:[(0,s.jsx)("div",{className:"rounded-md flex gap-x-5 w-[500px] p-2 border-neutral-400/20 border-2 lg:text-base mx-auto items-center justify-center text-white bg-black",children:z.map((r,t)=>(0,s.jsx)(n.default,{href:r.href,className:"".concat(r.href===e&&"rounded-md bg-offBlack p-2 font-semibold"," hover:bg-offBlack/70 transition-all duration-300 p-2 rounded-md"),children:r.label},t))}),(0,s.jsxs)("div",{className:"flex gap-x-5",children:[r?(0,s.jsx)(i.Suspense,{children:(0,s.jsx)(b,{setShowSearch:t})}):(0,s.jsx)(c.A,{size:20,stroke:"white",className:"cursor-pointer",onClick:()=>t(!0),tabIndex:0}),(0,s.jsx)(n.default,{href:"/login",children:(0,s.jsx)(d.A,{size:20,stroke:"white",className:"cursor-pointer"})})]})]})]})})}},3955:(e,r,t)=>{t.d(r,{KY:()=>u,Nt:()=>c,RD:()=>a,X5:()=>l,_x:()=>f,zK:()=>n});var s=t(3415);s.z.object({name:s.z.string()});let a=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),message:s.z.string(),agree:s.z.boolean()}),n=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),password:s.z.string().min(8,"Password must be at least 8 characters").regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Must contain 8 characters, one uppercase, one lowercase, one number and one special character"),confirm_password:s.z.string()}).refine(e=>e.password===e.confirm_password,{message:"Passwords do not match",path:["confirm_password"]}),l=s.z.object({email:s.z.string().email(),password:s.z.string()}),i=s.z.object({id:s.z.number(),original_name:s.z.string(),poster_path:s.z.string().url(),genre:s.z.string(),release_date:s.z.string().nullable().optional(),rating:s.z.number().optional(),seasons_count:s.z.number().optional(),type:s.z.enum(["movies","series"])});i.merge(s.z.object({seasons_count:s.z.number()})),s.z.object({data:s.z.object({page:s.z.number(),results:s.z.array(i),total_pages:s.z.number(),total_results:s.z.number(),release_date:s.z.date().optional()})});let o=s.z.object({id:s.z.number(),name:s.z.string()});s.z.object({iso_639_1:s.z.string(),name:s.z.string(),english_name:s.z.string()});let d=s.z.object({seasons:s.z.array(s.z.object({id:s.z.number(),air_date:s.z.date(),overview:s.z.string(),name:s.z.string(),image:s.z.string().url(),episodes:s.z.array(s.z.object({id:s.z.number(),title:s.z.string(),overview:s.z.string(),runtime:s.z.number(),episode_number:s.z.number(),image:s.z.string().url()}))}))});s.z.object({data:s.z.object({id:s.z.number(),genre:o,original_name:s.z.string(),overview:s.z.string(),poster_path:s.z.string().url(),likes:s.z.number(),dislikes:s.z.number(),adult:s.z.boolean(),release_date:s.z.date(),vote_count:s.z.number(),banner:s.z.string().url(),seasons:d})});let c=s.z.object({image:s.z.string().optional(),id:s.z.string().uuid().optional(),first_name:s.z.string(),last_name:s.z.string(),email:s.z.string().email()}),m=s.z.object({rating:s.z.string(),content:s.z.string(),id:s.z.string().uuid(),movie:s.z.object({id:s.z.number(),title:s.z.string()}),user:s.z.object({name:s.z.string()})});s.z.array(m);let u=s.z.object({genre:s.z.array(s.z.object({id:s.z.number(),name:s.z.string()}))}),f=s.z.object({name:s.z.string().min(3,{message:"Please provide a valid search term"}),category:s.z.enum(["movies","series"])})},4085:(e,r,t)=>{t.d(r,{$:()=>d});var s=t(5155),a=t(2115),n=t(2317),l=t(652),i=t(9602);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:l,asChild:d=!1,...c}=e,m=d?n.DX:"button";return(0,s.jsx)(m,{className:(0,i.cn)(o({variant:a,size:l,className:t})),ref:r,...c})});d.displayName="Button"},4035:(e,r,t)=>{t.d(r,{lV:()=>m,MJ:()=>b,zB:()=>f,eI:()=>g,lR:()=>h});var s=t(5155),a=t(2115),n=t(2317),l=t(9606),i=t(9602),o=t(6195);let d=(0,t(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(o.b,{ref:r,className:(0,i.cn)(d(),t),...a})});c.displayName=o.b.displayName;let m=l.Op,u=a.createContext({}),f=e=>{let{...r}=e;return(0,s.jsx)(u.Provider,{value:{name:r.name},children:(0,s.jsx)(l.xI,{...r})})},p=()=>{let e=a.useContext(u),r=a.useContext(x),{getFieldState:t,formState:s}=(0,l.xW)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},x=a.createContext({}),g=a.forwardRef((e,r)=>{let{className:t,...n}=e,l=a.useId();return(0,s.jsx)(x.Provider,{value:{id:l},children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...n})})});g.displayName="FormItem";let h=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:n,formItemId:l}=p();return(0,s.jsx)(c,{ref:r,className:(0,i.cn)(n&&"text-destructive",t),htmlFor:l,...a})});h.displayName="FormLabel";let b=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:l,formDescriptionId:i,formMessageId:o}=p();return(0,s.jsx)(n.DX,{ref:r,id:l,"aria-describedby":a?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!a,...t})});b.displayName="FormControl",a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:n}=p();return(0,s.jsx)("p",{ref:r,id:n,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",t),...a})}).displayName="FormDescription",a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e,{error:l,formMessageId:o}=p(),d=l?String(null==l?void 0:l.message):a;return d?(0,s.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",t),...n,children:d}):null}).displayName="FormMessage"},2336:(e,r,t)=>{t.d(r,{p:()=>l});var s=t(5155),a=t(2115),n=t(9602);let l=a.forwardRef((e,r)=>{let{className:t,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...l})});l.displayName="Input"},745:(e,r,t)=>{t.d(r,{bq:()=>u,eb:()=>g,gC:()=>x,l6:()=>c,yv:()=>m});var s=t(5155),a=t(2115),n=t(6972),l=t(1719),i=t(1902),o=t(8867),d=t(9602);let c=n.bL;n.YJ;let m=n.WT,u=a.forwardRef((e,r)=>{let{className:t,children:a,...i}=e;return(0,s.jsxs)(n.l9,{ref:r,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...i,children:[a,(0,s.jsx)(n.In,{asChild:!0,children:(0,s.jsx)(l.A,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=n.l9.displayName;let f=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.PP,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})});f.displayName=n.PP.displayName;let p=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.wn,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})});p.displayName=n.wn.displayName;let x=a.forwardRef((e,r)=>{let{className:t,children:a,position:l="popper",...i}=e;return(0,s.jsx)(n.ZL,{children:(0,s.jsxs)(n.UC,{ref:r,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:l,...i,children:[(0,s.jsx)(f,{}),(0,s.jsx)(n.LM,{className:(0,d.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(p,{})]})})});x.displayName=n.UC.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.JU,{ref:r,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",t),...a})}).displayName=n.JU.displayName;let g=a.forwardRef((e,r)=>{let{className:t,children:a,...l}=e;return(0,s.jsxs)(n.q7,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.VF,{children:(0,s.jsx)(o.A,{className:"h-4 w-4"})})}),(0,s.jsx)(n.p4,{children:a})]})});g.displayName=n.q7.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.wv,{ref:r,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...a})}).displayName=n.wv.displayName},9602:(e,r,t)=>{t.d(r,{cn:()=>n});var s=t(3463),a=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}}}]);