import{ar as ke,aT as je,y as p,bp as Ue,$ as Fe,r as V,bo as X,w as G,N as We,ao as _e,at as we,I as Ye,av as qe,J as ae,S as Se,ac as Xe,a8 as oe,m as Pe,bP as Ge,x as Ze,n as Ce,aq as Je,bQ as Qe,bR as et,ag as tt,R as P,G as at,M as ot,a9 as nt,aa as st,o as v,c as S,Z as m,a2 as ne,z as g,v as t,q as _,a as N,e as I,f as M,a0 as Y,U as H,s as se,g as lt,aw as rt,a1 as it,bq as ut,ah as q,A as ct,_ as dt,af as Ie,B as pt}from"./index-db_mjOVI.js";import{c as ft,d as vt,a as mt,f as ht,i as gt,e as Ee}from"./_plugin-vue_export-helper-Dg3XgOsB.js";const yt=()=>ke&&/firefox/i.test(window.navigator.userAgent);function Lt(){if(!arguments.length)return[];var o=arguments[0];return je(o)?o:[o]}const le="update:modelValue",Ot="change",bt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),xt=["class","style"],wt=/^on[A-Z]/,St=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(xt)),r=Fe();return r?p(()=>{var i;return Ue(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&wt.test(c))))}):p(()=>({}))};function Ct(o){const f=V();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const y=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:y,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:y}=f.value;if(i==null||c==null||y==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const x=i[y-1],w=r.indexOf(x,y-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function It(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Fe(),{emit:i}=r,c=X(),y=V(!1),d=s=>{y.value||(y.value=!0,i("focus",s),f==null||f())},x=s=>{var T;_e(u)&&u(s)||s.relatedTarget&&((T=c.value)!=null&&T.contains(s.relatedTarget))||(y.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return G(c,s=>{s&&s.setAttribute("tabindex","-1")}),We(c,"click",w),{wrapperRef:c,isFocused:y,handleFocus:d,handleBlur:x}}let b;const Et=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,zt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function kt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:zt.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:y}=kt(o);b.setAttribute("style",`${y};${Et}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const x={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),b.value="";const w=b.scrollHeight-r;if(we(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),x.minHeight=`${s}px`}if(we(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return x.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Ft=Ye({id:{type:String,default:void 0},size:qe,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Xe({})},autofocus:{type:Boolean,default:!1}}),Pt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Nt=["role"],Vt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Tt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Rt=Pe({name:"ElInput",inheritAttrs:!1}),At=Pe({...Rt,props:Ft,emits:Pt,setup(o,{expose:f,emit:u}){const a=o,r=Ge(),i=Ze(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),y=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:U.value&&Q.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",J.value)]),x=St({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=ft(),{inputId:T}=vt(a,{formItemContext:s}),re=mt(),z=ht(),l=Ce("input"),ie=Ce("textarea"),L=X(),C=X(),Z=V(!1),R=V(!1),O=V(!1),ue=V(),D=X(a.inputStyle),k=p(()=>L.value||C.value),{wrapperRef:Ne,isFocused:J,handleFocus:K,handleBlur:j}=It(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ee()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),A=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>A.value&&Je[A.value]),Ve=p(()=>O.value?Qe:et),Te=p(()=>[r.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>gt(a.modelValue)?"":String(a.modelValue)),U=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(J.value||Z.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||J.value)),F=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!F.value&&ee.value>Number(a.maxlength)),Ae=p(()=>!!i.suffix||!!a.suffixIcon||U.value||a.showPassword||F.value||!!A.value&&ce.value),[Be,$e]=Ct(L);tt(C,e=>{if(Me(),!F.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const B=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=Ie(n)?n.minRows:void 0,W=Ie(n)?n.maxRows:void 0,xe=ze(C.value,h,W);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(B),$=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Be();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){$();return}u(le,n),u("input",n),await P(),$(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,W=h[h.length-1]||"";R.value=!bt(W)},he=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},He=()=>{O.value=!O.value,ge()},ge=async()=>{var e;await P(),(e=k.value)==null||e.focus()},Le=()=>{var e;return(e=k.value)==null?void 0:e.blur()},Oe=e=>{Z.value=!1,u("mouseleave",e)},De=e=>{Z.value=!0,u("mouseenter",e)},ye=e=>{u("keydown",e)},Ke=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;P(()=>B()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ee()))}),G(E,()=>$()),G(()=>a.type,async()=>{await P(),$(),B()}),at(()=>{!a.formatter&&a.parser,$(),P(B)}),f({input:L,textarea:C,ref:k,textareaStyle:pe,autosize:ot(a,"autosize"),focus:ge,blur:Le,select:Ke,clear:be,resizeTextarea:B}),(e,n)=>nt((v(),S("div",se(t(c),{class:t(y),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:g(t(l).be("group","prepend"))},[_(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ne,class:g(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:g(t(l).e("prefix"))},[N("span",{class:g(t(l).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(H),{key:0,class:g(t(l).e("icon"))},{default:M(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",se({id:t(T),ref_key:"input",ref:L,class:t(l).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ye}),null,16,Vt),m(" suffix slot "),t(Ae)?(v(),S("span",{key:1,class:g(t(l).e("suffix"))},[N("span",{class:g(t(l).e("suffix-inner"))},[!t(U)||!t(Q)||!t(F)?(v(),S(ne,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(H),{key:0,class:g(t(l).e("icon"))},{default:M(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(v(),I(t(H),{key:1,class:g([t(l).e("icon"),t(l).e("clear")]),onMousedown:it(t(ut),["prevent"]),onClick:be},{default:M(()=>[lt(t(rt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),I(t(H),{key:2,class:g([t(l).e("icon"),t(l).e("password")]),onClick:He},{default:M(()=>[(v(),I(Y(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(v(),S("span",{key:3,class:g(t(l).e("count"))},[N("span",{class:g(t(l).e("count-inner"))},q(t(ee))+" / "+q(e.maxlength),3)],2)):m("v-if",!0),t(A)&&t(de)&&t(ce)?(v(),I(t(H),{key:4,class:g([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(A)==="validating")])},{default:M(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:g(t(l).be("group","append"))},[_(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),N("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ye}),null,16,Tt),t(F)?(v(),S("span",{key:0,style:ct(ue.value),class:g(t(l).e("count"))},q(t(ee))+" / "+q(e.maxlength),7)):m("v-if",!0)],64))],16,Nt)),[[st,e.type!=="hidden"]])}});var Bt=dt(At,[["__file","input.vue"]]);const Dt=pt(Bt);export{Ot as C,Dt as E,le as U,Lt as c,bt as i,It as u};