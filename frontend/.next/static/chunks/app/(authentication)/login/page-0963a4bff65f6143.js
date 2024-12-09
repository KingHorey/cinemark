(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{8857:(e,r,t)=>{Promise.resolve().then(t.bind(t,2784))},2784:(e,r,t)=>{"use strict";t.d(r,{default:()=>z});var s=t(5155),a=t(4035),n=t(2336),i=t(4085),o=t(9606),l=t(3955),d=t(2679),c=t(5828);let m=(0,c.createServerReference)("7f6a0776ee0f730df87a2170ab53d769e70fb3a36d",c.callServer,void 0,c.findSourceMapURL,"handleLogin");var u=t(3391),g=t(1068),f=t(6046),b=t(3565);let z=()=>{(0,u.wA)();let{push:e}=(0,f.useRouter)(),r=(0,o.mN)({resolver:(0,d.u)(l.X5)}),t=async e=>{let r=await m(e);(null==r?void 0:r.status)===200?(g.oR.success(r.message,{className:"bg-green-400 text-white"}),setTimeout(()=>window.location.href="/profile",3e3)):g.oR.error(null==r?void 0:r.message)};return(0,s.jsx)(a.lV,{...r,children:(0,s.jsxs)("form",{onSubmit:r.handleSubmit(t),className:"mx-auto mb-0 mt-8 max-w-md space-y-4 text-white",children:[(0,s.jsx)(a.zB,{name:"email",control:r.control,render:e=>{let{field:r}=e;return(0,s.jsxs)(a.eI,{children:[(0,s.jsx)(a.lR,{children:"Email Address"}),(0,s.jsx)(a.MJ,{children:(0,s.jsx)(n.p,{...r,placeholder:"johndoe@email.com",className:"w-full rounded-md p-5 border-gray-200  pe-12 text-sm shadow-sm"})})]})}}),(0,s.jsx)(a.zB,{name:"password",control:r.control,render:e=>{let{field:r}=e;return(0,s.jsxs)(a.eI,{children:[(0,s.jsx)(a.lR,{children:"Password"}),(0,s.jsx)(a.MJ,{children:(0,s.jsx)(n.p,{type:"password",...r,placeholder:"*******",className:"w-full rounded-md p-5 border-gray-200  pe-12 text-sm shadow-sm"})})]})}}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["No account?",(0,s.jsx)("a",{className:"underline",href:"/register",children:"Sign up"})]}),(0,s.jsx)(i.$,{type:"submit",className:"bg-red hover:bg-black rounded-md hover:text-red duration-300 transition-all border border-red flex items-center px-5 py-3 text-sm font-medium text-white",children:r.formState.isSubmitting?(0,s.jsx)(b.A,{className:"animate-spin duration-1000",stroke:"white",size:18}):"Sign in"})]})]})})}},3955:(e,r,t)=>{"use strict";t.d(r,{KY:()=>u,Nt:()=>c,RD:()=>a,X5:()=>i,_x:()=>g,zK:()=>n});var s=t(3415);s.z.object({name:s.z.string()});let a=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),message:s.z.string(),agree:s.z.boolean()}),n=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),password:s.z.string().min(8,"Password must be at least 8 characters").regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Must contain 8 characters, one uppercase, one lowercase, one number and one special character"),confirm_password:s.z.string()}).refine(e=>e.password===e.confirm_password,{message:"Passwords do not match",path:["confirm_password"]}),i=s.z.object({email:s.z.string().email(),password:s.z.string()}),o=s.z.object({id:s.z.number(),original_name:s.z.string(),poster_path:s.z.string().url(),genre:s.z.string(),release_date:s.z.string().nullable().optional(),rating:s.z.number().optional(),seasons_count:s.z.number().optional(),type:s.z.enum(["movies","series"])});o.merge(s.z.object({seasons_count:s.z.number()})),s.z.object({data:s.z.object({page:s.z.number(),results:s.z.array(o),total_pages:s.z.number(),total_results:s.z.number(),release_date:s.z.date().optional()})});let l=s.z.object({id:s.z.number(),name:s.z.string()});s.z.object({iso_639_1:s.z.string(),name:s.z.string(),english_name:s.z.string()});let d=s.z.object({seasons:s.z.array(s.z.object({id:s.z.number(),air_date:s.z.date(),overview:s.z.string(),name:s.z.string(),image:s.z.string().url(),episodes:s.z.array(s.z.object({id:s.z.number(),title:s.z.string(),overview:s.z.string(),runtime:s.z.number(),episode_number:s.z.number(),image:s.z.string().url()}))}))});s.z.object({data:s.z.object({id:s.z.number(),genre:l,original_name:s.z.string(),overview:s.z.string(),poster_path:s.z.string().url(),likes:s.z.number(),dislikes:s.z.number(),adult:s.z.boolean(),release_date:s.z.date(),vote_count:s.z.number(),banner:s.z.string().url(),seasons:d})});let c=s.z.object({image:s.z.string().optional(),id:s.z.string().uuid().optional(),first_name:s.z.string(),last_name:s.z.string(),email:s.z.string().email()}),m=s.z.object({rating:s.z.string(),content:s.z.string(),id:s.z.string().uuid(),movie:s.z.object({id:s.z.number(),title:s.z.string()}),user:s.z.object({name:s.z.string()})});s.z.array(m);let u=s.z.object({genre:s.z.array(s.z.object({id:s.z.number(),name:s.z.string()}))}),g=s.z.object({name:s.z.string().min(3,{message:"Please provide a valid search term"}),category:s.z.enum(["movies","series"])})},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var s=t(5155),a=t(2115),n=t(2317),i=t(652),o=t(9602);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:i,asChild:d=!1,...c}=e,m=d?n.DX:"button";return(0,s.jsx)(m,{className:(0,o.cn)(l({variant:a,size:i,className:t})),ref:r,...c})});d.displayName="Button"},4035:(e,r,t)=>{"use strict";t.d(r,{lV:()=>m,MJ:()=>h,zB:()=>g,eI:()=>z,lR:()=>p});var s=t(5155),a=t(2115),n=t(2317),i=t(9606),o=t(9602),l=t(6195);let d=(0,t(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(l.b,{ref:r,className:(0,o.cn)(d(),t),...a})});c.displayName=l.b.displayName;let m=i.Op,u=a.createContext({}),g=e=>{let{...r}=e;return(0,s.jsx)(u.Provider,{value:{name:r.name},children:(0,s.jsx)(i.xI,{...r})})},f=()=>{let e=a.useContext(u),r=a.useContext(b),{getFieldState:t,formState:s}=(0,i.xW)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...n}},b=a.createContext({}),z=a.forwardRef((e,r)=>{let{className:t,...n}=e,i=a.useId();return(0,s.jsx)(b.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",t),...n})})});z.displayName="FormItem";let p=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:n,formItemId:i}=f();return(0,s.jsx)(c,{ref:r,className:(0,o.cn)(n&&"text-destructive",t),htmlFor:i,...a})});p.displayName="FormLabel";let h=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:i,formDescriptionId:o,formMessageId:l}=f();return(0,s.jsx)(n.DX,{ref:r,id:i,"aria-describedby":a?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!a,...t})});h.displayName="FormControl",a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:n}=f();return(0,s.jsx)("p",{ref:r,id:n,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",t),...a})}).displayName="FormDescription",a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e,{error:i,formMessageId:l}=f(),d=i?String(null==i?void 0:i.message):a;return d?(0,s.jsx)("p",{ref:r,id:l,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",t),...n,children:d}):null}).displayName="FormMessage"},2336:(e,r,t)=>{"use strict";t.d(r,{p:()=>i});var s=t(5155),a=t(2115),n=t(9602);let i=a.forwardRef((e,r)=>{let{className:t,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...i})});i.displayName="Input"},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(3463),a=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},3565:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(7401).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},6046:(e,r,t)=>{"use strict";var s=t(6658);t.o(s,"redirect")&&t.d(r,{redirect:function(){return s.redirect}}),t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})},5828:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{callServer:function(){return s.callServer},createServerReference:function(){return n},findSourceMapURL:function(){return a.findSourceMapURL}});let s=t(9603),a=t(3355),n=t(4979).createServerReference}},e=>{var r=r=>e(e.s=r);e.O(0,[520,518,687,391,441,517,358],()=>r(8857)),_N_E=e.O()}]);