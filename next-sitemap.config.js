/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://bayardclement.fr',
  changefreq: 'daily',
  generateRobotsTxt: true,
  // alternateRefs: [
  //   {
  //     href: 'https://es.example.com',
  //     hreflang: 'es',
  //   },
  //   {
  //     href: 'https://fr.example.com',
  //     hreflang: 'fr',
  //   },
  // ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/additional-page'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: [
          '/infos',
          '/welcome',
          '/street',
          '/videos',
          '/food',
          '/portrait',
          '/contact',
        ],
      },
    ],
  },
};
