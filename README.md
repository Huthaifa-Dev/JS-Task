<p align="center">
    <img src="https://user-images.githubusercontent.com/62269745/174906065-7bb63e14-879a-4740-849c-0821697aeec2.png#gh-light-mode-only" width="40%">
    <img src="https://user-images.githubusercontent.com/62269745/174906068-aad23112-20fe-4ec8-877f-3ee1d9ec0a69.png#gh-dark-mode-only" width="40%">
</p>

<br>

<h1 align="center"> JavaScript Task </h1>
<br>

> **Note**
> This documentation covers the Filter, Map, Reduce, and Find functions in JavaScript. Each section will explain what the function does, how to use it, and provide a few examples.

### Filter

Filter is a higher-order function that takes a function and an array as arguments and returns a new array containing only the elements from the original array that pass the test implemented by the function.

For example, the following code would create a new array containing only the even numbers from the original array:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = filter(numbers, (number) => {
  return number % 2 === 0;
}); // [2, 4, 6, 8, 10]
```

### Map

Map is a higher-order function that takes a function and an array as arguments and returns a new array containing the results of calling the function on each element of the original array.

For example, the following code would create a new array containing the square of each number from the original array:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var squareNumbers = map(numbers, (number) => {
  return number * number;
}); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### Reduce

Reduce is a higher-order function that takes a function and an array as arguments and returns a single value that is the result of calling the function on each element of the array and combining the results.

For example, the following code would sum all of the numbers in the array:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = reduce(numbers, (a, b) => {
  return a + b;
}); // 55
```

### Find

Find is a higher-order function that takes a function and an array as arguments and returns the first element of the array that passes the test implemented by the function.

For example, the following code would find the first even number in the array:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var firstEvenNumber = find(numbers, (number) => {
  return number % 2 === 0;
}); // 2
```

# Currying

Currying is a higher-order function that takes a function and an array as arguments and returns a new function that is a partial application of the original function.

For example, the following code would create a new array containing the square of each number from the original array:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var squareNumbers = map(numbers, (number) => {
  return number * number;
}); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

The above code can be rewritten using currying as follows:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var curriedMap = curry(map)(numbers);
// now we can use curriedMap to create a new array from numbers just by adding any manipulation function
// for square function
const square = (x) => x * x;
var squareNumbers = curriedMap(square); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

In the above code, the square function is curry-fied and then passed as the callback to the map function. This results in a new function that is a partial application of the square function. When this new function is invoked, it will square the number that is passed to it.
