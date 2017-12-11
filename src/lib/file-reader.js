const fs = require('fs');

class FileReader {

  constructor(path, encoding = 'utf8') {

    this.fileContent = null;
    this.fileContentLines = [];

    try {
      let buffer = fs.readFile(path, encoding);
      this.parseFileContent(buffer);

    } catch (err) {

    }
  }

  parseFileContent(buffer) {
    this.fileContent = buffer;
    this.fileContentLines = buffer.toString().split('\n').map(line => line.trim());
  }

  getFileContent() {
    return this.fileContent;
  }

  getFileContentLines() {
    return this.fileContentLines;
  }

}

module.exports = FileReader;