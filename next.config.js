const RAW_ASSET_BASE = 'https://raw.githubusercontent.com/CodnanBaig/barbear/main/public'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      { source: '/products/:path*', destination: `${RAW_ASSET_BASE}/products/:path*` },
      { source: '/editorial/:path*', destination: `${RAW_ASSET_BASE}/editorial/:path*` },
      { source: '/brand-board.jpg', destination: `${RAW_ASSET_BASE}/brand-board.jpg` },
    ]
  },
}

module.exports = nextConfig
