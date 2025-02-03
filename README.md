# Unexpected Type Coercion Bug in JavaScript

This repository demonstrates a subtle bug in a JavaScript function that arises from unexpected type coercion. The `foo` function adds two numbers, but it handles `null` values incorrectly.  This issue highlights the importance of careful type handling in JavaScript.

## Bug Description

The bug occurs when the function receives unexpected input types. While it correctly handles `null` values, it might fail with other types without explicitly handling them.  This can lead to unexpected results or errors.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`
3. Observe the output, noting the unexpected behavior when one or both arguments are `null`.

## Solution

The `bugSolution.js` file provides a corrected version of the function that explicitly checks for various input types, providing more robust handling.

## Note

This bug demonstrates the importance of explicit type checking in JavaScript to prevent unexpected behavior and enhance the overall robustness of your code.