import nextTranslate from 'next-translate';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.simplilearn.com',
                pathname: '**',
            },
        ],
    },
};

export default nextTranslate(nextConfig);