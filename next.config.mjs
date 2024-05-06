const wordpress = "http://api.visitjericho.mooo.com/graphql";

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
    loader: "custom",
    loaderFile: "./cloudfrontLoader.ts",
  },
};

export default nextConfig;
