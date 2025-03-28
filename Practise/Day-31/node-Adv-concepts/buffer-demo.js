// buffers are object help to handle binary data

// usefull for file system operation, crytography, image processing and uploading we need binary data

// Allocates a new Buffer of size bytes. 
// If fill is undefined, theBuffer will be zero-filled.

const bufferOne = Buffer.alloc(10); // byte all value will be zero initially

console.log(bufferOne);    // <Buffer 00 00 00 00 00 00 00 00 00 00>



//  create buffer from string
const bufferFromString = Buffer.from('Hello');

console.log(bufferFromString);   // <Buffer 48 65 6c 6c 6f>


const bufferFromArryOfintegers = Buffer.from([1, 2, 3, 4, 5]);

console.log(bufferFromArryOfintegers);   // <Buffer 01 02 03 04 05>


// write string to Buffer

bufferOne.write('john');
// into buffer binary
{/* <Buffer 6a 6f 68 6e 00 00 00 00 00 00 > */ }
console.log(bufferOne);
// john      
console.log(bufferOne.toString());

// concat two buffer into one

const bufferConcat = Buffer.concat([bufferOne, bufferFromString]);
{/* <Buffer 6a 6f 68 6e 00 00 00 00 00 00 48 65 6c 6c 6f >  */}
console.log(bufferConcat);


