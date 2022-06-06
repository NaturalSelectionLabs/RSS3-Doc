// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RSS3',
  tagline: 'RSS3 is an open information syndication protocol that aims to support efficient and decentralized information distribution in Web3.',
  url: 'https://docs.rss3.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://graphics.rss3.workers.dev/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NaturalSelectionLabs',
  projectName: 'RSS3-Wiki',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          path: 'changelog',
          routeBasePath: 'changelog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RSS3',
        logo: {
          alt: 'RSS3 Logo',
          src: 'https://graphics.rss3.workers.dev/',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/guide',
            position: 'right',
            label: 'Docs',
          },
          { to: '/changelog', label: '🔄 API Changelog', position: 'right' },
          { href: 'https://rss3.notion.site/Open-Source-Remote-RSS3-Offering-the-Dopest-Positions-b6fdbffee017449797397f45340de9d4', label: '💌 Join Us', position: 'right' },
          // TODO: fix the link to the whitepaper
          { to: './static/assets/RSS3-Whitepaper.pdf', label: 'Whitepaper', position: 'right' },
          {
            href: 'https://github.com/NaturalSelectionLabs/RSS3-Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Products',
                to: '/docs/category/products',
              },
              {
                label: 'PreGod API',
                to: 'docs/category/rss3-pregod',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/rss3_',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/rss3',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/rss3_en',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://rss3.notion.site/',
              },
              {
                label: 'Branding',
                to: '/docs/misc/branding',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NaturalSelectionLabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Natural Selection Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
