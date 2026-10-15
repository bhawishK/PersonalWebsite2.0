/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/interests", destination: "/#inspiration", permanent: true }];
  },
};

export default nextConfig;
