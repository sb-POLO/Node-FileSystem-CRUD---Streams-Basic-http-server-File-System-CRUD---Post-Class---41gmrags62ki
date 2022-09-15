const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
await fs.writeFile(fileName,fileContent,(err)=>{
if(err)
	return callback(err);
});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
await fs.readFile(fileName,(err,data)=>{
if(err)
	console.log(err);
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
fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
