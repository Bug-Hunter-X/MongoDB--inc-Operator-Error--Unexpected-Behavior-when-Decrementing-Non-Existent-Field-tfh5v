```javascript
// Correct usage of $inc operator with upsert: true
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } }, { upsert: true });
```