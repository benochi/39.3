import {choice, remove} from './helpers';
import foods from './foods'

//Randomly draw a fruit from the array
let food = choice(foods);
//Log the message “I’d like one RANDOMFRUIT, please.
//”Log the message “I’d like one RANDOMFRUIT, please.”
//Log the message “Delicious! May I have another?”
console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);
//Remove the fruit from the array of fruits
let foodsLeft = remove(food, foods);

//Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${foodsLeft.length} left.`);