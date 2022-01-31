var arrayOfNum = Array.from({length: 100}, (_, i) => i+1)
console.log('The Array of numbers is: '+arrayOfNum)

let repeatedDigitArray = new Array()
function checkPalindrome(number) {
    let reverseNumber = number.toString().split("").reverse()
    if (number == reverseNumber.join("")) {
        return true
    }
    else {
        return false
    }
}
for(let i=0 ; i<=100 ; i++){
    if(i>10 && checkPalindrome(i))
        repeatedDigitArray.push(i)
}
console.log('The Array of repeated numbers is: '+repeatedDigitArray)