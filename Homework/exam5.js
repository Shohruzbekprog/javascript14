function setUnion(set1, set2) {
  let unionSet = new Set(set1);
  for (let item of set2) {
    unionSet.add(item);
  }
  return unionSet;
}

let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
let result = setUnion(set1, set2);
console.log(result);
