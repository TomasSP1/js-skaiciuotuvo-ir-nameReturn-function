// function aritmeticFunction(a, b, c) {
//     if (c === '+') {
//         return a + b
//     } else if (c === '-') {
//         return a - b
//     } else if (c === '*') {
//         return a * b
//     } else {
//         return a / b
//     }
// };

console.log(aritmeticFunction(6, 3, '-'));

function aritmeticFunction(a, b, c) {
    switch (c) {
        case '+':
            return a + b;
            break; 
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        default:
            return a / b;
    }
};


function getVardas(name) {
    return name;
}

const userName = getVardas('Tomas');

console.log(userName);

