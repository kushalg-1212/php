import{_ as s}from"./Translate.dc83ae5b.js";import{b as p,j as r,a as e,H as b,F as m,L as i,f as n}from"./app.3915f664.js";import{A as u}from"./AuthenticatedLayout.10240dd9.js";import{F as g}from"./index.esm.754f14dd.js";import{b as f}from"./index.esm.c83f593c.js";import{G as y}from"./index.esm.44bf1acf.js";import{S as o}from"./SecondaryButton.1822c416.js";import N from"./AccountNavi.5e4c3f61.js";import"./Front.b71ba048.js";import"./index.esm.4dd692e2.js";import"./iconBase.581190ba.js";import"./index.esm.1ebb3f74.js";import"./index.esm.7b4e3ded.js";import"./transition.d0efdae9.js";import"./Modal.eab9d03c.js";import"./react-toastify.esm.f871cad9.js";import"./TextInput.1279f06a.js";function L({subs:a}){var c;const{auth:l}=p().props;console.log(a);const d="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",h="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(u,{children:[e(b,{title:s("My Subscribers")}),r("div",{className:"lg:flex lg:space-x-10",children:[e(N,{active:"my-subscribers"}),r("div",{className:"ml-0 w-full",children:[l.user.is_streamer==="yes"&&r(m,{children:[e(i,{href:route("mySubscribers",{user:l.user.username}),className:d,children:s("My Subscribers")}),e(i,{href:route("mySubscriptions"),className:h,children:s("My Subscriptions")})]}),r("div",{className:"mt-5 p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg",children:[e("header",{children:r("div",{className:"flex items-start space-x-3",children:[e("div",{children:e(f,{className:"w-8 h-8 text-gray-600 dark:text-white"})}),r("div",{children:[r("h2",{className:"text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[s("My Subscribers")," (",a.total,")"]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:s("These are the users that paid a for a tier on your channel")})]})]})}),e("hr",{className:"my-5"}),a.total===0&&r("div",{className:"text-xl dark:text-white text-gray-700 flex items-center space-x-4",children:[e(g,{className:"w-10 h-10"}),e("div",{children:s("No one is subscribed to your channel yet")})]}),e("div",{className:"flex flex-col md:flex-row flex-wrap items-center",children:(c=a.data)==null?void 0:c.map((t,x)=>r("div",{className:"flex items-center space-x-2  mr-5 mb-5",children:[e("div",{children:e(i,{href:`${t.subscriber.is_streamer==="yes"?route("channel",{user:t.subscriber.username}):""}`,children:e("img",{src:t.subscriber.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})})}),r("div",{children:[e(i,{className:"block text-gray-600 dark:text-gray-300 text-lg font-semibold mt-1",href:`${t.subscriber.is_streamer==="yes"?route("channel",{user:t.subscriber.username}):""}`,children:t.subscriber.name}),r(i,{className:"block text-sky-500 hover:text-sky-700 font-semibold text-sm",href:`${t.subscriber.is_streamer==="yes"?route("channel",{user:t.subscriber.username}):""}`,children:["@",t.subscriber.username]}),r("span",{className:"mt-1 inline-flex items-center space-x-2 rounded px-1.5 py-0.5 bg-gray-500 text-gray-100 text-xs",children:[e(y,{className:"dark:text-white mr-1"}),t.expires_human]})]})]},x))}),a.last_page>1&&r(m,{children:[e("hr",{className:"my-5"}),e("div",{className:"flex text-gray-600 my-3 text-sm",children:s("Page: :pageNumber of :lastPage",{pageNumber:a.current_page,lastPage:a.last_page})}),e(o,{processing:!a.prev_page_url,className:"mr-3",onClick:t=>n.Inertia.visit(a.prev_page_url),children:s("Previous")}),e(o,{processing:!a.next_page_url,onClick:t=>n.Inertia.visit(a.next_page_url),children:s("Next")})]})]})]})]})]})}export{L as default};
