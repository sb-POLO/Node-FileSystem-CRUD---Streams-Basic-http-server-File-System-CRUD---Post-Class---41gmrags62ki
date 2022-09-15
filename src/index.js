const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent,(err)=>{
		if(err) throw err;
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const res = await fs.readFile(fileName);
	return res.toString();
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent,(err)=>{
		if(err) throw err;
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
