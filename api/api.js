require('dotenv').config();

const app = require('./config/server');
app.listen(process.env.PORT, function() {
    console.log(`Servidor rodando com express na porta ${process.env.PORT}`);
});
