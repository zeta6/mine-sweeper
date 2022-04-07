/** @type {import('next').NextConfig} */

const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity')
const { createSecureHeaders } = require('next-secure-headers')

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              fontSrc: 'https://fonts.gstatic.com',
              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                'https://fonts.googleapis.com',
              ],
              scriptSrc: ["'self'", "'unsafe-eval'"],
              imgSrc: ["'self'"],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: 'same-origin',
        }),
      },
    ]
  },
  // webpack(config) {
  //   config.output.crossOriginLoading = 'anonymous'
  //   config.plugins.push(
  //     new SubresourceIntegrityPlugin({
  //       hashFuncNames: ['sha256', 'sha384'],
  //       enabled: true,
  //     })
  //   )
  //   return config
  // },
}

module.exports = nextConfig
