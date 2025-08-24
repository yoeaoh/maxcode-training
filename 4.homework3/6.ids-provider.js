// https://maxcode.dev/problems/ids-provider/

class IdsProvider {
    #availableRevokedIds = new Set();
    #currentCounter = 0;

    generateId() {
        if (this.#availableRevokedIds.size !== 0) {
            // Как будто должно быть решение получше

            // Объект как будто тоже не идеально, всё равно сортировать придётся,
            // единственное что удаление будет легче.

            // (что-то такое)
            // const minimalAvaliableId = Math.min(...Object.keys(this.#availableRevokedIds));
            // delete this.#availableRevokedIds[minimalAvailableId];

            const minimalAvailableId = Math.min(...this.#availableRevokedIds);
            // this.#availableRevokedIds = this.#availableRevokedIds.filter((id) => id !== minimalAvailableId);
            this.#availableRevokedIds.delete(minimalAvailableId);

            return minimalAvailableId;
        }

        const num = this.#currentCounter
        this.#currentCounter += 1;
        return num;
    }

    revokeId(id) {
        if (id >= this.#currentCounter) {
            return;
        }

        // this.#availableRevokedIds.push(id);
        this.#availableRevokedIds.add(id);
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
