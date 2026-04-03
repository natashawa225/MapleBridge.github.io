/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For GitHub Pages: adjust basePath if deploying to a subdirectory
  // Example: if your repo is "github.com/username/portfolio", use basePath: '/portfolio'
  // For a user/org site (github.com/username.github.io), use basePath: ''
  basePath: '',
}

export default nextConfig
