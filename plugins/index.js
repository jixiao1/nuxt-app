import Vue from 'vue'

const plugin = {};
plugin.install = function (Vue){
  
  Vue.prototype.$eventBus = new Vue();

  Vue.filter('uppercase', (value)=>{
    return value.toUpperCase();
  })
}


Vue.use(plugin);