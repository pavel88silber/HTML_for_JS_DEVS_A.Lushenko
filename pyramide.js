const height = 8;
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
                    console.log('HERE');
                    prevBlock = prevBlock + 2;
                    break;
                }   
            }            
    }
    q = indents - 1;
    indents--; 
}


for ( let w = 1; w < numOfBlocks; ) {

    let lastBlock = document.getElementById(w);
    if (w==1 || w==4 || w==9 || w==16 || w==25 || w==36 || w==49) {
        let lastB = document.getElementById(w);
        // insertAfter(lastB, br);
        lastB.insertAdjacentHTML('afterend', '<div></div>');
    }
    w++;
}
