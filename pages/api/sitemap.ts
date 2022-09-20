import { SitemapStream, streamToPromise } from 'sitemap';
import type { NextApiRequest, NextApiResponse } from 'next';

type Page = { slug: string };

type Pages = Page[];

const CreateSiteMap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // List of posts
    const pages: Pages = [
      {
        slug: '',
      },
      {
        slug: 'welcome',
      },
      {
        slug: 'contact',
      },
      {
        slug: 'food',
      },
      {
        slug: 'infos',
      },
      {
        slug: 'landscapes',
      },
      {
        slug: 'portraits',
      },
      {
        slug: 'street',
      },
      {
        slug: 'videos',
      },
      {
        slug: 'wedding',
      },
    ];

    // Create each URL row
    pages.forEach((page) => {
      smStream.write({
        url: `/${page.slug as string}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};

export default CreateSiteMap;
