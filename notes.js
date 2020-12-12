// JavaScript Loops

var tvShows = [
  'The Office', 
  'Stranger Things', 
  'Parks and Rec'
];

var userSavedMovies = [];

///////////////////////////////////////
var completedItems = [];

var toDos = [
  { title: 'Item 1', completed: true },
  { title: 'Item 2', completed: false },
  { title: 'Item 3', completed: false },
  { title: 'Item 4', completed: true }
];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
  }
}

///////////////////////////////////////
var bottles = 99;
while (bottles > 0) {
  if (bottles != 1) {
    console.log(bottles + ' bottles of stuff on the wall');
  } else {
    console.log(bottles + ' bottle of stuff on the wall');
  }
  bottles--;
}

console.log(toDos);
console.log(completedItems);

// for (var i = 0; i < tvShows.length; i++) {
//   console.log(tvShows[i]);
// }