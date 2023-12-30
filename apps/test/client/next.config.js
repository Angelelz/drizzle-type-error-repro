const { withLogtail } = require('@logtail/next');

/** @type {import('next').NextConfig} */
module.exports = withLogtail({
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        pathname: '/**',
        protocol: 'https'
      },
      {
        hostname: '*',
        pathname: '/**',
        protocol: 'https'
      }
    ]
  },
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      // Remove node: from import specifiers, because Next.js does not yet support node: scheme
      // https://github.com/vercel/next.js/issues/28774
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      })
    );

    return {
      ...config,
      module: {
        ...config.module,
        noParse: [/aws-crt.*/]
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@sentry/node': false
        },
        fallback: {
          ...config.resolve.fallback,
          async_hooks: false,
          child_process: false,
          debug: false,
          dns: false,
          fs: false,
          http2: false,
          net: false,
          'original-fs': false,
          perf_hooks: false,
          tls: false
        }
      }
    };
  }
});
