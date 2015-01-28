var getName = function(obj){
  return obj.name;
};

var totalLetters = function(arr){
  return arr.join('').length;
};

var keyValue = function(key, value){
  var obj = {};
  obj[key] = value;
  return obj;
};

var negativeIndex = function(arr, num){
  return arr.slice(num)[0];
};

var removeM = function(str){
  return str.split('').filter(function(val){
    return val != 'm';
  }).join('');
};

var printObject = function(obj){
  var key, str = '';
  for (key in obj) {
    str += '\n' + key + ' is ' + obj[key];
  }
  return str;
};

var Vowels = function(str){
  return str.split('').filter(function (val) {
    return val.match(/[aieou]/);
  });
};

var Twins = function(){

};

var or = function(){

};


var unique = function(){

};

// tests

console.log('getName: ', getName({name: 'Luisa', age: 25}));

console.log('totalLetters: ', totalLetters(['javascript', 'is', 'awesome']));
console.log('totalLetters: ', totalLetters(['what', 'happened', 'to', 'my', 'function']));

console.log('keyValue: ', keyValue('city', 'Denver'));

console.log('negativeIndex: ', negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log('negativeIndex: ', negativeIndex(['jerry', 'sarah', 'sally'], -1));

console.log('removeM: ', removeM('family'));
console.log('removeM: ', removeM('memory'));

console.log('printObject: ', printObject({ a: 10, b: 20, c: 30 }));
console.log('printObject: ', printObject({ firstName: 'pork', lastName: 'chops' }));

console.log('Vowels: ', Vowels('alabama'));
console.log('Vowels: ', Vowels('What lets in youth?'));

console.log('Twins: ', Twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log('Twins: ', Twins(['a', 'a', 'b', 'z']));
console.log('Twins: ', Twins(['a', 'a', 'b']));
console.log('Twins: ', Twins(['a', 'a', 'b', undefined]));

console.log('or: ', or([false, false, true, false]));
console.log('or: ', or([false, false, false]));
console.log('or: ', or([]));

console.log('unique: ', unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log('unique: ', unique(['todd', 'avery', 'maria', 'avery']));
