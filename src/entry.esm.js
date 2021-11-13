/* eslint-disable import/no-anonymous-default-export */
import Loading from './lib-components/Loading.vue'
import { createApp } from 'vue';
import { loadingSymbol,loadingConfigSymbol } from "./useAPI";
export * from './useApi';

export default {
  install(app, options) {
    app.config.globalProperties.$isLoading = function (isLoading) {
      vm.changeStatus(isLoading)
    }

    app.config.globalProperties.$changeIsLoadingOptions = function (newOptions) {
      vm.changeIsLoadingOptions(newOptions)
    }
    const plugin_app = createApp(Loading);
    const vm = plugin_app.mount(document.createElement('div'));

    document.body.appendChild(vm.$el)

    app.provide(loadingSymbol, app.config.globalProperties.$isLoading);
    app.provide(loadingConfigSymbol, app.config.globalProperties.$changeIsLoadingOptions);
    
    if (options) {
      Object.keys(options).forEach((key) => {
        if (options[key]) {
          vm.options[key] = options[key]
        }
      })
    }
  }
}
