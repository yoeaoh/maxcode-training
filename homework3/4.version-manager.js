// https://maxcode.dev/problems/version-manager/

class VersionManager {
    // #version = {
    //     major: 0,
    //     minor: 1,
    //     patch: 0,
    // };

    #history = [];

    // 

    constructor(initialVersion = "0.1.0") {
        const [major, minor, patch] = initialVersion.split('.').map(Number)
        this.#history.push({major, minor, patch}); // [{major: 0, minor: 1, patch: 0}]
    }

    major() {
        const {major} = this.#history.at(-1);

        this.#history.push({
            major: major + 1,
            minor: 0,
            patch: 0,
        });

        return this;
    }

    minor() {
        const {major, minor} = this.#history.at(-1);

        this.#history.push({
            major: major,
            minor: minor + 1,
            patch: 0,
        });

        return this;
    }

    patch() {
        const {major, minor, patch} = this.#history.at(-1);

        this.#history.push({
            major: major,
            minor: minor,
            patch: patch + 1,
        });

        return this;
    };

    rollback() {
        if (this.#history.length === 0) {
            throw new Error('Cannot rollback!');
        }

        this.#history.pop();

        return this;
    };

    release() {
        const { major, minor, patch } = this.#history.at(-1);

        return `${major}.${minor}.${patch}`;
    };
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


class VersionManager {
  constructor(startVersion = '0.1.0') {
    this.versions = [startVersion.split('.').map(Number)];
  }

  major() {
    const [major] = this.versions.at(-1);
    this.versions.push([major + 1, 0, 0]);
    return this;
  }

  minor() {
    const [major, minor] = this.versions.at(-1);
    this.versions.push([major, minor + 1, 0]);
    return this;
  }

  patch() {
    const [major, minor, patch] = this.versions.at(-1);
    this.versions.push([major, minor, patch + 1]);
    return this;
  }

  rollback() {
    if (this.versions.length === 1) {
      throw new TypeError('Cannot rollback!');
    }

    this.versions.pop();
    return this;
  }

  release() {
    return this.versions.at(-1).join(".");
  }
}

