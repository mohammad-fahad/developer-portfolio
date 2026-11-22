module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-images-1.medium.com", pathname: "**" },
      { protocol: "https", hostname: "miro.medium.com", pathname: "**" },
      { protocol: "https", hostname: "dev-to-uploads.s3.amazonaws.com", pathname: "**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
    ],
  },
};
