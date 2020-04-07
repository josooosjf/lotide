# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install jbrook/lotide`

**Require it:**

`const _ = require('jbrook/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countOnly(array)`: counts the number of times an item appears in an object
* `eqArrays(array1,array2)`: compares if two arrays are equal
* `eqObjects(Object1, Object 2)`: compares if two objects are equal
* `findKeyByValue(object)`: finds a key based on its value
* `flatten(array)`: de-nests and flattens an array
* `head(array)`: returns the first value of an array
* `letterPosition(string)`: returns an object with the key values the letter in the string and the values an array of how many times the letter appears
* `middle(array)`: returns the middle of an array
* `tail(array))`: returns an array without the first value of the array








