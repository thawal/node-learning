// require('./add');
// console.log("hello from index.js");
// require('./batman');
// require('./superman')
// const superhero=require('./super-hero');
// superhero.setName("Thor");
// console.log(superhero.getName());

// const newsuperhero=require('./super-hero');
// console.log(newsuperhero.getName())//this will print the previous output bcoz of module caching
// const SuperHero1=require('./super-hero');
// const superhero1=new SuperHero1("Batman");
// console.log(superhero1.getName())
// superhero1.setName("Bruce wayne");
// console.log(superhero1.getName());

// const SuperHero2=require('./super-hero');
// const superhero2=new SuperHero2("Superman");
// console.log(superhero2.getName());
// superhero2.setName("actor");
// console.log(superhero2.getName())

// const add=require('./math');
// console.log(add(3,4))

const math=require('./math');
// console.log(math.add(2,6));
// console.log(math.subtract(3,4))
          //or//destructure the object
const{add,subtract}=math;
console.log(add(5,6))
console.log(subtract(6,7));
const data=require('./data.json');
console.log(data.address);
console.log("hello thawal")
