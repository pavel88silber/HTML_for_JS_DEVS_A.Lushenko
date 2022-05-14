// let a1 = 8;
// let div = document.querySelector('.out-1')

// function t1() {
//     div.textContent = a1;
// }

// document.querySelector('.b-1').onclick = t1;


// let a2 = 18;
// function t2() {
//     return a2;
// }

// document.querySelector('.b-1').onclick =function() {
//     document.querySelector('.out-1').textContent = t2();
// }


// function t3(a,b) {
//     return a + b;
// }

// document.querySelector('.b-3-1').onclick =function() {
//     document.querySelector('.out-3-1').textContent = t3(3,4);
// }

// document.querySelector('.b-3-2').onclick = function(){
//     document.querySelector('.out-3-2').textContent = t3(5,6);
// }


const birthDate = document.querySelector('#dateSubmit');
let in1 = document.querySelector('#birthday')

birthDate.onclick = function() {
    console.log(in1.value);
}

console.log(Date.now());