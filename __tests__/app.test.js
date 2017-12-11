const App = require('../src/app');

describe('we can pass a file path to our application', () => {
  let app = new App('path/to');

  test('the file path is path/to', () => {
    expect(app.filePath).toBe('path/to');
  });
});