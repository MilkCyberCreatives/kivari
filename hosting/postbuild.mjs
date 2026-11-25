import { copyFile } from 'node:fs/promises';
for (const file of ['robots.txt', 'sitemap.xml', '.htaccess']) {
  await copyFile(`public/${file}`, `out/${file}`);
}
