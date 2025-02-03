function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error, depending on desired behavior
  }
  if (a === null || b === null) {
    return NaN; // Handle null values explicitly
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo('1', 2)); // Output: NaN
console.log(foo(1, '2')); // Output: NaN