Vue.component('modal-test', {
  template: `<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas.
        Nullam condimentum luctus turpis.
        <button @click="$emit('close-modal')">Close</button>
      </div>
    </div>
  </div>`
});

new Vue({
  el: '#main',
  data: {
    showModal: false
  }
})
