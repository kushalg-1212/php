import{b as u,r as x,j as r,a as t,H as g}from"./app.3915f664.js";import{A as f}from"./AuthenticatedLayout.10240dd9.js";import{_ as o}from"./Translate.dc83ae5b.js";import w from"./History.74153b7d.js";import v from"./Settings.cbb8b979.js";import y from"./Request.955444c1.js";import _ from"./AccountNavi.5e4c3f61.js";import"./Front.b71ba048.js";import"./index.esm.4dd692e2.js";import"./iconBase.581190ba.js";import"./index.esm.1ebb3f74.js";import"./index.esm.7b4e3ded.js";import"./transition.d0efdae9.js";import"./Modal.eab9d03c.js";import"./react-toastify.esm.f871cad9.js";import"./TextInput.1279f06a.js";import"./index.esm.c83f593c.js";import"./Spinner.96e927c3.js";import"./InputLabel.5ee1418c.js";import"./InputError.88154ca1.js";import"./PrimaryButton.4515b3b5.js";import"./Textarea.989b4f4b.js";import"./index.esm.7ed09047.js";import"./WithdrawForm.f1077e14.js";function U({auth:e,pendingCount:d,withdrawals:l,payoutSettings:n}){const{currency_symbol:p,currency_code:k,token_value:h,min_withdraw:b}=u().props,[i,a]=x.exports.useState("Withdraw"),s="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",m="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(f,{auth:e,children:[t(g,{title:o("Withdraw")}),r("div",{className:"lg:flex lg:space-x-10 w-full",children:[t(_,{active:"withdraw"}),r("div",{className:"flex-grow",children:[r("div",{className:"mb-5",children:[t("button",{className:i=="Withdraw"?s:m,onClick:c=>a("Withdraw"),children:o("Withdraw")}),t("button",{className:i=="History"?s:m,onClick:c=>a("History"),children:o("History")}),t("button",{className:i=="Settings"?s:m,onClick:c=>a("Settings"),children:o("Settings")})]}),i=="Withdraw"&&t(y,{token_value:h,currency_symbol:p,tokens:e.user.tokens,money_balance:e.user.moneyBalance,min_withdraw:b,pending_count:d,payout_settings:n}),i=="Settings"&&t(v,{payoutSettings:n}),i=="History"&&t(w,{withdrawals:l})]})]})]})}export{U as default};