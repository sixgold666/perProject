import { PerProjectPage } from './app.po';

describe('per-project App', function() {
  let page: PerProjectPage;

  beforeEach(() => {
    page = new PerProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
