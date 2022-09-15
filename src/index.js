const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent,(err)=>{
		if(err) throw(err);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName,(err,data)=>{
		if(err) throw(err);
		return data;
	});
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
