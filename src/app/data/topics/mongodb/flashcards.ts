const mongodbFlashcards = [
  // 1. Basics & Comparison
  {
    question: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents (BSON).",
    subTopic: "Basics & Comparison",
  },
  {
    question: "What is a document in MongoDB?",
    answer:
      "A document is a JSON-like object (stored as BSON) with key-value pairs. It's the basic unit of data in MongoDB.\n\nExample:\n{\n  name: 'Alice',\n  age: 25\n}",
    subTopic: "Basics & Comparison",
  },
  {
    question: "What is a collection in MongoDB?",
    answer:
      "A collection is a group of MongoDB documents, similar to a table in SQL databases.",
    subTopic: "Basics & Comparison",
  },
  {
    question: "What is the difference between MongoDB and SQL databases?",
    answer:
      "MongoDB is schema-less, uses documents, and supports horizontal scaling. SQL databases use tables with fixed schemas and vertical scaling.",
    subTopic: "Basics & Comparison",
  },
  {
    question: "What is BSON in MongoDB?",
    answer:
      "BSON (Binary JSON) is the binary-encoded format MongoDB uses to store documents internally.",
    subTopic: "Basics & Comparison",
  },

  // 2. CRUD Operations & Querying
  {
    question: "How do you insert a document into MongoDB?",
    answer:
      "Use `db.collection.insertOne({ name: 'John' })` or `insertMany([...])`.",
    subTopic: "CRUD & Querying",
  },
  {
    question: "How do you find documents in MongoDB?",
    answer:
      "Use `db.collection.find({ key: value })` to query documents.\n\nExample:\ndb.users.find({ age: { $gt: 18 } })",
    subTopic: "CRUD & Querying",
  },
  {
    question: "How do you update a document in MongoDB?",
    answer:
      "Use `updateOne()` or `updateMany()` with update operators like `$set`.\n\nExample:\ndb.users.updateOne({ name: 'John' }, { $set: { age: 30 } })",
    subTopic: "CRUD & Querying",
  },
  {
    question: "How do you delete a document in MongoDB?",
    answer:
      "Use `deleteOne({})` or `deleteMany({})`.\n\nExample:\ndb.users.deleteOne({ name: 'John' })",
    subTopic: "CRUD & Querying",
  },
  {
    question: "What is the use of `$set` in an update operation?",
    answer:
      "`$set` updates only specific fields in a document.\n\nExample:\ndb.products.updateOne({ _id: 1 }, { $set: { price: 100 } })",
    subTopic: "CRUD & Querying",
  },

  // 3. Aggregation & Indexing
  {
    question: "What is aggregation in MongoDB?",
    answer:
      "Aggregation processes data and returns computed results, similar to SQL's GROUP BY.",
    subTopic: "Aggregation & Indexing",
  },
  {
    question: "What is the aggregation pipeline?",
    answer:
      "A pipeline that passes documents through stages like `$match`, `$group`, `$sort`, etc.\n\nExample:\ndb.orders.aggregate([\n  { $match: { status: 'delivered' } },\n  { $group: { _id: '$customerId', total: { $sum: '$amount' } } }\n])",
    subTopic: "Aggregation & Indexing",
  },
  {
    question: "What is `$match` in aggregation?",
    answer:
      "`$match` filters documents in the pipeline based on a condition.\n\nExample:\n{ $match: { age: { $gte: 18 } } }",
    subTopic: "Aggregation & Indexing",
  },
  {
    question: "What is an index in MongoDB?",
    answer:
      "An index improves query performance by allowing efficient data lookup.",
    subTopic: "Aggregation & Indexing",
  },
  {
    question: "How do you create an index in MongoDB?",
    answer:
      "Use `db.collection.createIndex({ field: 1 })` for ascending or `-1` for descending.\n\nExample:\ndb.users.createIndex({ email: 1 })",
    subTopic: "Aggregation & Indexing",
  },

  // 4. Mongoose & ODM
  {
    question: "What is Mongoose?",
    answer:
      "Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js, providing schema and model support.",
    subTopic: "Mongoose & ODM",
  },
  {
    question: "What is a schema in Mongoose?",
    answer:
      "A schema defines the structure, default values, and validators for documents.\n\nExample:\nconst userSchema = new Schema({ name: String, age: Number });",
    subTopic: "Mongoose & ODM",
  },
  {
    question: "How do you define a model in Mongoose?",
    answer:
      "Use `mongoose.model()` with a schema.\n\nExample:\nconst User = mongoose.model('User', userSchema);",
    subTopic: "Mongoose & ODM",
  },
  {
    question: "How do you validate data in Mongoose?",
    answer:
      "Use schema-level validation rules or external libraries like `joi`.\n\nExample:\nnew Schema({ age: { type: Number, min: 0 } })",
    subTopic: "Mongoose & ODM",
  },

  // 5. Advanced Concepts (Replication, Sharding, etc.)
  {
    question: "What is a replica set in MongoDB?",
    answer:
      "A replica set is a group of servers that maintain the same data for fault tolerance and high availability.",
    subTopic: "Advanced Concepts",
  },
  {
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding splits data across multiple servers to support large datasets and high throughput.",
    subTopic: "Advanced Concepts",
  },
  {
    question: "What is an ObjectId in MongoDB?",
    answer:
      "ObjectId is a unique 12-byte identifier automatically generated for each document.\n\nIt includes timestamp, machine ID, process ID, and counter.",
    subTopic: "Advanced Concepts",
  },

  // 6. Connection & Setup
  {
    question: "How do you connect MongoDB in Node.js?",
    answer:
      "Use Mongoose or MongoDB native driver.\n\nExample:\nmongoose.connect('mongodb://localhost:27017/mydb')",
    subTopic: "Connection & Setup",
  },
  {
    question: "What is the MongoDB URI format?",
    answer:
      "Format: `mongodb://[username:password@]host:port/dbname`\n\nExample:\nmongodb://localhost:27017/myapp",
    subTopic: "Connection & Setup",
  },
];

export default mongodbFlashcards;
