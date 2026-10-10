import {whatsappUrl} from '../utils/whatsapp.js';
import {WHATSAPP_ICON} from './whatsapp.js';
export function FloatingWhatsApp(){return `<a class="floating-wa" href="${whatsappUrl("Hi, I'm interested in Alif Galleria products.")}" target="_blank" rel="noopener noreferrer" aria-label="Chat with Alif Galleria on WhatsApp" title="Chat on WhatsApp">${WHATSAPP_ICON}</a>`}
