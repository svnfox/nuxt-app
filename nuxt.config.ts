// https://nuxt.com/docs/api/configuration/nuxt-config
import compression from 'vite-plugin-compression'

export default defineNuxtConfig({
  appId: 'nuxt-app',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hans-CN',
      },
      title: '我的Nuxt App应用',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: '',
        },
        {
          name: 'description',
          content: '',
        },
      ],
      link: [
        {
          rel: 'preload',
          href: '/fonts/AlibabaPuHuiTi-3-65-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
      // script: [
      //   {
      //     innerHTML: `var _hmt = _hmt || [];
      //       (function() {
      //         var hm = document.createElement("script");
      //         hm.src = "https://hm.baidu.com/hm.js?0b5a886cbe3ff4b5675d63d651a14299";
      //         var s = document.getElementsByTagName("script")[0];
      //         s.parentNode.insertBefore(hm, s);
      //       })()`,
      //     type: 'text/javascript',
      //   },
      // ],
      noscript: [{ innerHTML: 'JavaScript is required to use this site.' }],
    },
  },
  css: ['animate.css', '~/assets/css/main.css'],
  vite: {
    plugins: [
      compression({
        algorithm: 'gzip', // 启用 gzip 压缩
        ext: '.gz', // 生成的压缩文件扩展名
        deleteOriginFile: false, // 是否删除原始资源文件
      }),
      // 你也可以同时配置 Brotli 压缩
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginFile: false,
      }),
    ],
  },
})
