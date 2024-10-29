
let number = 25;
console.log(number);


//Calculadora

function sumTwoNumber(firtNumber, secondNumber) {
    let result;
    result = firtNumber + secondNumber;
    return(result);
}

function subTwoNumber(firtNumber, secondNumber) {
    let result;
    result = firtNumber - secondNumber;
    return(result);
}

function multTwoNumber(firtNumber, secondNumber) {
    let result;
    result = firtNumber * secondNumber;
    return(result);
}

function divTwoNumber(firtNumber, secondNumber) {
    let result;

    //condicionales
    if (secondNumber != 0) {
        result = firtNumber / secondNumber;
    }
    if (secondNumber == 0) {
        result = "Imposible dividir por 0";
    }
        

    result = firtNumber / secondNumber;
    return(result);
}

let number1 = 25;
let number2 = 5;

sumResult = sumTwoNumber(number1 + number2);
console.log(sumResult);
subResult = subTwoNumber(number1,number2);
console.log(subResult);
multResult = multTwoNumber(number1,number2);
console.log(multResult);
divResult = divTwoNumber (number1,number2);
console.log(divResult);

//------------------------------------
let numberList = [1,2,42,34,5,6,47,8,11,22,1,2,42,34,5,6,47,8,11,22];

function sumAllNumberInArrays(listArrays){
    let leghtList =listArrays.lenht;
    //console.log(lenghtList);
    let sumNumber = 0;

    for (let index = 0; index<leghtList;index=index++) {
        sumNumber = sumNumber + listArrays[index];
        //console.log(sumNumber);
    }

}

let sumListNumber = sumAllNumberInArrays(numberList);
console.log(sumListNumber);

