// https://maxcode.dev/problems/randomizer/

class Randomizer {

}

const r1 = new Randomizer(5);
// генерирует числа 0, 1, 2, 3, 4, 5

const r2 = new Randomizer(3, 6);
// генерирует числа 3, 4, 5, 6

const r3 = new Randomizer(); // мало аргументов
const r4 = new Randomizer(1, 3, 7); // много аргументов
const r5 = new Randomizer("qwe"); // аргумент не число
const r6 = new Randomizer(2.6, 8); // число не целое
const r7 = new Randomizer(8, 1); // левая граница больше правой

const r = new Randomizer(2, 4);

r.next(); // 3
r.next(); // 2
r.next(); // 4
r.next(); // Error!
