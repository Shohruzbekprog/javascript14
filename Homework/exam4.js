let obj = new WeakMap([[{id: 1}, 'John'], [{id: 2}, 'Jane'], [{id: 3}, 'Alice']]);
const getSize = (weakMap) => {
  let count = 0;
  for (const _ of weakMap) {
    count++;
  }
  return count;
};
let res = getSize(obj);

console.log(res);
