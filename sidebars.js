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

  'singleSidebar': [



    {
    
    'Markdown': [
    
    'markdown/basics/headings',
    'markdown/basics/breaks',
    {
      'Code': [
        'markdown/basics/code/inline',
        'markdown/basics/code/indented-blocks',
        'markdown/basics/code/fenced-blocks', 
      ]
    },
   
    'markdown/lists/continuation',

    ], 
    
    },
    {
    
      'Markdown and HTML': [
        'markdown-html/definition-list',
        'MDX/synced-tabs',
      ]
    },    
    {
    
      'MDX': [
        'MDX/tabs',
        'MDX/synced-tabs',
      ]
    }


  ]
  
};

module.exports = sidebars;
