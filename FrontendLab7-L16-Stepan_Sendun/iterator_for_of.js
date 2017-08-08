const max = process.argv[2];
let FizzBuzz = {
      [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                i++;

                if (i <= max) {
                    if (i % 15 === 0) {
                        return {
                            value: 'FizzBuzz',
                            done: false
                        };
                    } else if (i % 3 === 0) {
                        return {
                            value: 'Fizz',
                            done: false
                        };
                    } else if (i % 5 === 0) {
                        return {
                            value: 'Buzz',
                            done: false
                        };
                    } else {
                        return {
                            value: i,
                            done: false
                        };
                    }
                } else {
                    return {
                        done: true
                    };
                }
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}
