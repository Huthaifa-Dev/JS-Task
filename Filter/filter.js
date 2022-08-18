const filter = (array, callback) => {
    // empty array to filter out the array
    let filteredResult = [];

    for (let item of array) {

        // calls callback on filteredResult items array 
        filteredResult.push(callback(item));
    }

    // returns filteredResult array contains items from array 
    // that are not applied to the callback function
    return filteredResult;
}

export default filter;