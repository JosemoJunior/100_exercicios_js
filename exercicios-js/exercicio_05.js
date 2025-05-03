/*
5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals 
${var}. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
*/

var carreira = "Engenheiro de Software";

function funcaoCarreira(carreira){
    return console.log (`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

const arrowCarreira = (carreira) => {
    return console.log (`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

funcaoCarreira(carreira);
arrowCarreira(carreira);
