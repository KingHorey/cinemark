exports.id=970,exports.ids=[970],exports.modules={83501:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"7f5213c60efdbe6e6311e8c959d7abd9c4d0b4cc20":()=>g,"7f8c039a418c862a69eaa48d2550d37bccfbeb4c7a":()=>b,"7fa6d935f016525b900912954e5fa933df32062cf2":()=>p,"7fabbb0db31db6217011c44db48a59f4cd9d86a593":()=>f,"7fac0044082fa5c25956fa075f55c5aeda65dab040":()=>m,"7fced0bf01319a0507719ace89b4d38de76966c7f3":()=>d,"7fde7e6b6458ce795d692797564fa0de2f5c1f8f8c":()=>u,"7fe7e3672165433c85095a89132daaa4437ad8acbb":()=>h});var s=r(21590);r(70376);var a=r(24785);r(6332);var n=r(80499);console.log(process.env.NEXT_BASE_URL);let i=a.A.create({baseURL:process.env.NEXT_BASE_URL||"http://localhost:8000/api",headers:{Accept:"application/json","Content-Type":"application/json"}});var o=r(42385),l=r(47735),c=r(99344);let d=async e=>{try{return await i.post("/user/register/",JSON.stringify(e)),{status:201,message:"Registration successful"}}catch(e){return console.error(e.message,e.response),{status:400,message:e.response.data.data.email[0]}}},u=async e=>{try{let t=await (0,o.UL)(),{data:r}=await i.post("/user/token/",{email:e.email,password:e.password});t.set("_session-bingebox-access",r.access,{httpOnly:!0,sameSite:"strict",maxAge:1800,secure:!0}),t.set("_session-bingebox-refresh",r.refresh,{httpOnly:!0,sameSite:"strict",maxAge:86400,secure:!0});let s=(0,n.s)(r.access);t.set("_bingeBox-xSet-user-info_",JSON.stringify(s),{httpOnly:!0,secure:!0,sameSite:"strict",expires:new Date(Date.now()+27216e5)});let{first_name:a,last_name:l,email:c,image:d,id:u}=s;return{status:200,message:"Successfully logged in",user:{first_name:a,last_name:l,email:c,image:d,id:u}}}catch(e){if(e instanceof Error)return{status:400,message:"Invalid credentials."}}},m=async(e,t)=>{let r=await (0,o.UL)(),s=r.get("_session-bingebox-access")?.value;try{return await i.put(`user/update-information/${t}/`,JSON.stringify(e),{headers:{Authorization:`Bearer ${s}`}}),(0,l.revalidatePath)("/profile"),{status:200,message:"Profile successfully updated"}}catch(e){return console.error("===> ",e.message),{status:400,message:Object.values(e.response.data.data).flat()}}},b=async e=>{let t=await (0,o.UL)(),r=t.get("_session-bingebox-access")?.value;try{await i.delete(`review/actions/${e}`,{headers:{Authorization:`Bearer ${r}`}}),(0,l.revalidatePath)("/profile/reviews")}catch(e){console.error(e.message)}},f=async e=>{try{let t=await (0,o.UL)(),r={refresh:e},{data:s}=await i.post("/user/token/refresh/",JSON.stringify(r),{headers:{"Content-Type":"application/json","Content-Length":JSON.stringify(r).length}});t.set("_session-bingebox-access",s.access,{httpOnly:!0,sameSite:"lax",maxAge:1800,secure:!1,path:"/"}),t.set("_session-bingebox-refresh",s.refresh,{httpOnly:!0,sameSite:"lax",maxAge:86400,secure:!1,path:"/"});let a=(0,n.s)(s.access);return t.set("_bingeBox-xSet-user-info_",JSON.stringify(a),{httpOnly:!0,secure:!1,sameSite:"lax",expires:new Date(Date.now()+27216e5),path:"/"}),{status:200}}catch{return{status:400}}},g=async(e,t)=>{let r=await (0,o.UL)(),s=r.get("_session-bingebox-access")?.value;try{return await i.put(`review/actions/${t.get("id")}`,t,{headers:{Authorization:`Bearer ${s}`}}),(0,l.revalidatePath)("/profile/reviews"),{status:200,message:"successfully updated review"}}catch{return{status:400}}},p=async()=>{let e=await (0,o.UL)(),t=e.get("_session-bingebox-access")?.value;try{let{data:e}=await i.get("preferences/",{headers:{Authorization:`Bearer ${t}`}});return{status:200,message:e}}catch{return{status:400,message:"Unable to fetch data"}}},h=async e=>{let t=await (0,o.UL)();console.log("Form Data: ",e);let r=t.get("_session-bingebox-access")?.value;try{let{data:t}=await i.post("preferences/",e,{headers:{Authorization:`Bearer ${r}`}});return{status:200,message:t}}catch{return{status:400,message:"Unable to fetch data"}}};(0,c.D)([d,u,m,b,f,g,p,h]),(0,s.A)(d,"7fced0bf01319a0507719ace89b4d38de76966c7f3",null),(0,s.A)(u,"7fde7e6b6458ce795d692797564fa0de2f5c1f8f8c",null),(0,s.A)(m,"7fac0044082fa5c25956fa075f55c5aeda65dab040",null),(0,s.A)(b,"7f8c039a418c862a69eaa48d2550d37bccfbeb4c7a",null),(0,s.A)(f,"7fabbb0db31db6217011c44db48a59f4cd9d86a593",null),(0,s.A)(g,"7f5213c60efdbe6e6311e8c959d7abd9c4d0b4cc20",null),(0,s.A)(p,"7fa6d935f016525b900912954e5fa933df32062cf2",null),(0,s.A)(h,"7fe7e3672165433c85095a89132daaa4437ad8acbb",null)},23021:(e,t,r)=>{Promise.resolve().then(r.bind(r,90233)),Promise.resolve().then(r.bind(r,61062))},70285:(e,t,r)=>{Promise.resolve().then(r.bind(r,86421)),Promise.resolve().then(r.bind(r,44750))},19063:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,96313,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},72207:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,86013,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},89920:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,71066,23)),Promise.resolve().then(r.t.bind(r,75197,23))},53472:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,41902,23)),Promise.resolve().then(r.t.bind(r,87801,23))},86421:(e,t,r)=>{"use strict";r.d(t,{StoreProvider:()=>g});var s=r(45512),a=r(8979),n=r(57673);let i=(0,a.Z0)({name:"auth_store",initialState:{user:null,isAuthenticated:!1},reducers:{setUser:(e,t)=>({...e,user:t.payload,isAuthenticated:!0}),clearUser:e=>({...e,user:null,isAuthenticated:!1})}}),{setUser:o,clearUser:l}=i.actions,c=i.reducer,d=(0,n.HY)({auth:c}),u=()=>(0,a.U1)({reducer:d});var m=r(69945),b=r(58009),f=r(92273);let g=({children:e})=>{let t=(0,b.useRef)(null);return t.current||(t.current=u()),(0,b.useEffect)(()=>{if(null!=t.current)return(0,m.$k)(t.current.dispatch)},[]),(0,s.jsx)(f.Kq,{store:t.current,children:e})}},95647:(e,t,r)=>{"use strict";r.d(t,{KY:()=>m,Nt:()=>d,RD:()=>a,X5:()=>i,_x:()=>b,zK:()=>n});var s=r(16131);s.z.object({name:s.z.string()});let a=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),message:s.z.string(),agree:s.z.boolean()}),n=s.z.object({first_name:s.z.string().min(3,{message:"Your first name must be at least 3 characters long"}),last_name:s.z.string().min(3,{message:"Your last name must be at least 3 characters long"}),email:s.z.string().email(),password:s.z.string().min(8,"Password must be at least 8 characters").regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Must contain 8 characters, one uppercase, one lowercase, one number and one special character"),confirm_password:s.z.string()}).refine(e=>e.password===e.confirm_password,{message:"Passwords do not match",path:["confirm_password"]}),i=s.z.object({email:s.z.string().email(),password:s.z.string()}),o=s.z.object({id:s.z.number(),original_name:s.z.string(),poster_path:s.z.string().url(),genre:s.z.string(),release_date:s.z.string().nullable().optional(),rating:s.z.number().optional(),seasons_count:s.z.number().optional(),type:s.z.enum(["movies","series"])});o.merge(s.z.object({seasons_count:s.z.number()})),s.z.object({data:s.z.object({page:s.z.number(),results:s.z.array(o),total_pages:s.z.number(),total_results:s.z.number(),release_date:s.z.date().optional()})});let l=s.z.object({id:s.z.number(),name:s.z.string()});s.z.object({iso_639_1:s.z.string(),name:s.z.string(),english_name:s.z.string()});let c=s.z.object({seasons:s.z.array(s.z.object({id:s.z.number(),air_date:s.z.date(),overview:s.z.string(),name:s.z.string(),image:s.z.string().url(),episodes:s.z.array(s.z.object({id:s.z.number(),title:s.z.string(),overview:s.z.string(),runtime:s.z.number(),episode_number:s.z.number(),image:s.z.string().url()}))}))});s.z.object({data:s.z.object({id:s.z.number(),genre:l,original_name:s.z.string(),overview:s.z.string(),poster_path:s.z.string().url(),likes:s.z.number(),dislikes:s.z.number(),adult:s.z.boolean(),release_date:s.z.date(),vote_count:s.z.number(),banner:s.z.string().url(),seasons:c})});let d=s.z.object({image:s.z.string().optional(),id:s.z.string().uuid().optional(),first_name:s.z.string(),last_name:s.z.string(),email:s.z.string().email()}),u=s.z.object({rating:s.z.string(),content:s.z.string(),id:s.z.string().uuid(),movie:s.z.object({id:s.z.number(),title:s.z.string()}),user:s.z.object({name:s.z.string()})});s.z.array(u);let m=s.z.object({genre:s.z.array(s.z.object({id:s.z.number(),name:s.z.string()}))}),b=s.z.object({name:s.z.string().min(3,{message:"Please provide a valid search term"}),category:s.z.enum(["movies","series"])})},87021:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var s=r(45512),a=r(58009),n=r(12705),i=r(32101),o=r(59462);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},c)=>{let d=a?n.DX:"button";return(0,s.jsx)(d,{className:(0,o.cn)(l({variant:t,size:r,className:e})),ref:c,...i})});c.displayName="Button"},61366:(e,t,r)=>{"use strict";r.d(t,{lV:()=>u,MJ:()=>v,zB:()=>b,eI:()=>p,lR:()=>h});var s=r(45512),a=r(58009),n=r(12705),i=r(6868),o=r(59462),l=r(92405);let c=(0,r(32101).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(l.b,{ref:r,className:(0,o.cn)(c(),e),...t}));d.displayName=l.b.displayName;let u=i.Op,m=a.createContext({}),b=({...e})=>(0,s.jsx)(m.Provider,{value:{name:e.name},children:(0,s.jsx)(i.xI,{...e})}),f=()=>{let e=a.useContext(m),t=a.useContext(g),{getFieldState:r,formState:s}=(0,i.xW)(),n=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...n}},g=a.createContext({}),p=a.forwardRef(({className:e,...t},r)=>{let n=a.useId();return(0,s.jsx)(g.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",e),...t})})});p.displayName="FormItem";let h=a.forwardRef(({className:e,...t},r)=>{let{error:a,formItemId:n}=f();return(0,s.jsx)(d,{ref:r,className:(0,o.cn)(a&&"text-destructive",e),htmlFor:n,...t})});h.displayName="FormLabel";let v=a.forwardRef(({...e},t)=>{let{error:r,formItemId:a,formDescriptionId:i,formMessageId:o}=f();return(0,s.jsx)(n.DX,{ref:t,id:a,"aria-describedby":r?`${i} ${o}`:`${i}`,"aria-invalid":!!r,...e})});v.displayName="FormControl",a.forwardRef(({className:e,...t},r)=>{let{formDescriptionId:a}=f();return(0,s.jsx)("p",{ref:r,id:a,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",e),...t})}).displayName="FormDescription",a.forwardRef(({className:e,children:t,...r},a)=>{let{error:n,formMessageId:i}=f(),l=n?String(n?.message):t;return l?(0,s.jsx)("p",{ref:a,id:i,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",e),...r,children:l}):null}).displayName="FormMessage"},25409:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(45512),a=r(58009),n=r(59462);let i=a.forwardRef(({className:e,type:t,...r},a)=>(0,s.jsx)("input",{type:t,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));i.displayName="Input"},59462:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(82281),a=r(94805);function n(...e){return(0,a.QP)((0,s.$)(e))}},45021:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(62740);r(76301);var a=r(35635),n=r(20308);let i=()=>(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"flex items-center mr-auto",children:(0,s.jsxs)(n.default,{href:"/",className:"flex items-center space-x-2",children:[(0,s.jsx)(a.default,{src:"/Vector.svg",width:50,height:50,alt:"Cinemark logo"}),(0,s.jsx)("p",{className:"font-bold text-white",children:"Cinemark"})]})})});function o({children:e}){return(0,s.jsxs)("main",{className:"w-11/12 mx-auto max-h-screen py-2 space-y-5 ",children:[(0,s.jsx)(i,{}),e]})}},19611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(62740),a=r(58543),n=r.n(a);r(82704);var i=r(90233),o=r(61062);r(56070);let l={title:"Create Next App",description:"Generated by create next app"};function c({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)(i.StoreProvider,{children:(0,s.jsxs)("body",{className:`${n().className} antialiased bg-[#141414]`,children:[(0,s.jsx)("main",{className:"w-11/12 mx-auto",children:e}),(0,s.jsx)(o.ToastContainer,{})]})})})}},90233:(e,t,r)=>{"use strict";r.d(t,{StoreProvider:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call StoreProvider() from the server but StoreProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/kinghorey/Library/Projects/nextJS/bingebox/frontend/app/storeProvider.tsx","StoreProvider")},46055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(88077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},82704:()=>{}};