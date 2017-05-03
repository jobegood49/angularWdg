import { AngularAppWdgPage } from './app.po';

describe('angular-app-wdg App', () => {
  let page: AngularAppWdgPage;

  beforeEach(() => {
    page = new AngularAppWdgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
