const express = require('express');
const path = require('path');

const app = express();

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
