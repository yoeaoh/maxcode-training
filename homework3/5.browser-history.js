// https://maxcode.dev/problems/browser-history/

class BrowserHistory {
    #currentUrl = null;
    #history = [];
    #historyPointer = 0;

    constructor(url) {
        this.#currentUrl = url;
    }

    visit(url) {
        this.#history.push(this.#currentUrl);
        this.#historyPointer += 1;
        this.#history.length = this.#historyPointer;

        this.#currentUrl = url;
        this.#history.push(this.#currentUrl);

        console.log('current after visit - ', this.#currentUrl, ' - ', this.#historyPointer, this.#history);
        return this.#currentUrl;
    }

    back() {
        if (this.#historyPointer === 0) {
            return null;
        }

        this.#historyPointer -= 1;
        console.log('back history pointer', this.#historyPointer);
        this.#currentUrl = this.#history[this.#historyPointer];

        return this.#currentUrl;
    }

    forward() {
        this.#historyPointer += 1;
        console.log('forward history pointer', this.#historyPointer);
        this.#currentUrl = this.#history[this.#historyPointer];

        return this.#currentUrl;
    }
}

// const history = new BrowserHistory("urlA");
//
// console.log(history.visit("urlB")); // "urlB"
// history.visit("urlC");
// history.visit("urlD");
//
// console.log(history.back()); // "urlC"
// console.log(history.back()); // "urlB"
// console.log(history.forward()); // "urlC"
//
// history.visit("urlX");
// history.visit("urlY");
//
// console.log(history.back()); // "urlX"
// console.log(history.back()); // "urlC"
// console.log(history.back()); // "urlB"
// console.log(history.back()); // "urlA"
// console.log(history.back()); // null

const historyA = new BrowserHistory("urlA");

console.log(historyA.visit("urlB")); // "urlB"
historyA.visit("urlC");
console.log(historyA.back()); // "urlB"
console.log(historyA.forward()); // "urlC"