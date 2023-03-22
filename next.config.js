/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  unoptimized: true,

  images: {
    loader: 'akamai',
    path: '',
    
    domains: ["hawiya-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],

  },
};

module.exports = nextConfig;