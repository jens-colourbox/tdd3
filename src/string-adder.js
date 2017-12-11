const FileReader = require('./lib/file-reader');

class stringAdder {
  constructor() {
    this._result = [];
    this.fileReader = null;
  }

  addStringsFromFile(filePath) {
    this.fileReader = new FileReader(filePath);
    let stringsToBeAdded = [];
    this.fileReader.getFileContentLines().forEach(line => {
      stringsToBeAdded = line.toString().split(' ');
      this.addStrings(stringsToBeAdded);
    });
  }

  addStrings(strings = []) {
    let result = NaN;
    strings.forEach(string => {
      if(parseInt(string) !== NaN) {
        if(result === NaN) {
          result = parseInt(string);
        } else {
          result += parseInt(string);
        }
      }
    });
    this._result.push(result);
  }

  get result() {
    return this._result;
  }

}

module.exports = stringAdder;