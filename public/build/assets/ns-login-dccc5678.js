import{F as w,a as d,n as b,b as m}from"./bootstrap-ece284e4.js";import{_ as a}from"./currency-ab26e44d.js";import{w as F}from"./npm~@vue~runtime-dom_-aa3a306b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{f as T}from"./npm~rxjs-eeb06f17.js";import{ak as u,ac as t,A as s,D as i,F as V,ai as B,y as v,z as l,c as p,aE as y,I as R}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as f}from"./npm~@vue~shared_-3ce114fe.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-4c913503.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~tslib-8dbab242.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";const X={name:"ns-login",props:["showRecoveryLink","showRegisterButton"],data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){T({login:d.get("/api/fields/ns.login"),csrf:d.get("/sanctum/csrf-cookie")}).subscribe({next:o=>{this.fields=this.validation.createFields(o.login),this.xXsrfToken=d.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>b.doAction("ns-login-mounted",this),100)},error:o=>{m.error(o.message||a("An unexpected error occurred."),a("OK"),{duration:0}).subscribe()}})},methods:{__:a,signIn(){if(!this.validation.validateFields(this.fields))return m.error(a("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),b.applyFilters("ns-login-submit",!0)&&(this.isSubitting=!0,d.post("/auth/sign-in",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:e=>{document.location=e.data.redirectTo},error:e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),m.error(e.message||a("An unexpected error occured.")).subscribe()}}))}}},N={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},E={class:"p-3 -my-2"},I={key:0,class:"flex items-center justify-center py-10"},K={key:1,class:"flex w-full items-center justify-center py-4"},j={href:"/password-lost",class:"hover:underline text-blue-600 text-sm"},A={class:"flex justify-between items-center border-t ns-box-footer p-3"},L={key:0};function z(o,e,_,O,n,r){const k=u("ns-field"),h=u("ns-spinner"),g=u("ns-button");return t(),s("div",N,[i("div",C,[i("div",E,[n.fields.length>0?(t(),s("div",{key:0,class:"py-2 fade-in-entrance anim-duration-300",onKeyup:e[0]||(e[0]=F(c=>r.signIn(),["enter"]))},[(t(!0),s(V,null,B(n.fields,(c,x)=>(t(),v(k,{key:x,field:c},null,8,["field"]))),128))],32)):l("",!0)]),n.fields.length===0?(t(),s("div",I,[p(h,{border:"4",size:"16"})])):l("",!0),_.showRecoveryLink?(t(),s("div",K,[i("a",j,f(r.__("Password Forgotten ?")),1)])):l("",!0)]),i("div",A,[i("div",null,[p(g,{disabled:n.isSubitting,onClick:e[1]||(e[1]=c=>r.signIn()),class:"justify-between",type:"info"},{default:y(()=>[n.isSubitting?(t(),v(h,{key:0,class:"mr-2",size:"6"})):l("",!0),i("span",null,f(r.__("Sign In")),1)]),_:1},8,["disabled"])]),_.showRegisterButton?(t(),s("div",L,[p(g,{link:!0,href:"/sign-up",type:"success"},{default:y(()=>[R(f(r.__("Register")),1)]),_:1})])):l("",!0)])])}const ve=S(X,[["render",z]]);export{ve as default};
