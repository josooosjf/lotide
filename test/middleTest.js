const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual((middle([2,3,4])),(middle([2,3,4])));
assertArraysEqual((middle([2,3,4,5])),(middle([2,3,4,5])));