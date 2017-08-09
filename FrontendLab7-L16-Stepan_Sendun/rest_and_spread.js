(function restAndSpread(){
    var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') args.push(+val);
    });
});

let avg = (...args) => {
    args.reduce((acum, cur) => (acum+cur)/args.length)
}

console.log(avg(...args));

}());




module.exports = restAndSpread;