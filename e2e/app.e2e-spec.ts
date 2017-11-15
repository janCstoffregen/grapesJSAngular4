import { GrapejsNgPage } from './app.po';

describe('grapejs-ng App', () => {
  let page: GrapejsNgPage;

  beforeEach(() => {
    page = new GrapejsNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
