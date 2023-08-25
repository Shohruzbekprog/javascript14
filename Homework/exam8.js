function removeDuplicates(arr) {
    const uniqueValues = [];
    const duplicates = [];

    for (const value of arr) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        } else if (!duplicates.includes(value)) {
            duplicates.push(value);
        }
    }

    return uniqueValues.filter(value => !duplicates.includes(value));
}

let arr = [1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(arr);
console.log(result);
