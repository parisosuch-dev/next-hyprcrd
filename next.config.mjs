/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
        DB_ID: process.env.DB_ID,
        DB_USER_ID: process.env.DB_USER_ID
    }
};

export default nextConfig;
