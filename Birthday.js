var array = []
for (let i=0; i<=50; i++) {
var birthMonth = Math.floor(Math.random() * 12) + 1
array.push(birthMonth)
}
console.log('The Birth month of 50 individual are: '+array)

function countSimilarMonth(array){
    let counts = {}
   
    for(let j=0; j<array.length; j++){ 
        if (counts[array[j]]){
        counts[array[j]] += 1
        } else {
        counts[array[j]] = 1
        }
       }  
       for (let prop in counts){
           if (counts[prop] >= 2){
               console.log('Individual having same birthday month('+prop+') repeated '+counts[prop]+' times')
           }
       }
     console.log(counts)
   }