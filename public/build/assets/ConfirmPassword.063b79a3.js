import{u as l,r as u,j as a,a as s,H as c}from"./app.3915f664.js";import{G as p}from"./GuestLayout.b4d37e90.js";import{I as f}from"./InputError.88154ca1.js";import{I as w}from"./InputLabel.5ee1418c.js";import{P as h}from"./PrimaryButton.4515b3b5.js";import{T as g}from"./TextInput.1279f06a.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});u.exports.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(p,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{forInput:"password",value:"Password"}),s(g,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(f,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};