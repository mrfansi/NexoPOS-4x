import{F,b as p,a as T}from"./bootstrap-ece284e4.js";import{_ as l,n as V}from"./currency-ab26e44d.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as _,ac as c,A as h,D as s,c as u,z as g,F as k,ai as C,y as j,aE as b,I as v}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as i}from"./npm~@vue~shared_-3ce114fe.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-4c913503.js";import"./npm~@vue~runtime-dom_-aa3a306b.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";const O={name:"ns-pos-layaway-popup",props:["popup"],data(){return{fields:[],instalments:[],formValidation:new F,subscription:null,totalPayments:0}},mounted(){this.loadFields()},updated(){setTimeout(()=>{document.querySelector(".is-popup #total_instalments").addEventListener("change",()=>{const e=this.formValidation.extractFields(this.fields).total_instalments;this.generatePaymentFields(e)}),document.querySelector(".is-popup #total_instalments").addEventListener("focus",()=>{document.querySelector(".is-popup #total_instalments").select()})},200)},computed:{expectedPayment(){const e=this.order.customer.group.minimal_credit_payment;return nsRawCurrency(this.order.total*e/100)},order(){return this.popup.params.order.instalments=this.popup.params.order.instalments.map(e=>{for(let t in e)if(typeof e[t]!="object"){if(t==="date"){const a={type:"date",name:t,label:l("Date"),disabled:e.paid===1,value:moment(e.date).format("YYYY-MM-DD")};e[t]=a}else if(t==="amount"){const a={type:"number",name:t,label:l("Amount"),disabled:e.paid===1,value:e.amount};e[t]=a}else if(!["paid","id"].includes(t)){const a={type:"hidden",name:t,value:e[t]};e[t]=a}}return e}),this.popup.params.order}},unmounted(){this.subscription.unsubscribe()},methods:{__:l,nsCurrency:V,refreshTotalPayments(){if(this.order.instalments.length>0){const e=nsRawCurrency(this.order.instalments.map(t=>parseFloat(t.amount.value)||0).reduce((t,a)=>parseFloat(t)+parseFloat(a)));this.totalPayments=this.order.total-e}else this.totalPayments=0},removeInstalment(e){const t=this.order.instalments.indexOf(e);this.order.instalments.splice(t,1),this.$forceUpdate()},generatePaymentFields(e){this.order.instalments=new Array(parseInt(e)).fill("").map((t,a)=>({date:{type:"date",name:"date",label:"Date",value:a===0?ns.date.moment.format("YYYY-MM-DD"):""},amount:{type:"number",name:"amount",label:"Amount",value:a===0?this.expectedPayment:0},readonly:{type:"hidden",name:"readonly",value:this.expectedPayment>0&&a===0}})),this.$forceUpdate(),this.refreshTotalPayments()},close(){this.popup.params.reject({status:"failed",message:l("You must define layaway settings before proceeding.")}),this.popup.close()},skipInstalments(){this.expectedPayment>0?(this.order.instalments=[{amount:this.expectedPayment,date:ns.date.current}],this.order.final_payment_date=this.order.instalments.reverse()[0].date,this.order.total_instalments=this.order.instalments.length,this.order.support_instalments=!1):(this.order.final_payment_date=ns.date.current,this.order.total_instalments=0,this.order.support_instalments=!1),this.popup.close(),POS.order.next(this.order);const{resolve:e,reject:t}=this.popup.params;return e({order:this.order,skip_layaway:!0})},updateOrder(){if(this.order.instalments.length===0)return p.error(l("Please provide instalments before proceeding.")).subscribe();if(this.fields.forEach(r=>this.formValidation.validateField(r)),!this.formValidation.fieldsValid(this.fields))return p.error(l("Unable to process, the form is not valid")).subscribe();this.$forceUpdate();const e=this.order.instalments.map(r=>({amount:parseFloat(r.amount.value),date:r.date.value})),t=nsRawCurrency(e.map(r=>r.amount).reduce((r,m)=>parseFloat(r)+parseFloat(m)));if(e.filter(r=>r.date===void 0||r.date==="").length>0)return p.error(l("One or more instalments has an invalid date.")).subscribe();if(e.filter(r=>!(r.amount>0)).length>0)return p.error(l("One or more instalments has an invalid amount.")).subscribe();if(e.filter(r=>moment(r.date).isBefore(ns.date.moment.startOf("day"))).length>0)return p.error(l("One or more instalments has a date prior to the current date.")).subscribe();const a=e.filter(r=>moment(r.date).isSame(ns.date.moment.startOf("day"),"day"));let y=0;if(a.forEach(r=>{y+=parseFloat(r.amount)}),y<this.expectedPayment)return p.error(l("The payment to be made today is less than what is expected.")).subscribe();if(t<nsRawCurrency(this.order.total))return p.error(l("Total instalments must be equal to the order total.")).subscribe();e.sort((r,m)=>{const o=moment(r.date),f=moment(m.date);return o.isBefore(f)?-1:o.isAfter(f)?1:0});const d=this.formValidation.extractFields(this.fields);d.final_payment_date=e.reverse()[0].date,d.total_instalments=e.length;const n={...this.popup.params.order,...d,instalments:e},{resolve:x,reject:w}=this.popup.params;return this.popup.close(),POS.order.next(n),x({order:n,skip_layaway:!1})},loadFields(){T.get("/api/fields/ns.layaway").subscribe(e=>{this.fields=this.formValidation.createFields(e),this.fields.forEach(t=>{t.name==="total_instalments"&&(t.value=this.order.total_instalments||0)})})}}},S={class:"shadow-lg h-95vh md:h-5/6-screen lg:h-5/6-screen w-95vw md:w-4/6-screen lg:w-3/6-screen ns-box flex flex-col"},Y={class:"p-2 border-b ns-box-header flex justify-between items-center"},D={class:"font-semibold"},B={class:"p-2 flex-auto flex flex-col relative overflow-y-auto"},E={key:0,class:"absolute h-full w-full flex items-center justify-center"},M={class:"p-2 elevation-surface info mb-2 text-center text-2xl font-bold flex justify-between"},A={class:"flex flex-col flex-auto overflow-hidden"},L={class:"border-b ns-box-body"},U={class:"text-2xl flex justify-between py-2 text-primary"},q={class:"text-sm"},N={class:"p-2 mb-2 text-center bg-green-200 text-green-700"},R={class:"flex-auto overflow-y-auto"},z={class:"flex flex-auto"},H={class:"px-1 w-full md:w-1/2"},G={class:"px-1 w-full md:w-1/2"},J={class:"flex items-center"},K=["onClick"],Q=s("i",{class:"las la-times"},null,-1),W=[Q],X={key:0,class:"my-2"},Z={class:"p-2 elevation-surface border text-primary text-center"},$={class:"p-2 flex border-t ns-box-footer justify-between flex-shrink-0"},ee={class:"md:-mx-1 flex flex-col md:flex-row"},te={class:"md:px-1"},se={class:"md:-mx-1 flex flex-col md:flex-row"},re={class:"md:px-1"},ne={class:"md:px-1"};function ae(e,t,a,y,d,n){const x=_("ns-close-button"),w=_("ns-spinner"),r=_("ns-field"),m=_("ns-button");return c(),h("div",S,[s("div",Y,[s("h3",D,i(n.__("Layaway Parameters")),1),s("div",null,[u(x,{onClick:t[0]||(t[0]=o=>n.close())})])]),s("div",B,[d.fields.length===0?(c(),h("div",E,[u(w)])):g("",!0),s("div",M,[s("span",null,i(n.__("Minimum Payment")),1),s("span",null,i(n.nsCurrency(n.expectedPayment)),1)]),s("div",null,[(c(!0),h(k,null,C(d.fields,(o,f)=>(c(),j(r,{field:o,key:f},null,8,["field"]))),128))]),s("div",A,[s("div",L,[s("h3",U,[s("span",null,i(n.__("Instalments & Payments")),1),s("p",null,[s("span",q,"("+i(n.nsCurrency(d.totalPayments))+")",1),s("span",null,i(n.nsCurrency(e.total)),1)])]),s("p",N,i(n.__("The final payment date must be the last within the instalments.")),1)]),s("div",R,[(c(!0),h(k,null,C(n.order.instalments,(o,f)=>(c(),h("div",{class:"flex w-full -mx-1 py-2",key:f},[s("div",z,[s("div",H,[u(r,{onChange:t[1]||(t[1]=P=>n.refreshTotalPayments()),field:o.date},null,8,["field"])]),s("div",G,[u(r,{onChange:t[2]||(t[2]=P=>n.refreshTotalPayments()),field:o.amount},null,8,["field"])])]),s("div",J,[s("button",{onClick:P=>n.removeInstalment(o),class:"items-center flex justify-center h-8 w-8 rounded border text-primary ns-inset-button error"},W,8,K)])]))),128)),n.order.instalments.length===0?(c(),h("div",X,[s("p",Z,i(n.__("There is no instalment defined. Please set how many instalments are allowed for this order")),1)])):g("",!0)])])]),s("div",$,[s("div",ee,[s("div",te,[u(m,{onClick:t[3]||(t[3]=o=>n.skipInstalments()),type:"info"},{default:b(()=>[v(i(n.__("Skip Instalments")),1)]),_:1})])]),s("div",se,[s("div",re,[u(m,{onClick:t[4]||(t[4]=o=>n.close()),type:"error"},{default:b(()=>[v(i(n.__("Cancel")),1)]),_:1})]),s("div",ne,[u(m,{onClick:t[5]||(t[5]=o=>n.updateOrder()),type:"info"},{default:b(()=>[v(i(n.__("Proceed")),1)]),_:1})])])])])}const Ae=I(O,[["render",ae]]);export{Ae as default};
