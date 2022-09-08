const express = require('express');
const path = require('path');
const app = express();

const pathsJoined = path.join(__dirname, 'public');
console.log(pathsJoined);
const expressStatic = express.static(pathsJoined);
console.log(expressStatic);
app.use(expressStatic);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
