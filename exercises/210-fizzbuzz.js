// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

function fizzbuzz (inputNumber) {
    var str1 = ""

    for (var index = 1; index <= inputNumber; index++) {
        if (index % 3 !== 0 && index % 5 !== 0) {
            str1 = str1 + "."
        }
        else if (index % 3 === 0 && index % 5 !== 0) {
            str1 = str1 + "fizz"
        }
        else if (index % 5 === 0 && index % 3 !== 0) {
            str1 = str1 + "buzz"
        }
        else if (index % 3 === 0 && index % 5 === 0) {
            str1 = str1 + "fizzbuzz"
        }
    }   return str1
}




// function fizzbuzz (inputNumber) {
//     var str1 = ""
    
//     for (var index = 1; index <= inputNumber; i++){
//         if (index % 3 !== 0 && index % 5 !== 0) {
//             str1 = str1.concat(".")
//         }
//         else if (index % 3 === 0 && index % 5 !== 0) {
//             str1.concat("fizz")
//         }
//        else if (index % 5 === 0 && index % 3 !== 0) {
//         str1.concat("buzz")
//     }   
//         else if (index % 3 === 0 && index % 5 ===0) {
//             str1.concat("fizzbuzz")
//         }
        
//         return str1
// }
// }





// if (i % 3 !== 0 && i % 5 !== 0) {
//     str.concat(".")
// }


// function fizzbuzz (inputNumber) {

//     var str1 = ""

//     for (var i = 1; i <= inputNumber; i++) {
//         if (i % 3 === 0) {
//             return "fizz"
//         }
//         else if (i % 5 === 0) {
//             return "buzz"
//         }
//         else if (i % 3 === 0 && i % 5 === 0) {
//             return "fizzbuzz"
//         }
//         else return "."
//     }
//     return str1
// }
// function fizzbuzz () {
//     for (let i = 1; i <= 30; i++) {
//         if (i % 3 !== 0 || i % 5 !== 0) {
//             return ('.')
//         }
//         else if (i % 3 === 0 && i % 5 !== 0) {
//             return ('fizz')
//         }
//         else if (i % 5 === 0 && i % 3 !== 0) {
//             return ('buzz')
//         }
//         else if (i % 3 === 0 && i % 5 ===0) {
//             return ('fizzbuzz')
//         }
//     }
// }


// if (i % 3 !== 0 || i % 5 !==0) 
// console.log('fizzbuzz' + ".")
// else if (i % 3 === 0 && i % 5 !== 0)
// console.log('fizzbuzz' + 'fizz')
// else if (i % 5 === 0 && i % 3 !== 0)
// console.log('fizzbuzz' + 'buzz')
// else (i % 3 === 0 && i % 5 === 0)
// console.log('fizzbuzz' + 'fizzbuzz')

// function fizzbuzz () {
//     for (i = 0, i < 30, i++) {
//         if (i % 3 !== 0 || i % 5 !== 0) {
//             return ('fizzbuzz' + ".")
//         }
//     }

// }

// var str1 = "."
// for (index = 0, index < 50, i++) {
//     if (index % 3 !== 0 || index % 5 !== 0) {
//         return "."
//     }
// }