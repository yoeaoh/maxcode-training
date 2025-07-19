// https://maxcode.dev/problems/browser-history/

class BrowserHistory {

}

const history = new BrowserHistory("urlA");

console.log(history.visit("urlB")); // "urlB"
history.visit("urlC");
history.visit("urlD");

console.log(history.back()); // "urlC"
console.log(history.back()); // "urlB"
console.log(history.forward()); // "urlC"

history.visit("urlX");
history.visit("urlY");

console.log(history.back()); // "urlX"
console.log(history.back()); // "urlC"
console.log(history.back()); // "urlB"
console.log(history.back()); // "urlA"
console.log(history.back()); // null
