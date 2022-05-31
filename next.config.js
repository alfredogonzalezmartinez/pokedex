/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['projectpokemon.org'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
