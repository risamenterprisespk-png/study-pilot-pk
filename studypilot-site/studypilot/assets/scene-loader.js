(()=>{const c=document.getElementById('scene');if(!c)return;
if(matchMedia('(prefers-reduced-motion:reduce)').matches||(navigator.connection&&navigator.connection.saveData)){c.hidden=true;return}
const base=document.currentScript.src.replace(/[^/]*$/,''),
load=s=>new Promise((ok,no)=>{const e=document.createElement('script');e.src=base+s;e.onload=ok;e.onerror=no;document.head.append(e)}),
run=()=>load('vendor/three.min.js').then(()=>load('3d.js')).catch(()=>{c.hidden=true});
addEventListener('load',()=>{'requestIdleCallback'in window?requestIdleCallback(run,{timeout:2500}):setTimeout(run,1200)},{once:true})})();
