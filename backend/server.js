// had issues when running nodemon: https://dev.to/thetradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    return (
        console.log("Server is running on Port: " + PORT)
    );
});
