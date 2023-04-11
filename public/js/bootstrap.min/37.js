"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[37],{1037:(t,e,i)=>{i.r(e),i.d(e,{default:()=>g});var r=i(7266),n=i(9671),s=i(3601),a=i(7389),o=i(7757),l=i.n(o),u=i(2242),c=i(3296);function d(t,e,i,r,n,s,a){try{var o=t[s](a),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(r,n)}const f={name:"ns-product-group",props:["fields"],watch:{searchValue:function(){var t=this;clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){t.searchProducts(t.searchValue)}),1e3)},products:{deep:!0,handler:function(){this.$forceUpdate()}}},computed:{totalProducts:function(){return this.products.length>0?(this.$emit("update",this.products),this.products.map((function(t){return parseFloat(t.sale_price)*parseFloat(t.quantity)})).reduce((function(t,e){return t+e}))):0}},mounted:function(){var t=this.fields.filter((function(t){return"product_subitems"===t.name}));t.length>0&&void 0!==t[0].value&&t[0].value.length>0&&(this.products=t[0].value)},data:function(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:a.__,setSalePrice:function(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct:function(t){var e=this;u.G.show(s.default,{title:(0,a.__)("Delete Sub item"),message:(0,a.__)("Would you like to delete this sub item?"),onAction:function(i){i&&e.products.splice(t,1)}})},toggleUnitField:function(t){var e=this;t._unit_toggled||(t._unit_toggled=!t._unit_toggled),setTimeout((function(){t._unit_toggled&&e.$refs.unitField[0].addEventListener("blur",(function(){t._unit_toggled=!1,e.$forceUpdate()}))}),200)},toggleQuantityField:function(t){var e=this;t._quantity_toggled=!t._quantity_toggled,setTimeout((function(){t._quantity_toggled&&(e.$refs.quantityField[0].select(),e.$refs.quantityField[0].addEventListener("blur",(function(){e.toggleQuantityField(t),e.$forceUpdate()})))}),200)},togglePriceField:function(t){var e=this;t._price_toggled=!t._price_toggled,setTimeout((function(){t._price_toggled&&(e.$refs.priceField[0].select(),e.$refs.priceField[0].addEventListener("blur",(function(){e.togglePriceField(t),e.$forceUpdate()})))}),200)},redefineUnit:function(t){var e=t.unit_quantities.filter((function(e){return e.id===t.unit_quantity_id}));e.length>0&&(t.unit_quantity=e[0],t.unit_id=e[0].unit.id,t.unit=e[0].unit,t.sale_price=e[0].sale_price)},addResult:function(t){var e,i=this;return(e=l().mark((function e(){var r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.searchValue="","grouped"!==t.type){e.next=3;break}return e.abrupt("return",n.kX.error((0,a.__)("Unable to add a grouped product.")).subscribe());case 3:return e.prev=3,e.next=6,new Promise((function(e,i){u.G.show(c.Z,{label:(0,a.__)("Choose The Unit"),options:t.unit_quantities.map((function(t){return{label:t.unit.name,value:t.id}})),resolve:e,reject:i})}));case 6:r=e.sent,s=t.unit_quantities.filter((function(t){return parseInt(t.id)===parseInt(r[0].value)})),i.products.push({name:t.name,unit_quantity_id:r[0].value,unit_quantity:s[0],unit_id:s[0].unit.id,unit:s[0].unit,product_id:s[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:t.unit_quantities,sale_price:s[0].sale_price}),i.$emit("update",i.products),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})),function(){var t=this,i=arguments;return new Promise((function(r,n){var s=e.apply(t,i);function a(t){d(s,r,n,a,o,"next",t)}function o(t){d(s,r,n,a,o,"throw",t)}a(void 0)}))})()},searchProducts:function(t){var e=this;n.ih.post("/api/nexopos/v4/products/search",{search:t,arguments:{type:{comparison:"<>",value:"grouped"}}}).subscribe({next:function(t){e.results=t},error:function(t){n.kX.error(t.message||(0,a.__)("An unexpected error occurred"),(0,a.__)("Ok"),{duration:3e3}).subscribe()}})}}};var p=i(1900);function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){_(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const b={components:{nsProductGroup:(0,p.Z)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col px-4 w-full"},[i("div",{staticClass:"md:-mx-4 flex flex-col md:flex-row"},[i("div",{staticClass:"md:px-4 w-full"},[i("div",{staticClass:"input-group border-2 rounded info flex w-full"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"flex-auto p-2 outline-none",attrs:{placeholder:t.__("Search products..."),type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),i("button",{staticClass:"px-2",on:{click:function(e){return t.setSalePrice()}}},[t._v(t._s(t.__("Set Sale Price")))])]),t._v(" "),t.results.length>0&&t.searchValue.length>0?i("div",{staticClass:"h-0 relative"},[i("ul",{staticClass:"ns-vertical-menu absolute w-full"},t._l(t.results,(function(e){return i("li",{key:e.id,staticClass:"p-2 border-b cursor-pointer",on:{click:function(i){return t.addResult(e)}}},[t._v(t._s(e.name))])})),0)]):t._e(),t._v(" "),i("div",{staticClass:"my-2"},[i("table",{staticClass:"ns-table"},[i("thead",[i("tr",[i("th",{staticClass:"border",attrs:{colspan:"2"}},[t._v(t._s(t.__("Products")))])])]),t._v(" "),i("tbody",[t._l(t.products,(function(e,r){return i("tr",{key:r},[i("td",{staticClass:"border p-2",attrs:{colspan:"2"}},[i("div",{staticClass:"flex justify-between"},[i("h3",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"hover:underline text-error-secondary cursor-pointer",on:{click:function(e){return t.removeProduct(r)}}},[t._v(t._s(t.__("Remove")))])]),t._v(" "),i("ul",[i("li",{staticClass:"flex justify-between p-1 hover:bg-box-elevation-hover",on:{click:function(i){return t.toggleUnitField(e)}}},[i("span",[t._v(t._s(t.__("Unit"))+":")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.unit_quantity_id,expression:"product.unit_quantity_id"}],ref:"unitField",refInFor:!0,attrs:{type:"text"},on:{change:[function(i){var r=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"unit_quantity_id",i.target.multiple?r:r[0])},function(i){return t.redefineUnit(e)}]}},t._l(e.unit_quantities,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.unit.name))])})),0)]),t._v(" "),i("li",{staticClass:"flex justify-between p-1 hover:bg-box-elevation-hover",on:{click:function(i){return t.toggleQuantityField(e)}}},[i("span",[t._v(t._s(t.__("Quantity"))+":")]),t._v(" "),e._quantity_toggled?t._e():i("span",{staticClass:"cursor-pointer border-b border-dashed border-info-secondary"},[t._v(t._s(e.quantity))]),t._v(" "),e._quantity_toggled?i("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"product.quantity"}],ref:"quantityField",refInFor:!0,attrs:{type:"text"},domProps:{value:e.quantity},on:{input:function(i){i.target.composing||t.$set(e,"quantity",i.target.value)}}}):t._e()]),t._v(" "),i("li",{staticClass:"flex justify-between p-1 hover:bg-box-elevation-hover",on:{click:function(i){return t.togglePriceField(e)}}},[i("span",[t._v(t._s(t.__("Price"))+":")]),t._v(" "),e._price_toggled?t._e():i("span",{staticClass:"cursor-pointer border-b border-dashed border-info-secondary"},[t._v(t._s(t._f("currency")(e.sale_price)))]),t._v(" "),e._price_toggled?i("input",{directives:[{name:"model",rawName:"v-model",value:e.sale_price,expression:"product.sale_price"}],ref:"priceField",refInFor:!0,attrs:{type:"text"},domProps:{value:e.sale_price},on:{input:function(i){i.target.composing||t.$set(e,"sale_price",i.target.value)}}}):t._e()])])])])})),t._v(" "),0===t.products.length?i("tr",[i("td",{staticClass:"border p-2 text-center",attrs:{colspan:"2"}},[t._v("\n                                "+t._s(t.__("No product are added to this group."))+"\n                            ")])]):t._e()],2),t._v(" "),t.products.length>0?i("tfoot",[i("tr",[i("td",{staticClass:"w-1/2 border p-2 text-left"},[t._v(t._s(t.__("Total")))]),t._v(" "),i("td",{staticClass:"w-1/2 border p-2 text-right"},[t._v(t._s(t._f("currency")(t.totalProducts)))])])]):t._e()])])])])])}),[],!1,null,null,null).exports},data:function(){return{formValidation:new r.Z,nsSnackBar:n.kX,nsHttpClient:n.ih,_sampleVariation:null,form:""}},watch:{form:{deep:!0,handler:function(t){var e=this;this.form.variations.forEach((function(t){if("grouped"===e.formValidation.extractFields(t.tabs.identification.fields).type){for(var i in t.tabs)["identification","groups","taxes","units"].includes(i)||e.$set(t.tabs[i],"visible",!1);t.tabs.groups&&e.$set(t.tabs.groups,"visible",!0)}else{for(var r in t.tabs)["identification","groups","taxes","units"].includes(r)||e.$set(t.tabs[r],"visible",!0);t.tabs.groups&&e.$set(t.tabs.groups,"visible",!1)}}))}}},computed:{defaultVariation:function(){var t=new Object;for(var e in this._sampleVariation.tabs)t[e]=new Object,t[e].label=this._sampleVariation.tabs[e].label,t[e].active=this._sampleVariation.tabs[e].active,t[e].fields=this._sampleVariation.tabs[e].fields.filter((function(t){return!["category_id","product_type","stock_management","expires"].includes(t.name)})).map((function(t){return("string"==typeof t.value&&0===t.value.length||null===t.value)&&(t.value=""),t}));return{id:"",tabs:t}}},props:["submit-method","submit-url","return-url","src","units-url"],methods:{__:a.__,getGroupProducts:function(t){if(t.groups){var e=t.groups.fields.filter((function(t){return"products_subitems"===t.name}));if(console.log(e),e.length>0)return e[0].value}return[]},setProducts:function(t,e){e.groups.fields.forEach((function(e){"product_subitems"===e.name&&(e.value=t)}))},triggerRecompute:function(t){console.log(this.form)},getUnitQuantity:function(t){var e=t.filter((function(t){return"quantity"===t.name})).map((function(t){return t.value}));return e.length>0?e[0]:0},removeUnitPriceGroup:function(t,e){var i=this,r=t.filter((function(t){return"id"===t.name&&void 0!==t.value}));Popup.show(s.default,{title:(0,a.__)("Confirm Your Action"),message:(0,a.__)("Would you like to delete this group ?"),onAction:function(n){if(n)if(r.length>0)i.confirmUnitQuantityDeletion({group_fields:t,group:e});else{var s=e.indexOf(t);e.splice(s,1)}}})},confirmUnitQuantityDeletion:function(t){var e=t.group_fields,i=t.group;Popup.show(s.default,{title:(0,a.__)("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:(0,a.__)("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:function(t){if(t){var r=e.filter((function(t){return"id"===t.name})).map((function(t){return t.value}))[0];n.ih.delete("/api/nexopos/v4/products/units/quantity/".concat(r)).subscribe((function(t){var r=i.indexOf(e);i.splice(r,1),n.kX.success(t.message).subscribe()}),(function(t){nsSnackbar.error(t.message).subscribe()}))}}})},addUnitGroup:function(t){if(0===t.options.length)return n.kX.error((0,a.__)("Please select at least one unit group before you proceed.")).subscribe();t.options.length>t.groups.length?t.groups.push(JSON.parse(JSON.stringify(t.fields))):n.kX.error((0,a.__)("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits:function(t){var e=this;n.ih.get(this.unitsUrl.replace("{id}",t.fields.filter((function(t){return"unit_group"===t.name}))[0].value)).subscribe((function(i){t.fields.forEach((function(t){"group"===t.type&&(t.options=i,t.fields.forEach((function(t){"unit_id"===t.name&&(console.log(t),t.options=i.map((function(t){return{label:t.name,value:t.id}})))})))})),e.$forceUpdate()}))},loadOptionsFor:function(t,e,i){var r=this;n.ih.get(this.unitsUrl.replace("{id}",e)).subscribe((function(e){r.form.variations[i].tabs.units.fields.forEach((function(i){i.name===t&&(i.options=e.map((function(t){return{label:t.name,value:t.id,selected:!1}})))})),r.$forceUpdate()}))},submit:function(){var t=this;if(this.formValidation.validateFields([this.form.main]),this.form.variations.map((function(e){return t.formValidation.validateForm(e)})).filter((function(t){return t.length>0})).length>0||Object.values(this.form.main.errors).length>0)return n.kX.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:(0,a.__)("Unable to proceed the form is not valid.")).subscribe();var e=this.form.variations.map((function(t,e){return t.tabs.images.groups.filter((function(t){return t.filter((function(t){return"featured"===t.name&&1===t.value})).length>0}))}));if(e[0]&&e[0].length>1)return n.kX.error(this.$slots["error-multiple-primary"]?this.$slots["error-multiple-primary"][0].text:(0,a.__)("Unable to proceed, more than one product is set as featured")).subscribe();var i=[];if(this.form.variations.map((function(e,r){return e.tabs.units.fields.filter((function(t){return"group"===t.type})).forEach((function(e){new Object;e.groups.forEach((function(e){i.push(t.formValidation.validateFields(e))}))}))})),0===i.length)return n.kX.error(this.$slots["error-no-units-groups"]?this.$slots["error-no-units-groups"][0].text:(0,a.__)("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(i.filter((function(t){return!1===t})).length>0)return this.$forceUpdate(),n.kX.error(this.$slots["error-invalid-unit-group"]?this.$slots["error-invalid-unit-group"][0].text:(0,a.__)("Unable to proceed as one of the unit group field is invalid")).subscribe();var r=m(m({},this.formValidation.extractForm(this.form)),{},{variations:this.form.variations.map((function(e,i){var r=t.formValidation.extractForm(e);0===i&&(r.$primary=!0),r.images=e.tabs.images.groups.map((function(e){return t.formValidation.extractFields(e)}));var n=new Object;return e.tabs.units.fields.filter((function(t){return"group"===t.type})).forEach((function(e){n[e.name]=e.groups.map((function(e){return t.formValidation.extractFields(e)}))})),r.units=m(m({},r.units),n),r}))});this.formValidation.disableForm(this.form),n.ih[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,r).subscribe((function(e){if("success"===e.status){if("POST"===t.submitMethod&&!1!==t.returnUrl)return document.location=e.data.editUrl||t.returnUrl;n.kX.info(e.message,(0,a.__)("Okay"),{duration:3e3}).subscribe(),t.$emit("save")}t.formValidation.enableForm(t.form)}),(function(e){n.kX.error(e.message,void 0,{duration:5e3}).subscribe(),t.formValidation.enableForm(t.form),e.response&&t.formValidation.triggerError(t.form,e.response.data)}))},deleteVariation:function(t){confirm(this.$slots["delete-variation"]?this.$slots["delete-variation"][0].text:(0,a.__)("Would you like to delete this variation ?"))&&this.form.variations.splice(t,1)},setTabActive:function(t,e){for(var i in e)i!==t&&(e[i].active=!1);e[t].active=!0,"units"===t&&this.loadAvailableUnits(e[t])},duplicate:function(t){this.form.variations.push(Object.assign({},t))},newVariation:function(){this.form.variations.push(this.defaultVariation)},getActiveTab:function(t){for(var e in t)if(t[e].active)return t[e];return!1},getActiveTabKey:function(t){for(var e in t)if(t[e].active)return e;return!1},parseForm:function(t){var e=this;return t.main.value=void 0===t.main.value?"":t.main.value,t.main=this.formValidation.createFields([t.main])[0],t.variations.forEach((function(t,i){var r=0;for(var n in t.tabs)0===r&&void 0===t.tabs[n].active?(t.tabs[n].active=!0,e._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[n].fields&&(t.tabs[n].fields=e.formValidation.createFields(t.tabs[n].fields.filter((function(t){return"name"!==t.name}))))):t.tabs[n].fields&&(t.tabs[n].fields=e.formValidation.createFields(t.tabs[n].fields)),t.tabs[n].active=void 0!==t.tabs[n].active&&t.tabs[n].active,t.tabs[n].visible=void 0===t.tabs[n].visible||t.tabs[n].visible,r++})),t},loadForm:function(){var t=this;n.ih.get("".concat(this.src)).subscribe((function(e){t.form=t.parseForm(e.form)}))},addImage:function(t){t.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(t.tabs.images.fields))))},removeImage:function(t,e){var i=t.tabs.images.groups.indexOf(e);t.tabs.images.groups.splice(i,1)}},mounted:function(){this.loadForm()},name:"ns-manage-products"};const g=(0,p.Z)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form flex-auto",attrs:{id:"crud-form"}},[0===Object.values(t.form).length?i("div",{staticClass:"flex items-center h-full justify-center flex-auto"},[i("ns-spinner")],1):t._e(),t._v(" "),Object.values(t.form).length>0?[i("div",{staticClass:"flex flex-col"},[i("div",{staticClass:"flex justify-between items-center"},[i("label",{staticClass:"font-bold my-2 text-primary",attrs:{for:"title"}},[t._v(t._s(t.form.main.label))]),t._v(" "),i("div",{staticClass:"text-sm my-2 text-primary",attrs:{for:"title"}},[t.returnUrl?i("a",{staticClass:"rounded-full border ns-inset-button error hover:bg-error-tertiary  px-2 py-1",attrs:{href:t.returnUrl}},[t._v(t._s(t.__("Return")))]):t._e()])]),t._v(" "),i("div",{staticClass:"input-group info flex border-2 rounded overflow-hidden",class:t.form.main.disabled?"":t.form.main.errors.length>0?"border-error-tertiary":""},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.main.value,expression:"form.main.value"}],staticClass:"flex-auto text-primary outline-none h-10 px-2",class:(t.form.main.disabled,""),attrs:{disabled:t.form.main.disabled,type:"text"},domProps:{value:t.form.main.value},on:{blur:function(e){return t.formValidation.checkField(t.form.main)},change:function(e){return t.formValidation.checkField(t.form.main)},input:function(e){e.target.composing||t.$set(t.form.main,"value",e.target.value)}}}),t._v(" "),i("button",{staticClass:"outline-none px-4 h-10 rounded-none",class:t.form.main.disabled?"":t.form.main.errors.length>0?"bg-error-tertiary":"",attrs:{disabled:t.form.main.disabled},on:{click:function(e){return t.submit()}}},[t._t("save",(function(){return[t._v(t._s(t.__("Save")))]}))],2)]),t._v(" "),t.form.main.description&&0===t.form.main.errors.length?i("p",{staticClass:"text-xs text-primary py-1"},[t._v(t._s(t.form.main.description))]):t._e(),t._v(" "),t._l(t.form.main.errors,(function(e,r){return i("p",{key:r,staticClass:"text-xs py-1 text-error-tertiary"},[i("span",[t._t("error-required",(function(){return[t._v(t._s(e.identifier))]}))],2)])}))],2),t._v(" "),i("div",{staticClass:"-mx-4 flex flex-wrap mt-4",attrs:{id:"form-container"}},[i("div",{staticClass:"px-4 w-full"},t._l(t.form.variations,(function(e,r){return i("div",{key:r,staticClass:"mb-8",attrs:{id:"tabbed-card"}},[i("div",{staticClass:"flex flex-wrap justify-between ns-tab",attrs:{id:"card-header"}},[i("div",{staticClass:"flex flex-wrap"},[t._l(e.tabs,(function(r,n){return[r.visible?i("div",{key:n,staticClass:"tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between",class:r.active?"active":"inactive",on:{click:function(i){return t.setTabActive(n,e.tabs)}}},[i("span",{staticClass:"block mr-2"},[t._v(t._s(r.label))]),t._v(" "),r.errors&&r.errors.length>0?i("span",{staticClass:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},[t._v(t._s(r.errors.length))]):t._e()]):t._e()]}))],2),t._v(" "),i("div",{staticClass:"flex items-center justify-center -mx-1"})]),t._v(" "),i("div",{staticClass:"card-body ns-tab-item rounded-br-lg rounded-bl-lg shadow p-2"},[["images","units","groups"].includes(t.getActiveTabKey(e.tabs))?t._e():i("div",{staticClass:"-mx-4 flex flex-wrap"},[t._l(t.getActiveTab(e.tabs).fields,(function(t,e){return[i("div",{key:e,staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[i("ns-field",{attrs:{field:t}})],1)]}))],2),t._v(" "),"images"===t.getActiveTabKey(e.tabs)?i("div",{staticClass:"-mx-4 flex flex-wrap text-primary"},[i("div",{staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[i("div",{staticClass:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},[i("span",[t._v(t._s(t.__("Add Images")))]),t._v(" "),i("button",{staticClass:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info",on:{click:function(i){return t.addImage(e)}}},[i("i",{staticClass:"las la-plus-circle"})])])]),t._v(" "),t._l(t.getActiveTab(e.tabs).groups,(function(r,n){return i("div",{key:n,staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[i("div",{staticClass:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},[i("div",{staticClass:"p-2"},t._l(r,(function(t,e){return i("ns-field",{key:e,attrs:{field:t}})})),1),t._v(" "),i("div",{staticClass:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer",on:{click:function(i){return t.removeImage(e,r)}}},[t._v("\n                                        "+t._s(t.__("Remove Image"))+"\n                                    ")])])])}))],2):t._e(),t._v(" "),"groups"===t.getActiveTabKey(e.tabs)?i("div",{staticClass:"-mx-4 flex flex-wrap text-primary"},[i("ns-product-group",{attrs:{fields:t.getActiveTab(e.tabs).fields},on:{update:function(i){return t.setProducts(i,e.tabs)},updateSalePrice:function(i){return t.triggerRecompute(i,e.tabs)}}})],1):t._e(),t._v(" "),"units"===t.getActiveTabKey(e.tabs)?i("div",{staticClass:"-mx-4 flex flex-wrap"},[i("div",{staticClass:"px-4 w-full md:w-1/2 lg:w-1/3"},[i("ns-field",{attrs:{field:t.getActiveTab(e.tabs).fields[0]},on:{change:function(i){t.loadAvailableUnits(t.getActiveTab(e.tabs))}}}),t._v(" "),i("ns-field",{attrs:{field:t.getActiveTab(e.tabs).fields[1]},on:{change:function(i){t.loadAvailableUnits(t.getActiveTab(e.tabs))}}})],1),t._v(" "),t._l(t.getActiveTab(e.tabs).fields,(function(e,r){return["group"===e.type?i("div",{key:r,staticClass:"px-4 w-full lg:w-2/3"},[i("div",{staticClass:"mb-2"},[i("label",{staticClass:"font-medium text-primary"},[t._v(t._s(e.label))]),t._v(" "),i("p",{staticClass:"py-1 text-sm text-primary"},[t._v(t._s(e.description))])]),t._v(" "),i("div",{staticClass:"mb-2"},[i("div",{staticClass:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg",on:{click:function(i){return t.addUnitGroup(e)}}},[t._m(0,!0),t._v(" "),i("span",[t._v(t._s(t.__("New Group")))])])]),t._v(" "),i("div",{staticClass:"-mx-4 flex flex-wrap"},t._l(e.groups,(function(r,n){return i("div",{key:n,staticClass:"px-4 w-full md:w-1/2 mb-4"},[i("div",{staticClass:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},[i("div",{staticClass:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},[i("span",[t._v(t._s(t.__("Available Quantity")))]),t._v(" "),i("span",[t._v(t._s(t.getUnitQuantity(r)))])]),t._v(" "),i("div",{staticClass:"p-2 mb-2"},t._l(r,(function(t,e){return i("ns-field",{key:e,attrs:{field:t}})})),1),t._v(" "),i("div",{staticClass:"p-1 hover:bg-error-primary border-t border-box-elevation-edge flex items-center justify-center cursor-pointer font-medium",on:{click:function(i){return t.removeUnitPriceGroup(r,e.groups)}}},[t._v("\n                                                    "+t._s(t.__("Delete"))+"\n                                                ")])])])})),0)]):t._e()]}))],2):t._e()])])})),0)])]:t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[e("i",{staticClass:"las la-plus-circle"})])}],!1,null,null,null).exports},3296:(t,e,i)=>{i.d(e,{Z:()=>a});var r=i(8603),n=i(7389);const s={data:function(){return{value:[],options:[],description:"",label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.description=this.$popupParams.description||"",this.type=this.$popupParams.type||this.type},methods:{popupCloser:r.Z,__:n.__,toggle:function(t){var e=this.value.indexOf(t);-1===e?this.value.unshift(t):this.value.splice(e,1)},isSelected:function(t){return this.value.indexOf(t)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(t){void 0!==t&&(this.value=[t]),this.$popupParams.resolve(this.value),this.close()}}};const a=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen max-h-5/6-screen overflow-hidden flex flex-col"},[i("div",{staticClass:"p-2 flex justify-between border-b items-center ns-box-header"},[i("span",{staticClass:"text-semibold text-primary"},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),i("div",[i("ns-close-button",{on:{click:function(e){return t.close()}}})],1)]),t._v(" "),i("div",{staticClass:"flex flex-col overflow-hidden"},[t.description.length>0?i("p",{staticClass:"p-2 text-center text-sm bg-info-primary"},[t._v(t._s(t.description))]):t._e(),t._v(" "),i("div",{staticClass:"overflow-y-auto"},[i("ul",{staticClass:"ns-vertical-menu"},["select"===t.type?t._l(t.options,(function(e){return i("li",{key:e.value,staticClass:"p-2 border-b border-box-edge text-primary cursor-pointer",on:{click:function(i){return t.select(e)}}},[t._v(t._s(e.label))])})):t._e(),t._v(" "),"multiselect"===t.type?t._l(t.options,(function(e){return i("li",{key:e.value,staticClass:"p-2 border-b text-primary cursor-pointer",class:t.isSelected(e)?"active":"",on:{click:function(i){return t.toggle(e)}}},[t._v(t._s(e.label))])})):t._e()],2)])]),t._v(" "),"multiselect"===t.type?i("div",{staticClass:"flex justify-between"},[i("div"),t._v(" "),i("div",[i("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.select()}}},[t._v(t._s(t.__("Select")))])],1)]):t._e()])}),[],!1,null,null,null).exports}}]);