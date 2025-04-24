import { mount } from '@vue/test-utils';
import Tabs from '../src/components/Tabs.vue';

// Teste le comportement de clic : cliquer sur l'onglet 'Tech' doit rendre le composant TechTab.
// Mocks de composants enfants
vi.mock('../src/components/SportsTab.vue', () => ({ default: { template: '<div role="tabpanel" aria-labelledby="tab-0">Contenu Sports</div>' }}));
vi.mock('../src/components/TechTab.vue', () => ({ default: { template: '<div role="tabpanel" aria-labelledby="tab-1">Contenu Tech</div>' }}));
vi.mock('../src/components/CultureTab.vue', () => ({ default: { template: '<div role="tabpanel" aria-labelledby="tab-2">Contenu Culture</div>' }}));
vi.mock('../src/components/LitteratureTab.vue', () => ({ default: { template: '<div role="tabpanel" aria-labelledby="tab-3">Contenu Littérature</div>' }}));

describe('Tabs.vue', () => {
  it('change de contenu au clic sur un onglet', async () => {
    const wrapper = mount(Tabs);
    const buttons = wrapper.findAll('button');
    await buttons[1].trigger('click'); // Tech
    expect(wrapper.html()).toContain('aria-labelledby="tab-1"');
  });
});
