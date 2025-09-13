# Занятия js. Синяков

1. [Shortest word](https://maxcode.dev/problems/shortest-word/) — 10 минут, но несколько подходов, первые попытки тупил
    
    ```javascript
    function shortestWord(str) {
      const wordsArray = str.split(' ');
      let result = wordsArray[0].length;
    
      for (const word of wordsArray) {
        result = word.length < result ? word.length : result;
      }
    
      return result;
    }
    ```
    
2. [Top words](https://maxcode.dev/problems/top-words/) — 10 минут
    
    ```js
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
    ```
    
3. [Playlist](https://maxcode.dev/problems/playlist/) — около часа
    
    ```js
    function getSecondsFromFormattedTimeString(str) {
      const splittedDuration = str.split(":").map(x => Number.parseInt(x));
    
      if (splittedDuration.length === 2) {
        return splittedDuration[1] + (splittedDuration[0] * 60)
      }
    
      if (splittedDuration.length === 3) {
        return splittedDuration[2] + (splittedDuration[1] * 60) + (splittedDuration[0] * 3600);
      }
    
      return splittedDuration[0]
    }
    
    function getPaddedTimeString(timeUnit) {
      return timeUnit.toString().padStart(2, "0");
    }
    
    function getFormattedTimeStringFromSeconds(secondsCount) {
      let availableSeconds = secondsCount;
      let hours = 0;
      let minutes = 0;
    
      if (availableSeconds / 3600 > 0) {
        hours = Math.floor(availableSeconds / 3600);
        availableSeconds = availableSeconds - hours * 3600; 
      }
    
      if (availableSeconds / 60 > 0) {
        minutes = Math.floor(availableSeconds / 60);
        availableSeconds = availableSeconds - minutes * 60;
      }
    
      return `${hours ? getPaddedTimeString(hours) + ":" : ""}${getPaddedTimeString(minutes) + ":"}${getPaddedTimeString(availableSeconds)}`
    }
    
    function playlistDuration(playlist) {
      const totalSeconds = playlist.reduce((acc, [_, duration]) => {
        acc = acc + getSecondsFromFormattedTimeString(duration);
    
        return acc;
      }, 0)
    
      return getFormattedTimeStringFromSeconds(totalSeconds)
    }
    ```
    
4. [Pivot Index](https://maxcode.dev/problems/pivot-index/) — минут 20
    
    ```js
    function pivotIndex(arr) {
      const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
      let leftSum = 0;
      let rightSum = totalSum;
    
      for (let i = 0; i < arr.length; i++) {
        rightSum = rightSum - arr[i];
    
        if (rightSum === leftSum) return i;
    
        leftSum = arr[i] + leftSum;
      }
    
      return -1;
    }
    ```
    
5. [Only digits](https://maxcode.dev/problems/only-digits/) — минут 5 вспомнить регекспы
    
    ```js
    const onlyDigits = (str) => /^\d+$/g.test(str);
    ```
    
6. [Homogenous arrays](https://maxcode.dev/problems/homogenous-arrays/) — 5 минут, оказалась лёгкая
    
    ```js
    function filterHomogenous(arrays) {
      return arrays.reduce((acc, curr) => {
        if (curr.length === 0) {
          return acc;
        }
    
        if (curr.length === 1) {
          acc.push(curr);
        }
    
        if (curr.length > 1) {
          for (let i = 1; i < curr.length; i++) {
            if (typeof curr[i] !== typeof curr[i-1]) {
              return acc;
            }
          }
    
          acc.push(curr);
        }
    
        return acc;
      }, [])
    }
    
    ```
    
7. [Find developers](https://maxcode.dev/problems/find-developers/) — минут 10
    
    ```js
    function findDevelopers(teams) {
      return teams.reduce((acc, {_, members}) => {
        const developers = members.filter(member => member.role === 'developer')
        developers.forEach(dev => acc.push(dev.name))
        return acc;
      }, []).sort()
    }
    
    ```
    
8. [Greet Developers](https://maxcode.dev/problems/greet-developers/) — минут 5
    
    ```js
    function greetDevelopers(list) {
      return list.map(developer => Object.assign({
        greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
      }, developer))
    }
    
    // ---or---
    
    function greetDevelopers(list) {
      return list.map(developer => ({
        ...developer,
        greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
        })
      )
    }
    
    ```
    
9. [String template](https://maxcode.dev/problems/string-template/) — примерно 15 минут, читал про реплейс и регулярки
    
    ```js
    function template(str, dict) {
        function replacer (placeholder) {
            const placeholderValue = placeholder.replace(/\{|\}/g, "");
            const dictValue = dict[placeholderValue];
    
            if (dictValue === undefined) return placeholder;
            return dictValue;
        }
    
        const re = /\{\w+\}/g;
        const result = str.replaceAll(re, replacer);
    
        return result;
    }
    ```
    
10. [CSV parser](https://maxcode.dev/problems/csv-parser/) — минут 15
    
    ```js
    function parseCsv(csv) {
        const rows = csv.split('\n')
        const headers = rows.shift().split(';');
    
        return rows.map(row => {
            const fieldValues = row.split(';');
            return Object.fromEntries(fieldValues.map((value, index) => [headers[index], value]));
        })
    }
    ```
    
11. [Is anagram](https://maxcode.dev/problems/is-anagram/) — минут 20
    
    ```js
    function isAnagram(a, b) {
        if (a.length != b.length) return false
    
        const firstSymbols = Array.from(a).reduce((acc, curr) => {
            acc[curr] ??= 0;
            acc[curr]++
            return acc;
        }, {})
    
        for (let i = 0; i < b.length; i++) {
            if (firstSymbols[b[i]] === undefined) return false;
    
            firstSymbols[b[i]]--;
    
            if (firstSymbols[b[i]] < 0) return false;
        }
    
        return true;
    }
    ```
    
12. [Equal arrays](https://maxcode.dev/problems/equal-arrays/) — примерно полчаса
    
    ```js
    function equalArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        const length = arr1.length;
    
        const firstArrayValues = new Map();
    
        for (let i = 0; i < length; i++) {
            const currentValue = firstArrayValues.get(arr1[i]);
    
            if (currentValue === undefined) {
                firstArrayValues.set(arr1[i], 0);
            }
    
            firstArrayValues.set(arr1[i], firstArrayValues.get(arr1[i]) + 1);
        }
    
        for (let i = 0; i < length; i++) {
            if (firstArrayValues.get(arr2[i]) === undefined) return false;
    
            firstArrayValues.set(arr2[i], firstArrayValues.get(arr2[i]) - 1);
    
            if (firstArrayValues.get(arr2[i]) < 0) return false;
        }
    
        return true;
    }
    ```
    
13. [Valid brackets](https://maxcode.dev/problems/valid-brackets/) — минут 10-15
    
    ```js
    const bracketPairs = {
        "{": "}",
        "(": ")",
        "<": ">",
        "[": "]",
    }
    
    function isValidBrackets(str) {
        const stack = [];
    
        for (let i = 0; i < str.length; i++) {
            if (Object.keys(bracketPairs).includes(str[i])) {
                stack.push(str[i]);
                continue;
            }
    
            if (stack.length === 0) return false;
    
            const currentOpeningBracket = stack.pop();
            if (bracketPairs[currentOpeningBracket] !== str[i]) return false;
        }
    
        return stack.length === 0;
    }
    ```
    
14. [Non unique numbers](https://maxcode.dev/problems/non-unique-numbers/) — минут 15-20
    
    ```js
    // Многовато проходов, не очень нравится.
    
    function nonUniqueNumbers(numbers) {
        const numbersMap = {}
    
        for (const num of numbers) {
            numbersMap[num] ??= 0;
            numbersMap[num]++;
        }
    
        const nonUniqueNumbers = Object.entries(numbersMap).filter(([_, value]) => value > 1).map(([key]) => Number(key));
        return numbers.filter(item => nonUniqueNumbers.includes(item));
    }
    ```
    
15. [Compare objects](https://maxcode.dev/problems/compare-objects/) — 5-10 минут
    
    ```js
    function compareObjects(o1, o2) {
        const keys = Object.keys(o1);
        const secondKeys = Object.keys(o2);
        if (keys.length !== secondKeys.length) return false;
    
        for (const key of keys) {
            if (!Object.hasOwn(o2, key)) return false;
            if (!Object.is(o2[key], o1[key])) return false;
        }
    
        return true;
    }
    ```
    
16. [Where](https://maxcode.dev/problems/where/) — минут 15
    
    ```js
    function filterByShape(arr, where) {
        const filterWhere = Object.keys(where);
    
        return arr.filter((item) => {
            for (let i = 0; i < filterWhere.length; i++) {
                if (item[filterWhere[i]] !== where[filterWhere[i]]) return false;
            }
    
            return true;
        })
    }
    ```
    
17. [Group anagrams](https://maxcode.dev/problems/group-anagrams/) — минут 5, подумал, что можно отсортировать строку имени, и таким образом сгруппировать.
    
    ```js
    function groupAnagrams(words) {
        return Object.values(Object.groupBy(words, (item) => {
            return item.split("").sort((a, b) => a.localeCompare(b)).join('');
        }))
    }
    
    --- можно из без джоина в конце ---
    
    function groupAnagrams(words) {
        return Object.values(Object.groupBy(words, (item) => {
            return item.split("").sort((a, b) => a.localeCompare(b))
                //.join('');
        }))
    }
    ```
    
18. [My languages](https://maxcode.dev/problems/my-languages/) — полчаса-час, чёт не easy, как будто я не знаю чего-то. на первый взгляд просто filter-sort-map, но из-за сортировки между одинаковыми скорами..
    
    ```js
    function myLanguages(results) {
        const validLangs = Object
            .entries(results)
            .filter(([_, value]) => value >= 60)
            // .sort(([_A, valueA], [_B, valueB]) => valueB - valueA)
            // .map(([name, _]) => name)
    
        return Object
            .entries(Object.groupBy(validLangs, ([lang, value]) => value))
            .sort(([scoreA, languagesA], [scoreB, languagesB]) => scoreB - scoreA)
            .map(([score, languages]) => languages.sort(([nameA, scoreA], [nameB, scoreB]) => nameA.localeCompare(nameB)))
            .flat()
            .map(([lang, value]) => lang)
    }
    ```
    
19. [Sort the odd](https://maxcode.dev/problems/sort-the-odd/) — 5 минут, сразу появилась идея с “плейсхолдером”
    
    ```js
    function sortArray(array) {
        const oddIndexes = []
        const oddValues = []
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2) {
                oddIndexes.push(i);
                oddValues.push(array[i])
            }
        }
    
        const sortedOddValues = oddValues.sort((a, b) => a - b)
    
        const result = array;
    
        for (let i = 0; i < sortedOddValues.length; i++) {
            result[oddIndexes[i]] = sortedOddValues[i];
        }
    
        return result
    }
    ```
    
20. [Best results](https://maxcode.dev/problems/best-results/) — около часа, в основном потратил время на войну со сравнением дат.
    
    ```js
    function sortByScore (a, b) {
        return b.score - a.score;
    }
    
    function sortByDate (a, b) {
        const [aDay, aMonth, aYear] = a.date.split('.');
        const [bDay, bMonth, bYear] = b.date.split('.');
        const dateA = new Date(`${aYear}-${aMonth}-${aDay}`).getTime();
        const dateB = new Date(`${bYear}-${bMonth}-${bDay}`).getTime();
    
        return dateA - dateB;
    }
    
    function sortByName (a, b) {
        return a.name.localeCompare(b.name)
    }
    
    function bestResults(attempts) {
        return Object
            .entries(Object.groupBy(attempts, ({name}) => name))
            .map(([_, attempts]) => {
                const attemptsBestScore = attempts.sort(sortByScore)[0].score;
                return attempts
                    .filter((attempt) => attempt.score === attemptsBestScore)
                    .sort(sortByDate)[0];
            })
            .sort(sortByName)
    }
    ```