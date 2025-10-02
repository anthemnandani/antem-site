// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dzmfvr3dm/**", // match your folder structure
      },
    ],
  },
};

export default nextConfig;
