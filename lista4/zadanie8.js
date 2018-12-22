var fs = require('fs');

//klasyczny interfejs
// fs.readFile('plik.txt', 'utf-8', function(err, data) {
//     if(err)
//         console.log(err)
//     console.log(data);
// });




//ręcznie napisana funkcja
// function promise( path, enc ) {
//     return new Promise( (res, rej) => {
//         fs.readFile( path, enc, (err, data) => {
//         if ( err )
//             rej(err);
//         res(data);
//         });
//     });
// }

//po staremu
// var plik = promise('plik.txt', 'utf-8');

// Promise.all([plik]).then(function([a]){
//     console.log(a);
// })

//po nowemu
// async function foo() {
//     var plik = await promise('plik.txt', 'utf-8');
//     console.log(plik);
// }

// foo();




//util.promisify
// var util = require('util');
// const read = util.promisify(fs.readFile);

// async function main() {
//   var plik = await read('plik.txt', 'utf-8');
//   console.log(plik);
// }

// main();



//fs.promise
// var fsPromises = require('fs').promises;

// async function main() {
//     let plik = await fsPromises.readFile('plik.txt', 'utf-8');
//     console.log(plik);
// }

// main();