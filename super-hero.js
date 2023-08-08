class SuperHero{
    constructor(name) {
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }
}
// module.exports=new SuperHero("Antman");
//for new instances to be used and avoid module caching ,
//pass the Class rather than passing its instance
 module.exports=SuperHero;