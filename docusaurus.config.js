// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const copyright = `Copyright © ${new Date().getFullYear()} Natural Selection Labs.`;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'RSS3',
    tagline:
        'RSS3 is an open information syndication protocol that aims to support efficient and decentralized information distribution in Web3.',
    url: 'https://docs.rss3.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://graphics.rss3.workers.dev/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'NaturalSelectionLabs',
    projectName: 'RSS3-Doc',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'docusaurus-preset-openapi',
            /** @type {import('docusaurus-preset-openapi').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    lastVersion: 'v1.0.0',
                },
                blog: {
                    blogTitle: 'RSS3 Dev Log',
                    showReadingTime: true,
                    path: 'devlog',
                    routeBasePath: 'devlog',
                    feedOptions: {
                        type: 'all',
                        copyright,
                    },
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css')],
                },
                api: {
                    id: 'apiCurrent',
                    path: 'src/api',
                    routeBasePath: `/PreGod/api`,
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
        ({
            navbar: {
                title: 'RSS3',
                logo: {
                    alt: 'RSS3 Logo',
                    src: 'https://graphics.rss3.workers.dev/',
                },
                items: [
                    {
                        type: 'docsVersionDropdown',
                        dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
                        dropdownActiveClassDisabled: false,
                        position: 'left',
                    },
                    {
                        to: `/docs/category/guide`,
                        label: 'Guide',
                        position: 'right',
                    },
                    { to: '/devlog', label: '✍️ Dev Log', position: 'right' },
                    {
                        href: 'https://rss3.notion.site/Open-Source-Remote-RSS3-Offering-the-Dopest-Positions-b6fdbffee017449797397f45340de9d4',
                        label: '💌 Join Us',
                        position: 'right',
                    },
                    {
                        href: 'https://blog.rss3.io/',
                        label: 'Blog',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/NaturalSelectionLabs',
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
                                label: 'Guide',
                                to: '/docs/category/guide',
                            },
                            {
                                label: 'Products',
                                to: '/docs/category/products',
                            },
                            {
                                label: 'PreGod API Playground',
                                to: '/PreGod/api',
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
                            {
                                label: 'GitHub',
                                href: 'https://github.com/NaturalSelectionLabs',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://blog.rss3.io/',
                            },
                            {
                                label: 'Branding',
                                to: '/misc/branding',
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
};

module.exports = config;
