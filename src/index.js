const VueDigitType = {
  DIGIT_TYPE: 'digit',
  NUMBER_TYPE: 'int'
};

const directiveName = 'digit';

const vueDigitInputOptions = {
  maxLength: null,
  type: VueDigitType.DIGIT_TYPE
};

export default {
  install(vue, options) {
    const self = this;
    options = {...vueDigitInputOptions, ...options};

    vue.directive(directiveName, {
      bind(el, binding) {
        if (typeof binding.value === 'object' && binding.value !== null) {
          options = {...options, ...binding.value};
        }
        self.initMaxLength(el, options);
      },
      inserted(el) {
        el.oninput = (event) => {
          let formattedValue = '';
          switch (options.type) {
            case VueDigitType.DIGIT_TYPE:
              const pattern = /\d+/g;
              const isDigitValue = pattern.test(event.target.value);
              formattedValue = !isDigitValue ? '' : event.target.value.replace(/[^0-9]/g, '');
              break;
            case VueDigitType.NUMBER_TYPE:
            default:
              const parsedIntValue = parseInt(event.target.value, 10);
              formattedValue = isNaN(parsedIntValue) ? '' : parsedIntValue;
              break;
          }

          el.value = formattedValue;
        };
      }
    });
  },
  initMaxLength(el, options) {
    if (options.maxLength !== null) {
      el.setAttribute('maxlength', options.maxLength);
    }
  }
}

