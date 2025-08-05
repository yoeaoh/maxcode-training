// https://maxcode.dev/problems/observable-set/

class ObservableSet extends Set {
    constructor(action, initialValue) {
        super(initialValue);

        this.action = action;
    }

    add(value) {
        // Без вопроса пишет this.action is not a function
        // why?
        // Даже если объявить в классе
        // Пробовал и обычную и приватную переменную
        this.action?.('add', [value]);

        return super.add(value);;
    }

    clear() {
        this.action?.('clear', []);

        return super.clear()
    }

    delete(value) {
        this.action?.('delete', [value]);

        return super.delete(value);
    }
}

const set = new ObservableSet(
    (action, args) => console.log({ action, args }),
    [1, 2, 3]
);

set.add(12);     // action === "add", args === [12]
set.has(12);
set.size;
set.delete(12);  // action === "delete", args === [12]
set.clear();     // action === "clear", args === []
