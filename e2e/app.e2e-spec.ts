import { Ng4PaginationPage } from './app.po';

describe('ng4-pagination App', () => {
  let page: Ng4PaginationPage;

  beforeEach(() => {
    page = new Ng4PaginationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
