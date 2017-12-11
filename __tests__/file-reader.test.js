jest.mock('fs');


describe('read a file with 5 lines', () => {
  const FILE_CONTENT =
    `0 5 6 4 8
  Horse
  5

  5 6 7 8`;

  beforeEach(() => {
    require('fs').__setFileContent(FILE_CONTENT);
  });

  test('filecontent is not null', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContent()).not.toBeNull();
  });

  test('file has 5 lines', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContentLines().length).toBe(5);
  });
});


describe('read a file which contains certain strings', () => {
  const FILE_CONTENT =
    `0 5 6 4 8
  Horse
  6 7
  Dog
  5

  5 6 7 8`;

  beforeEach(() => {
    require('fs').__setFileContent(FILE_CONTENT);
  });

  test('filecontent contains "Horse"', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContent()).toEqual(expect.stringContaining("Horse"));
  });

  test('filecontent contains "6 7"', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContent()).toEqual(expect.stringContaining("Horse"));
  });

  test('filecontent contains "Dog"', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContent()).toEqual(expect.stringContaining("Horse"));
  });

  test('filecontent contains ""', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    expect(fileReader.getFileContent()).toEqual(expect.stringContaining("Horse"));
  });

});


describe('read a file with certain lines', () => {
  const FILE_CONTENT =
    `0 5 6 4 8
  Horse
  6 7
  Dog
  5

  5 6 7 8`;

  beforeEach(() => {
    require('fs').__setFileContent(FILE_CONTENT);
  });

  test('', () => {
    const FileReader = require('../src/lib/file-reader.js');
    const fileReader = new FileReader('path/to');
    const expected = ['0 5 6 4 8', 'Horse', '6 7', 'Dog', '5', '', '5 6 7 8'];
    expect(fileReader.getFileContentLines()).toEqual(expect.arrayContaining(expected));
  });

});

