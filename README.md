# MongoDB $inc Operator Error: Unexpected Behavior when Decrementing Non-Existent Field

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to decrement a field that does not exist in the document.  The `$inc` operator will not create the field if it does not already exist. This results in either no change to the document (depending on the MongoDB version) or even throwing an error in strict mode.

## Bug Reproduction
The `bug.js` file contains code demonstrating the incorrect usage of the `$inc` operator, showing how it can fail to update a document when a value does not exist.

## Solution
The `bugSolution.js` file provides a corrected approach. To properly handle cases where a field might not exist, you should use the `upsert: true` option in the `updateOne` method. This ensures that if the document doesn't exist, a new document is created with the incremented field. For decrementing you should use the $inc operator with a negative number like `{$inc: {age: -1}}`.

## How to Run
1.  Make sure you have Node.js and MongoDB installed.
2.  Clone this repository.
3.  Run `npm install` to install dependencies (if any).
4.  Run `node bug.js` to see the error, then run `node bugSolution.js` to see the corrected behavior.
