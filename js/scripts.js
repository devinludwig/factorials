var number = prompt("Enter a number:");
var total = 1;
if (number) {
  if (number < 0) {
    alert(undefined);
    location.reload();
  }  else if (number >= 0) {
    for(var index = number; index >= 1; index -= 1) {
      total *= index;
    }
    alert(total);
  } 
} else {
  alert("you didn't enter a number!");
  location.reload();
}



// var array = []
//
// if(number < 0) {
//   alert(undefined)
//   location.reload();
// } else {
//
// for(var index = number; index >= 1; index -= 1) {
//   array.push(index);
// }
//
//
// var total = 1
//
// array.forEach(function(inputNumber) {
//   total *= inputNumber;
// });

// alert(total);
