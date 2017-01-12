import { Ang2stocksPage } from './app.po';

describe('ang2stocks App', function() {
  let page: Ang2stocksPage;

  beforeEach(() => {
    page = new Ang2stocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
