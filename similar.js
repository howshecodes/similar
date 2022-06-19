"use strict"

const myArray = ["duel","dule","speed","spede","deul","cars","racs","shape","shpea"]
function sortWord(word){
    return word.split('').sort().join('')}

// function sortWord(word){
//   word = word.split('')
//   console.log(word);
//   word = word.sort()
//   console.log(word);
//   word = word.join('')
//   console.log(word);
//     return word
// }

// console.log(sortWord("hello"))

function similarWords (query){
    const result = [];
    const sortedQuery = sortWord(query);
    myArray.forEach(function(word){
        if (sortedQuery === sortWord(word)){
            result.push(word);
        }
    })
    return result;
   
}
console.log(similarWords("shape"))


