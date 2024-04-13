if (!URL.canParse("http://3.10.27.185/graphql")) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  "http://3.10.27.185/graphql"
);

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.10.27.185",
      },
    ],
  },
};

export default nextConfig;
