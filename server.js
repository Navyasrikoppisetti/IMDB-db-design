const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'imdb'
});

// API endpoint for retrieving movies
app.get('/api/movies', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    connection.query('SELECT * FROM Movie', (err, results) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
    
}