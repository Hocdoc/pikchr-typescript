import { pikchr } from '../src';

describe('pikchr', () => {
  it('works', async () => {
    const result = await pikchr('box');
    expect(result.svg).toContain('<svg');
  });

  it('source error', async () => {
    const result = await pikchr('blah');
    expect(result.errorAsHtml).toContain('<pre');
  });
});
