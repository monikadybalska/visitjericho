if (!URL.canParse("http://13.40.106.112/graphql")) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  "http://13.40.106.112/graphql"
);

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
