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
  if (!/^(https?:|tel:|data:)/.test(path)) await access(path);
}
assert(!html.includes('{{SITE_CONTENT}}'));
console.log('Static content, asset paths, metadata, structured data and sitemap checks passed.');
