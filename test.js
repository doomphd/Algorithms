function test(x) {
    let reversed = 0 
    let y = x

    if (x < 0) {
        return false
    }

    while (y > 0) {
        let lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
};

console.log(test(121))