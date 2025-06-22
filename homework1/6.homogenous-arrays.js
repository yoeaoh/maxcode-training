function filterHomogenous(arrays) {
    return arrays.reduce((acc, curr) => {
        if (curr.length === 0) {
            return acc;
        }

        if (curr.length === 1) {
            acc.push(curr);
        }

        if (curr.length > 1) {
            for (let i = 1; i < curr.length; i++) {
                if (typeof curr[i] !== typeof curr[i-1]) {
                    return acc;
                }
            }

            acc.push(curr);
        }

        return acc;
    }, [])
}

console.log(filterHomogenous([
    [1, 2, 3],
    [],
    [5, true, 8],
    ["qwe", "yyy"],
    ["uio", 6],
])); // [[1, 2, 3],  ["qwe", "yyy"]]