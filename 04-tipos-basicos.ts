//booleano
let success: boolean = false; //implicita

//success = 'Luiz Carlos';

//numeros
let num = 10;
//let num: number = 10.50;
//let num: number = 0xFA;

//num = true;
//num = 'string';

//string

let _name = 'Luiz Carlos';
let name1: string = 'Luiz Carlos';

_name = `School of Net - ${name1}`;
console.log(_name);

//Array
let arrayStrings: string[] = ["a", "b", "c"];
let arrayStrings1: Array<any> = ["a", "b", "c"];


//Enum

enum estado_civil {Solteiro,Casado, Divorciado};
enum estado_civil1 {
    Solteiro = 'solteiro',
    Casado = 'casado',
    Divorciado = 'divorciado',
};

let meu_estado_civil:estado_civil = estado_civil.Solteiro;

if(meu_estado_civil == estado_civil.Solteiro){
    console.log('sou solteiro');
}



