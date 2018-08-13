import { BankLoanPage } from './app.po';

describe('bank-loan App', function() {
  let page: BankLoanPage;

  beforeEach(() => {
    page = new BankLoanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
