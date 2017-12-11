const StringAdder = require('./string-adder');

class App {
  constructor(filePath) {
    this.filePath = filePath;
  }

  run() {
    this.stringAdder = new StringAdder();
    this.stringAdder.addStringsFromFile(this.filePath);
    this.stringAdder.strings.forEach(string => {
      if (parseInt(string) !== NaN) {
        console.log(string);
      } else {
        //log empty line
      }
    });
  }

}

module.exports = App;