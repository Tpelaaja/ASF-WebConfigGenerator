(self.webpackChunkasf_config_web=self.webpackChunkasf_config_web||[]).push([[293],{453:(e,t,a)=>{"use strict";function s(e){return null==e}function i(e){return e&&"string"==typeof e.valueOf()}function l(e,t){return s(e)||""===e?t?["Field required!"]:[]:null}function n(e,t){return function(a,i){var n=l(a,i.required);if(!s(n))return n;var r=[];return!function(e){return"number"==typeof e}(a=parseInt(a,10))||isNaN(a)?r.push("Not a valid number!"):a>t?r.push("Value too big!"):a<e&&r.push("Value too small!"),r}}a.d(t,{Z:()=>r});const r={required:function(e,t){var a=l(e,t.required);return s(a)?[]:a},string:function(e,t){var a=l(e,t.required);if(!s(a))return a;var n=[];return i(e)||n.push("This is not a text!"),n},auth:function(e,t){var a=l(e,t.required);if(!s(a))return a;var n=[];return i(e)||n.push("This is not a valid authentication code!"),n},wallet:function(e,t){var a=l(e,t.required);if(!s(a))return a;var n=[];return i(e)||n.push("This is not a valid wallet code!"),n},tradeToken:(8,8,function(e,t){var a=l(e,t.required);if(!s(a))return a;var n=[];return i(e)?e.length>8?n.push("Text too long!"):e.length<8&&n.push("Text too short!"):n.push("Not a valid string!"),n}),byte:n(0,255),ushort:n(0,65535),uint:n(0,4294967295)}},25:(e,t,a)=>{var s=a(645)((function(e){return e[1]}));s.push([e.id,".checkbox button{transition:all .3s;margin-right:2px}.checkbox button:last-of-type{margin-right:5px}.checkbox-toggle{height:100%}",""]),e.exports=s},207:(e,t,a)=>{var s=a(645)((function(e){return e[1]}));s.push([e.id,".label-list{margin-top:5px;margin-bottom:0}.label-list .label{margin:0 5px;cursor:pointer;transition:all .1s}.label-list .label:hover{background:#000;color:#fff}",""]),e.exports=s},154:(e,t,a)=>{var s=a(645)((function(e){return e[1]}));s.push([e.id,".label-list{margin-top:5px;margin-bottom:0}.label-list .label{margin:0 5px;cursor:pointer;transition:all .1s}.label-list .label:hover{background:#000;color:#fff}",""]),e.exports=s},686:(e,t,a)=>{var s=a(645)((function(e){return e[1]}));s.push([e.id,".label-list{margin-top:5px;margin-bottom:0}.label-list .label{margin:0 5px;cursor:pointer;transition:all .1s}.label-list .label:hover{background:#000;color:#fff}",""]),e.exports=s},781:(e,t,a)=>{var s=a(645)((function(e){return e[1]}));s.push([e.id,".form-item:last-child{margin-bottom:0}",""]),e.exports=s},293:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form",attrs:{method:"post",action:"",id:"asf-form",onsubmit:"return false;"}},[e.versions.length>1?a("div",{staticClass:"row align-center"},[a("div",{staticClass:"col col-2"},[a("div",{staticClass:"form-input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedVersion,expression:"selectedVersion"}],attrs:{id:"version"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedVersion=t.target.multiple?a:a[0]}}},e._l(e.versions,(function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])])]):e._e(),e._v(" "),e._l(e.schema,(function(t){return!t.advanced||e.displayAdvanced?a("fieldset",[a("legend",[e._v(e._s(e.$t(t.legend)))]),e._v(" "),e._l(t.fields,(function(t){return!t.advanced||e.displayAdvanced?a(t.type,{key:t.field,tag:"component",attrs:{schema:t},on:{update:e.updateModel}}):e._e()}))],2):e._e()})),e._v(" "),a("div",{staticClass:"form-item"},[a("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.downloadJSON(t)}}},[e._v(e._s(e.$t("button.download")))])])],2)};s._withStripped=!0;var i=a(453);const l={V10:{cli:[{fields:[{label:"Your salad.io access token",field:"salad_key",placeholder:"0",type:"InputText",description:"schema.auth",validator:i.Z.auth},{label:"Your salad.io refresh token",field:"sIdRefreshToken",placeholder:"abc-xyz",type:"InputText",description:"schema.auth",validator:i.Z.auth},{label:"Your Nicehash wallet & rigid",field:"nicehash_wallet",placeholder:"3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp",type:"InputText",description:"schema.nicehash",validator:i.Z.wallet},{label:"Your Ethermine wallet & rigid",field:"ethermine_wallet",placeholder:"0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp",type:"InputText",description:"schema.ethermine",validator:i.Z.wallet}]}]},"V7, V8, V9 & V10 - Only Mining":{cli:[{fields:[{label:"Your Nicehash wallet & rigid",field:"nicehash_wallet",placeholder:"3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp",type:"InputText",description:"schema.nicehash",validator:i.Z.wallet},{label:"Your Ethermine wallet & rigid",field:"ethermine_wallet",placeholder:"0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp",type:"InputText",description:"schema.ethermine",validator:i.Z.wallet}]}]},"Deprecated!! V7, V8 & V9":{cli:[{fields:[{label:"Your salad.io authenentication token",field:"salad_key",placeholder:"0",type:"InputText",description:"schema.auth",validator:i.Z.auth},{label:"Your Nicehash wallet & rigid",field:"nicehash_wallet",placeholder:"3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp",type:"InputText",description:"schema.nicehash",validator:i.Z.wallet},{label:"Your Ethermine wallet & rigid",field:"ethermine_wallet",placeholder:"0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp",type:"InputText",description:"schema.ethermine",validator:i.Z.wallet}]}]},"Deprecated!! V5/V6":{cli:[{fields:[{label:"Your salad.io authenentication token",field:"salad_key",placeholder:"0",type:"InputText",description:"schema.auth",validator:i.Z.auth},{label:"Your Nicehash wallet & rigid",field:"wallet",placeholder:"3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp",type:"InputText",description:"schema.nicehash",validator:i.Z.wallet}]}]}};var n={},r=a(976);r.keys().forEach((function(e){var t=e.replace(/^\.\//,"").replace(/\.vue/,"");n[t]=r(e).default}));const o={data:function(){var e=[];for(var t in l)e.push(t);return{model:{},displayAdvanced:!1,selectedVersion:sessionStorage.getItem("selectedVersion")||e[0],versions:e,type:""}},computed:{schema:function(){return l[this.selectedVersion][this.type]||{}}},methods:{updateModel:function(e,t){this.model[t]=e},downloadJSON:function(){if(this.validateForm()){var e=this.processModelToJSON(this.model),t=JSON.stringify(e,null,2);this.downloadText(t,this.filename)}},downloadText:function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),a.setAttribute("download",t),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},toggleAdvanced:function(){this.displayAdvanced=!this.displayAdvanced},validateForm:function(){var e=document.getElementsByTagName("form")[0],t=document.getElementsByClassName("error");return t.length?(clearTimeout(this.shakeTimeout),Array.from(t).forEach((function(e){e.classList.add("shake")})),this.shakeTimeout=setTimeout((function(){Array.from(t).forEach((function(e){e.classList.remove("shake")}))}),500),!1):e.checkValidity()},processModelToJSON:function(e){return e}},watch:{selectedVersion:function(e){sessionStorage.setItem("selectedVersion",e)}},components:n};a(634);var u=a(900),c=(0,u.Z)(o,void 0,void 0,!1,null,null,null);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}c.options.__file="src/components/mixin/Config.vue";const m={name:"ASFConfig",mixins:[c.exports],data:function(){return{type:"cli",filename:"config.json"}},methods:{processModelToJSON:function(e){return e.Blacklist&&e.Blacklist.length&&(e.Blacklist=e.Blacklist.map((function(e){return parseInt(e,10)})).filter((function(e){return!isNaN(e)&&e>0}))),Object.entries(e).forEach((function(t){var a,s,i=(s=2,function(e){if(Array.isArray(e))return e}(a=t)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var s,i,l=[],n=!0,r=!1;try{for(a=a.call(e);!(n=(s=a.next()).done)&&(l.push(s.value),!t||l.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return l}}(a,s)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(a,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],n=i[1];"string"==typeof n&&""===n&&delete e[l]})),e}}};var v=(0,u.Z)(m,s,[],!1,null,null,null);v.options.__file="src/components/cli.vue";const p=v.exports},431:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item form-checkboxes"},e._l(e.schema.fields,(function(t){return a("label",{staticClass:"checkbox",attrs:{for:t.field}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"checkbox",id:t.field,name:t.field,required:t.required},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{change:function(t){var a=e.value,s=t.target,i=!!s.checked;if(Array.isArray(a)){var l=e._i(a,null);s.checked?l<0&&(e.value=a.concat([null])):l>-1&&(e.value=a.slice(0,l).concat(a.slice(l+1)))}else e.value=i}}}),e._v("\n        "+e._s(t.label)+"\n        "),t.required?a("span",{staticClass:"req"},[e._v("*")]):e._e()])})),0)};s._withStripped=!0;const i={mixins:[a(608).Z],name:"CheckboxGroup"};var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/CheckboxGroup.vue";const n=l.exports},682:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{staticClass:"checkbox",attrs:{for:e.schema.field},on:{click:function(t){if(t.target!==t.currentTarget)return null;e.value=!e.value}}},[a("button",{staticClass:"button small",class:{outline:e.value},on:{click:function(t){t.preventDefault(),e.value=!1}}},[e._v("✖")]),e._v(" "),a("button",{staticClass:"button small",class:{outline:!e.value},on:{click:function(t){t.preventDefault(),e.value=!0}}},[e._v("✔")]),e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e()])])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputCheckbox"};a(234);var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputCheckbox.vue";const n=l.exports},289:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.schema.description))]):e._e()]),e._v(" "),a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col col-10"},[a("div",{staticClass:"form-input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.flagValue,expression:"flagValue"}],attrs:{id:e.schema.field},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.flagValue=t.target.multiple?a:a[0]}}},e._l(e.schema.values,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(e.$t(t.name)))])})),0)])]),e._v(" "),a("div",{staticClass:"col col-2"},[a("div",{staticClass:"form-input"},[a("button",{staticClass:"button outline w100",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v(e._s(e.$t("static.add")))])])])]),e._v(" "),a("p",{staticClass:"label-list"},e._l(e.items,(function(t,s){return a("span",{staticClass:"label outline",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v(e._s(e.resolveOption(t,e.schema.values)))])})),0)])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputFlag",data:function(){return{items:[],flagValue:this.schema.defaultValue}},methods:{addElement:function(){(this.flagValue||0===this.flagValue)&&(this.items.includes(this.flagValue)||this.items.push(this.flagValue),this.flagValue=this.schema.defaultValue,this.value=this.items.reduce((function(e,t){return e+t})))},removeElement:function(e){this.items.splice(e,1),this.value=this.items.reduce((function(e,t){return e+t}))},resolveOption:function(e,t){return t?(t.forEach((function(t){var a=t.value,s=t.name;e===a&&(e=s)})),e):e}}};a(89);var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputFlag.vue";const n=l.exports},81:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.$t(e.schema.description)))]):e._e()]),e._v(" "),a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col col-5"},[a("div",{staticClass:"form-item"},[e.schema.keys?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.mapKey,expression:"mapKey"}],ref:"inputKey",staticClass:"map-key",class:{error:e.keyInvalid},attrs:{type:"text",placeholder:e.schema.keyPlaceholder},domProps:{value:e.mapKey},on:{input:function(t){t.target.composing||(e.mapKey=t.target.value)}}}),e._v(" "),!e.schema.keys&&e.keyInvalid?a("span",{staticClass:"error"},[e._v(e._s(e.keyErrors.join(" ")))]):e._e(),e._v(" "),e.schema.keys?a("select",{directives:[{name:"model",rawName:"v-model",value:e.mapKey,expression:"mapKey"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.mapKey=t.target.multiple?a:a[0]}}},e._l(e.schema.keys,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(e.$t(t.name)))])})),0):e._e()])]),e._v(" "),a("div",{staticClass:"col col-5"},[a("div",{staticClass:"form-item"},[e.schema.values?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.mapValue,expression:"mapValue"}],ref:"inputValue",staticClass:"map-value",class:{error:e.valueInvalid},attrs:{type:"text",placeholder:e.schema.valuePlaceholder},domProps:{value:e.mapValue},on:{input:function(t){t.target.composing||(e.mapValue=t.target.value)}}}),e._v(" "),!e.schema.values&&e.valueInvalid?a("span",{staticClass:"error"},[e._v(e._s(e.valueErrors.join(" ")))]):e._e(),e._v(" "),e.schema.values?a("select",{directives:[{name:"model",rawName:"v-model",value:e.mapValue,expression:"mapValue"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.mapValue=t.target.multiple?a:a[0]}}},e._l(e.schema.values,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(e.$t(t.name)))])})),0):e._e()])]),e._v(" "),a("div",{staticClass:"col col-2"},[a("div",{staticClass:"form-input"},[a("button",{staticClass:"button outline w100",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v(e._s(e.$t("static.add")))])])])]),e._v(" "),a("p",{staticClass:"label-list"},e._l(e.items,(function(t,s){return a("span",{staticClass:"label outline",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v(e._s(e.resolveOption(s,e.schema.keys))+" => "+e._s(e.resolveOption(t,e.schema.values)))])})),0)])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputMap",computed:{keyErrors:function(){return this.schema.keyValidator?this.validate(this.mapKey,this.schema.keyValidator):[]},keyInvalid:function(){return 0!==this.keyErrors.length},valueErrors:function(){return this.schema.valueValidator?this.validate(this.mapValue,this.schema.valueValidator):[]},valueInvalid:function(){return 0!==this.valueErrors.length}},data:function(){return{items:{},mapKey:this.schema.defaultKey,mapValue:this.schema.defaultValue}},methods:{addElement:function(){!this.mapValue&&0!==this.mapValue||!this.mapKey&&0!==this.mapKey||this.hasErrors()||(this.items[this.mapKey]=this.mapValue,this.mapValue=this.schema.defaultValue,this.mapKey=this.schema.defaultKey,this.$emit("update",this.items,this.schema.field))},removeElement:function(e){this.$delete(this.items,e),this.$emit("update",this.items,this.schema.field)},resolveOption:function(e,t){return t?(t.forEach((function(t){var a=t.value,s=t.name;e===a&&(e=s)})),e):e},hasErrors:function(){if(!this.keyInvalid&&!this.valueInvalid)return!1;clearTimeout(this.shakeTimeout);var e=[];return this.keyInvalid&&e.push(this.$refs.inputKey),this.valueInvalid&&e.push(this.$refs.inputValue),e.forEach((function(e){e.classList.add("shake")})),this.shakeTimeout=setTimeout((function(){e.forEach((function(e){e.classList.remove("shake")}))}),500),!0}}};a(674);var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputMap.vue";const n=l.exports},664:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.schema.description))]):e._e()]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],class:{error:e.invalid},attrs:{type:"number",name:e.schema.field,id:e.schema.field,placeholder:e.schema.placeholder,required:e.schema.required},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.invalid?a("span",{staticClass:"error"},[e._v(e._s(e.errors.join(" ")))]):e._e()])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputNumber",computed:{errors:function(){return this.validate(this.value)},valid:function(){return 0===this.errors.length},invalid:function(){return 0!==this.errors.length}}};var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputNumber.vue";const n=l.exports},683:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.$t(e.schema.description)))]):e._e()]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:{error:e.invalid},attrs:{type:"password",name:e.schema.field,id:e.schema.field,placeholder:e.schema.placeholder,required:e.schema.required},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),e.invalid?a("span",{staticClass:"error"},[e._v(e._s(e.errors.join(" ")))]):e._e()])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputPassword",computed:{errors:function(){return this.validate(this.value)},valid:function(){return 0===this.errors.length},invalid:function(){return 0!==this.errors.length}}};var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputPassword.vue";const n=l.exports},754:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.schema.description))]):e._e()]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:e.schema.field,id:e.schema.field,required:e.schema.required},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.value=t.target.multiple?a:a[0]}}},e._l(e.schema.options,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(e.$t(t.name)))])})),0)])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputSelect"};var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputSelect.vue";const n=l.exports},982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.$t(e.schema.description)))]):e._e()]),e._v(" "),a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col col-10"},[a("div",{staticClass:"form-input"},[e.schema.values?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.setValue,expression:"setValue"}],ref:"input",staticClass:"set-value",class:{error:e.invalid},attrs:{type:"text",name:e.schema.field,placeholder:e.schema.placeholder,id:e.schema.field},domProps:{value:e.setValue},on:{input:function(t){t.target.composing||(e.setValue=t.target.value)}}}),e._v(" "),!e.schema.values&&e.invalid?a("span",{staticClass:"error"},[e._v(e._s(e.errors.join(" ")))]):e._e(),e._v(" "),e.schema.values?a("select",{directives:[{name:"model",rawName:"v-model",value:e.setValue,expression:"setValue"}],attrs:{id:e.schema.field},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.setValue=t.target.multiple?a:a[0]}}},e._l(e.schema.values,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(e.$t(t.name)))])})),0):e._e()])]),e._v(" "),a("div",{staticClass:"col col-2"},[a("div",{staticClass:"form-input"},[a("button",{staticClass:"button outline w100",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v(e._s(e.$t("static.add")))])])])]),e._v(" "),a("p",{staticClass:"label-list"},e._l(e.items,(function(t,s){return a("span",{staticClass:"label outline",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v(e._s(e.resolveOption(t,e.schema.values)))])})),0)])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputSet",computed:{errors:function(){return this.schema.values?[]:this.validate(this.setValue)},invalid:function(){return 0!==this.errors.length}},data:function(){return{items:[],setValue:this.schema.defaultValue}},methods:{addElement:function(){(this.setValue||0===this.setValue)&&(this.hasErrors()||(this.items.includes(this.setValue)||this.items.push(this.setValue),this.setValue=this.schema.defaultValue,this.$emit("update",this.items,this.schema.field)))},removeElement:function(e){this.items.splice(e,1),this.$emit("update",this.items,this.schema.field)},resolveOption:function(e,t){return t?(t.forEach((function(t){var a=t.value,s=t.name;e===a&&(e=s)})),e):e},hasErrors:function(){var e=this;return!!this.invalid&&(clearTimeout(this.shakeTimeout),this.$refs.input.classList.add("shake"),this.shakeTimeout=setTimeout((function(){e.$refs.input.classList.remove("shake")}),500),!0)}}};a(558);var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputSet.vue";const n=l.exports},500:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item"},[a("label",{attrs:{for:e.schema.field}},[e._v("\n        "+e._s(e.schema.label)+"\n        "),e.schema.required?a("span",{staticClass:"req"},[e._v("*")]):e._e(),e._v(" "),e.schema.description?a("span",{staticClass:"desc"},[e._v(e._s(e.$t(e.schema.description)))]):e._e()]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:{error:e.invalid},attrs:{type:"text",name:e.schema.field,id:e.schema.field,placeholder:e.schema.placeholder,required:e.schema.required},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),e.invalid?a("span",{staticClass:"error"},[e._v(e._s(e.errors.join(" ")))]):e._e()])};s._withStripped=!0;const i={mixins:[a(608).Z],name:"InputText",computed:{errors:function(){return this.validate(this.value)},valid:function(){return 0===this.errors.length},invalid:function(){return 0!==this.errors.length}}};var l=(0,a(900).Z)(i,s,[],!1,null,null,null);l.options.__file="src/components/fields/InputText.vue";const n=l.exports},608:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(453);const i={props:["schema"],watch:{value:function(){this.$emit("update",this.value,this.schema.field)}},data:function(){return{value:this.schema.defaultValue}},methods:{validate:function(e,t){return t||this.schema.validator?t?t(e,this.schema):this.schema.validator(e,this.schema):this.schema.required?s.Z.required(e,this.schema):[]}}};var l=(0,a(900).Z)(i,void 0,void 0,!1,null,null,null);l.options.__file="src/components/mixin/Input.vue";const n=l.exports},234:(e,t,a)=>{var s=a(25);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(346).Z)("84588490",s,!1,{})},89:(e,t,a)=>{var s=a(207);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(346).Z)("4d4ac4ec",s,!1,{})},674:(e,t,a)=>{var s=a(154);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(346).Z)("107e3de0",s,!1,{})},558:(e,t,a)=>{var s=a(686);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(346).Z)("66cace20",s,!1,{})},634:(e,t,a)=>{var s=a(781);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(346).Z)("0331c038",s,!1,{})},976:(e,t,a)=>{var s={"./CheckboxGroup.vue":431,"./InputCheckbox.vue":682,"./InputFlag.vue":289,"./InputMap.vue":81,"./InputNumber.vue":664,"./InputPassword.vue":683,"./InputSelect.vue":754,"./InputSet.vue":982,"./InputText.vue":500};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=l,e.exports=i,i.id=976}}]);