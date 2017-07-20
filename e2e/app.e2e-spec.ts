import { SlippTodoistPage } from './app.po';

describe('slipp-todoist App', () => {
  let page: SlippTodoistPage;

  beforeEach(() => {
    page = new SlippTodoistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
