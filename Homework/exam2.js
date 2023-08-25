function mapSum(obj) {
  let sum = 0;
  for (let value of obj.values()) {
    sum += value;
  }
  return sum;
}

let obj = new Map([
  ['a', 2],
  ['b', 5],
  ['c', 3]
])

let result = mapSum(obj);
console.log(result);