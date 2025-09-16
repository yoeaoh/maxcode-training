// https://maxcode.dev/problems/boost-async-flatten/

async function flatten(aa) {
    const result = [];

    return new Promise(resolve => {
        aa.read().then(elements => {
            for (const element of elements) {
                if (element instanceof AA) {
                    flatten(element).then(value => {
                        result.push(value)

                        if (result.length === elements.length) {
                            resolve(result)
                        }
                    });
                } else {
                    Promise.resolve(element).then(value => {
                        result.push(value)

                        if (result.length === elements.length) {
                            resolve(result)
                        }
                    });
                }
            }
        })
    })
}


class AA {
    #array;

    constructor(...array) {
        this.#array = array;
    }

    read() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.#array), 100);
        });
    }
}

const example = new AA(
    new AA(1, new AA(new AA(2)), new AA(3)),
    new AA(4, new AA(5, 6), 7),
    8,
    new AA(9, new AA(10, new AA(11, 12), 13)),
)

console.time("aa")
flatten(example).then((result) => {
    console.log(result); // [1,2,3,4,5,6,7,8,9,10,11,12,13]
    console.timeEnd("aa"); // ≈ 1000 ms
});

