/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{useState as i,useEffect as a}from"@dropins/tools/preact-compat.js";import{classes as c}from"@dropins/tools/lib.js";import{events as m}from"@dropins/tools/event-bus.js";import{g as l}from"../chunks/getFetchedProductData.js";const f=({initialData:o=null,children:p,...e})=>{const[t,s]=i(o);return a(()=>{const r=m.on("pdp/data",s);return()=>{r==null||r.off()}},[]),t?n("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.shortDescription)??""},...e,className:c(["pdp-short-description",e.className])}):null};f.getInitialData=l;export{f as ProductShortDescription,f as default};
//# sourceMappingURL=ProductShortDescription.js.map
