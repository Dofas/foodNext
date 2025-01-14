/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb',
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: `${process.env.BUCKET_URL}.s3.amazonaws.com`,
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
