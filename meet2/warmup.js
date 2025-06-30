function topWords(words, query, limit) {
    return words
      .filter(word => word.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, limit)

    return words
      .values()
      .filter(word => word.toLowerCase().startsWith(query.toLowerCase()))
      .take(limit)
      .toArray()
}

//           W === words.length      Q === query.length       L === limit

//  time   O(W × Q)
//  space  O(Q + W)


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

