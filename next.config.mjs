/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/interests", destination: "/juniors", permanent: true },
      { source: "/inspiration", destination: "/juniors", permanent: true },
      { source: "/education", destination: "/about", permanent: true },
      { source: "/research", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
