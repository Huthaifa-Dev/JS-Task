const filter = (list, callback) => {
    // empty list
    const filteredResult = [];

    // loop through list
    for (let item of list) {
        // check if every element in list matches callback
        if (callback(item)) {
            // push matched elements to empty list
            filteredResult.push(item);
        }
    }
    // return the filteredResult list (empty list if there are no elements matching)
    return filteredResult;

}

export default filter;