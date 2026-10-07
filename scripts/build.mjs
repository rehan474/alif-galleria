import {readFile, writeFile} from 'node:fs/promises';
import {renderSite} from '../components/site.js';
import {BUSINESS, products} from '../data/site.js';
const origin = 'https://www.alifgalleria.com';
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${origin}/#business`,
  name: BUSINESS.name,
  url: `${origin}/`,
  description: 'Doors, UPVC windows, architectural panels and interior and exterior fabrication in Shivamogga, Karnataka.',
  image: `${origin}/assets/images/brand/hero-poster.jpg`,
  telephone: `+${BUSINESS.primary}`,
  contactPoint: [BUSINESS.primary, BUSINESS.secondary].map(number => ({
    '@type': 'ContactPoint', telephone: `+${number}`, contactType: 'sales'
  })),
  address: {
    '@type': 'PostalAddress', streetAddress: 'Mattur Main Road, Urgadur Circle',
    addressLocality: 'Shivamogga', addressRegion: 'Karnataka', postalCode: '577205', addressCountry: 'IN'
  },
  hasMap: 'https://www.google.com/maps?q=13.910869,75.578156',
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Doors, windows, panels and fabrication',
    itemListElement: products.map(product => ({'@type': 'OfferCatalog', name: product.title}))
  }
};
const template = await readFile(new URL('./index.template.html', import.meta.url), 'utf8');
const html = template.replace('{{SITE_CONTENT}}', renderSite())
  .replace('{{STRUCTURED_DATA}}', JSON.stringify(schema).replaceAll('<', '\\u003c'));
await writeFile(new URL('../index.html', import.meta.url), html);
console.log('Generated index.html with static content and business structured data.');
