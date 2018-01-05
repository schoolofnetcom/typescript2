/*let myArray: Array<number> = [];

function funcao(array: Array<number>){

}*/

function funcao<T>(param: T): T{
    return param;
}

let variable:number = funcao<number>(2);


class Lista<T> {
    items: Array<T>= [];

    add(item:T){

    }

    remove(item:T){

    }
}

let lista = new Lista<number>();

//lista.