//find random food from array or *items*
function choice(items){
  let randomFood = Math.floor(Math.random() * items.length);
  return items(randomFood);
};

//removes the first matching item from items, if item exists, and returns it. 
//Otherwise returns undefined.
//input - item and item array to look for, then remove from. 
function remove(items, item){
  for (let i =0; i < items.length; i++) {
    if(items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)]
    }
  }
}

export {choice, remove}