import Vue from 'vue';

import Field from 'src/components/molecules/Field';

describe('Field.vue', () => {
  let vm;
  const data = {
    selected: 1,
  };

  beforeEach(() => {
    vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Field, data),
    });
  });

  it('sets the correct default data', () => {
    expect(vm.selected).to.eq(1);
  });

  // it('renders correctly', () => {
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .to.equal('Welcome to Your Vue.js App');
  // });
});
