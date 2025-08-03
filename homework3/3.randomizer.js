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
        function getRandomIntInclusive(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
        }

        const randomAvailableIndex = getRandomIntInclusive(0, this.#availableValues.length - 1);
        const result = this.#availableValues[randomAvailableIndex];

        if (result === undefined) {
            throw new Error('Error!');
        }

        this.#availableValues = this.#availableValues.filter((value, index) => index !== randomAvailableIndex);

        return result;
    }
}


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

const r = new Randomizer(2, 4);

console.log(r.next()) // 3
console.log(r.next()) // 2
console.log(r.next()) // 4
console.log(r.next()) // Error!
