import{u as V,r as m,d as k,o as x,e as y,f as a,g as e,h as z,bA as U,E as w}from"./index-db_mjOVI.js";import{a as I,E as A}from"./el-col-fvDdf1HD.js";import{E as C,a as B}from"./el-form-item-RIJoy0w7.js";import{E as F}from"./_plugin-vue_export-helper-Dg3XgOsB.js";import{E as P}from"./el-input-MxmvzWj_.js";import{P as R}from"./PageContainer-C7DIgtre.js";import"./_baseClone-kySqY0Uo.js";const H={__name:"UserProfile",setup(Z){const{userInfo:{id:u,username:i,nickname:p,email:d},getUserInfo:_}=V(),n=m(),l=m({id:u,username:i,nickname:p,email:d}),f=k({nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{min:1,max:10,message:"昵称必须是 1-10位 的字符",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,message:"邮箱格式错误",trigger:"blur"}]}),c=async()=>{await n.value.validate(),await U(l.value),_(),w.success("修改成功")};return(q,t)=>{const s=P,r=C,g=F,b=B,v=I,E=A;return x(),y(R,{title:"基本资料"},{content:a(()=>[e(E,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[e(b,{ref_key:"formRef",ref:n,model:l.value,rules:f,"label-width":"100px"},{default:a(()=>[e(r,{label:"登录名称",prop:"pass"},{default:a(()=>[e(s,{modelValue:l.value.username,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value.username=o),type:"text",size:"large",disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:a(()=>[e(s,{modelValue:l.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value.nickname=o),type:"text",size:"large"},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:a(()=>[e(s,{modelValue:l.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>l.value.email=o),type:"text",size:"large"},null,8,["modelValue"])]),_:1}),e(r,null,{default:a(()=>[e(g,{type:"primary",size:"large",onClick:c},{default:a(()=>[z("提交修改")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})}}};export{H as default};
