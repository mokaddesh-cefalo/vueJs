new Vue({
  el: '#main',
  data: {
    skills: ["kiss"]
  },
  mounted() {
    axios.get('/data').then(response => {
      this.skills = response.data.skills;
      console.log(this.data);
    });
  }
});
