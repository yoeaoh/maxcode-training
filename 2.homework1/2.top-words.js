// https://maxcode.dev/problems/top-words/


//           W === words.length      Q === query.length       L === limit

//  time   O(W × Q)
//  space  O(Q + L)

function topWords(words, query, limit) {
    let currentResults = 0;
    const result = []

    for (let i = 0; i < words.length; i++) {
        if (currentResults >= limit) {
            break;
        }

        if (words[i].slice(0, query.length).toLowerCase() === query.toLowerCase()) {
            currentResults++;
            result.push(words[i])
        }
    }

    return result;
}

const words = [
    "a",
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "add",
    "address",
    "Admit",
    "Advertise",
    "Affect",
    "AFFORD",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "agent",
    "ago",
    "agree",
];

console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
console.log(topWords(words, "aga", 5)); // ['again', 'against']
