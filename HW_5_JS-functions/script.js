// FIRST TASK
function isBigger(a, b) {
  return b < a;
}

console.log(isBigger(4, 3));

// SECOND TASK
function isSmaller(a, b) {
  return !isBigger(a, b);
}

console.log(isSmaller(4, 3));

// THIRD TASK
function getMin() {
  var initial = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] < initial) {
      initial = arguments[i];
    }
  }
  return initial;
}

console.log(getMin(3, -5, 8, -4));

// FOURTH TASK
function pow(x, n) {
  return Math.pow(x, n);
}

console.log(pow(3, 2));

// FIFTH TASK
function closestToZero() {
  var arr = Array.from(arguments);
  arr.sort(function(a, b) {
    return Math.abs(a) - Math.abs(b);
  });
  return arr[0];
}

console.log(closestToZero(6, 4, 5, 3, -1, 2));
