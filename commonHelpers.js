import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i}from"./assets/vendor-77e16229.js";const e={input:document.querySelector("#datetime-picker"),button:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};e.button.disabled=!0;e.button.addEventListener("click",y);let c=null;const h=f("#datetime-picker",{enableTime:!0,time_24hr:!0,enableSeconds:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){new Date>t[0]?(e.button.disabled=!0,i.show({title:"Hey",message:"Please choose a date in the future"})):new Date<t[0]&&(e.button.disabled=!1,c=h.selectedDates[0])}});function y(){e.button.disabled=!0,e.input.disabled=!0;const t=setInterval(()=>{const u=Date.now(),d=b(c-u),{days:r,hours:a,minutes:n,seconds:o}=d;r==="00"&&a==="00"&&n==="00"&&o==="00"&&(clearInterval(t),i.show({title:"Hey",message:"Time is over!"}),e.button.disabled=!0,e.input.disabled=!1),e.days.textContent=`${r}`,e.hours.textContent=`${a}`,e.minutes.textContent=`${n}`,e.seconds.textContent=`${o}`},1e3)}function b(t){const n=s(Math.floor(t/864e5)),o=s(Math.floor(t%864e5/36e5)),l=s(Math.floor(t%864e5%36e5/6e4)),m=s(Math.floor(t%864e5%36e5%6e4/1e3));return{days:n,hours:o,minutes:l,seconds:m}}function s(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
