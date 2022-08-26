const express = require('express');
const app = express();
const dataJSON = require('./data.json');
const fs = require('fs');
app.use('/api/notes', express.json());

app.get('/api/notes', (req, res) => {
  const newNotes = [];
  for (const property in dataJSON.notes) {
    newNotes.push(dataJSON.notes[property]);
  }
  res.json(newNotes);
}
);

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(404).json({ error: 'id must be a positive integer!' });
  } else if (dataJSON.notes[id]) {
    res.status(200).json(dataJSON.notes[id]);
  } else {
    res.status(404).json({ error: 'cannot find notes with id: ' + id });
  }
});

app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    // const note = {
    //   id: dataJSON.nextId,
    //   content: body
    // };
    body.id = dataJSON.nextId;
    dataJSON.notes[dataJSON.nextId] = body;
    dataJSON.nextId++;
    const data = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).json(body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJSON.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id: ' + id });
  } else {
    delete dataJSON.notes[id];
    const data = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const update = req.body;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer!' });
  } else if (update.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (dataJSON.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id: ' + id });
  } else {
    update.id = id;
    dataJSON.notes[id] = update;
    const data = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(200).json(update);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
