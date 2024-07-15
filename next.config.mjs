/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com"
    ]
  }
};

export default nextConfig;
