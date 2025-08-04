// https://maxcode.dev/problems/ids-provider/

class IdsProvider {
    #availableRevokedIds = [];
    #currentCounter = null;

    generateId() {
        if (this.#availableRevokedIds.length !== 0) {
            // Как будто должно быть решение получше

            // Сначала решил сделать через Set/Map, т.к. там сохраняется порядок добавления,
            // но потом понял, что нужно не это.

            // Объект как будто тоже не идеально, всё равно сортировать придётся,
            // единственное что удаление будет легче.

            // (что-то такое)
            // const minimalAvaliableId = Math.min(...Object.keys(this.#availableRevokedIds));
            // delete this.#availableRevokedIds[minimalAvailableId];

            const minimalAvailableId = Math.min(...this.#availableRevokedIds);
            this.#availableRevokedIds = this.#availableRevokedIds.filter((id) => id !== minimalAvailableId);

            return minimalAvailableId;
        }

        if (this.#currentCounter === null) {
            this.#currentCounter = 0;
            return this.#currentCounter;
        }

        this.#currentCounter += 1;
        return this.#currentCounter;
    }

    revokeId(id) {
        if (id > this.#currentCounter) {
            return;
        }

        this.#availableRevokedIds.push(id);
    }
}

const idsProvider = new IdsProvider();

console.log(idsProvider.generateId()); // 0
console.log(idsProvider.generateId()); // 1
console.log(idsProvider.generateId()); // 2
console.log(idsProvider.generateId()); // 3
console.log(idsProvider.generateId()); // 4
console.log(idsProvider.generateId()); // 5

idsProvider.revokeId(3);
idsProvider.revokeId(1);

console.log(idsProvider.generateId()); // 1
console.log(idsProvider.generateId()); // 3
console.log(idsProvider.generateId()); // 6

idsProvider.revokeId(0);

console.log(idsProvider.generateId()); // 0
console.log(idsProvider.generateId()); // 7
