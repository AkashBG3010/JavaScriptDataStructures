var randomArray = []
let diceArray = [1,2,3,4,5,6]
let counter1 =0, counter2 =0, counter3 =0, counter4 =0, counter5 =0, counter6 =0

while (counter1<=10 || counter2<=10 || counter3<=10 || counter4<=10 || counter5<=10 || counter6<=10) {
    var dice = Math.floor(Math.random() * 6) + 1
    switch (dice) {
        case 1:
        randomArray.push(dice)
        counter1++
        break

        case 2:
        randomArray.push(dice)
        counter2++
        break
    
        case 3:
        randomArray.push(dice)
        counter3++
        break

        case 4:
        randomArray.push(dice)
        counter4++
        break
    
        case 5:
        randomArray.push(dice)
        counter5++
        break
    
        case 6:
        randomArray.push(dice)
        counter6++
        break  
    }
}
if (counter1>>counter2 && counter1>>counter3 && counter1>>counter4 && counter1>>counter5 && counter1>>counter6) {
    console.log('The maximum time repeated number is: "1"')
}
else if (counter2>>counter1 && counter2>>counter3 && counter2>>counter4 && counter2>>counter5 && counter2>>counter6) {
    console.log('The maximum time repeated number is: "2"')
}
else if (counter3>>counter1 && counter3>>counter2 && counter3>>counter4 && counter3>>counter5 && counter3>>counter6) {
    console.log('The maximum time repeated number is: "3"')
}
else if (counter4>>counter1 && counter4>>counter2 && counter4>>counter3 && counter4>>counter5 && counter4>>counter6) {
    console.log('The maximum time repeated number is: "4"')
}
else if (counter5>>counter1 && counter5>>counter2 && counter5>>counter3 && counter5>>counter4 && counter5>>counter6) {
    console.log('The maximum time repeated number is: "5"')
}
else {
    console.log('The maximum time repeated number is: "6"')
}
console.log('The total outputs for '+randomArray.length+' times dice rolled to get: '+randomArray)