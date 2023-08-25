function concatArrays() {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        result = result.concat(arguments[i]);
    }
    return result;
}

let inputArrays = [[1, 2], [3, 4], [5, 6]];
let outputArray = concatArrays(...inputArrays);
console.log(outputArray); 
