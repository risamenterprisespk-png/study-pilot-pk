(()=>{const c=document.getElementById('scene');if(!c||!window.THREE||matchMedia('(prefers-reduced-motion:reduce)').matches){c&&(c.hidden=true);return}
try{const T=THREE,r=new T.WebGLRenderer({canvas:c,alpha:true,antialias:true}),s=new T.Scene,cam=new T.PerspectiveCamera(40,1,.1,50),g=new T.Group,orb=[];
cam.position.z=9;s.add(g,new T.AmbientLight(0xffffff,.8));const L=new T.DirectionalLight(0xffffff,.9);L.position.set(3,4,5);s.add(L);r.setPixelRatio(Math.min(devicePixelRatio,2));
const M=(c,o)=>new T.MeshStandardMaterial({color:c,roughness:.4,metalness:.15,...o}),B=(w,h,d,c,x,y,z)=>{const m=new T.Mesh(new T.BoxGeometry(w,h,d),M(c));m.position.set(x,y,z);g.add(m);return m},k=c.dataset.scene;
if(k=='docs')for(let i=0;i<5;i++){const m=B(2,2.7,.1,i%2?0x2f6bff:0x4338ca,i*.35-.7,i*.1-.2,i*.3-.6);m.rotation.y=-.35}
else if(k=='calc'){B(2.4,3.4,.5,0x1c2760,0,0,0);B(2,.8,.1,0x9be7ff,0,1.1,.3);for(let i=0;i<12;i++)B(.45,.45,.15,i%4==3?0x2f6bff:0xdfe5f7,(i%4-1.5)*.52,.3-(i/4|0)*.55,.3)}
else if(k=='ai'){g.add(new T.Mesh(new T.IcosahedronGeometry(1.5,1),M(0x4338ca,{wireframe:true})));for(let i=0;i<4;i++){const o=new T.Mesh(new T.SphereGeometry(.22,16,16),M(0x2f6bff));g.add(o);orb.push(o)}}
else{B(2.2,3,.4,0x2f6bff,0,0,0);B(2,2.8,.3,0xf6f8ff,.1,0,.05);B(.2,3,.45,0x4338ca,-1.05,0,0);const cap=B(1.8,.1,1.8,0x0f1a3d,0,2.2,0);cap.rotation.y=.8}
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const rs=()=>{const w=c.clientWidth,h=c.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};rs();addEventListener('resize',rs);
const f=t=>{t/=1000;g.rotation.set(.25+my*.3,t*.5+mx*.6,0);g.position.y=Math.sin(t*1.2)*.15;orb.forEach((o,i)=>{const a=t*1.5+i*1.57;o.position.set(Math.cos(a)*2.3,Math.sin(a*.7)*.8,Math.sin(a)*2.3)});r.render(s,cam);requestAnimationFrame(f)};requestAnimationFrame(f)}catch(e){c.hidden=true}})();
