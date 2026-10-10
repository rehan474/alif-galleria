import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import {renderSite} from '../components/site.js';
import {products} from '../data/site.js';
const html = await readFile('index.html', 'utf8');
assert(html.includes(renderSite()), 'Run npm run build to update static content');
assert.equal((html.match(/<h1>/g) || []).length, 1);
for (const product of products) assert(html.includes(`<h3>${product.title}</h3>`));
assert(html.includes('rel="canonical" href="https://www.alifgalleria.com/"'));
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.equal(schema.url, 'https://www.alifgalleria.com/');
assert.equal(schema.address.addressLocality, 'Shivamogga');
const sitemap = await readFile('sitemap.xml', 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]), [schema.url]);
assert((await readFile('robots.txt', 'utf8')).includes(`Sitemap: ${schema.url}sitemap.xml`));
for (const match of html.matchAll(/(?:src|href|poster)="([^"#]+)"/g)) {
  const path = match[1];
  if (!/^(https?:|tel:|data:)/.test(path)) await access(path.split('?')[0]);
}
assert(!html.includes('{{SITE_CONTENT}}'));
console.log('Static content, asset paths, metadata, structured data and sitemap checks passed.');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(match[1]), `Missing anchor: ${match[1]}`);
assert.equal(schema.geo.latitude, 13.910869);
assert.equal(schema.geo.longitude, 75.578156);
assert(html.includes('maps/dir/?api=1&amp;destination=13.910869,75.578156'));
assert(html.includes('role="dialog" aria-modal="true"'));
assert.equal((html.match(/<details>/g) || []).length, 4);
console.log('Navigation anchors, map destination, gallery accessibility and FAQ checks passed.');
