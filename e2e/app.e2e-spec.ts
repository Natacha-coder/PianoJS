import { PianoJSPage } from './app.po';

describe('piano-js App', function() {
  let page: PianoJSPage;

  beforeEach(() => {
    page = new PianoJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
