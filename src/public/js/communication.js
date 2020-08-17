window.Event = new Vue();

Vue.component('coupon', {
  template: `
    <input placeholder="OK" @blur="couponApplied">
  `,
  methods: {
    couponApplied() {
      Event.$emit('applied');
    }
  }
});

new Vue({
  el: '#main',
  data: {
  },
  methods: {
    testCoupon() {
    }
  },
  created() {
    Event.$on('applied', () => alert("Coupon applied"));
  }
})
