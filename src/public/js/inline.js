Vue.component('inline-test', {
  data() {
    return {
      completionRate: 0
    }
  }
});

new Vue({
  el: '#main',
  data: {
    showModal: false
  }
})
