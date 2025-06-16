const sqlFlashcards = [
  {
    question: "What is SQL?",
    answer:
      "SQL stands for Structured Query Language. It is used to manage and manipulate relational databases.",
    subTopic: "Basics",
  },
  {
    question: "What is the difference between SQL and MySQL?",
    answer:
      "SQL is a query language, while MySQL is a relational database management system that uses SQL.",
    subTopic: "Basics",
  },
  {
    question: "What is PostgreSQL?",
    answer:
      "PostgreSQL is an open-source, advanced relational database known for standards compliance and support for complex queries.",
    subTopic: "PostgreSQL",
  },
  {
    question: "What is MySQL Workbench?",
    answer:
      "MySQL Workbench is a visual database design tool used to model, develop, and manage MySQL databases.",
    subTopic: "MySQL",
  },
  {
    question: "What is a primary key?",
    answer:
      "A primary key uniquely identifies each row in a table and cannot contain NULL values.",
    subTopic: "Keys",
  },
  {
    question: "What is a foreign key?",
    answer:
      "A foreign key is a column that refers to the primary key of another table to create relationships between tables.",
    subTopic: "Keys",
  },
  {
    question: "What is a JOIN in SQL?",
    answer:
      "JOIN is used to combine rows from two or more tables based on a related column.",
    subTopic: "Joins",
  },
  {
    question: "What are the types of JOINs in SQL?",
    answer: "INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
    subTopic: "Joins",
  },
  {
    question: "What does the SELECT statement do?",
    answer: "SELECT is used to retrieve data from a database table.",
    subTopic: "Basic Queries",
  },
  {
    question: "How do you filter results in SQL?",
    answer: "Use the WHERE clause to filter rows based on a condition.",
    subTopic: "Basic Queries",
  },
  {
    question: "How do you sort data in SQL?",
    answer: "Use ORDER BY followed by column name and ASC or DESC for sorting.",
    subTopic: "Basic Queries",
  },
  {
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before grouping, while HAVING filters after grouping with aggregate functions.",
    subTopic: "Clauses",
  },
  {
    question: "What is GROUP BY used for?",
    answer:
      "GROUP BY groups rows that have the same values in specified columns and is often used with aggregate functions.",
    subTopic: "Aggregation",
  },
  {
    question: "What are aggregate functions in SQL?",
    answer:
      "Functions like COUNT, SUM, AVG, MAX, and MIN that perform calculations on multiple rows.",
    subTopic: "Aggregation",
  },
  {
    question: "How do you insert data into a table?",
    answer:
      "Use the INSERT INTO statement followed by column names and values.",
    subTopic: "CRUD",
  },
  {
    question: "How do you update data in a table?",
    answer: "Use the UPDATE statement with SET to modify existing records.",
    subTopic: "CRUD",
  },
  {
    question: "How do you delete data from a table?",
    answer: "Use the DELETE FROM statement with a WHERE clause.",
    subTopic: "CRUD",
  },
  {
    question: "How do you create a table in SQL?",
    answer: "Use the CREATE TABLE statement with column names and data types.",
    subTopic: "DDL",
  },
  {
    question: "What is normalization?",
    answer:
      "Normalization is the process of organizing data to reduce redundancy and improve integrity.",
    subTopic: "Database Design",
  },
  {
    question: "What is a transaction in SQL?",
    answer:
      "A transaction is a sequence of SQL operations executed as a single unit, often using BEGIN, COMMIT, and ROLLBACK.",
    subTopic: "Transactions",
  },
  {
    question: "What is ACID in databases?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, Durability — properties that ensure reliable transactions.",
    subTopic: "Transactions",
  },
  {
    question: "How do you use LIMIT in SQL?",
    answer:
      "LIMIT restricts the number of rows returned in a query, like LIMIT 5 for the top 5 results.",
    subTopic: "Query Control",
  },
  {
    question: "What is the default port for PostgreSQL?",
    answer: "The default port for PostgreSQL is 5432.",
    subTopic: "PostgreSQL",
  },
  {
    question: "How do you connect to PostgreSQL from the terminal?",
    answer: "Use the `psql` command: `psql -U username -d dbname`.",
    subTopic: "PostgreSQL",
  },
  {
    question: "How do you create a new user in PostgreSQL?",
    answer: "Use `CREATE USER username WITH PASSWORD 'password';`.",
    subTopic: "PostgreSQL",
  },
  {
    question: "How do you check the current database in PostgreSQL?",
    answer: "Run the SQL command `SELECT current_database();`.",
    subTopic: "PostgreSQL",
  },
];

export default sqlFlashcards;
