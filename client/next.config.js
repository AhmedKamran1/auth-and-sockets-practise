/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        basePath: false,
        permanent: false,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
