// https://maxcode.dev/problems/observable-set/

// const s = new Set([1,2,3]);

// Set.prototype.add = (arg) => console.log("arg", arg);


// 24.2.2.1 Set ( [ iterable ] )
// This function performs the following steps when called:

// 1. If NewTarget is undefined, throw a TypeError exception.
// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%Set.prototype%", « [[SetData]] »).
// 3. Set set.[[SetData]] to a new empty List.
// 4. If iterable is either undefined or null, return set.
// 5. Let adder be ? Get(set, "add").
// 6. If IsCallable(adder) is false, throw a TypeError exception.
// 7. Let iteratorRecord be ? GetIterator(iterable, sync).
// 8. Repeat,
//    a. Let next be ? IteratorStepValue(iteratorRecord).
//    b. If next is done, return set.
//    c. Let status be Completion(Call(adder, set, « next »)).
//    d. IfAbruptCloseIterator(status, iteratorRecord).


class ObservableSet extends Set {
    #action;
    constructor(action, initialValue) {
        super();

        for(const value of initialValue) {
            super.add(value);
        }

        this.#action = action;

    }


    add(value) {
        // Без вопроса пишет this.#action is not a function
        // why?
        // Даже если объявить в классе
        // Пробовал и обычную и приватную переменную
        this.#action('add', [value]);

        return super.add(value);;
    }

    clear() {
        this.#action('clear', []);

        return super.clear()
    }

    delete(value) {
        this.#action('delete', [value]);

        return super.delete(value);
    }
}

const set = new ObservableSet(
    (action, args) => console.log({ action, args }),
    [1, 2, 3]
);

console.log(set);;


// set.add(12);     // action === "add", args === [12]
// set.has(12);
// set.size;
// set.delete(12);  // action === "delete", args === [12]
// set.clear();     // action === "clear", args === []

// D:\_training\____maxcode-training\homework3\20.observable-set.js:15
//         this.#action('add', [value]);
//              ^

// TypeError: this.#action is not a function
//     at ObservableSet.add (D:\_training\____maxcode-training\homework3\20.observable-set.js:15:14)
//     at new Set (<anonymous>)
//     at new ObservableSet (D:\_training\____maxcode-training\homework3\20.observable-set.js:5:9)
//     at Object.<anonymous> (D:\_training\____maxcode-training\homework3\20.observable-set.js:33:13)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49