function getSum(num1, num2){
    return num1 + num2;
}
function getSquare(num){
    return num * num;
}
function greeting(name, surname, age){
    return "Hello, my name is " + name + " " + surname + " and I am " + age + " years old.";
}
function getMin(num1, num2, num3){
    if(num1 < num3){
        if (num1 < num2){
            return num1;
        }
    }
    if(num2 < num3){
        if(num2 < num1){
            return num2;
        }
    }
    return num3;
}
function evenOrOdd(num1, num2, num3){
    if(num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0){
        return "even";
    }
    else if(num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0){
        return "odd";
    }
    return "even/odd"
}
function inOrOutRange(num1, num2, num3){
    return num3 <= num2 && num3 >= num1 ? "In Range" : "Out of Range";
}
function createString(num1, num2, num3){
    let string = "result";
    for(let i = num1; i <= num2; i+=num3){
        string += ' ' + i;
    } 
    return string;
}
function rangeSum1(num1, num2){
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        for(let j = num1; j <= i; j++)
            sum += j;
    }
    return sum;
}
function rangeSum2(num1, num2){
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
}
function seriesSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += 1/(i*i);
    }
    return (Math.round(sum * 100) / 100).toString();
}
function countDigits(num){
    let len = 0;
    while(num >= 1){
        len++;
        num /= 10;
    }
    return len;
}

function print(){
    console.log("getSum: " + getSum(5, 6));
    console.log("greeting: " + greeting("Pavel", "Pertsev", 18));
    console.log("getMin: " + getMin(5, 9, 2));
    console.log("evenOrOdd: " + evenOrOdd(1, 3, 5));
    console.log("inOrOutRange: " + inOrOutRange(7, 16, 8));
    console.log("createString: " + createString(5, 20, 3));
    console.log("rangeSum1: " + rangeSum1(0, 3));
    console.log("rangeSum2: " + rangeSum2(5, 10));
    console.log("seriesSum: " + seriesSum(5));
    console.log("countDigits: " + countDigits(58989838));
}