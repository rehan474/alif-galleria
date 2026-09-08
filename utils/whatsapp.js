import {BUSINESS} from '../data/site.js';
export function whatsappUrl(message,number=BUSINESS.primary){return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;}
