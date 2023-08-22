/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com', 'wembleypark.com', 'i.imgur.com', 'imgur.com','ibb.co' ],
    },
};

module.exports = nextConfig;
