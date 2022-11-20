const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(fileName);
    }
  });
  console.log("File created!");
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName,"UTF-8",(err, data) => {
	if(!err){
		console.log(data)
	}
  });
  console.log("File readed!");
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.appendFile(fileName, fileContent, (err, data) => {
    console.log(data);
  });
  console.log("File updated!");
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName, function (err) {
    if (err) throw err;
  });
  console.log("File deleted!");
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
