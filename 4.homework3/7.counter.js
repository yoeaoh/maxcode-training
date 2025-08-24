// https://maxcode.dev/problems/counter/

function createCounter() {
    let _count = 0;

    return {
        get count() {
            const currentCount = _count;
            _count += + 1;
            return currentCount;
        },
        // set count(_) {}
    };
}

const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3
