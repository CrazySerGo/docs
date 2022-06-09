// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adrs: [
    {
      type: 'category',
      label: 'Architectural Decision Records',
      link: {
        type: 'doc',
        id: 'README',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '.',
        },
      ],
    }
  ],
};

module.exports = sidebars;
