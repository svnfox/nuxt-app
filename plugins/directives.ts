import appearAnimation from '~/directives/appearAnimation'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('appear-animation', appearAnimation)
})
