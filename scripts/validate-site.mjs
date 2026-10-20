import { existsSync, readFileSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = [
  'index.html',
  'work/official-alumni/index.html',
  'work/roadr/index.html',
  'work/dcsc-malolos/index.html',
];
const errors = [];

function report(condition, message) {
  if (!condition) errors.push(message);
}

function stripFragment(value) {
  return value.split('#')[0].split('?')[0];
}

function resolveLocalReference(page, reference) {
  const clean = stripFragment(reference);
  if (!clean) return null;
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return null;
  if (clean.startsWith('/')) return join(root, clean.slice(1));
  return normalize(join(dirname(join(root, page)), clean));
}

for (const page of pages) {
  const absolute = join(root, page);
  report(existsSync(absolute), `${page}: file is missing`);
  if (!existsSync(absolute)) continue;

  const html = readFileSync(absolute, 'utf8');
  report(/<html\b[^>]*\blang="en"/i.test(html), `${page}: missing html lang`);
  report(/<meta\s+name="viewport"/i.test(html), `${page}: missing viewport metadata`);
  report(/<meta\s+name="description"/i.test(html), `${page}: missing description metadata`);
  report(/<link\s+rel="canonical"/i.test(html), `${page}: missing canonical URL`);
  report((html.match(/<h1\b/gi) ?? []).length === 1, `${page}: expected exactly one h1`);
  report(/href="mailto:dunhilldimaapi@gmail\.com"/i.test(html), `${page}: missing public email link`);

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    const attributes = match[1];
    report(/\balt="[^"]*"/i.test(attributes), `${page}: image without alt text`);
    report(/\bwidth="\d+"/i.test(attributes) && /\bheight="\d+"/i.test(attributes), `${page}: image without explicit dimensions`);
  }

  for (const match of html.matchAll(/\b(?:href|src|srcset)="([^"]+)"/gi)) {
    const raw = match[1].trim().split(/\s+/)[0];
    const target = resolveLocalReference(page, raw);
    if (!target) continue;
    let candidate = target;
    if (!extname(candidate)) candidate = join(candidate, 'index.html');
    report(existsSync(candidate), `${page}: missing local target ${raw}`);
  }

  for (const match of html.matchAll(/href="#([^"]+)"/gi)) {
    const id = match[1];
    report(new RegExp(`\\bid=["']${id}["']`, 'i').test(html), `${page}: missing anchor target #${id}`);
  }
}

report(existsSync(join(root, 'Dunhill_Dimaapi_Senior_Backend_Developer_CV.pdf')), 'Downloadable CV is missing');
report(existsSync(join(root, 'sitemap.xml')), 'sitemap.xml is missing');
report(existsSync(join(root, '404.html')), '404.html is missing');
report(existsSync(join(root, 'public/robots.txt')), 'robots.txt is missing');

if (errors.length) {
  console.error(`Portfolio validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Portfolio validation passed for ${pages.length} pages.`);
