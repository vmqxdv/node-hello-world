const args = process.argv;
process.argv.splice(0, 2);

const toLog = args.length < 1 ? 'Hello Boolean' : args.join(' ');  

console.log(toLog);