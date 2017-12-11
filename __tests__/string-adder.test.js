jest.mock('fs');

const StringAdder = require('../src/string-adder');

describe('we can add strings', () => {
  const FILE_CONTENT =
    `0 5 6 4 8
    Horse
    5
    
    5 6 7 8`;

  beforeEach(() => {
    require('fs').__setFileContent(FILE_CONTENT);
  });

  
  test('result is ... ', () => {
    const stringAdder = new StringAdder();
    stringAdder.addStringsFromFile('path/to');
    const expected = [23, NaN, 13, NaN, 5, 0, 26];
    expect(stringAdder.result).toEqual(expect.arrayContaining(expected));
  });
});
