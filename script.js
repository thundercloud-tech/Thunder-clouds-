
const DISCORD = "https://discord.gg/CAakNxqt5";
document.addEventListener("DOMContentLoaded",()=>{
  const particles=document.getElementById("particles");
  if(particles){for(let i=0;i<35;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.animationDuration=(8+Math.random()*14)+"s";p.style.animationDelay=(-Math.random()*18)+"s";particles.appendChild(p)}}
  const menu=document.getElementById("menuButton"),nav=document.querySelector(".nav-links");
  if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
  document.querySelectorAll("[data-discord]").forEach(a=>a.href=DISCORD);
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
  document.querySelectorAll("[data-plan]").forEach(btn=>btn.addEventListener("click",()=>{
    const plan=JSON.parse(btn.dataset.plan);localStorage.setItem("tc_selected_plan",JSON.stringify(plan));location.href="login.html";
  }));
  const tabs=document.querySelectorAll("[data-filter]");
  tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(t=>t.classList.remove("active"));tab.classList.add("active");document.querySelectorAll("[data-group]").forEach(card=>card.hidden=tab.dataset.filter!=="all"&&card.dataset.group!==tab.dataset.filter)}));
  const register=document.getElementById("loginForm");
  if(register)register.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("customerName").value.trim();const email=document.getElementById("customerEmail").value.trim();if(!name||!email)return;localStorage.setItem("tc_customer",JSON.stringify({name,email}));location.href="account.html"});
  const acct=document.getElementById("accountDetails");
  if(acct){const user=JSON.parse(localStorage.getItem("tc_customer")||"null");const plan=JSON.parse(localStorage.getItem("tc_selected_plan")||"null");if(!user){location.href="login.html";return}document.getElementById("accountName").textContent=user.name;document.getElementById("accountEmail").textContent=user.email;const details=plan?`${plan.category} • ${plan.name}\\n${plan.processor||""} ${plan.price}\\n${plan.specs.join(" • ")}`:"No plan selected yet.";document.getElementById("selectedPlan").textContent=details;document.getElementById("copyOrder").addEventListener("click",async()=>{const text=`ThunderCloud Order Request\\nCustomer: ${user.name}\\nEmail: ${user.email}\\n${details}\\nPlease assist me with this order.`;try{await navigator.clipboard.writeText(text);document.getElementById("copyOrder").textContent="Copied!"}catch{document.getElementById("copyOrder").textContent="Copy unavailable"}});document.getElementById("logout").addEventListener("click",()=>{localStorage.removeItem("tc_customer");location.href="index.html"})}
});
