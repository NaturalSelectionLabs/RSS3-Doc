/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

    // But you can create a sidebar manually

    docs: [
        {
            type: 'category',
            label: 'Guide',
            link: {
                type: 'generated-index',
            },
            collapsed: false,
            items: [
                'guide/introduction',
                'guide/roadmap',
                'guide/ecosystem',
                'guide/partnership',
            ],
        },
        {
            type: 'category',
            label: 'Products',
            link: {
                type: 'generated-index',
                description:
                    'RSS3 offers multiple products to help you build the feed of Web3.',
            },
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: 'PreGod',
                    link: {
                        type: 'generated-index',
                        description:
                            'PreGod provides a set of powerful yet simple-to-use APIs to access the feed of Web3.',
                    },
                    collapsed: false,
                    items: [
                        'product/PreGod/introduction',
                        'product/PreGod/datasource',
                        'product/PreGod/unified_metadata_schemas',
                        {
                            type: 'link',
                            label: 'API Playground',
                            href: '/PreGod/api',
                        },
                        {
                            type: 'category',
                            label: 'Tutorial',
                            link: {
                                type: 'generated-index',
                                description:
                                    'Some tutorials to help you get started with PreGod.',
                            },
                            collapsed: true,
                            items: ['product/PreGod/Tutorials/cookbook'],
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: '$RSS3',
            link: {
                type: 'generated-index',
            },
            items: [
                '$rss3/introduction',
                {
                    type: 'category',
                    label: 'Governance',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'link',
                            label: '#1 The Remaining $RSS3 Token Disposal',
                            href: 'https://snapshot.org/#/rss3.eth/proposal/0x35e83f2024e675473cc163ee24a66b5eeda6511a22316ad88251b70cd2758309',
                        },
                        {
                            type: 'link',
                            label: '#2 Genesis RSS3 Avatar NFT Minters',
                            href: 'https://snapshot.org/#/rss3.eth/proposal/0x25a196ede90368c66da7a5d8de1edd6dac49337a33861215647a4478db91a4ad',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Early Incentives',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'link',
                            label: '#1 Airdrop',
                            href: 'https://blog.rss3.io/19-rss3-early-incentives-1',
                        },
                        {
                            type: 'link',
                            label: '#2 Airdrop',
                            href: 'https://blog.rss3.io/25-rss3-early-incentive-2',
                        },
                        {
                            type: 'link',
                            label: '#3 Staking',
                            href: 'https://staking.rss3.events/',
                        },
                    ],
                },
            ],
        },
        'events',
        {
            type: 'category',
            label: 'Misc',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'link',
                    label: 'FAQ',
                    href: '/misc/faq',
                },
                {
                    type: 'link',
                    label: 'Branding',
                    href: '/misc/branding',
                },
            ],
        },
        'support',
    ],
};

module.exports = sidebars;
