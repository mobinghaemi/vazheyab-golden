class Transmitter{constructor(e){this.container=document.querySelector("#switcherContainer")}transfer(e){return fetch(`../Page/${e}.html`).then((e=>e.text())).then((e=>{this.container.innerHTML=e,My_JavaScript()}))}}class API{create(e,t){fetch(`https://one-api.ir/dictionary/?token=259616:624de36222e8d8.34731341&action=dehkhoda&q=${e}`,{method:"GET"}).then((e=>e.json())).then((e=>{this.addContent(e,t)}))}addContent(e,t){const n=e.status,o=$.querySelector(".output .grid"),r=$.querySelector("span.number");let a="";switch(r.innerHTML="?",n){case 200:e.result.map((e=>{a+=`\n            <div class="words">\n            <h2 id="word">${e.word}</h2>\n            <details>\n                <summary id="showMeaning">مشاهده معنا</summary>\n                <p id="detail">${e.detail}</p>\n            </details>\n            </div>\n          `})),r.innerHTML=e.result.length;break;case 404:a='\n        <div class="not-words">\n          <img id="resultImage" src="../Image/img/intro.png" />\n          <h1>چیزی پیدا نشد</h1>\n        </div>\n        ';break;default:a='\n        <div class="not-words">\n          <h1>خطای ناشناخته</h1>\n          <p>لطفا از صفحه ارتباط مشکل را گزارش دهید</p>\n        </div>\n        '}t&&(t.style.display="none"),o.innerHTML=a}}const overlay=document.querySelector(".overlay");function modal(e="sendInformationModal",t="tit",n="txt"){$.querySelector("#sendInformationModal h1").innerHTML=t,$.querySelector("#sendInformationModal #textBody").innerHTML=n;const o=document.querySelectorAll(".modal");for(let e=0;e<o.length;e++)o[e].classList.remove("active");const r=document.getElementById(e);overlay.classList.add("active"),r.classList.add("active");const a=r.querySelectorAll(".close-modal-btn");function s(){overlay.classList.remove("active"),r.classList.remove("active")}a.length&&a.forEach((e=>{e.addEventListener("click",s,{once:!0})})),overlay.addEventListener("click",s,{once:!0}),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()}),{once:!0})}class Clipboard{copy(e){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(e);{let t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select(),new Promise(((e,n)=>{document.execCommand("copy")?e():n(),t.remove()}))}}}