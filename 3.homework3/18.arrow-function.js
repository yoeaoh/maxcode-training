// https://maxcode.dev/problems/arrow-function/

// Выведется B, потому что из-за стрелочной
// функции будет смотреть на уровень выше.

const objA = {
    x: "A",
    f() {
        const objB = {
            x: "B",
            g() {
                const objC = {
                    x: "C",
                    q: () => {
                        const t = () => {
                            console.log(this.x);
                        }
                        const objD = {
                            x: "D",
                            y() {
                                t.apply({x: 'Q'});
                            }
                        }
                        objD.y();
                    }
                };
                const fn = function () {
                    objC.q();
                }
                fn.call(objC);
            }
        }
        // objB.g();
        objB.g.call({x: "U"});
    }
};

objA.f();


// https://maxcode.dev/cheatsheets/oop
// 3.2. План определения значения this
