var soma = function (x, y) {
    return x + y;
};
//void
var num = soma(2, 3);
//const soma = (x: number, y: number): number => x + y;
var funcao = function (name) {
    return "Luiz Carlos " + name;
};
var funcao1 = function (name) { return "Luiz Carlos " + name; };
var funcaoDefaultParameters = function (first_name, last_name) {
    if (last_name === void 0) { last_name = 'Diniz'; }
};
funcaoDefaultParameters('Luiz');
var funcaoOptionalParameters = function (first_name, last_name) {
    console.log(last_name);
};
funcaoOptionalParameters('Luiz');
