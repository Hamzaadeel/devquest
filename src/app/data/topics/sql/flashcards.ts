const sqlFlashcards = [
  // 1. Basics
  {
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is used to interact with relational databases — for querying, inserting, updating, and managing data.",
    subTopic: "Basics",
  },
  {
    question: "What is the difference between SQL and MySQL?",
    answer:
      "SQL is the language for querying databases. MySQL is a database management system that uses SQL to interact with data.",
    subTopic: "Basics",
  },
  {
    question: "What are some popular SQL databases?",
    answer:
      "PostgreSQL, MySQL, SQLite, and Oracle — all of which use SQL syntax with slight variations.",
    subTopic: "Basics",
  },
  {
    question: "What is normalization?",
    answer:
      "Normalization is organizing data to minimize redundancy. It involves dividing large tables into smaller related ones.",
    subTopic: "Basics",
  },

  // 2. Queries & Clauses
  {
    question: "What does the SELECT statement do?",
    answer:
      "SELECT retrieves data from one or more tables. Example: SELECT * FROM users;",
    subTopic: "Queries & Clauses",
  },
  {
    question: "How do you filter results in SQL?",
    answer:
      "Use the WHERE clause. Example: SELECT * FROM users WHERE age > 25;",
    subTopic: "Queries & Clauses",
  },
  {
    question: "How do you sort data in SQL?",
    answer: "Use ORDER BY. Example: SELECT * FROM users ORDER BY name ASC;",
    subTopic: "Queries & Clauses",
  },
  {
    question: "How do you limit results in SQL?",
    answer:
      "Use LIMIT (PostgreSQL, MySQL, SQLite) or FETCH FIRST (Oracle). Example: SELECT * FROM users LIMIT 5;",
    subTopic: "Queries & Clauses",
  },
  {
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before aggregation. HAVING filters groups after aggregation. Example: HAVING COUNT(*) > 1",
    subTopic: "Queries & Clauses",
  },
  {
    question: "What is the LIKE operator used for?",
    answer:
      "LIKE is used for pattern matching. Example: SELECT * FROM users WHERE name LIKE 'A%';",
    subTopic: "Queries & Clauses",
  },
  {
    question: "What does the IN operator do?",
    answer:
      "IN allows filtering based on a list of values. Example: WHERE status IN ('active', 'pending');",
    subTopic: "Queries & Clauses",
  },

  // 3. Joins & Keys
  {
    question: "What is a JOIN in SQL?",
    answer:
      "JOIN combines rows from two or more tables based on a related column.",
    subTopic: "Joins & Keys",
  },
  {
    question: "What are the types of JOINs?",
    answer:
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN — each returns different combinations of matched and unmatched rows.",
    subTopic: "Joins & Keys",
  },
  {
    question: "What is a primary key?",
    answer:
      "A column (or set) that uniquely identifies each row. It must be unique and not NULL.",
    subTopic: "Joins & Keys",
  },
  {
    question: "What is a foreign key?",
    answer:
      "A column that references a primary key in another table, creating a relationship.",
    subTopic: "Joins & Keys",
  },

  // 4. CRUD & Table Design
  {
    question: "How do you insert data into a table?",
    answer:
      "Use INSERT INTO. Example: INSERT INTO users (name, age) VALUES ('Alice', 25);",
    subTopic: "CRUD & Tables",
  },
  {
    question: "How do you update data in a table?",
    answer:
      "Use UPDATE with SET. Example: UPDATE users SET age = 30 WHERE name = 'Alice';",
    subTopic: "CRUD & Tables",
  },
  {
    question: "How do you delete data from a table?",
    answer: "Use DELETE FROM. Example: DELETE FROM users WHERE age < 18;",
    subTopic: "CRUD & Tables",
  },
  {
    question: "How do you create a table in SQL?",
    answer:
      "Use CREATE TABLE. Example: CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50));",
    subTopic: "CRUD & Tables",
  },
  {
    question: "How do you rename a table in SQL?",
    answer: "Use RENAME TABLE. Example: RENAME TABLE old_name TO new_name;",
    subTopic: "CRUD & Tables",
  },
  {
    question: "How do you add a new column to an existing table?",
    answer:
      "Use ALTER TABLE. Example: ALTER TABLE users ADD COLUMN email VARCHAR(100);",
    subTopic: "CRUD & Tables",
  },

  // 5. Aggregation & Functions
  {
    question: "What is GROUP BY used for?",
    answer:
      "It groups rows that share a value. Often used with COUNT, SUM, etc. Example: GROUP BY department;",
    subTopic: "Aggregation & Functions",
  },
  {
    question: "What are aggregate functions in SQL?",
    answer:
      "COUNT, SUM, AVG, MAX, MIN — used to calculate values from multiple rows.",
    subTopic: "Aggregation & Functions",
  },
  {
    question: "What does the COUNT function do?",
    answer: "Returns the number of rows. Example: SELECT COUNT(*) FROM users;",
    subTopic: "Aggregation & Functions",
  },

  // 6. Transactions & Database Systems
  {
    question: "What is a transaction in SQL?",
    answer:
      "A transaction is a unit of work done in steps: BEGIN, COMMIT, ROLLBACK. Ensures atomicity.",
    subTopic: "Transactions & Systems",
  },
  {
    question: "What is ACID in SQL databases?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, Durability — guarantees for reliable transactions.",
    subTopic: "Transactions & Systems",
  },
  {
    question: "How do you connect to PostgreSQL via terminal?",
    answer: "Use: psql -U username -d dbname",
    subTopic: "Transactions & Systems",
  },
  {
    question: "How do you create a user in PostgreSQL?",
    answer: "Use: CREATE USER username WITH PASSWORD 'password';",
    subTopic: "Transactions & Systems",
  },
  {
    question: "What is the default PostgreSQL port?",
    answer: "Port 5432 is used by default.",
    subTopic: "Transactions & Systems",
  },
  {
    question: "How do you connect to MySQL from terminal?",
    answer: "Use: mysql -u root -p",
    subTopic: "Transactions & Systems",
  },
  {
    question: "How do you list all databases in MySQL?",
    answer: "Use: SHOW DATABASES;",
    subTopic: "Transactions & Systems",
  },
  {
    question: "How do you select a specific database in MySQL?",
    answer: "Use: USE dbname;",
    subTopic: "Transactions & Systems",
  },
  {
    question: "What is MySQL Workbench used for?",
    answer:
      "It's a GUI tool used for SQL development, database design, server administration, and user management.",
    subTopic: "Transactions & Systems",
  },
  {
    question: "Can you run SQL queries in MySQL Workbench?",
    answer:
      "Yes, use the SQL Editor to write and execute queries against a connected database.",
    subTopic: "Transactions & Systems",
  },
];

export default sqlFlashcards;
