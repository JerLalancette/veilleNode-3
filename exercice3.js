'use strict';

let elm;

let unTableau = ['Québec', 'Ontario', 'Manitoba', 'Saskatshewan'];

unTableau.forEach((elm,i) => { console.log(i + ' ' + elm)})

unTableau.push('Alberta')
unTableau.push('Vancouver')
unTableau.push('Nouveau-Brunswick')

unTableau.forEach((elm,i) => { console.log(i + ' ' + elm)})

/* l'approche ES6 */
let i=0;

for (elm of unTableau){

console.log(elm + ' ' + i++)

}