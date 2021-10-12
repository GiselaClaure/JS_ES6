//3.1
/* const pointsList = [32, 54, 21, 64, 75, 43]
let copy = [...pointsList]
console.log(copy) */

//3.2
/* const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy={...toy}
console.log(toyCopy) */

//3.3
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let pointsListCombined= [...pointsList,...pointsLis2]
console.log(pointsListCombined)

//3.4
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let toyCombined= {...toy,...toyUpdate, }
console.log(toyCombined)

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors]
copyColors.splice(2, 1)
console.log(copyColors)