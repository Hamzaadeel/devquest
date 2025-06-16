export const sqlCheatSheet = {
  title: "SQL Cheat Sheet",
  sections: [
    {
      title: "1. Basics",
      items: [
        {
          name: "SELECT",
          description: "Retrieve data from one or more tables.",
          code: "SELECT * FROM users;",
        },
        {
          name: "INSERT",
          description: "Add a new row into a table.",
          code: "INSERT INTO users (name, age) VALUES ('Alice', 25);",
        },
        {
          name: "UPDATE",
          description: "Modify existing data.",
          code: "UPDATE users SET age = 30 WHERE name = 'Alice';",
        },
        {
          name: "DELETE",
          description: "Remove data from a table.",
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
          code: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50), age INT);",
        },
        {
          name: "DROP TABLE",
          description: "Delete a table and all its data.",
          code: "DROP TABLE users;",
        },
        {
          name: "ALTER TABLE",
          description: "Modify table structure.",
          code: "ALTER TABLE users ADD COLUMN email VARCHAR(100);",
        },
      ],
    },
    {
      title: "3. Filtering & Sorting",
      items: [
        {
          name: "WHERE",
          description: "Filter rows based on a condition.",
          code: "SELECT * FROM users WHERE age > 18;",
        },
        {
          name: "ORDER BY",
          description: "Sort results.",
          code: "SELECT * FROM users ORDER BY age DESC;",
        },
        {
          name: "LIMIT",
          description: "Limit the number of results.",
          code: "SELECT * FROM users LIMIT 5;",
        },
      ],
    },
    {
      title: "4. Joins",
      items: [
        {
          name: "INNER JOIN",
          description: "Return rows with matching values in both tables.",
          code: "SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id;",
        },
        {
          name: "LEFT JOIN",
          description: "Return all users and their orders (if any).",
          code: "SELECT users.name, orders.amount FROM users LEFT JOIN orders ON users.id = orders.user_id;",
        },
      ],
    },
    {
      title: "5. PostgreSQL & MySQL Tips",
      items: [
        {
          name: "PostgreSQL SERIAL",
          description: "Auto-incrementing ID field.",
          code: "id SERIAL PRIMARY KEY",
        },
        {
          name: "MySQL AUTO_INCREMENT",
          description: "Auto-incrementing ID field in MySQL.",
          code: "id INT AUTO_INCREMENT PRIMARY KEY",
        },
        {
          name: "MySQL Workbench",
          description: "A GUI to manage MySQL databases.",
        },
      ],
    },
  ],
};

export default sqlCheatSheet;
