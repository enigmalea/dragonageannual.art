// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dragon Age Annual",
  tagline: "An Unofficial Fan-Made Charity Dragon Age Calendar",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://www.dragonageannual.art",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Dragon Age Annual",
        items: [
          {
            type: "dropdown",
            label: "Community",
            position: "left",
            items: [
              {
                href: "https://twitter.com/DragonAgeAnnual/",
                label: "Twitter",
              },
              {
                href: "https://dragonageannual.tumblr.com",
                label: "Tumblr",
              },
              {
                href: "https://da-annual.itch.io/",
                label: "Itch.io",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dragon Age Annual. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
