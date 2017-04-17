import { MyADashboardPage } from './app.po';

describe('my-adashboard App', () => {
  let page: MyADashboardPage;

  beforeEach(() => {
    page = new MyADashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
