// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-security'],
  security: {
    corsHandler: false,
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      contentSecurityPolicy: false,
      xFrameOptions: false,
    },
    csrf: {
      methodsToProtect: ['POST'],
    },
    rateLimiter: false
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})
