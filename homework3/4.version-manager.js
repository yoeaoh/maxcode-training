// https://maxcode.dev/problems/version-manager/

class VersionManager {

}

const vm1 = new VersionManager("2.0.3");

console.log(
  vm1
    .major()     // "3.0.0"
    .minor()     // "3.1.0"
    .minor()     // "3.2.0"
    .minor()     // "3.3.0"
    .patch()     // "3.3.1"
    .release()
);

const vm2 = new VersionManager("1.2.3");

console.log(
  vm2
    .minor()     // "1.3.0"
    .major()     // "2.0.0"
    .patch()     // "2.0.1"
    .rollback()  // "2.0.0"
    .rollback()  // "1.3.0"
    .release()
);
