function setIntersection(set1, set2) {
    const intersection = new Set();
    
    for (const item of set1) {
        if (set2.has(item)) {
            intersection.add(item);
        }
    }
    
    return intersection;
}

let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
console.log(setIntersection(set1, set2));
