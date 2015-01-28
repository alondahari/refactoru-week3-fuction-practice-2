var getName = function(obj){
  return obj.name;
};

console.log('getName: ', getName({name: 'Luisa', age: 25}));

var totalLetters = function(arr){
  return arr.join('').length;
};

console.log('totalLetters: ', totalLetters(['javascript', 'is', 'awesome']));
console.log('totalLetters: ', totalLetters(['what', 'happened', 'to', 'my', 'function']));

var keyValue = function(key, value){
  var obj = {};
  obj[key] = value;
  return obj;
};

console.log('keyValue: ', keyValue('city', 'Denver'));

var negativeIndex = function(arr, num){
  return arr.slice(num)[0];
};

console.log('negativeIndex: ', negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log('negativeIndex: ', negativeIndex(['jerry', 'sarah', 'sally'], -1));
