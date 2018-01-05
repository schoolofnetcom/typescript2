//booleano
var success = false; //implicita
//success = 'Luiz Carlos';
//numeros
var num = 10;
//let num: number = 10.50;
//let num: number = 0xFA;
//num = true;
//num = 'string';
//string
var _name = 'Luiz Carlos';
var name1 = 'Luiz Carlos';
_name = "School of Net - " + name1;
console.log(_name);
//Array
var arrayStrings = ["a", "b", "c"];
var arrayStrings1 = ["a", "b", "c"];
//Enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["Solteiro"] = 0] = "Solteiro";
    estado_civil[estado_civil["Casado"] = 1] = "Casado";
    estado_civil[estado_civil["Divorciado"] = 2] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var estado_civil1;
(function (estado_civil1) {
    estado_civil1["Solteiro"] = "solteiro";
    estado_civil1["Casado"] = "casado";
    estado_civil1["Divorciado"] = "divorciado";
})(estado_civil1 || (estado_civil1 = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil == estado_civil.Solteiro) {
    console.log('sou solteiro');
}
