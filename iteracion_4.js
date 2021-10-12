//4.1
/* const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let userNames= users.map(user => user.name)
console.log(userNames) */

//4.2

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let nameModified= users.map((user)=>{
    if (user.name.charAt(0)==="A") {
        user.name="Anacleto"
    }
    return user.name
})
console.log(nameModified)

//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let visitedCities= cities.map((city)=>{
    if (city.isVisited) {
        console.log(`${city.name} Visitado`)
    }else{
        console.log(city.name)
    }
})
console.log(visitedCities)