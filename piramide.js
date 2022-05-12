// piramide.appendChild(x.cloneNode(true)).classList.add(`block`);

const height = 8;
const x = document.createElement('div');
const div = document.createElement('div');
const piramide = document.querySelector('#piramide');
const numOfBlocks = Math.pow(height, 2);  // 64
let bC = 1;
let indents = (height - 1); // 7


let q = indents;
let prevBlock = 1;
let kubik = 1;
let h = height;

// Indents
for ( ; q > 0; ) {
    piramide.appendChild(x.cloneNode(true)).classList.add(`blockIndent`);
    // console.log('INDENT => ' + q);
    q = q - 1;

    if ( q > 0 ){
        continue;
    } 
    else  {
        
        for (let i = 1; i <= numOfBlocks ; ) {
                div.className = 'block';
                piramide.appendChild(div.cloneNode(true)).classList.add(i);
                i++; 
                if ( i > prevBlock) {
                    prevBlock = prevBlock + 2;
                    break;
                }


        }

    }
    // console.log('HERE is q = ' + q + ' Indents => ' + indents);
    
    q = indents - 1;
    indents--; 
    // console.log('after change => ' + 'HERE is q = ' + q + ' Indents => ' + indents);


}
