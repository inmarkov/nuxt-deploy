// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Python разработка, Frontend, Backend, Поддержка сайтов, Серверные настройки',
      meta: [
        {
          name: 'description',
          content: 'Предлагаю услуги в области разработки Python, Frontend (Nuxt.js, Vue.js), Backend (Laravel, PHP), а также серверного администрирования и поддержки сайтов.'
        },
        {
          name: 'keywords',
          content: 'Python разработка, Nuxt.js, Vue.js, Laravel, API интеграции, серверное администрирование, поддержка сайтов, 1С-Битрикс, WordPress'
        },
        {
          property: 'og:title',
          content: 'Python разработка, Frontend, Backend, Поддержка сайтов, Серверные настройки'
        },
        {
          property: 'og:description',
          content: 'Разработка на Python, создание сайтов на Nuxt.js, Vue.js, поддержка проектов на Laravel и 1С-Битрикс, а также серверное администрирование.'
        },
      ]
    }
  }
})
