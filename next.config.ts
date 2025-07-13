import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['image.tmdb.org'],
    },
};

export default nextConfig;
