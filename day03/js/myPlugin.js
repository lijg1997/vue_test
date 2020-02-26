(function(w) {
  w.myPlugin = Object.create(null);
  w.myPlugin.install = function(Vue) {
    Vue.component('v-lijg', {
      template: `<span>{{msg}}</span>`,
      data() {
        return {
          msg: 'i love you soo much'
        };
      }
    });
  };
})(window);
