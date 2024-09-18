// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export
  output: 'export', // Ensures Next.js knows we're exporting static files
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
