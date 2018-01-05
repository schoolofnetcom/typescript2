let meu_nome: any = "luiz carlos diniz";

let count = (<string>meu_nome).length;
//let count = (meu_nome as string).length;

let obj = {
    name: 'Luiz Carlos'
};

(<any>obj).texto = 'School of Net';
//(obj as any).texto = 'School of Net';

console.log(obj);

let num = 2;

let numString = num + "";

console.log(typeof numString);

let stringNum = "-234";

let num2 = +stringNum;

console.log(typeof num2);
console.log(num2);