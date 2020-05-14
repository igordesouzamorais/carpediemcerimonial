const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/carpediem`));
 
app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/carpediem/index.html`));
});
 
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});