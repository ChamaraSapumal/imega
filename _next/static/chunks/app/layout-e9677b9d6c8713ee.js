(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{285:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var a=s(5155);s(2115);var r=s(9708),n=s(2085),o=s(9434);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function d(e){let{className:t,variant:s,size:n,asChild:d=!1,...l}=e,c=d?r.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,o.cn)(i({variant:s,size:n,className:t})),...l})}},1483:(e,t,s)=>{"use strict";s.d(t,{D:()=>i,ThemeProvider:()=>o});var a=s(5155),r=s(2115);let n=(0,r.createContext)({theme:"system",setTheme:()=>null});function o(e){let{children:t,defaultTheme:s="system",storageKey:o="vite-ui-theme",enableSystem:i=!0,disableTransitionOnChange:d=!1,attribute:l="data-theme"}=e,[c,u]=(0,r.useState)(s);return(0,r.useEffect)(()=>{let e=window.document.documentElement,t=localStorage.getItem(o);if(t&&u(t),d)return e.classList.add("[&_*]:!transition-none"),()=>{e.classList.remove("[&_*]:!transition-none")}},[o,d]),(0,r.useEffect)(()=>{let e=window.document.documentElement;if("system"===c&&i){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.remove("light","dark"),e.classList.add(t),e.setAttribute(l,t);return}e.classList.remove("light","dark"),e.classList.add(c),e.setAttribute(l,c),localStorage.setItem(o,c)},[c,i,l,o]),(0,a.jsx)(n.Provider,{value:{theme:c,setTheme:u},children:t})}let i=()=>{let e=(0,r.useContext)(n);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},2813:(e,t,s)=>{"use strict";s.d(t,{default:()=>P});var a=s(5155),r=s(6874),n=s.n(r),o=s(6766),i=s(285),d=s(2098),l=s(3509),c=s(1483),u=s(2115),m=s(9449),h=s(9434);function f(e){let{...t}=e;return(0,a.jsx)(m.bL,{"data-slot":"dropdown-menu",...t})}function g(e){let{...t}=e;return(0,a.jsx)(m.l9,{"data-slot":"dropdown-menu-trigger",...t})}function x(e){let{className:t,sideOffset:s=4,...r}=e;return(0,a.jsx)(m.ZL,{children:(0,a.jsx)(m.UC,{"data-slot":"dropdown-menu-content",sideOffset:s,className:(0,h.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",t),...r})})}function v(e){let{className:t,inset:s,variant:r="default",...n}=e;return(0,a.jsx)(m.q7,{"data-slot":"dropdown-menu-item","data-inset":s,"data-variant":r,className:(0,h.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...n})}function p(){let{setTheme:e}=(0,c.D)();return(0,a.jsxs)(f,{children:[(0,a.jsx)(g,{asChild:!0,children:(0,a.jsxs)(i.$,{variant:"outline",size:"icon",children:[(0,a.jsx)(d.A,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(l.A,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,a.jsxs)(x,{align:"end",children:[(0,a.jsx)(v,{onClick:()=>e("light"),children:"Light"}),(0,a.jsx)(v,{onClick:()=>e("dark"),children:"Dark"}),(0,a.jsx)(v,{onClick:()=>e("system"),children:"System"})]})]})}var b=s(4783),j=s(4416),w=s(5452);function k(e){let{...t}=e;return(0,a.jsx)(w.bL,{"data-slot":"sheet",...t})}function y(e){let{...t}=e;return(0,a.jsx)(w.l9,{"data-slot":"sheet-trigger",...t})}function N(e){let{...t}=e;return(0,a.jsx)(w.bm,{"data-slot":"sheet-close",...t})}function z(e){let{...t}=e;return(0,a.jsx)(w.ZL,{"data-slot":"sheet-portal",...t})}function L(e){let{className:t,...s}=e;return(0,a.jsx)(w.hJ,{"data-slot":"sheet-overlay",className:(0,h.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",t),...s})}function C(e){let{className:t,children:s,side:r="right",...n}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(L,{}),(0,a.jsxs)(w.UC,{"data-slot":"sheet-content",className:(0,h.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500","right"===r&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm","left"===r&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm","top"===r&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b","bottom"===r&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",t),...n,children:[s,(0,a.jsxs)(w.bm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[(0,a.jsx)(j.A,{className:"size-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}var _=s(5695);let P=()=>{let e=(0,_.usePathname)(),{theme:t}=(0,c.D)(),[s,r]=(0,u.useState)("/imega/images/lightlogo.png");(0,u.useEffect)(()=>{if("system"===t){r(window.matchMedia("(prefers-color-scheme: dark)").matches?"/imega/images/darklogo.png":"/imega/images/lightlogo.png");let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{r(e.matches?"/imega/images/darklogo.png":"imega/images/lightlogo.png")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}r("dark"===t?"/imega/images/darklogo.png":"/imega/images/lightlogo.png")},[t]);let d=[{href:"/",label:"Home"},{href:"/project",label:"Projects"},{href:"/pricing",label:"Pricing"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];return(0,a.jsx)("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,a.jsxs)("div",{className:"container flex h-16 items-center justify-between px-4 md:px-6",children:[(0,a.jsx)(n(),{href:"/",className:"flex items-center space-x-2",children:(0,a.jsx)(o.default,{src:s,alt:"ImegaInfinity Logo",width:150,height:40,className:"h-10 w-auto",priority:!0})}),(0,a.jsx)("nav",{className:"hidden md:flex items-center space-x-8 text-sm font-medium",children:d.map(t=>(0,a.jsx)(n(),{href:t.href,className:(0,h.cn)("transition-colors hover:text-orange-600 text-foreground/60 relative py-2",e===t.href&&"text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600"),children:t.label},t.href))}),(0,a.jsxs)("div",{className:"hidden md:flex items-center space-x-4",children:[(0,a.jsx)(p,{}),(0,a.jsx)(n(),{href:"/contact",children:(0,a.jsx)(i.$,{className:"px-6 bg-orange-600",children:"Let's Talk"})})]}),(0,a.jsxs)(k,{children:[(0,a.jsx)(y,{asChild:!0,children:(0,a.jsxs)(i.$,{variant:"ghost",size:"icon",className:"md:hidden",children:[(0,a.jsx)(b.A,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle menu"})]})}),(0,a.jsx)(C,{side:"right",className:"w-full sm:max-w-xs p-0 border-l",children:(0,a.jsxs)("div",{className:"h-full flex flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between p-4 border-b",children:[(0,a.jsx)(n(),{href:"/",className:"flex items-center space-x-2",children:(0,a.jsx)(o.default,{src:s,alt:"ImegaInfinity Logo",width:120,height:30,className:"h-8 w-auto"})}),(0,a.jsx)(N,{asChild:!0,children:(0,a.jsx)(i.$,{variant:"ghost",size:"icon",children:(0,a.jsx)(j.A,{className:"h-5 w-5"})})})]}),(0,a.jsx)("div",{className:"flex-1 overflow-auto p-6",children:(0,a.jsx)("nav",{className:"flex flex-col gap-1",children:d.map(t=>(0,a.jsx)(N,{asChild:!0,children:(0,a.jsx)(n(),{href:t.href,className:(0,h.cn)("text-foreground/70 hover:text-orange-600 hover:bg-muted transition-colors rounded-md p-3 text-lg",e===t.href&&"bg-primary/10 text-orange-600 font-medium"),children:t.label})},t.href))})}),(0,a.jsx)("div",{className:"mt-auto p-6 border-t",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"text-sm text-muted-foreground",children:"Switch Theme"}),(0,a.jsx)(p,{})]}),(0,a.jsx)(N,{asChild:!0,children:(0,a.jsx)(n(),{href:"/contact",className:"w-full",children:(0,a.jsx)(i.$,{size:"lg",className:"w-full bg-orange-600",children:"Let's Talk"})})})]})})]})})]})]})})}},5786:()=>{},5816:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6874,23)),Promise.resolve().then(s.t.bind(s,611,23)),Promise.resolve().then(s.bind(s,2813)),Promise.resolve().then(s.bind(s,1483)),Promise.resolve().then(s.t.bind(s,5786,23))},9434:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(2596),r=s(9688);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[200,874,63,848,884,750,441,684,358],()=>t(5816)),_N_E=e.O()}]);