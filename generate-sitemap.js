import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/projektai', changefreq: 'weekly', priority: 0.8 },
    { url: '/paruosti-dizainai', changefreq: 'weekly', priority: 0.8 },
    { url: '/kainos', changefreq: 'monthly', priority: 0.6 },
    { url: '/kontaktai', changefreq: 'monthly', priority: 0.6 }
];

const sitemap = new SitemapStream({ hostname: 'https://amberweb.lt' });
const writeStream = createWriteStream('./public/sitemap.xml');

(async () => {
    try {
        links.forEach(link => sitemap.write(link)); // Pirma surašom linkus
        sitemap.end(); // Tada uždarom srautą

        await pipelineAsync(sitemap, writeStream); // Ir tik tada laukiam, kol užsidarys
        console.log('✅ Sitemap created successfully!');
    } catch (error) {
        console.error('❌ Error creating sitemap:', error);
    }
})();
