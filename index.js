//  5 == 5 outputs true, anything else is false 
//  5 > 4 outputs true, where 4 > 5 outputs false 
//  <   same as above but reversed
//  && an expression that results in true if the expressions on each side of it are the same both true or both false  
//  ||    as long as one value is true, the expression is true

var costOfMilk = 3;
if (costOfMilk < 2){
    console.log('We will buy 2 gallons');
}else if (costOfMilk < 3){
    console.log('We will buy only 1 gallon');
}else {
    console.log('no thanks, way too expensive');
}

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

var a = 5;
var b = 7;

if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6.');
    } else {
        console.log('a is 5 but b is not b.');
    }
}

if (a == 5 && b == 6){
    console.log("a is 5 and b is 6");
}
var cupsOfFlour = 0;
while (cupsOfFlour < 3) {   
console.log(`Scooping a cup of flour into the bowl`);
cupsOfFlour += 1;
console.log(`There are ` + cupsOfFlour + ` cups of flour in the bowl`);
}
for (cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {
    console.log(`Scooping a coup of flour into the bowl`);
    console.log(`There are ` + cupsOfFlour + ` cups of flour in the bowl`);
}
for (var i = 1; i < 11; i++) {
    console.log(i);
}