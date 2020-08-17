Vue.component('modal-test', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header">
              Modal title
            </slot>
          </p>
        </header>
        <section class="modal-card-body">
            <slot>
               Content are content
            </slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button" @click="$emit('close-modal')">Cancel</button>
        </footer>
      </div>
    </div>
  `
});

new Vue({
  el: '#main',
  data: {
    showModal: false
  }
})
