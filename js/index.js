alert('Трошки вправ');
const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

function solveQuadrEg(a, b, c) {
    const discr = calDiscr(a, b, c);
    if (discr > 0) {
        const x1 = ((-b + Math.sqrt(discr)) / (2 * a));
        const x2 = ((-b - Math.sqrt(discr)) / (2 * a));
        return 'X1 = ' + x1 + 'X2 = ' + x2;
    }
    else if (discr === 0) {
        const x = (-b) / (2 * a);
        return x;
    }
    else if (discr < 0) {
        return ' No solution ';
    }
}
    function calDiscr(a, b, c) {
        const discr = (b * b) - (4 * a * c);
        return discr;
    }
    const solution = solveQadrEg(a, b, c);
    alert( solution);
