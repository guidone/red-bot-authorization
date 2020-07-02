/*!
 * Name: authorization
 * Id: authorization
 * Version: 0.9.0
 * Description: Handle user authorization and suspension in the chatbot. A plugin for Red-Bot.io
 * Author: Guido Bellomo (https://github.com/guidone)
 * Repository: https://github.com/guidone/red-bot-authorization
 */
define(["../../../src/components","../../src/components","code-plug","react","rsuite"],(e,t,r,n,o)=>(()=>{"use strict";var a={961:(e,t,r)=>{r.r(t);var n=r(297),o=r.n(n),a=r(399),l=r(186),s=r(222);const u=({formValue:e={},formError:t=null,onChange:r})=>(e=e||{},o().createElement(s.Form,{formValue:e,formError:t,onChange:r,fluid:!0,autoComplete:"off"},o().createElement(s.FormGroup,null,o().createElement(s.ControlLabel,null,"Authorized"),o().createElement(s.Toggle,{onChange:t=>r({...e,authorized:t,suspended:!t&&e.suspended}),checked:e.authorized}),o().createElement(s.HelpBlock,null,"Only authorized users can access private chatbot")),o().createElement(s.FormGroup,null,o().createElement(s.ControlLabel,null,"Suspend"),o().createElement(s.Toggle,{onChange:t=>r({...e,suspended:t,authorized:!t&&e.authorized}),checked:e.suspended}),o().createElement(s.HelpBlock,null,"Suspended user cannot access a public chatbot"))));var c=r(738);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const p=[{name:"authorization.notAuthorized",description:"Shown when the user is not authorized in a private chatbot"},{name:"authorization.suspended",description:"Shown when the user is suspeded in a public chatbot"}],{NodeRedNode:m,SlugHelp:d,TypeCommand:h}=l.HelpElements;(0,a.plug)("user-tabs",u,{id:"suspend-user",label:"Access",permission:"users.authorize"});(0,a.plug)("sidebar",null,{permission:"configure",id:"configuration",label:"Configuration",icon:"cog",options:[{id:"authorization",label:"Bot Access",url:"/authorization"}]}),(0,a.plug)("pages",(0,l.withConfigurationPage)("authorization",({value:e,onSubmit:t=(()=>{}),disabled:r=!1})=>{const[a,l]=(0,n.useState)(e),[u,m]=(0,n.useState)(null),[d,h]=(0,n.useState)("access"),g=(0,n.useRef)(null);return o().createElement("div",null,o().createElement(s.Nav,{appearance:"tabs",activeKey:d,onSelect:h,style:{marginBottom:"25px"}},o().createElement(s.Nav.Item,{eventKey:"access"},"Access"),o().createElement(s.Nav.Item,{eventKey:"translations"},"Translations")),o().createElement(s.Form,{disabled:!0,formValue:a,formError:u,ref:g,checkTrigger:"none",layout:"vertical",fluid:!0,onChange:e=>{l(e),m(null)},onCheck:e=>{m(e)}},"translations"===d&&o().createElement(n.Fragment,null,o().createElement(s.FormGroup,null,o().createElement(s.FormControl,{name:"translations",accepter:c.Dictionary,schema:p,disabled:r}))),"access"===d&&o().createElement(n.Fragment,null,o().createElement(s.FormGroup,null,o().createElement(s.ControlLabel,null,"Private"),o().createElement(s.FormControl,{name:"private",accepter:(f=s.Toggle,({value:e,...t})=>o().createElement(f,i({checked:e},t))),disabled:r}),o().createElement(s.HelpBlock,null,"In a private chatbot, only authorized user can access"))),o().createElement(s.FormGroup,{style:{marginTop:"40px"}},o().createElement(s.ButtonToolbar,null,o().createElement(s.Button,{disabled:r,appearance:"primary",onClick:()=>{g.current.check()&&t(a)}},"Save configuration"),o().createElement(s.Button,{disabled:r,appearance:"default",onClick:()=>{confirm("Reset configuration?")&&l(e)}},"Reset")))));var f},{Legend:()=>o().createElement("div",null,o().createElement(m,null,"Authorization")),title:"Bot Access"}),{permission:"configure",url:"/authorization",title:"Welcome Message",id:"page-authorization"}),(0,a.plug)("permissions",null,{permission:"users.authorize",name:"Authorize/Suspend",description:"Authorize or suspend a user",group:"Users"})},738:t=>{t.exports=e},186:e=>{e.exports=t},399:e=>{e.exports=r},297:e=>{e.exports=n},222:e=>{e.exports=o}},l={};function s(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return a[e](t,t.exports,s),t.exports}return s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(961)})());