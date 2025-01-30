
function assignmentA(a, b) {
   return a === b;
}

function assignmentB(lastthree) {
    return lastthree.slice(-3);
}

function assignmentC(number) {
    if(number%2==0)
        return true;
    else
        return false;
}

function assignmentD(arr) {
    // Filtrer arrayet for kun at beholde positive tal større end 0
    let positiveNumbers = arr.filter(num => num > 0);
    
    // Returner det mindste positive tal eller null hvis der ikke findes nogen
    return positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : null;
}

function assignmentE(arr) {
    // Filtrer arrayet for kun at inkludere strings, der starter med 'b' eller 'B'
    let bStrings = arr.filter(str => typeof str === 'string' && /^b/i.test(str));
    
    // Returner false hvis ingen matches, ellers returner sorteret array
    return bStrings.length > 0 ? bStrings.sort() : false;
}