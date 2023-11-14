async function isPrime(num: number) {
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j == 0) {
            return { num, isPrime: false };
        }
    }
    return { num, isPrime: true };
}

export async function findPrime(range: number[]) {
    const min = Math.min(range[0], range[1]);
    const max = Math.max(range[0], range[1]);
    const nums = [];
    for (let num = min; num <= max; num++) {
        nums.push(num);
    }
    const result = await Promise.all(nums.map(number => isPrime(number)));
    return result.filter(asd => asd.isPrime);
}
