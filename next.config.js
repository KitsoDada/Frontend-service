module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['product-service', 'order-service'],
    },
    async rewrites() {
      return [
        {
          source: '/product-service/:path*',
          destination: `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/:path*`,
        },
        {
          source: '/order-service/:path*',
          destination: `${process.env.NEXT_PUBLIC_ORDER_SERVICE_URL}/:path*`,
        },
      ];
    },
  };