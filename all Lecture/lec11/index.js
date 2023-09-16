const path = require('path'); 

// console.log(path.dirname('C:/javascript2/AllBackEndPart/all Lecture/lec11'))

// console.log(path.extname('C:/javascript2/AllBackEndPart/all Lecture/lec11/index.js'))


// console.log(path.basename('C:/javascript2/AllBackEndPart/all Lecture/lec11/index.js'))


const data=(path.parse('C:/javascript2/AllBackEndPart/all Lecture/lec11/index.js'))

console.log(data.name)