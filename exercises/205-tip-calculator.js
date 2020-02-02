// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(number, level) { 
    if (level == 'good' ) {
        return number * 0.20
    }
    else if (level == 'fair') {
        return number * 0.15
    }
    else if (level == 'poor') {
        return number * 0.10
    }
    
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount (number, level) {
    if (level == 'good') {
        return tipAmount(number, level) + number
    }
    else if (level == 'fair') {
        return tipAmount(number, level) + number
    }
    else if (level == 'poor') {
        return tipAmount(number, level) + number
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount (number, level, people) {
    if (level == 'good') {
        return totalAmount(number, level) / people
    }
    else if (level == 'fair') {
        return totalAmount(number, level) / people
    }
    else if (level == 'poor') {
        return totalAmount(number, level) / people
    }
}