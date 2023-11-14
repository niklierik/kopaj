export function reverseFactorial(num) {
    let product = 1,
        n = 1;

    while (product <= num) {
        if (product === num) return `${num} = ${n}!`;
        product *= ++n;
    }
    return `${num} = NONE`;
}
