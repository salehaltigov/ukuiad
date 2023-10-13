import type { Pinia } from "pinia"
import type { Router } from "vue-router"
declare module '#app' {
  interface NuxtApp {
    $pinia: Pinia
    $router: Router
  }
}
