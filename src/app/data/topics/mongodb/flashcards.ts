const mongodbFlashcards = [
  {
    question: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents.",
    subTopic: "Basics",
  },
  {
    question: "What is a document in MongoDB?",
    answer:
      "A document is a JSON-like object (BSON) that contains key-value pairs and is the basic unit of data in MongoDB.",
    subTopic: "Basics",
  },
  {
    question: "What is a collection in MongoDB?",
    answer:
      "A collection is a group of MongoDB documents, similar to a table in relational databases.",
    subTopic: "Basics",
  },
  {
    question: "What is the difference between MongoDB and SQL databases?",
    answer:
      "MongoDB is schema-less, stores data as JSON-like documents, and is more flexible. SQL databases use fixed schemas and store data in tables.",
    subTopic: "Comparison",
  },
  {
    question: "How do you insert a document into MongoDB?",
    answer: "Use `db.collection.insertOne()` or `insertMany()` methods.",
    subTopic: "CRUD Operations",
  },
  {
    question: "How do you find documents in MongoDB?",
    answer:
      "Use `db.collection.find({})` to query documents that match specific criteria.",
    subTopic: "CRUD Operations",
  },
  {
    question: "How do you update a document in MongoDB?",
    answer:
      "Use `updateOne()` or `updateMany()` with update operators like `$set`.",
    subTopic: "CRUD Operations",
  },
  {
    question: "How do you delete a document in MongoDB?",
    answer: "Use `deleteOne()` or `deleteMany()` to remove documents.",
    subTopic: "CRUD Operations",
  },
  {
    question: "What is a schema in Mongoose?",
    answer:
      "In Mongoose, a schema defines the structure and types of data for a MongoDB document.",
    subTopic: "Mongoose",
  },
  {
    question: "What is Mongoose?",
    answer:
      "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.",
    subTopic: "Mongoose",
  },
  {
    question: "What is an ObjectId in MongoDB?",
    answer:
      "An ObjectId is a unique 12-byte identifier automatically generated for each document in MongoDB.",
    subTopic: "Identifiers",
  },
  {
    question: "How do you create indexes in MongoDB?",
    answer: "Use `createIndex()` to improve query performance.",
    subTopic: "Indexes",
  },
  {
    question: "Why are indexes important in MongoDB?",
    answer:
      "Indexes speed up search queries by allowing the database to locate data faster.",
    subTopic: "Indexes",
  },
  {
    question: "What is aggregation in MongoDB?",
    answer:
      "Aggregation is a way to process data and return computed results, similar to SQL's GROUP BY.",
    subTopic: "Aggregation",
  },
  {
    question: "What is the aggregation pipeline?",
    answer:
      "It’s a framework that lets you pass documents through multiple stages like `$match`, `$group`, `$sort`.",
    subTopic: "Aggregation",
  },
  {
    question: "What is `$match` in aggregation?",
    answer:
      "`$match` filters documents based on a condition, like a `WHERE` clause in SQL.",
    subTopic: "Aggregation",
  },
  {
    question: "What is a replica set in MongoDB?",
    answer:
      "A replica set is a group of MongoDB servers that maintain the same data for redundancy and high availability.",
    subTopic: "Replication",
  },
  {
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding is the process of distributing data across multiple servers to handle large datasets.",
    subTopic: "Scalability",
  },
  {
    question: "How do you connect MongoDB in Node.js?",
    answer:
      "Use the MongoDB Node.js driver or Mongoose with a URI like `mongodb://localhost:27017/dbname`.",
    subTopic: "Connection",
  },
  {
    question: "What is the use of `$set` in an update operation?",
    answer:
      "`$set` updates the value of a field in a document without replacing the whole document.",
    subTopic: "Update Operators",
  },
];

export default mongodbFlashcards;
