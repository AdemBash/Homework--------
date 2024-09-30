//Task1
function mytask(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a * b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        return a + b;
    } else {
        return a % 2 !== 0 ? a : b;
    }
}
alert(mytask(4, 6));
alert(mytask(3, 5));
alert(mytask(2, 5));
