let goodPets = ['dog', 'cat', 'hamster', 'ferret', 'lizard'];

console.log(goodPets);

goodPets.push('snake');

console.log(goodPets);

goodPets.splice(2, 1);

console.log(goodPets);

const goodPetsList = goodPets.join(',');

console.log(goodPetsList);