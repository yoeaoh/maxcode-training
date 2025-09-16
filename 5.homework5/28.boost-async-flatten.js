// https://maxcode.dev/problems/boost-async-flatten/

// Мне не нравится решение, но я не смог придумать, как обойтись без Promise.all и без флета в конце
async function flatten(aa) {
    return new Promise(resolve => {
        aa.read().then(elements => {
            Promise.all(elements.map((element) => {
                if (element instanceof AA) {
                    return flatten(element)
                } else {
                    return Promise.resolve(element);
                }
            })).then(result => {
                resolve(result.flat())
            })
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
    console.dir(result, {depth: null}); // [1,2,3,4,5,6,7,8,9,10,11,12,13]
    console.timeEnd("aa"); // ≈ 1000 ms
});

