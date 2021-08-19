const fs = require('fs');

// write file (HTML)
const writeFile = fileContent => {
    return new Promise((resolve,reject)=>{
        fs.writeFile('./dist/data-string.js', fileContent, err => {
        if(err){
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'Team File is Created'
        });
    });
  });
};

module.exports = { writeFile };