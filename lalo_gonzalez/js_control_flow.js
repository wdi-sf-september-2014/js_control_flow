//Your code here
var o1 = parseInt(prompt("Enter your first operand"));
var o2 = parseInt(prompt("Enter your second operand"));
var numExp = 1;
for (var i = 0; i < o2 ; i++){
  numExp = numExp * o1;
  };
  alert("Your result is " + numExp);


/* 
//Other way I found online
var o1 = parseInt(prompt("Enter your first operand"));
var o2 = parseInt(prompt("Enter your second operand"));
function raisePower (x, y) {
  return Math.pow(x, y)};{
alert("Your result is " + raisePower(o1, o2))
}
*/
  
