var dozenEggs = 4
if (dozenEggs < 1){
    console.log("let's buy 4 dozen then" );
} else if (dozenEggs > 1 && dozenEggs < 2){
        console.log("let's buy only 3 dozen");
    }
    else if (dozenEggs > 2 < 3){
        console.log("let's only buy 2 dozen");
    }
    else {
        console.log("let's not buy any today");

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

    case 'D':
        console.log('60-69');
        break;

    default:
        console.log('0-59');

}

// loops

for (let i =0; i < 10; i++) {
    console.log(i);

}

console.log('whatever is next');

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
















