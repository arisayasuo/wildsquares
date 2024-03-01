
//240229 Write a function that takes 1 param and does something with it. (console log)
function fruitjuice1(fruit1){
    console.log(fruit1)
}

fruitjuice1("apple");

//Write a function that takes 2 params and does something with it. (console log)
function fruitjuice2(fruit1, fruit2){
    console.log(fruit1, fruit2)
}

fruitjuice2("apple", "orange");

//Write a function that takes 3 params and does something with it. (console log)
function fruitjuice3(fruit1, fruit2, fruit3){
    console.log(fruit1, fruit2, fruit3)
}

fruitjuice3("apple", "orange", "grape");

//Write a function that takes 4 params and does something with it. (console log)
function fruitjuice4(fruit1, fruit2, fruit3, fruit4){
    console.log(fruit1, fruit2, fruit3, fruit4)
}

fruitjuice4("apple", "orange", "grape", "kiwi");

//Write a function that takes 4 params of different data types does something with it. (console log)
function datatypes(number, string, boolean, object){
    console.log(number, string, boolean, object)
}

var objectOne = {
    number: "1"
    //color: 
    //name:
    //address:
}

datatypes(1,"one", true, objectOne);

//Write a function that takes as many as params and log them all. (I can't use object/config)
//240301 Think again.
function infinitParam(pram){
    console.log(param)
}


//Write a function that takes an object and logs out all the key, values, key and values. (3 console logs)
//240301 The result to be an array of # objects with key and value. (an array of multiple objects)

function takesAnObject (object){
    console.log(Object.keys(object));
    console.log(Object.values(object));
    console.log(Object.entries(object));
}

takesAnObject(objectOne);

//Write a function that takes a function as a param and 
//returns new function which takes a param (number) returns multiplied by 2.


function takesAfunction(originalFunction) {
    return function(newNumber) {
        return originalFunction(newNumber) * 2;
    }
}


function multiply (number){
    return number;
}

var newFunction = takesAfunction(multiply);

console.log(newFunction(2));










