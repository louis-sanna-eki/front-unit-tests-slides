import{f as d,h as _,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as o,y as a,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-cd6210fb.js";import{N as V}from"./NoteViewer-a93fd74f.js";import{u as j}from"./index-6ec76c06.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.notesHTML!==""));return(s,i)=>(r(),n("div",{id:"page-root",style:v(a(w))},[t("div",S,[t("div",L,[t("h1",T,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,o(e==null?void 0:e.no)+"/"+o(a(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),k(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/home/runner/work/front-unit-tests-slides/front-unit-tests-slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
