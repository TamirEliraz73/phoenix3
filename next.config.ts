import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */

    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'win98icons.alexmeub.com',
            pathname: '/icons/**',
        }, {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '/wikipedia/**',
        }, {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            pathname: '/512/**',
        }, {
            protocol: 'https',
            hostname: 'flagcdn.com',
            pathname: '/w40/**',
        },{
            protocol: 'https',
            hostname: 'www.fcbarcelona.com',
            pathname: '/resources/**',
        },{
            protocol: 'https',
            hostname: 'www.flagcolorcodes.com',
            pathname: '/data/**',
        }]
    }
};

export default nextConfig;
