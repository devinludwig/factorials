var number = prompt("Enter a number:");

var array = []

if(number < 0) {
  alert(undefined)
  location.reload();
} else {

for(var index = number; index >= 1; index -= 1) {
  array.push(index);
}

var total = 1

array.forEach(function(inputNumber) {
  total *= inputNumber;
});

alert(total);
}
