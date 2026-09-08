import {whatsappUrl} from '../utils/whatsapp.js';
export function WhatsApp({message,children='WhatsApp Us',secondary=false,className=''}){return `<a class="whatsapp-btn ${className}" href="${whatsappUrl(message,secondary?'918762857645':undefined)}" target="_blank" rel="noopener noreferrer">${children}<span aria-hidden="true">↗</span></a>`}
