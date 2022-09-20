import { SitemapStream, streamToPromise } from 'sitemap';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>https://www.bayardclement.fr</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/welcome</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/contact</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/infos</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/food</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/wedding</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/portraits</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/street</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/videos</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      <url>
        <loc>https://www.bayardclement.fr/landscapes</loc>
        <lastmod>2022-09-20</lastmod>
      </url>
      </urlset>`;

  res.end(xml);
}
