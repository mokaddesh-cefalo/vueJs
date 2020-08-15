Vue.component('message', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true
    };
  },
  template: `
    <article class="message" v-show="isVisible">
    <div class="message-header">
      {{title}}
      <button @click="hideMessage" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{body}}
    </div>
    </article>`,
  methods: {
    hideMessage() {
      this.isVisible = false;
    }
  }
})


Vue.component('tast-list', {
  template: `
    <div>
    <task v-for="task in tasks"> {{ task.description }} </task>
    </div>`,
  data() {
    return {
      tasks: [
        {description: "Goto codeforces", complete: true},
        {description: "Find a problem", complete: true},
        {description: "Write a soln", complete: false},
        {description: "Submit the soln", complete: false}
      ]
    }
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>',
  data() {
    return {
      message: "From Component"
    }
  }
})


new Vue({
  el: '#main'
})
