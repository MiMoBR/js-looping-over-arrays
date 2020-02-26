------- FOR

const array = [1,2,3,4,5,6];

for(let index = 0; index < array.length; index++){
    console.log(array[index]);
}

1 debugger eval code:2:10
2 debugger eval code:2:10
3 debugger eval code:2:10
4 debugger eval code:2:10
5 debugger eval code:2:10
6 debugger eval code:2:10


------- forEach

const array = [1,2,3,4,5,6];

array.forEach(function(current_value, index, array){
    console.log(`At index ${index} in array ${array} the value is ${current_value}`);
})

At index 0 in array 1,2,3,4,5,6 the value is 1 debugger eval code:2:10
At index 1 in array 1,2,3,4,5,6 the value is 2 debugger eval code:2:10
At index 2 in array 1,2,3,4,5,6 the value is 3 debugger eval code:2:10
At index 3 in array 1,2,3,4,5,6 the value is 4 debugger eval code:2:10
At index 4 in array 1,2,3,4,5,6 the value is 5 debugger eval code:2:10
At index 5 in array 1,2,3,4,5,6 the value is 6


------- map

const array = [1,2,3,4,5,6];

const square = x => Math.pow(x, 2);

const squares = array.map(square);

console.log(`Original array: ${array}`);
Original array: 1,2,3,4,5,6

console.log(`Original array: ${squares}`);
Original array: 1,4,9,16,25,36


------- reduce

const array = [1,2,3,4,5,6];

const sum = (x, y) => x + y;

const array_sum = array.reduce(sum, 0);

console.log(`The sum of array: ${array} is ${array_sum}`);
The sum of array: 1,2,3,4,5,6 is 21


------- filter

const array = [1,2,3,4,5,6];

const even = x => x % 2 === 0;

const even_array = array.filter(even);

console.log(`Even numbers in array: ${array} is ${even_array}`);
Even numbers in array: 1,2,3,4,5,6 is 2,4,6


------- every

const array = [1,2,3,4,5,6];

const under_seven = x => x < 7;

if(array.every(under_seven)){
    console.log(`Every element in the array is less than 7`);
}else{
    console.log(`At least one element in the array was bigger than 7`);
}
Every element in the array is less than 7


------- some

const array = [1,2,3,4,5,6];

const over_seven = x => x < 7;

if(array.some(under_seven)){
    console.log(`At least one element in the array was bigger than 7`);
}else{
    console.log(`No element bigger than 7 was found`);
}
At least one element in the array was bigger than 7
