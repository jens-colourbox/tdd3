const fs = jest.genMockFromModule('fs');

let fileContent = '';
const __setFileContent = (newFileContent) => {
  fileContent = newFileContent;
}

const readFile = () => {
  return fileContent;
  this.fileContent = fileContent;
  this.fileContentLines = fileContent.toString().split('\n');
}

fs.__setFileContent = __setFileContent;
fs.readFile = readFile;

module.exports = fs;