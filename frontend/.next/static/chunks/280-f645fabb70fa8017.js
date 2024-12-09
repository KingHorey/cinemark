"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{7280:(e,r,t)=>{t.d(r,{default:()=>z});var a=t(5155),s=t(6046),n=t(7396),i=t(5565),o=t(2115),l=t(853),d=t(1466),c=t(4035),m=t(4085),u=t(2336),f=t(745),p=t(9606),g=t(3955),b=t(2679);let x=e=>{let{setShowSearch:r}=e,{replace:t}=(0,s.useRouter)(),n=(0,s.useSearchParams)(),i=(0,p.mN)({resolver:(0,b.u)(g._x)}),o=async e=>{let r=new URLSearchParams(n);e.name?r.set("q",e.name):r.delete("q"),r.set("category",e.category),t("/search/?".concat(r.toString()))};return(0,a.jsx)("div",{className:"w-full absolute left-0 z-[999] backdrop-blur-lg h-[100px] top-0 flex items-center p-2 rounded-md",children:(0,a.jsx)(c.lV,{...i,children:(0,a.jsxs)("form",{className:"flex text-white  space-x-5 w-full",onSubmit:i.handleSubmit(o),children:[(0,a.jsx)(c.zB,{name:"category",control:i.control,render:e=>{let{field:r}=e;return(0,a.jsx)(c.eI,{className:"w-[120px]",children:(0,a.jsx)(c.MJ,{children:(0,a.jsxs)(f.l6,{onValueChange:e=>r.onChange(e),value:r.value,children:[(0,a.jsx)(f.bq,{className:"border-gray-400/30 z-[999]",children:(0,a.jsx)(f.yv,{placeholder:"Select Movie Type"})}),(0,a.jsxs)(f.gC,{className:"bg-offBlack hover:bg-offBlack text-white border-gray-400/30 z-[999] relative",children:[(0,a.jsx)(f.eb,{value:"movies",className:"hover:bg-offBlack cursor-pointer",children:"Movie"}),(0,a.jsx)(f.eb,{value:"series",className:"hover:bg-offBlack cursor-pointer",children:"Series"})]})]})})})}}),(0,a.jsx)(c.zB,{control:i.control,name:"name",render:e=>{let{field:r}=e;return(0,a.jsx)(c.eI,{className:"w-4/5 border-gray-400/30",children:(0,a.jsx)(c.MJ,{children:(0,a.jsx)(u.p,{...r,placeholder:"Search for a movie",className:"border-gray-400/30 p-2"})})})}}),(0,a.jsxs)("div",{className:"space-x-2 flex",children:[(0,a.jsx)(m.$,{className:"text-xs font-semibold",children:i.formState.isSubmitting?"Searching...":"Search"}),(0,a.jsx)(m.$,{variant:"destructive",onClick:()=>r(!1),className:"text-xs font-semibold",children:"Cancel"})]})]})})})},h=[{label:"Home",href:"/"},{label:"Movies & Shows",href:"/movies"},{label:"Support",href:"/support"},{label:"Subscriptions",href:"/subscriptions"}],z=()=>{let e=(0,s.usePathname)(),[r,t]=(0,o.useState)(!1);return(0,a.jsx)("header",{children:(0,a.jsxs)("nav",{className:"flex items-center p-4 w-full mx-auto z-[999] relative",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,a.jsx)(i.default,{src:"/Vector.svg",width:50,height:50,alt:"Cinemark logo"}),(0,a.jsx)("p",{className:"font-bold text-white",children:"Cinemark"})]}),(0,a.jsx)("div",{className:"rounded-md flex gap-x-5 w-[500px] p-2 border-neutral-400/20 border-2 lg:text-base mx-auto items-center justify-center text-white bg-black",children:h.map((r,t)=>(0,a.jsx)(n.default,{href:r.href,className:"".concat(r.href===e&&"rounded-md bg-offBlack p-2 font-semibold"," hover:bg-offBlack/70 transition-all duration-300 p-2 rounded-md"),children:r.label},t))}),(0,a.jsxs)("div",{className:"flex gap-x-5",children:[r?(0,a.jsx)(o.Suspense,{children:(0,a.jsx)(x,{setShowSearch:t})}):(0,a.jsx)(l.A,{size:20,stroke:"white",className:"cursor-pointer",onClick:()=>t(!0),tabIndex:0}),(0,a.jsx)(n.default,{href:"/login",children:(0,a.jsx)(d.A,{size:20,stroke:"white",className:"cursor-pointer"})})]})]})})}},3955:(e,r,t)=>{t.d(r,{KY:()=>u,Nt:()=>c,RD:()=>s,X5:()=>i,_x:()=>f,zK:()=>n});var a=t(3415);a.z.object({name:a.z.string()});let s=a.z.object({first_name:a.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:a.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:a.z.string().email(),message:a.z.string(),agree:a.z.boolean()}),n=a.z.object({first_name:a.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:a.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:a.z.string().email(),password:a.z.string().min(8,"Password must be at least 8 characters").regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Must contain 8 characters, one uppercase, one lowercase, one number and one special character"),confirm_password:a.z.string()}).refine(e=>e.password===e.confirm_password,{message:"Passwords do not match",path:["confirm_password"]}),i=a.z.object({email:a.z.string().email(),password:a.z.string()}),o=a.z.object({id:a.z.number(),original_name:a.z.string(),poster_path:a.z.string().url(),genre:a.z.string(),release_date:a.z.string().nullable().optional(),rating:a.z.number().optional(),seasons_count:a.z.number().optional(),type:a.z.enum(["movies","series"])});o.merge(a.z.object({seasons_count:a.z.number()})),a.z.object({data:a.z.object({page:a.z.number(),results:a.z.array(o),total_pages:a.z.number(),total_results:a.z.number(),release_date:a.z.date().optional()})});let l=a.z.object({id:a.z.number(),name:a.z.string()});a.z.object({iso_639_1:a.z.string(),name:a.z.string(),english_name:a.z.string()});let d=a.z.object({seasons:a.z.array(a.z.object({id:a.z.number(),air_date:a.z.date(),overview:a.z.string(),name:a.z.string(),image:a.z.string().url(),episodes:a.z.array(a.z.object({id:a.z.number(),title:a.z.string(),overview:a.z.string(),runtime:a.z.number(),episode_number:a.z.number(),image:a.z.string().url()}))}))});a.z.object({data:a.z.object({id:a.z.number(),genre:l,original_name:a.z.string(),overview:a.z.string(),poster_path:a.z.string().url(),likes:a.z.number(),dislikes:a.z.number(),adult:a.z.boolean(),release_date:a.z.date(),vote_count:a.z.number(),banner:a.z.string().url(),seasons:d})});let c=a.z.object({image:a.z.string().optional(),id:a.z.string().uuid().optional(),first_name:a.z.string(),last_name:a.z.string(),email:a.z.string().email()}),m=a.z.object({rating:a.z.string(),content:a.z.string(),id:a.z.string().uuid(),movie:a.z.object({id:a.z.number(),title:a.z.string()}),user:a.z.object({name:a.z.string()})});a.z.array(m);let u=a.z.object({genre:a.z.array(a.z.object({id:a.z.number(),name:a.z.string()}))}),f=a.z.object({name:a.z.string().min(3,{message:"Please provide a valid search term"}),category:a.z.enum(["movies","series"])})},4085:(e,r,t)=>{t.d(r,{$:()=>d});var a=t(5155),s=t(2115),n=t(2317),i=t(652),o=t(9602);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:d=!1,...c}=e,m=d?n.DX:"button";return(0,a.jsx)(m,{className:(0,o.cn)(l({variant:s,size:i,className:t})),ref:r,...c})});d.displayName="Button"},4035:(e,r,t)=>{t.d(r,{lV:()=>m,MJ:()=>h,zB:()=>f,eI:()=>b,lR:()=>x});var a=t(5155),s=t(2115),n=t(2317),i=t(9606),o=t(9602),l=t(6195);let d=(0,t(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(l.b,{ref:r,className:(0,o.cn)(d(),t),...s})});c.displayName=l.b.displayName;let m=i.Op,u=s.createContext({}),f=e=>{let{...r}=e;return(0,a.jsx)(u.Provider,{value:{name:r.name},children:(0,a.jsx)(i.xI,{...r})})},p=()=>{let e=s.useContext(u),r=s.useContext(g),{getFieldState:t,formState:a}=(0,i.xW)(),n=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...n}},g=s.createContext({}),b=s.forwardRef((e,r)=>{let{className:t,...n}=e,i=s.useId();return(0,a.jsx)(g.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",t),...n})})});b.displayName="FormItem";let x=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:n,formItemId:i}=p();return(0,a.jsx)(c,{ref:r,className:(0,o.cn)(n&&"text-destructive",t),htmlFor:i,...s})});x.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:o,formMessageId:l}=p();return(0,a.jsx)(n.DX,{ref:r,id:i,"aria-describedby":s?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!s,...t})});h.displayName="FormControl",s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:n}=p();return(0,a.jsx)("p",{ref:r,id:n,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",t),...s})}).displayName="FormDescription",s.forwardRef((e,r)=>{let{className:t,children:s,...n}=e,{error:i,formMessageId:l}=p(),d=i?String(null==i?void 0:i.message):s;return d?(0,a.jsx)("p",{ref:r,id:l,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",t),...n,children:d}):null}).displayName="FormMessage"},2336:(e,r,t)=>{t.d(r,{p:()=>i});var a=t(5155),s=t(2115),n=t(9602);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...i})});i.displayName="Input"},745:(e,r,t)=>{t.d(r,{bq:()=>u,eb:()=>b,gC:()=>g,l6:()=>c,yv:()=>m});var a=t(5155),s=t(2115),n=t(6972),i=t(1719),o=t(1902),l=t(8867),d=t(9602);let c=n.bL;n.YJ;let m=n.WT,u=s.forwardRef((e,r)=>{let{className:t,children:s,...o}=e;return(0,a.jsxs)(n.l9,{ref:r,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...o,children:[s,(0,a.jsx)(n.In,{asChild:!0,children:(0,a.jsx)(i.A,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=n.l9.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.PP,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...s,children:(0,a.jsx)(o.A,{className:"h-4 w-4"})})});f.displayName=n.PP.displayName;let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.wn,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...s,children:(0,a.jsx)(i.A,{className:"h-4 w-4"})})});p.displayName=n.wn.displayName;let g=s.forwardRef((e,r)=>{let{className:t,children:s,position:i="popper",...o}=e;return(0,a.jsx)(n.ZL,{children:(0,a.jsxs)(n.UC,{ref:r,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:i,...o,children:[(0,a.jsx)(f,{}),(0,a.jsx)(n.LM,{className:(0,d.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,a.jsx)(p,{})]})})});g.displayName=n.UC.displayName,s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.JU,{ref:r,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",t),...s})}).displayName=n.JU.displayName;let b=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,a.jsxs)(n.q7,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(l.A,{className:"h-4 w-4"})})}),(0,a.jsx)(n.p4,{children:s})]})});b.displayName=n.q7.displayName,s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)(n.wv,{ref:r,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...s})}).displayName=n.wv.displayName},9602:(e,r,t)=>{t.d(r,{cn:()=>n});var a=t(3463),s=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.QP)((0,a.$)(r))}}}]);