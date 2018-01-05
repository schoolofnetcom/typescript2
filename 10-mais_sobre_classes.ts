interface AnimalInterface {
    name: string;
    color: string;
    correr();
    andar();
    comer();
}

class Animal implements AnimalInterface {
    constructor(public name: string, public color: string) {
    }

    correr(){

    }

    andar(){

    }

    comer(){
      console.log('comer do animal')
    }
}

class Coelho extends Animal{
    tamanhoOrelha: number;

    comer(){
        super.comer();
        console.log('comer do coelho');
    }
}

let coelho:Coelho = new Coelho('Meu coelho','preto');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.correr();
coelho.comer();