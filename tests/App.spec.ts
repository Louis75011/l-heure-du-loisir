import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

// Vérifie la présence du titre principal 'L’Heure du loisir' dans le DOM.
describe('App.vue', () => {
  it('affiche le titre principal', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("L’Heure du loisir");
  });
});