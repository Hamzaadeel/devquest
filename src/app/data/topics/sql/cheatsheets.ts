export const sqlCheatSheet = {
  title: "SQL Cheat Sheet",
  sections: [
    {
      title: "1. Basics",
      items: [
        {
          name: "SELECT",
          description: "Retrieve data from a table.",
          code: "SELECT * FROM users;",
        },
        {
          name: "INSERT",
          description: "Insert a new row.",
          code: "INSERT INTO users (name, age) VALUES ('Alice', 25);",
        },
        {
          name: "UPDATE",
          description: "Update existing data.",
          code: "UPDATE users SET age = 30 WHERE name = 'Alice';",
        },
        {
          name: "DELETE",
          description: "Delete specific rows.",
          code: "DELETE FROM users WHERE age < 18;",
        },
      ],
    },
    {
      title: "2. Table Management",
      items: [
        {
          name: "CREATE TABLE",
          description: "Create a new table.",
          code: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50), age INT); -- PostgreSQL",
        },
        {
          name: "DROP TABLE",
          description: "Remove a table entirely.",
          code: "DROP TABLE users;",
        },
        {
          name: "ALTER TABLE",
          description: "Modify the structure of a table.",
          code: "ALTER TABLE users ADD COLUMN email VARCHAR(100);",
        },
        {
          name: "TRUNCATE",
          description: "Delete all rows, faster than DELETE.",
          code: "TRUNCATE TABLE users;",
        },
      ],
    },
    {
      title: "3. Filtering, Sorting & Limiting",
      items: [
        {
          name: "WHERE",
          description: "Apply conditions to filter rows.",
          code: "SELECT * FROM users WHERE age > 18;",
        },
        {
          name: "ORDER BY",
          description: "Sort query results.",
          code: "SELECT * FROM users ORDER BY name ASC;",
        },
        {
          name: "LIMIT / OFFSET",
          description: "Limit or paginate results.",
          code: "SELECT * FROM users LIMIT 10 OFFSET 5; -- PostgreSQL/MySQL/SQLite",
        },
        {
          name: "ROWNUM / FETCH FIRST",
          description: "Limit results in Oracle.",
          code: "SELECT * FROM users WHERE ROWNUM <= 5; -- Oracle\nSELECT * FROM users FETCH FIRST 5 ROWS ONLY; -- ANSI SQL",
        },
      ],
    },
    {
      title: "4. Joins",
      items: [
        {
          name: "INNER JOIN",
          description: "Match rows in both tables.",
          code: "SELECT u.name, o.amount FROM users u INNER JOIN orders o ON u.id = o.user_id;",
        },
        {
          name: "LEFT JOIN",
          description: "All rows from left table, matched rows from right.",
          code: "SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON u.id = o.user_id;",
        },
        {
          name: "RIGHT JOIN",
          description: "All rows from right table (not supported in SQLite).",
          code: "SELECT u.name, o.amount FROM users u RIGHT JOIN orders o ON u.id = o.user_id;",
        },
        {
          name: "FULL OUTER JOIN",
          description: "All rows from both tables (use UNION in MySQL/SQLite).",
          code: "SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id; -- PostgreSQL/Oracle",
        },
      ],
    },
    {
      title: "5. Constraints & Keys",
      items: [
        {
          name: "Primary Key",
          description: "Unique identifier for table rows.",
          code: "id INT PRIMARY KEY",
        },
        {
          name: "Foreign Key",
          description: "Reference to another table.",
          code: "FOREIGN KEY (user_id) REFERENCES users(id)",
        },
        {
          name: "NOT NULL & UNIQUE",
          description: "Column must have a value or be unique.",
          code: "email VARCHAR(100) NOT NULL UNIQUE",
        },
        {
          name: "CHECK",
          description: "Enforce custom rules.",
          code: "age INT CHECK (age >= 18)",
        },
        {
          name: "DEFAULT",
          description: "Set default values.",
          code: "status VARCHAR(20) DEFAULT 'active'",
        },
      ],
    },
    {
      title: "6. SQL Functions",
      items: [
        {
          name: "COUNT / AVG / SUM",
          description: "Aggregate functions.",
          code: "SELECT COUNT(*) FROM users;\nSELECT AVG(age) FROM users;",
        },
        {
          name: "GROUP BY",
          description: "Group data for aggregation.",
          code: "SELECT city, COUNT(*) FROM users GROUP BY city;",
        },
        {
          name: "HAVING",
          description: "Filter grouped data.",
          code: "SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 5;",
        },
        {
          name: "NOW() / CURRENT_DATE",
          description: "Get current date/time.",
          code: "SELECT NOW(); -- PostgreSQL/MySQL\nSELECT CURRENT_DATE FROM dual; -- Oracle",
        },
        {
          name: "COALESCE",
          description: "Return first non-null value.",
          code: "SELECT COALESCE(email, 'no email') FROM users;",
        },
      ],
    },
    {
      title: "7. Transactions",
      items: [
        {
          name: "BEGIN / COMMIT / ROLLBACK",
          description: "Transaction management.",
          code: "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;",
        },
        {
          name: "SAVEPOINT / ROLLBACK TO",
          description: "Partial transaction rollback.",
          code: "SAVEPOINT sp1;\nROLLBACK TO sp1;",
        },
      ],
    },
    {
      title: "8. SQL Dialect-Specific Features",
      items: [
        {
          name: "PostgreSQL SERIAL",
          description: "Auto-increment ID in PostgreSQL.",
          code: "id SERIAL PRIMARY KEY",
        },
        {
          name: "MySQL AUTO_INCREMENT",
          description: "Auto-increment ID in MySQL.",
          code: "id INT AUTO_INCREMENT PRIMARY KEY",
        },
        {
          name: "SQLite AUTOINCREMENT",
          description: "Auto-increment primary key.",
          code: "id INTEGER PRIMARY KEY AUTOINCREMENT",
        },
        {
          name: "Oracle Sequences",
          description: "Auto-increment using sequences in Oracle.",
          code: "CREATE SEQUENCE user_seq;\nINSERT INTO users (id, name) VALUES (user_seq.NEXTVAL, 'Bob');",
        },
      ],
    },
    {
      title: "9. Tools & Tips",
      items: [
        {
          name: "PostgreSQL psql",
          description: "CLI for PostgreSQL.",
        },
        {
          name: "pgAdmin",
          description: "GUI for PostgreSQL.",
        },
        {
          name: "MySQL Workbench",
          description: "GUI for MySQL management.",
        },
        {
          name: "SQLite Browser",
          description: "Lightweight GUI for SQLite DBs.",
        },
        {
          name: "Oracle SQL Developer",
          description: "GUI for Oracle databases.",
        },
      ],
    },
  ],
};

export default sqlCheatSheet;
