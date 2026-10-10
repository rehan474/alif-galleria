export const questions=[
 ['Where is Alif Galleria located?', 'You can find Alif Galleria on Mattur Main Road, Urgadur Circle, Shivamogga, Karnataka — 577205. Use the directions link below to plan your visit.'],
 ['What products can I explore?', 'Our collection includes steel, wooden, UPVC, FRP and PVC doors, UPVC windows, charcoal, fluted and WPC panels, plus interior and exterior fabrication. Contact us for current product availability.'],
 ['How do I enquire about a product?', 'Choose a product and tap Enquire to open WhatsApp. The product name is included in your message. You can also call +91 76192 68754 or +91 87628 57645.'],
 ['What should I share when discussing a project?', 'Share the product you need, approximate measurements and any photos or design references. Our team can then discuss the available options and your requirements.']
];
export function FAQ(){return `<section id="questions" class="faq-section section-pad"><div class="container faq-grid"><div><span class="eyebrow">A little more clarity</span><h2>Before you<br><em>make an entrance.</em></h2><p>A few helpful answers to get you started.</p></div><div class="faq-list">${questions.map(([q,a],i)=>`<details><summary><span class="faq-number">0${i+1}</span>${q}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></div></section>`;}
