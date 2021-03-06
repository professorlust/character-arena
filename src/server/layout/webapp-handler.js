import imageResolver from '../../utils/image-resolver.js';

import { TITLE, DESCRIPTION, COLOR , SITE_URL } from '../../constants/app.js';
import { FACEBOOK_KEY } from '../../../.env.js';

// This is intended to setup meta tags to support web applications
const getMetas = () => {

  const webAppMetas = [
    // Standard stuff
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { name: 'application-name', content: TITLE }, // Default name when adding to homescreen
    { name: 'description', content: DESCRIPTION },
    { name: 'mobile-web-app-capable', content: 'yes' },

    // iOS stuff
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-title', content: TITLE }, // Default name when adding to homescreen

    // Chrome stuff
    { name: 'theme-color', content: COLOR }, // Changes browser UI color

    // Microsoft stuff
    { name: 'msapplication-TileColor', content: COLOR }, // Set tile's background color, the same than icon
    // {
    //   name: 'msapplication-TileImage',
    //   content: imageResolver('../images/favicons/mstile-144x144.png'),
    // },

    // Facebook stuff
    { property:'fb:app_id', content: FACEBOOK_KEY },
    { property:'og:site_name', content: TITLE },
    { property:'og:type', content: 'profile' },
    { property:'og:title', content: TITLE },
    { property:'og:url', content: SITE_URL },
    { property:'og:description', content: DESCRIPTION },
    { property:'og:image', content: `${SITE_URL}${imageResolver('../images/favicons/android-chrome-192x192.png')}` },
    { property:'og:image:height', content: 192 },
    { property:'og:image:width', content: 192 },

    // Twitter stuff
    { name:'twitter:creator', content: '@ImperdibleSoft' },
    { name:'twitter:card', content: 'summary' },
    { name:'twitter:title', content: TITLE },
    { name:'twitter:description', content: DESCRIPTION },
    { name:'twitter:url', content: SITE_URL },
    { name:'twitter:image', content: `${SITE_URL}${imageResolver('../images/favicons/android-chrome-192x192.png')}` },

    // Google stuff
    { itemprop:'url', content: SITE_URL },
    { itemprop:'name', content: TITLE },
    { itemprop:'description', content: DESCRIPTION },
    { itemprop:'thumbnail', content: 'http://schema.org/ImageObject' },
    { itemprop:'thumbnailUrl', content: `${SITE_URL}${imageResolver('../images/favicons/android-chrome-192x192.png')}` },
  ];

  // Create valid strings
  const webAppMetasString = webAppMetas
    .map(meta => {
      const name = meta.name ? `name="${meta.name}"` : '';
      const property = meta.property ? `property="${meta.property}"` : '';
      const itemprop = meta.itemprop ? `itemprop="${meta.itemprop}"` : '';
      const content = meta.content ? `content="${meta.content}"` : '';

      return `<meta ${name} ${content} ${property} ${itemprop}/>`;
    })
    .join('\n');

  return webAppMetasString;
};

// This is intended to setup different icons to support different OS web applications
const getLinks = () => {
  const webAppLinks = [
    // Manifest.json
    {
      rel: 'manifest',
      href: '/manifest.json',
    },

    // // Standard icons
    // { rel: 'shorcut icon', type: 'image/x-icon', href: `/favicon.ico?v=${Math.random()}` },

    // iOS icons
    // https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
    // {
    //   rel: 'apple-touch-icon',
    //   href: imageResolver('../images/favicons/apple-touch-icon.png')
    // }, // App Store defalt
    {
      rel: 'apple-touch-icon',
      size: '180x180',
      href: imageResolver('../images/favicons/apple-touch-icon-180x180.png'),
    }, // iPhone retina
    {
      rel: 'apple-touch-icon',
      size: '167x167',
      href: imageResolver('../images/favicons/apple-touch-icon-167x167.png'),
    }, // iPad retina
    {
      rel: 'apple-touch-icon',
      size: '152x152',
      href: imageResolver('../images/favicons/apple-touch-icon-152x152.png'),
    }, // iPad
    {
      rel: 'apple-touch-icon',
      size: '120x120',
      href: imageResolver('../images/favicons/apple-touch-icon-120x120.png'),
    }, // iPhone
    {
      rel: 'apple-touch-icon',
      size: '76x76',
      href: imageResolver('../images/favicons/apple-touch-icon-76x76.png'),
    }, // Legacy iPhones

    // Chrome icons
    // https://developer.chrome.com/multidevice/android/installtohomescreen
    {
      rel: 'icon',
      size: '192x192',
      type: 'image/png',
      href: imageResolver('../images/favicons/android-chrome-192x192.png'),
    }, // recommended
    {
      rel: 'icon',
      size: '128x128',
      type: 'image/png',
      href: imageResolver('../images/favicons/android-chrome-128x128.png'),
    }, // standard

    // Android icons
    // https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html
    {
      rel: 'icon',
      size: '96x96',
      type: 'image/png',
      href: imageResolver('../images/favicons/favicon-96x96.png'),
    }, // xhdpi
    {
      rel: 'icon',
      size: '72x72',
      type: 'image/png',
      href: imageResolver('../images/favicons/favicon-72x72.png'),
    }, // hdpi
    {
      rel: 'icon',
      size: '48x48',
      type: 'image/png',
      href: imageResolver('../images/favicons/favicon-48x48.png'),
    }, // mdpi
    {
      rel: 'icon',
      size: '36x36',
      type: 'image/png',
      href: imageResolver('../images/favicons/favicon-36x36.png'),
    }, // ldpi
  ];

  // Create valid strings
  const webAppLinksString = webAppLinks
    .map((link) => {
      const rel = link.rel ? `rel="${link.rel}"` : '';
      const href = link.href ? `href="${link.href}"` : '';
      const size = link.size ? `sizes="${link.size}"` : '';
      const type = link.type ? `type="${link.type}"` : '';

      return `<link ${rel} ${href} ${size} ${type}/>`;
    })
    .join('\n');

  return webAppLinksString;
};

const webAppHandler = () => getMetas() + getLinks();

export default webAppHandler;
