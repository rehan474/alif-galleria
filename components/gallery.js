import {gallery} from '../data/site.js';
function tile(item,i){return `<button class="gallery-tile reveal gallery-tile--${i%5}" data-gallery-index="${i}" aria-label="Open ${item.title}"><img src="${item.poster}" alt="${item.title}" loading="lazy">${item.type==='video'?'<span class="play-badge">▶</span>':''}<span class="gallery-caption"><small>${item.category}</small>${item.title}</span></button>`}
export function Gallery(){return `<section id="gallery" class="section-pad gallery-section"><div class="container"><div class="section-head reveal"><div><span class="eyebrow">04 / A closer look</span><h2>Materials. Details.<br><em>Possibilities.</em></h2></div><p>Explore our doors, windows and fabrication through product photos, installation images and workshop videos.</p></div><div class="filter-bar reveal" data-gallery-filters>${['All','Doors','Windows','Doors & Windows','Fabrication','Video'].map(f=>`<button aria-pressed="${f==='All'}" class="${f==='All'?'active':''}" data-gallery-filter="${f}">${f}</button>`).join('')}</div><div class="gallery-grid" id="gallery-grid">${gallery.map(tile).join('')}</div></div><div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" tabindex="-1" hidden><div class="lightbox__inner" id="lightbox-inner"><button class="lightbox__close" id="lightbox-close" aria-label="Close">×</button><div id="lightbox-media"></div><p id="lightbox-title"></p></div></div></section>`}
export function initGallery(){
 const root=document.querySelector('#gallery');if(!root)return;
 const grid=root.querySelector('#gallery-grid'),lb=root.querySelector('#lightbox'),media=root.querySelector('#lightbox-media'),title=root.querySelector('#lightbox-title'),closeButton=root.querySelector('#lightbox-close');
 let opener;
 const close=()=>{lb.hidden=true;media.innerHTML='';document.body.classList.remove('no-scroll');opener?.focus()};
 closeButton.addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});
 document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='Tab'){const controls=[...lb.querySelectorAll('button,video[controls]')];const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 function render(list){
  grid.innerHTML=list.map(tile).join('');
  grid.querySelectorAll('[data-gallery-index]').forEach(btn=>btn.addEventListener('click',()=>{
   const item=list[Number(btn.dataset.galleryIndex)];opener=btn;title.textContent=item.title;
   const element=document.createElement(item.type==='video'?'video':'img');element.src=item.src;
   if(item.type==='video'){element.controls=true;element.autoplay=true;element.playsInline=true}else{element.alt=item.title}
   media.replaceChildren(element);lb.hidden=false;document.body.classList.add('no-scroll');closeButton.focus();
  }));window.initEffects?.(grid);
 }
 root.querySelectorAll('[data-gallery-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  root.querySelectorAll('[data-gallery-filter]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');
  render(gallery.filter(g=>btn.dataset.galleryFilter==='All'||g.category===btn.dataset.galleryFilter));
 }));render(gallery);
}
