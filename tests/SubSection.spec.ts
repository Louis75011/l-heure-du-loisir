import { mount } from '@vue/test-utils';
import SubSection from '../src/components/SubSection.vue';

// Vérifie que le titre et le contenu sont correctement injectés via les props.
describe('SubSection.vue', () => {
  it('affiche le titre et le contenu transmis', () => {
    const wrapper = mount(SubSection, {
      props: {
        id: 'test-id',
        title: 'Titre Test',
        image: '',
        alt: '',
        content: 'Contenu de test affiché.'
      }
    });

    expect(wrapper.text()).toContain('Titre Test');
    expect(wrapper.text()).toContain('Contenu de test affiché.');
  });
});