import BigNumber from 'bignumber.js';

export function fibonacci(num: string | BigNumber | number): BigNumber {
    if (typeof num === 'number') {
        num = num.toString();
    }
    if (typeof num === 'string') {
        num = new BigNumber(num);
    }
    if (num.isEqualTo(0) || num.isLessThan(0)) {
        return new BigNumber(0);
    }
    return fibonacci(num.minus(1)).plus(num);
}
