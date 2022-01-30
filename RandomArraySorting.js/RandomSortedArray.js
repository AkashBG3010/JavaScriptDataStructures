var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 899) + 100;
    if(arr.indexOf(r) === -1) arr.push(r);
}
arr.sort()
console.log('Random Sorted array is: '+arr);

function print2Smallest(arr) {
	console.log(" The second Smallest element is: "+arr[1]+'\n');
}

function print2Largest(arr) {
    console.log(" The second Largest element is: "+arr[3]+'\n');
}
print2Smallest(arr);
print2Largest(arr);