var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 999) + 100;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function print2Smallest( arr, arr_size)
{
	let i, firstSmall, secondSmall;

	firstSmall=Number.MAX_VALUE ;
	secondSmall=Number.MAX_VALUE ;

	for (i = 0; i < arr_size ; i ++)
	{
		if (arr[i] < first)
		{
			secondSmall = firstSmall;
			first = arr[i];
		}
		else if (arr[i] < secondSmall && arr[i] != firstSmall)
			secondSmall = arr[i];
	}
	if (secondSmall == Number.MAX_VALUE )
		console.log("There is no second smallest element\n");
	else
    console.log(" The second Smallest element is: "+secondSmall+'\n');
}
function print2Largest( arr, arr_size)
{
	let i, firstLarge, secondLarge;

	firstLarge=Number.MAX_VALUE ;
	secondLarge=Number.MAX_VALUE ;

	for (i = 0; i < arr_size ; i ++)
	{
		if (arr[i] > firstLarge)
		{
			secondLarge = firstLarge;
			firstLarge = arr[i];
		}
		else if (arr[i] > secondLarge && arr[i] != firstLarge)
			secondLarge = arr[i];
	}
	if (secondLarge == Number.MAX_VALUE )
		console.log("There is no second largest element\n");
	else
    console.log(" The second largest element is: "+secondLarge+'\n');
}
	let n = arr.length;
	print2Smallest(arr, n);
    print2Largest(arr,n);