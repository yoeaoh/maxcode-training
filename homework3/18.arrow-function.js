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
                                t();
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
        objB.g();
    }
};

objA.f();
