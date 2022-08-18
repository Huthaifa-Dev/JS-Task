const reduce = (array, callback, start = 0) => {
    // define a variable to store the changes made by the callback on the array items
    let result = start;
    // loop through the array items
    for (let item of array) {
        // calls callback on result and item to proccess the result
        result = callback(result, item);
    }
    // returns desired output from callback function on the array
    return result;
}

export default reduce;