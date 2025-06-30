function every<T>(array: T[], callback: (x: T) => boolean): boolean {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false
        }
    }

    return true;
}

const result = every([1,2,3,4], x => x > 0);
const result2 = every(["qwe", "utiyo"], x => x.length === 3);

const arr: (number|string)[] = ["qw", 5, 7, "34", "23"];


if (arr.every((x) => typeof x === 'number')) {
    arr
}

if (every(arr, (x) => typeof x === 'number')) {
    arr
}

export {}