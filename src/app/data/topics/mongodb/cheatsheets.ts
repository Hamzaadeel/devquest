export const mongodbCheatSheet = {
  title: "MongoDB Cheat Sheet",
  sections: [
    {
      title: "1. CRUD Operations",
      items: [
        {
          name: "Insert",
          description: "Insert a new document.",
          code: "db.users.insertOne({ name: 'Alice', age: 25 })",
        },
        {
          name: "Find",
          description: "Query documents.",
          code: "db.users.find({ age: { $gt: 18 } })",
        },
        {
          name: "Update",
          description: "Update a document.",
          code: "db.users.updateOne({ name: 'Alice' }, { $set: { age: 30 } })",
        },
        {
          name: "$set",
          description: "Update specific fields without replacing the document.",
          code: "db.users.updateOne({ _id: 1 }, { $set: { status: 'active' } })",
        },
        {
          name: "$push",
          description: "Add an item to an array field.",
          code: "db.users.updateOne({ name: 'Alice' }, { $push: { tags: 'new' } })",
        },
        {
          name: "Delete",
          description: "Remove a document.",
          code: "db.users.deleteOne({ name: 'Alice' })",
        },
      ],
    },
    {
      title: "2. Query Operators",
      items: [
        {
          name: "$gt / $lt",
          description: "Greater than / less than.",
          code: "db.users.find({ age: { $gt: 25 } })",
        },
        {
          name: "$in",
          description: "Match any value in an array.",
          code: "db.users.find({ status: { $in: ['active', 'pending'] } })",
        },
        {
          name: "$or",
          description: "Match documents that satisfy at least one condition.",
          code: "db.users.find({ $or: [{ age: { $lt: 20 } }, { age: { $gt: 50 } }] })",
        },
        {
          name: "$exists",
          description: "Check if a field exists.",
          code: "db.users.find({ email: { $exists: true } })",
        },
      ],
    },
    {
      title: "3. Projection & Sorting",
      items: [
        {
          name: "Projection",
          description: "Include/exclude fields in results.",
          code: "db.users.find({}, { name: 1, _id: 0 })",
        },
        {
          name: "Sort",
          description: "Sort documents.",
          code: "db.users.find().sort({ age: -1 })",
        },
        {
          name: "Limit",
          description: "Limit number of documents.",
          code: "db.users.find().limit(5)",
        },
        {
          name: "Skip",
          description: "Skip a number of documents (for pagination).",
          code: "db.users.find().skip(5).limit(5)",
        },
      ],
    },
    {
      title: "4. Indexes & Aggregation",
      items: [
        {
          name: "Create Index",
          description: "Speed up queries on specific fields.",
          code: "db.users.createIndex({ name: 1 })",
        },
        {
          name: "Aggregation Pipeline",
          description: "Transform and group data in stages.",
          code: `db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } }\n])`,
        },
        {
          name: "$match",
          description: "Filter documents in a pipeline.",
          code: "{ $match: { age: { $gte: 18 } } }",
        },
        {
          name: "$group",
          description: "Group documents by a key.",
          code: "{ $group: { _id: '$status', total: { $sum: 1 } } }",
        },
      ],
    },
    {
      title: "5. MongoDB Tools",
      items: [
        {
          name: "MongoDB Compass",
          description: "Official MongoDB GUI for exploring and managing data.",
        },
        {
          name: "Mongoose",
          description: "ODM for using MongoDB with Node.js and schemas.",
        },
        {
          name: "Mongo Shell",
          description: "CLI to interact with MongoDB databases.",
        },
      ],
    },
    {
      title: "6. Other Essentials",
      items: [
        {
          name: "ObjectId",
          description:
            "Unique 12-byte identifier for each document. Contains timestamp info.",
          code: "ObjectId('507f1f77bcf86cd799439011')",
        },
        {
          name: "Connect to MongoDB",
          description: "Use URI to connect from Node.js using Mongoose.",
          code: `mongoose.connect('mongodb://localhost:27017/mydb')`,
        },
        {
          name: "Replica Set",
          description:
            "A group of MongoDB servers that ensure high availability via automatic failover.",
        },
        {
          name: "Sharding",
          description:
            "Distributes data across multiple servers for horizontal scalability.",
        },
      ],
    },
  ],
};

export default mongodbCheatSheet;
