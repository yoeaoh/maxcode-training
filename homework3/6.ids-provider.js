// https://maxcode.dev/problems/ids-provider/

class IdsProvider {

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
