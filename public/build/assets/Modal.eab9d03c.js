import{r as a,e as y,a as e,j as u}from"./app.3915f664.js";import{W as s}from"./transition.d0efdae9.js";function v({children:r,show:t=!1,maxWidth:n="2xl",closeable:m=!0,onClose:i=()=>{}}){a.exports.useEffect(()=>{document.body.style.overflow=t?"hidden":null},[t]);const o=()=>{m&&i()},l=x=>{x.key==="Escape"&&props.show&&o()};a.exports.useEffect(()=>(document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l),document.body.style.overflow=null}),[]);const c={xs:"max-w-xs",sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n],d=document.getElementById("modal-root");return y.createPortal(e(s,{show:t,leave:"duration-200",children:u("div",{className:"fixed inset-0 overflow-y-auto overflow-scroll h-full flex items-center justify-center px-4 py-6 sm:px-0 z-50",children:[e(s.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 transform transition-all",onClick:o,children:e("div",{className:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"})})}),e(s.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e("div",{className:`bg-white dark:bg-gray-800 rounded-lg overflow-x-hidden overflow-y-scroll shadow-xl transform transition-all w-full max-h-96 md:max-h-full mx-auto ${c}`,children:r})})]})}),d)}export{v as M};