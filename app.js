const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from argo-app-test2 new test with notification demo1');
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
