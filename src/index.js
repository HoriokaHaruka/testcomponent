import Button from './components/Button.vue';
import Input from './components/Input.vue';

export default {
  install (app, options = {}) {
    app.component('CButton', Button);
    app.component('CInput', Input);
  }
};
