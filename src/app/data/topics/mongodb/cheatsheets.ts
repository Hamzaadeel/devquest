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
      ],
    },
    {
      title: "3. Projection & Sorting",
      items: [
        {
          name: "Projection",
          description: "Include/exclude fields.",
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
      ],
    },
    {
      title: "4. Indexes & Aggregation",
      items: [
        {
          name: "Create Index",
          description: "Speed up queries.",
          code: "db.users.createIndex({ name: 1 })",
        },
        {
          name: "Aggregation",
          description: "Powerful data processing pipeline.",
          code: `db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } }\n])`,
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
      ],
    },
  ],
};

export default mongodbCheatSheet;
