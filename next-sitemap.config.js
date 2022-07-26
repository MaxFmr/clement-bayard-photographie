const config = {
  siteUrl: 'https://www.bayardclement.fr',
  generateRobotsTxt: true, // (Optional parameter for creating robots.txt file)
  // Other available options..
  generateIndexSitemap: false,
  exclude: [
    '/blank',
    '/blog',
    '/legal',
    '/contact/contact.style',
    '/food/food.style',
    '/infos/infos.style',
    '/videos/videos.style',
    '/wedding/weeding.style',
    '/welcome/category.style',
    '/index.style',
  ],
};

module.exports = config;
