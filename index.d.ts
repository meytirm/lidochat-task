import type ApiService from '~/plugins/api-service'

declare module '#app' {
  interface NuxtApp {
    $api: ApiService
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiService
  }
}

export {}
