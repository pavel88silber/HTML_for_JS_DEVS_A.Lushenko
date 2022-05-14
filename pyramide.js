let block = document.getElementsByClassName('block');

function blockColor() {
    for (let y = 1; y < block.length; y++) {
        let blk = document.getElementById(y);
        blk.style.background = randomColor();
    }
}

function randomColor() {
    let R = Math.floor(Math.random() * 255) + 1;
    let G = Math.floor(Math.random() * 255) + 1;
    let B = Math.floor(Math.random() * 255) + 1;
    let Blur = Math.random() * (1 - 0.1) + 0.1;

    // color = '#' + R.toString(16) + G.toString(16) + B.toString(16);

    // Blur.toFixed(1);
    // if(R.length <= 1) {
    //     R += '0';
    // }
    // if(G.length <= 1) {
    //     G += '0';
    // }
    // if(B.length <= 1) {
    //     B += '0';
    // }      
    let clr = `rgba(${R},${G},${B},${Blur.toFixed(3)})`;  
    // console.log(Blur.toFixed(1));
    return `${clr}`;
}   

function PyramideHeight() {
    let inVal = document.getElementById('inPyramide');
    console.log(inVal.value);
    height = inVal.value;
    drawPyramide(height);
    blockColor();
}

let height = 1;

function drawPyramide(h) {
    // Clear previus pyramide
    const pyramideClear = document.querySelector('#pyramide');
    pyramideClear.innerHTML = '';

    height = h;
    const x = document.createElement('div');
    const div = document.createElement('div');
    const br = document.createElement('br');
    const pyramide = document.querySelector('#pyramide');
    
    const numOfBlocks = Math.pow(height, 2); 
    let indents = (height - 1); 
    let q = indents;
    let prevBlock = 1;
    let blockCounter = 0;
    let blockId = 1;
    
    // Indents
    for ( ; q > 0; ) {
        pyramide.appendChild(x.cloneNode(true)).classList.add(`blockIndent`);
        q = q - 1;
    
        if ( q > 0 ){
            continue;
        } 
        else  {
            
            for (let i = 1; i <= numOfBlocks ; ) {
                    div.className = 'block';
                    div.id = blockId;
                    blockId++;

                    pyramide.appendChild(div.cloneNode(true)).classList.add(blockCounter);
                    blockCounter++;
                    i++; 
                    if ( i > prevBlock) {
                        prevBlock = prevBlock + 2;
                        break;
                    }   
                }            
        }
        q = indents - 1;
        indents--; 
    }
    
    // last block ==> float: left
    for ( let w = 1; w < numOfBlocks; ) {
            if ( (w * w) == numOfBlocks ){
                break;
            }
            let lastB = document.getElementById(w * w);
            console.log(w*w);
            lastB.insertAdjacentHTML('afterend', '<div></div>');
        w++;

    }

}    

