class Animal {
    //name: string;
    //color: string;
    constructor(public name:string, public color:string){
        //console.log('texto');
    }
}

let myAnimal: Animal = new Animal('Coelho','branco');

console.log(myAnimal.name);
console.log(myAnimal.color);