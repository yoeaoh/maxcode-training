// https://maxcode.dev/problems/version-manager/

class VersionManager {
    #version = {
        major: 0,
        minor: 1,
        patch: 0,
    };

    #history = [];

    constructor(initialVersion) {
        if (typeof initialVersion === "string") {
            const [major, minor, patch] = initialVersion.split('.');

            this.#version = {
                major: Number(major),
                minor: Number(minor),
                patch: Number(patch)
            };
        }
    }

    major() {
        this.#history.push(this.#version);

        this.#version = {
            major: this.#version.major + 1,
            minor: 0,
            patch: 0,
        }

        return this;
    }

    minor() {
        this.#history.push(this.#version);

        this.#version = {
            major: this.#version.major,
            minor: this.#version.minor + 1,
            patch: 0,
        }

        return this;
    }

    patch() {
        this.#history.push(this.#version);

        this.#version = {
            major: this.#version.major,
            minor: this.#version.minor,
            patch: this.#version.patch + 1,
        }

        return this;
    };

    rollback() {
        const previousVersion = this.#history.pop();

        if (previousVersion === undefined) {
            throw new Error('Cannot rollback!');
        }

        this.#version = previousVersion;

        return this;
    };

    release() {
        const { major, minor, patch } = this.#version;

        return `${major}.${minor}.${patch}`;
    };
}


// const vm1 = new VersionManager("2.0.3");
//
// console.log(
//   vm1
//     .major()     // "3.0.0"
//     .minor()     // "3.1.0"
//     .minor()     // "3.2.0"
//     .minor()     // "3.3.0"
//     .patch()     // "3.3.1"
//     .release()
// );

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
