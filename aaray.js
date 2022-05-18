let arr = [2, 4, 3, 1, 88, 45, 76, 33, 2, 34, 46, 91, 83];
let max = arr[0];
let sum = 0;

for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > max ) {
        max = arr[i];
    }
}
console.log('max = ' + max);


for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
}
console.log('sum = ' + sum);