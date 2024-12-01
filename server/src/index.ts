import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = 3000;

const db = new sqlite3.Database("./db/database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
    db.run(`
            CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                completed INTEGER NOT NULL DEFAULT 0
            )
          `);
  }
});

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/api/todos", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  db.run("INSERT INTO todos (title) VALUES (?)", [title], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID, title, completed: 0 });
    }
  });
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM todos WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json({ message: "Task deleted successfully" });
    }
  });
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (typeof completed !== "number" || (completed !== 0 && completed !== 1)) {
    res.status(400).json({ error: "Invalid completed value" });
  }

  db.run(
    "UPDATE todos SET completed WHERE id = ?",
    [id, completed],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.json({ message: "Task updated successfully" });
      }
    },
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
