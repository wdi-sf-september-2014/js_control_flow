//Your code here
// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

var o1 = parseInt(prompt("Enter first number"));
var o2 = parseInt(prompt("Enter second number"));
var o3 = parseInt(prompt("Enter third number"));
var o4 = parseInt(prompt("Enter fourth number"));
var o5 = parseInt(prompt("Enter fifth number"));
var fiveNumbers = [ o1 , o2 , o3 , o4 ,o5];
function compareNumbers (a, b){
    return a- b
};
var orderedNumbers = (fiveNumbers.sort(compareNumbers));{
console.log(orderedNumbers[fiveNumbers.length-1])}

/* if (o5){}
else if () {}
else if () {}
else if () {}
else if () {}
*/

// Loop - For loop

 for (var i = 0; i <= 20; i++){
    if( i % 2 === 0){
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}

////Write a for loop that will iterate from 0 to 10. 
//For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for ( var i= 0; i <= 10 ; i++) {
    console.log ( i * 9)
}


//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print 
//"Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".

for (var i = 0 ; i <= 100 ; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    else if( i % 3 === 0){
        console.log("Fizz")
    } else if ( i % 5 === 0){
        console.log("Buzz")
} else {
    console.log(i)}
}

// API

var ajaxData = [{"id":1,"created_at":"2014-09-11T05:21:21.063Z","updated_at":"2014-09-11T05:21:21.063Z","firstname":"John","lastname":"Smith","age":15,"username":"jsmith"},{"id":3,"created_at":"2014-09-11T05:21:21.070Z","updated_at":"2014-09-11T05:21:21.070Z","firstname":"Johnny","lastname":"Depp","age":17,"username":"jdepp"},{"id":5,"created_at":"2014-09-11T05:21:21.075Z","updated_at":"2014-09-11T05:21:21.075Z","firstname":"Johnny","lastname":"Cash","age":19,"username":"jcash"},{"id":2,"created_at":"2014-09-11T05:21:21.068Z","updated_at":"2014-09-11T05:21:21.068Z","firstname":"Katie","lastname":"Holmes","age":16,"username":"kholmes"},{"id":4,"created_at":"2014-09-11T05:21:21.073Z","updated_at":"2014-09-11T05:21:21.073Z","firstname":"Matt","lastname":"Damon","age":18,"username":"mdamon"}];

for (var i = 0 ; i <= ajaxData.length ; i++){
    console.log(ajaxData[i].firstname + " " + ajaxData[i].lastname + " is " + ajaxData[i].age + " years old");
}
   
/* var i = 0;
while (i <= ajaxData.length){
    console.log(ajaxData[1]);
    i++
}
*/

