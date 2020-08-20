class Errors {
  constructor() {
    this.errors = {};
  }

  anyError() {
    return Object.keys(this.errors).length > 0;
  }

  get(field) {
    return this.errors[field] ? this.errors[field] : '';
  }

  record(err) {
    this.errors = {};
    let errorKeys = Object.keys(err);
    errorKeys.forEach(key => this.errors[key] = err[key]);
    console.log(this.errors);
  }

  has(field) {
    return Object.prototype.hasOwnProperty.call(this.errors, field);
  }

  clearError(field) {
    delete this.errors[field];
  }

  clearErrorAll() {
    this.errors = {};
  }
}

class Form {
  constructor(data) {
    this.orgData = data;
    this.errors = new Errors()
    Object.keys(data).forEach(key => this[key] = data[key]);
  }

  reset() {
    Object.keys(this.orgData).forEach(key => this[key] = this.orgData[key]);
  }

  onSubmit() {
    axios.post('/projects', {
      name: this.name,
      description: this.description
    })
      .then(response => this.onSuccess(response))
      .catch(error => this.onFail(error));
  }

  onSuccess(response) {
    console.log(response.data);
    this.reset();
    this.errors.clearErrorAll();
  }

  onFail(error) {
    this.errors.record(error.response.data)
  }
}


new Vue({
  el: "#main",
  data: {
    form: new Form({
      name: "",
      description: ""
    })
  }
});
