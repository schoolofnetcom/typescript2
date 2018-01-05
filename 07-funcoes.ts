const soma = function (x: number, y: number): number {
    return x + y;
};
//void
let num: number = soma(2, 3);

//const soma = (x: number, y: number): number => x + y;

let funcao = (name:string) => {

    return `Luiz Carlos ${name}`


};

let funcao1 = name => `Luiz Carlos ${name}`;


let funcaoDefaultParameters = (first_name:string, last_name:string = 'Diniz') => {

};

funcaoDefaultParameters('Luiz');

let funcaoOptionalParameters = (first_name:string, last_name?:number) => {
    console.log(last_name);
}

funcaoOptionalParameters('Luiz');
