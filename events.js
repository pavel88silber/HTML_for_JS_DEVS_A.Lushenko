const in1 = document.querySelector('#in-2').value;
document.querySelector('#range-val1').innerHTML = `<h3>${in1}</h3>`;


document.querySelector('#in-2').oninput = () => {
    let rng = document.querySelector('#in-2').value;
    document.querySelector('#range-val1').innerHTML = `<h3>${rng}</h3>`;
}

document.querySelector('#btnClear').onclick = () => {
    document.querySelector('#in-2').value = 50;
    document.querySelector('#range-val1').innerHTML = `<h3>${50}</h3>`;
} 

const chkBox = document.querySelector('#check1');
chkBox.onchange = () => {
    if (chkBox.checked) {
        document.querySelector('#labelCheck1').innerText = 'Checked';
    } else {
        document.querySelector('#labelCheck1').innerText = 'Not checked';
    }
}
