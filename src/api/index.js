const express = require('express');
const routes = require('./routes');

const app = express();

const port = 3001;

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});

routes(app);

module.exports = app;