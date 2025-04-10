function reverseString(str){
    const charArray = str.split("")

    const reversedArray = charArray.reverse()

    const reversedString = reversedArray.join("")

    return reversedString;

}

console.log(reverseString("Hello"));


// the second one of the reversed string,

function reverseString(str){
    const charArray = str.split("")

    const reversedArray = charArray.reverse()

    const reversedString = reversedArray.join("")

    return reversedString;

}

console.log(reverseString("javascript"));


// another one
function reverseString(str){
 return str.split("").reverse().join("");
    
}
console.log(reverseString("raceCar"));
// 


 function reversedString(str){
    const charArray = str.split("")

    const revAr = charArray.reverse()

    const revdStr = revAr.join("")

    return revdStr;
 }

 console.log(reverseString("patrick"));


//  find maximum number 

 function findMax(Arr){
    return Math.max(...Arr)
 }

 console.log(findMax([2, 4, 6, 8]));

//  check if number is prime


function isPrime(num){
    if(num <= 1) return false 

    for(let i = 2; i < Math.sqrt(num); i ++){
        if(num % i ===0) return false;
    }
    return true
}

console.log(isPrime(7))

function compareNum(){
    let num1 = 4;
    let num2 = 6;
    
    if (num1 > num2){
    console.log("num1 is greater");
    }else{
        console.log("num2 is greater");
    }
}

compareNum();



