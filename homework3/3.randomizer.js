// https://maxcode.dev/problems/randomizer/

class Randomizer {
    #start = 0;
    #end = 0;
    #availableValues = [];

    constructor(...args) {
        for (const arg of args) {
            if (typeof arg !== 'number') {
                throw new Error('аргумент не число');
            }

            if (!Number.isInteger(arg)) {
                throw new Error('число не целое')
            }
        }

        switch (args.length) {
            case 0:
                throw new Error('мало аргументов');
            case 1:
                this.#end = args[0];
                break;
            case 2:
                if (args[0] > args[1]) {
                    throw new Error('левая граница больше правой');
                }

                this.#start = args[0];
                this.#end = args[1];
                break;
            default: {
                throw new Error('много аргументов');
            }
        }

        for (let i = this.#start; i <= this.#end; i++) {
            this.#availableValues.push(i);
        }
    }

    next() {
        if (this.#availableValues.length === 0) {
            throw new Error('Числа из набора кончились!');
        }

        function getRandomIntInclusive(min, max) {
            if (![min, max].every(Number.isInteger)) throw "не целые"
            if (min > max) throw "порядок неправильный"
            return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
        }

        const randomAvailableIndex = getRandomIntInclusive(0, this.#availableValues.length - 1);
        
        if (randomAvailableIndex === this.#availableValues.length - 1) {
            return this.#availableValues.pop();
        }
        
        const result = this.#availableValues[randomAvailableIndex];
        this.#availableValues[randomAvailableIndex] = this.#availableValues.pop();

        // this.#availableValues = this.#availableValues.filter((value, index) => index !== randomAvailableIndex);
        // this.#availableValues.splice(randomAvailableIndex, 1);
        
        return result;
    }

    *[Symbol.iterator]() {
        while(true) {
            try {
                yield this.next();
            } catch {
                return;
            }
        }

    }
}

// 0 1 2 3 4
// a b c f e


// array.splice(3, 1)

// f(N) = N²

// next   O(N)        O(N)       O(1)
// 10000: 278.738ms
// 20000: 1.122s
// 30000: 2.845s      83.167ms
// 60000:             326.795ms
// 600000:                        40.369ms
// 6000000:                       415.498ms

// const N = 6_000_000
// console.time(N)
// const rand = new Randomizer(N);

// for (let i = 0; i < N; i++) {
//     rand.next();
// }
// console.timeEnd(N)

// for(const num of new Randomizer(10, 20)) {
//     console.log(num);
// }

console.log([...new Randomizer(10, 20)]);



// const r1 = new Randomizer(5);
// // генерирует числа 0, 1, 2, 3, 4, 5
//
// const r2 = new Randomizer(3, 6);
// // генерирует числа 3, 4, 5, 6

// const r3 = new Randomizer(); // мало аргументов
// const r4 = new Randomizer(1, 3, 7); // много аргументов
// const r5 = new Randomizer("qwe"); // аргумент не число
// const r6 = new Randomizer(2.6, 8); // число не целое
// const r7 = new Randomizer(8, 1); // левая граница больше правой

// const r = new Randomizer(2, 4);

// console.log(r.next()) // 3
// console.log(r.next()) // 2
// console.log(r.next()) // 4
// console.log(r.next()) // Error!
