// https://maxcode.dev/problems/permutations/

function permutations(str) {
    const result = [];

    if (str.length < 2) {
        return [str];
    }

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingString = str.replace(str[i], '');

        const remainingStringPermutation = permutations(remainingString);

        for (let j = 0; j < remainingString.length; j++) {
            result.push(currentChar.concat(remainingStringPermutation[j]));
        }
    }

    return result;
}

console.log(permutations("ABC"));
// ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
