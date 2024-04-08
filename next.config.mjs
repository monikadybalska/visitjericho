const wordpress = "http://13.40.106.112/graphql";

if (!URL.canParse(wordpress)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(wordpress);

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.40.106.112",
      },
    ],
  },
};

export default nextConfig;
