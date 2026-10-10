import {renderSite} from '../../components/site.js';
import {initProducts} from '../../components/products.js';
import {initGallery} from '../../components/gallery.js';
const app=document.querySelector('#app');if(!app.querySelector('main'))app.innerHTML=renderSite();
window.initEffects=(scope=document)=>{const items=scope.querySelectorAll?.('.reveal:not(.reveal--visible)')||[];const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal--visible');obs.unobserve(e.target)}}),{threshold:.1});items.forEach(i=>obs.observe(i));};
window.initEffects();initProducts();initGallery();
document.documentElement.classList.add("js-effects");
const nav=document.querySelector('.main-nav'),toggle=document.querySelector('#nav-toggle');
function setNav(open){nav.classList.toggle('is-open',open);toggle.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')}
toggle.addEventListener('click',()=>setNav(!nav.classList.contains('is-open')));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>setNav(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){setNav(false);toggle.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-shell'))setNav(false)});
const sections=[...document.querySelectorAll('main section[id]')],navLinks=[...document.querySelectorAll('[data-nav]')];const sectionObserver=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('active',a.dataset.nav===e.target.id))})},{rootMargin:'-30% 0px -55% 0px',threshold:.05});sections.forEach(s=>sectionObserver.observe(s));
window.addEventListener('scroll',()=>document.documentElement.style.setProperty('--scroll-y',`${window.scrollY}px`),{passive:true});

const copyAddress=document.querySelector('[data-copy-address]');
copyAddress?.addEventListener('click',async()=>{
 const feedback=document.querySelector('.copy-feedback');
 try{await navigator.clipboard.writeText(document.querySelector('#location address').innerText.replaceAll('\n',', '));feedback.textContent='Address copied. Ready to share.'}
 catch{feedback.textContent='Select the address above to copy it.'}
});
