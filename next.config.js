/** @type {import('next').NextConfig} */
const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = withMDX(
  {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    reactStrictMode: true,
    webpack: config => {
      config.resolve.alias['@'] = path.join(__dirname, '.')
      config.module.rules.push({test: /\.md$/, use: "raw-loader"});
      return config;
    }
  }
)