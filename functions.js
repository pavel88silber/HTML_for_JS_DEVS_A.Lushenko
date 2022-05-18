// Button
const birthDate = document.querySelector('#dateSubmit');

// Date input
birthDate.onclick = function() {
    let in1 = document.querySelector('#birthday');
    let birthDate = (in1.value).replaceAll("-", "");
    let dateNow = 20220515;
    const num = dateNow - parseInt(birthDate); // 320411

    const first2Str = String(num).slice(0, 2); // 👉️ '13'
    const first2Num = Number(first2Str); // 👉️ 13

    console.log(first2Num);



}

