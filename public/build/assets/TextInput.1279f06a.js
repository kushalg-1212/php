import{r,a as t}from"./app.3915f664.js";const b=r.exports.forwardRef(function({type:s="text",placeholder:n="",name:i,value:d,className:a,autoComplete:c,required:f,isFocused:u,accept:x,handleChange:g},e){const o=e||r.exports.useRef();return r.exports.useEffect(()=>{u&&o.current.focus()},[]),t("div",{className:"flex flex-col items-start",children:t("input",{placeholder:n,type:s,name:i,value:d,className:"border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+a,accept:x,ref:o,autoComplete:c,required:f,onChange:p=>g(p)})})});export{b as T};
