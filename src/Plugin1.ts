
import type { Plugin } from "vue"


declare module 'vue' {
    interface ComponentCustomProperties {
        $t1: () => string,
    }
}

export const Plugin1: Plugin = {
    install(app) {
        app.config.globalProperties.$t1 = function (): string {
            return "t1"
        }
    }
}