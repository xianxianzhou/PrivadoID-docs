const math = require("remark-math");
const katex = require("rehype-katex");

require("dotenv").config();

module.exports = {
  title: "Uptick ID Documentation",
  tagline: "The official developer documentation hub for Uptick ID.",
  url: "https://did-docs.uptick.network",
  baseUrl: "/",
  favicon: "/img/UptickNetwork_logo02.png",
  organizationName: "Uptick ID",
  projectName: "docs",
  customFields: {
    description: "Build your next blockchain dApp using Uptick ID.",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: "learn_more",
      content:
        'Uptick ID spins out as Privado ID.<a class="announcement-link" rel="noopener noreferrer" href="https://www.privado.id/blog/introducing-privado-id-moving-beyond-polygon-to-deliver-independent-privacy-preserving-identity-solutions">Official Announcement</a>',
      backgroundColor: "#20232a",
      textColor: "#131313",
      isCloseable: false,
    },
    metadata: [
      {
        name: "description",
        content: "Welcome to Uptick ID Documentation, the official documentation for Uptick ID.",
      },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    footer: {
      style: "dark",
      links: [],
    },

    // image: "img/thumbnail.jpg",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ["solidity"],
    },
    algolia: {
      // need to update this
      indexName: "did-uptick",
      appId: "W3SXT7BOHG",
      apiKey: process.env.ALGOLIA_API_KEY,
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ["content:20"],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Uptick Network logo",
        src: "img/UptickNetwork_logo02.svg",
        srcDark: "img/UptickNetwork_logo02.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          position: "left",
          label: "Build",
          items: [
            {
              href: "/docs/issuer/issuer-overview/",
              label: "Issuer",
            },
            {
              href: "/docs/verifier/verifier-overview/",
              label: "Verifier",
            },
            {
              href: "/docs/web-wallet",
              label: "Web Wallet",
            },
            {
              href: "/docs/wallet/wallet-overview/",
              label: "Wallet",
            },
            {
              href: "/docs/js-sdk/js-sdk-overview/",
              label: "JS-SDK",
            },
            {
              href: "/docs/smart-contracts/",
              label: "Smart Contracts",
            },
          ],
        },

        {
          position: "left",
          label: "Learn",
          items: [
            {
              href: "/docs/faqs/",
              label: "FAQs",
            }
          ],
        },
        {
          position: "left",
          label: "Protocol",
          items: [
            {
              href: "https://docs.iden3.io/",
              label: "Iden3 General Docs",
            },
            {
              href: "https://iden3-communication.io/",
              label: "Iden3comm",
            },
          ],
        },

      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/UptickNetwork/PrivadoID-docs/tree/uptick_chain",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false, throwOnError: true, globalGroup: true }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
