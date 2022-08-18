const curry = (callback) => {
    return function curried(...args) {
        // to support single argument and multiple arguments, 
        // check if the arguments length matches the length of the callback
        if (args.length >= callback.length) {
            // call the callback with the full arguments and return the result
            return callback.apply(this, args);
        }
        else {
            return function (...args2) {
                // saves the previous argument and call curried function with the new arguments
                curried.apply(this, args.concat(args2));
            }
        }
    }
}