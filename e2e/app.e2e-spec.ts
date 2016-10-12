import { MaterialWorldPage } from './app.po';

describe('material-world App', function() {
  let page: MaterialWorldPage;

  beforeEach(() => {
    page = new MaterialWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
