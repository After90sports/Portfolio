import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    qualities: [75, 85],
  },
}

export default nextConfig
