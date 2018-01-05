interface ObjectValue {
    category: string;
    product?: string;
}

/*function show({category,product}: { category:string, product:string }){
    console.log(category);
    console.log(product);
}*/

function show({category, product}: ObjectValue) {
    console.log(category);
    console.log(product);
}

show({category: "Categoria"});


let obj: ObjectValue = {category: 'Categoria 1',product: 'Produto 1'};


class Product implements ObjectValue{
    category: string;
    //product: string;
}

let product = new Product();
product.category = 'Categoria';

console.log(product.category);
//console.log(product.product);