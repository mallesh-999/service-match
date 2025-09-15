/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",                 // required for static export
  basePath: "/service-match",       // your GitHub repo name
  assetPrefix: "/service-match/",   // static assets prefix
  reactStrictMode: true,
};

module.exports = nextConfig;
