// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Aave GraphQL",
  tagline: "Aave GraphQL Documentation",
  url: "https://aaveql.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/aaveql.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "justmert", // Usually your GitHub org/user name.
  projectName: "aave-graphql", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/justmert/aave-graphql-doc/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      footer: {
        links: [
          {
            html: `Made with <span style="color: #e25555;">&hearts;</span> by <a href="https://github.com/justmert" target="_blank">Mert Köklü</a>`
          },
        ],
      },
    
      navbar: {
        title: "AaveQL",
        hideOnScroll: true,
        logo: {
          alt: "AaveQL Logo",
          src: "img/aaveql.png",  
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/justmert/aave-graphql-doc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
