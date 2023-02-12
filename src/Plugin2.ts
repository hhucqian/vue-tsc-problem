
import type { Plugin } from "vue"


declare module 'vue' {
    interface ComponentCustomProperties {
        $t2: () => string,
    }
}

export const Plugin2: Plugin = {
    install(app) {
        app.config.globalProperties.$t2 = function (): string {
            return "t2"
        }
    }
}