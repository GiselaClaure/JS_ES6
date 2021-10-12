//5.1
/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFiltered = ages.filter(function(age){
    return age > 18  
})
console.log(agesFiltered) */

//5.2
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFilteredPair = ages.filter(function(age){
    return age%2===0
})
console.log(agesFilteredPair)

//5.3
/* const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersFiltered= streamers.filter(function(game){
    return game.gameMorePlayed==='League of Legends'
})
console.log(streamersFiltered) */

//5.4

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilteredByU= streamers.filter(function(name){
    return name.name.includes("u")
})
console.log(streamersFilteredByU)

//5.5
let streamersFilteredByLolAge = streamers.filter((element) => {
    if (element.gameMorePlayed.includes('Legends')) {
        if (element.age>35) {
            console.log(element.gameMorePlayed.toUpperCase());
             return element.gameMorePlayed.toUpperCase();
             
        }

    }
});
console.log(streamersFilteredByLolAge);

//5.6
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const stream = document.querySelector(`input[data-function="toFilterStreamers"]`)


function changes() {
    let letterMatch = streamers.filter(word => word.name.includes(`${stream.value}`));
    letterMatch.forEach(streamer => console.log(streamer))
}

stream.addEventListener('change', changes)


