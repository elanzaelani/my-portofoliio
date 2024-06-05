import{j as t,a as e,S as d,P as m,A as h,b as x,r as o,R as p,B as g}from"./vendor.4ab41dae.js";const f=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};f();var u="/my-portofolio/assets/heroEL.9a13e8bf.png";const y=()=>{const i=["logo-instagram","logo-facebook","logo-linkedin","logo-twitter"];return t("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:u,alt:"",className:"md:w-11/12 h-full object-cover"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Elan Zaelani"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Front End Developer"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:i==null?void 0:i.map(l=>e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("ion-icon",{name:l})},l))})]})})]})};var b="/my-portofolio/assets/el_about.78521458.png";const v=()=>e("section",{id:"about",className:"py-10 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),t("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:t("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"I am a passionate freelance front-end web developer proficient in HTML, CSS, JavaScript, and React.js framework. With a keen eye for detail and a dedication to crafting visually stunning and highly interactive websites, I transform design concepts into seamless user experiences, bringing my clients' online visions to life."}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Years experience",count:"04"},{text:"Completed Projects",count:"24"},{text:"Companies Work",count:"06"}].map(l=>t("div",{children:[t("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[l.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:l.text})]},l.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/Code_a_program.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:b,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})}),N=()=>{const i=[{logo:"logo-html5",level:"Advance",count:86},{logo:"logo-css3",level:"Expect",count:90},{logo:"logo-nodejs",level:"Beginner",count:40},{logo:"logo-react",level:"Intermediate",count:80}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((l,s)=>t("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${l.count}%,#ddd ${l.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:l.logo})})}),e("p",{className:"text-xl mt-3",children:l.level})]},s))})]})})};var w="/my-portofolio/assets/project-1.8f3963ea.png",j="/my-portofolio/assets/project-2.6a32d774.jpg",k="/my-portofolio/assets/project-3.cd7db3ec.jpg",S="/my-portofolio/assets/project-4.b976e709.jpg",C="/my-portofolio/assets/project-5.808bc575.png",_="/my-portofolio/assets/el2.dc7a1a2c.png";const M=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),t("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(d,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[m,h],children:[{img:w,name:"Movie App",github_link:"https://github.com/Sridhar-C-25",live_link:"https://myreactflix.netlify.app"},{img:j,name:"Job search Web App",github_link:"https://github.com/Sridhar-C-25/jobsearchapp",live_link:"https://myjobsearch.netlify.app"},{img:k,name:"Highking",github_link:"https://github.com/Sridhar-C-25/highking",live_link:"https://highking01.netlify.app"},{img:S,name:"React Nav",github_link:"https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",live_link:"https://reacttailwindnavbar.netlify.app"},{img:C,name:"Vue Country",github_link:"https://github.com/Sridhar-C-25",live_link:"https://vuecountry05.netlify.app"}].map((l,s)=>e(x,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:l.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:l.name}),t("div",{className:"flex gap-3",children:[e("a",{href:l.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:l.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},s))})}),e("div",{className:"lg:block hidden",children:e("img",{src:_,alt:""})})]})]});var A="/my-portofolio/assets/el_hireme1.c8cf6c11.png";const E=()=>t("section",{id:"hireme",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["Hire ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),t("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[t("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),e("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6",children:"I have successfully developed attractive, responsive websites that meet clients' needs."}),e("button",{className:"btn-primary mt-10",children:"Say Hello"})]}),e("img",{src:A,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"})]})]}),I=()=>e("section",{id:"contact",className:"py-10 px-3 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"el.zaelanai92@gmail.com"},{logo:"logo-whatsapp",text:"085 222 622 983"},{logo:"location",text:"demo location"}].map((l,s)=>t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:l.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:l.text})]},s))})]})]})}),L=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 ElZaelaani.All Rights reserved."}),O=()=>{const[i,l]=o.exports.useState(!1),[s,c]=o.exports.useState(!1),r=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?l(!0):l(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["EL-",e("span",{className:"text-cyan-600",children:"ZAE"}),"LANI"]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:r==null?void 0:r.map((a,n)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},n))})}),e("div",{onClick:()=>c(!s),className:`z-[999]  ${s?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${s?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:r==null?void 0:r.map((a,n)=>e("li",{onClick:()=>c(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},n))})})]})})},P=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses",children:e("a",{href:"https://wa.me/+6281323513371"})})}),H=()=>t("div",{children:[e(O,{}),e(P,{}),e(y,{}),e(v,{}),e(N,{}),e(E,{}),e(M,{}),e(I,{}),e(L,{})]});p.render(e(g,{children:e(H,{})}),document.getElementById("root"));
