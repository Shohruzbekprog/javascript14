function deleteMany(obj, ...keysToDelete) {
  for (let key of keysToDelete) {
    obj.delete(key);
  }
  return obj;
}

let obj = new Map ([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4]
])

deleteMany(obj, 'b', 'd')

console.log(obj);