const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs[0]);
const stringId = myArgs[0];
let parsedId = '';

for (var i = 0; i < stringId.length; i++) {
    parsedId = parsedId.concat(stringId.charAt(i));
    if (i === 7 || i === 11 || i === 15 || i === 19){
        parsedId = parsedId.concat('-');
    }
}
console.log(parsedId);
