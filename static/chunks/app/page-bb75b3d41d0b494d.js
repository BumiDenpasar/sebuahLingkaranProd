(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9749:function(e,t,n){Promise.resolve().then(n.bind(n,9833)),Promise.resolve().then(n.t.bind(n,231,23))},9833:function(e,t,n){"use strict";n.d(t,{ThemeToggle:function(){return o}});var a=n(7437),l=n(2265);let o=()=>{let[e,t]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{"dark"===localStorage.getItem("theme")?t(!0):t(!1)},[]),(0,l.useEffect)(()=>{e?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[e]),(0,a.jsx)("div",{className:"text-black dark:text-white absolute bottom-10 w-screen text-center text-light transition-all duration-500",onClick:()=>t(!e),children:e?"Gelap":"Terang"})}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=9749)}),_N_E=e.O()}]);