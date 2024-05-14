import { AuroKit } from './src/auro-kit.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-kit') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroKit {});
  }
}

export { registerComponent }
