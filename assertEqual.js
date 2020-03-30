const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀 Assertion Passed: " + [actual] + ' === ' + [expected]);
  } else {
    console.log("👿👿👿 Assertion Failed: " + [actual] + ' !== ' + [expected]);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual("light","lab");
assertEqual(3,3);
assertEqual(3,-3);