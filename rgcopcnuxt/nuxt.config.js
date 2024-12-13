export default {
  app: {
    head: {
      title: 'My Nuxt 3 App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt 3 Application' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [
    '~/assets/main.css', // Include your global CSS file
    'bootstrap/dist/css/bootstrap.min.css',
      ],
  plugins: ['~/plugins/bootstrap.js'
   
],
  build: {
    transpile: [],
  },

  compatibilityDate: '2024-12-13',
  vite: {
    server: {
      hmr: true, // Ensure this is set to true
    },
  },
};