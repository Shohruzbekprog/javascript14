function getMapIntersection(map1, map2) {
    const result = new Map();

    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            result.set(key, value);
        }
    }

    for (const [key, value] of map2) {
        if (!map1.has(key)) {
            result.set(key, value);
        }
    }

    return result;
}

let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
let intersection = getMapIntersection(map1, map2);
console.log(intersection);
