// Range Input
document.querySelector('#in-2').oninput = () => {
    let rng = document.querySelector('#in-2').value;
    document.querySelector('#range-val1').innerHTML = `<h3>${rng}</h3>`;
    document.querySelector('#circle').style.width = rng + 'px';
    document.querySelector('#circle').style.height = rng + 'px';
}

// Input color
const inColor = document.querySelector('#inputColor');
inColor.onchange = () => {
    document.querySelector('#circle').style.background = inColor.value;
}


// Button clear range
document.querySelector('#btnClear').onclick = () => {
    document.querySelector('#in-2').value = 500;
    document.querySelector('#range-val1').innerHTML = `<h3>${500}</h3>`;
    document.querySelector('#circle').style.width = 500 + 'px';
    document.querySelector('#circle').style.height = 500 + 'px';
} 

//  Display ( Input range )
const in1 = document.querySelector('#in-2').value;
document.querySelector('#range-val1').innerHTML = `<h3>${in1}</h3>`;
document.querySelector('#circle').style.width = in1.value + 'px';

// Checkbox
const chkBox = document.querySelector('#check1');
chkBox.onchange = () => {
    if (chkBox.checked) {
        document.querySelector('#labelCheck1').innerText = 'Checked';
    } else {
        document.querySelector('#labelCheck1').innerText = 'Not checked';
    }
}


// TextArea Form
document.querySelector('#btnText').style.background = 'pink';
document.querySelector('#btnText').style.marginLeft = '30px';


    document.querySelector('#btnText').onclick = (event) => {
        // Prevent page reloading!
        event.preventDefault();
        // let text = document.querySelector('#textInput').value;
        // console.log(text);
        // form elements
        let textAreaInput = document.querySelector('#form1').elements.textInput.value;
        textAreaInput.toString();
        if (textAreaInput.length >= 7 ) {
            console.log('OK! More than 6 characters');
        } else {
            console.log('Must be more than 6 characters')
        }
}
