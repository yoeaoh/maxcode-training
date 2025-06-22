// https://maxcode.dev/problems/non-unique-numbers/

function nonUniqueNumbers(numbers) {
    const numbersMap = {}

    for (const num of numbers) {
        numbersMap[num] ??= 0;
        numbersMap[num]++;
    }

    const nonUniqueNumbers = Object.entries(numbersMap).filter(([_, value]) => value > 1).map(([key]) => Number(key));
    return numbers.filter(item => nonUniqueNumbers.includes(item));
}

const numbers = [10, 5, 1, 2, 5, 3, 2, 1, 5, 8];
console.log(nonUniqueNumbers(numbers));
//  [5, 1, 2, 5, 2, 1, 5];
