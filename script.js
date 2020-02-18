/*jshint esversion: 6 */

let options = {
  width:1024,
  height:1024,
  name:'test'
};

options.bool = true;
options.colors = {
  border:'blsck',
  bg:'red'
};
delete options.bool;
console.log(options);

for(let key in options) {
  console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

// arr.pop(); удалить последний элемент из массива
// arr.push('5'); добавить последний элемент в массив
// arr.shift(); удалить первый элемент из массива
// arr.unshift('1'); добавить в массив первый элемент


// let arr = ['first', 2, 3, 'four', 5];

// for(let i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//   console.log(i + ': '+ item + ' (массив: ' + mass +')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for(let key of mass) {
//   console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ['asd', 'asdasd', 'sda', 'sad'],
//     i = arr.join(', ');
// console.log(i);

let arr = [1, 15,4, 3],
    i = arr.sort(compareNum);

    function compareNum(a,b){
      return a-b;
    }
console.log(arr);

let soldier = {
  health: 400,
  armor:100
};

let john = {
  health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);