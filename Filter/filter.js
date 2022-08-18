const filter = (list, callback) => {
    // empty list
    const filteredResult = [];

    // loop through list
    for (let index = 0; index < list.length; index++) {
        // check if every element in list matches callback, 
        // expected to receive the element and the index and the list to support general use
        if (callback(list[index], index, list)) {
            // push matched elements to empty list
            filteredResult.push(item);
        }
    }
    // return the filteredResult list (empty list if there are no elements matching)
    return filteredResult;

}

export default filter;