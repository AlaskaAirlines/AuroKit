import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-kit';

describe('auro-kit', () => {
  it('sets the CSS class on auro-kit > div element', async () => {
    const el = await fixture(html`
      <auro-kit cssclass="testClass"></auro-kit>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-kit is accessible', async () => {
    const el = await fixture(html`
      <auro-kit cssclass="testClass"></auro-kit>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-kit custom element is defined', async () => {
    const el = await !!customElements.get("auro-kit");

    await expect(el).to.be.true;
  });
});
