/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Enable the app directory if not enabled by default
    },
    reactStrictMode: true, // Enable strict mode for better debugging
    swcMinify: true, // Use the faster SWC compiler for minification
  };
  
  export default nextConfig;
  