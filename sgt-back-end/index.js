const express = require('express');
const pg = require('pg'); // gets us the pg library

// creating a new instance of pg.Pool (pool of connections
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'Grade ID must be a positive integer'
    });
    return;
  }

  const sql = `
    select *
    from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(results => {
      // const grade = results.rows[0];
      const [grade] = results.rows;

      if (!grade) {
        res.status(404).json({
          error: `No grade found with ID: ${gradeId}`
        });
        return;
      }

      res.json(grade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  // db is database
  db.query(sql)
    .then(results => {
      const grades = results.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const score = newGrade.score;
  if (newGrade.name === undefined || newGrade.course === undefined || score === undefined) {
    res.status(400).json({
      error: 'Must be a valid input'
    });
  } else if (!Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be an integer from 0-100'
    });
  } else {
    // const newValues = [newGrade.name, newGrade.course, newGrade.score];
    // const sql = `
    // insert into "grades" ("name", "course", "score")
    // values ($1, $2, $3)
    // returning *
    // `;

  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT: 3000');
});
