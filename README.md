# get-min

Get the minimum of two numbers that works the way you would expect.

It takes two numbers and returns the lesser of the two. Thats it.

## example

```
var getMin = require('get-min');

getMin(0, 1); // 0
getMin('a', 1); // 1
getMin(1, null); // 1
getMin(1, undefined); // 1
getMin(1, Object(0)); // 1
getMin(1); // 1

getMin('1', '2'); // undefined
getMin('a', null); // undefined
getMin(); // undefined
```

## why?

Getting the minimum of a number and garbage should be simple. It's a number that should be returned.

This example would normally require you to initialize `num=10` if you were to use `Math.min`.

```
var num;

for (var i = 10; i >= 0; i--) {
  num = getMin(num, i);
};

// num = 0
```

*vs.*

```
var num;

for (var i = 10; i >= 0; i--) {
  num = Math.min(num, i);
};

// num = NaN   // whoops!
```
