// https://maxcode.dev/problems/permutations/

function permutations(str) {
    if (str.length === 0) {
        return [""];
    }

    const result = [];

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingString = str.replace(str[i], '');

        const remainingStringPermutation = permutations(remainingString);

        for (let j = 0; j < remainingString.length; j++) {
            result.push(currentChar + remainingStringPermutation[j]);
        }
    }

    return result;
}

// "1" → 1
// "12" →  2×1
// "123" → 3×2×1 = 6

// "1234" → "1×××" "2×××" "3×××" "4×××" → 4×3×2×1 = 24

// "12345" → 5×4×3×2×1 = 120

// "1...N" → N! = 1×2×3×...×N

// 10! = 3 628 800
// 20! = 2 432 902 008 176 640 000

// 30! = 2,6525285981×10³²
// 2,6525285981×10²³ секунд

// 260000000000000000000000 s
// 8 244 545 915 778 792 y

//           1 sec
// n         1 млрд
// n×log₂n   10 млн
// n²        30_000
// n³        1_000

// 2 ** n    30
// n!        12   n! ≈ √(2πn) * (n/e)^n
// n ** n    9

// 

console.log(permutations("ABC"));
// ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
