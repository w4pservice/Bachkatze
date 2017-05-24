import { BachkatzePage } from './app.po';

describe('bachkatze App', () => {
  let page: BachkatzePage;

  beforeEach(() => {
    page = new BachkatzePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
