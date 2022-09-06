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
      error: 'grade ID must be a positive integer'
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
          error: `no grade found with ID: ${gradeId}`
        });
        return;
      }

      res.json(grade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
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
        error: 'an unexpected error occured'
      });
    });
});

const jsonMiddleware = express.json();
app.use('/api/grades', jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const score = Number(newGrade.score);
  if (newGrade.name === undefined || newGrade.course === undefined || score === undefined) {
    res.status(400).json({
      error: 'must be a valid input'
    });
  } else if (!Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'score must be an integer from 0-100'
    });
  } else {
    const newValues = [newGrade.name, newGrade.course, newGrade.score];
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    db.query(sql, newValues)
      .then(results => {
        const grades = results.rows[0];
        res.status(201).json(grades);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const updatedGrade = req.body;
  const updatedScore = Number(updatedGrade.score);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer!'
    });
  } else if (updatedGrade.name === undefined || updatedGrade.course === undefined || updatedGrade.score === undefined) {
    res.status(400).json({
      error: 'must be a valid input'
    });
  } else if (!Number.isInteger(updatedScore) || updatedScore < 0 || updatedScore > 100) {
    res.status(400).json({
      error: 'score must be an integer from 0-100'
    });
  } else {
    const updatedValues = [updatedGrade.name, updatedGrade.course, updatedGrade.score, id];
    const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
    `;
    db.query(sql, updatedValues)
      .then(result => {
        const loggedGrade = result.rows[0];
        if (loggedGrade === undefined) {
          res.status(404).json({
            error: `cannot find grade with gradeId: ${id}`
          });
        } else {
          res.status(200).json(loggedGrade);
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({
          error: 'an unexpected error occured'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } const values = [id];
  const sql = `
  delete from "grades"
    where "gradeId" = $1
  returning *
  `;
  db.query(sql, values)
    .then(result => {
      const loggedGrade = result.rows[0];
      if (loggedGrade === undefined) {
        res.status(404).json({
          error: `cannot find gradeId with ${id}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT: 3000');
});
