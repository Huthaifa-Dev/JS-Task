const map = (list, callback) => {
    // empty list
    const mappedResult = [];

    // loop through list
    for (let index in list) {
        // expected to receive the element and the index and the list to support general use
        mappedResult.push(callback(list[index], index, list));
    }
    // return the mapped list 
    return mappedResult;
}

export default map;