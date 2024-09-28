/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.simplilearn.com",
                pathname: "**"
            }
        ]
    },
};

export default nextConfig;
