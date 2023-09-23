const express = require('express');
const cors = require('cors');
const path = require('path');

const membersRouter = require('./routes/members.router');
const discographyRouter = require('./routes/discography.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`reqMethod:${req.method}, reqBaseURL:${req.baseUrl}, reqURL:${req.url}, time:${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rammstein',
    });
});

app.use('/members', membersRouter);
app.use('/discography', discographyRouter);

module.exports = app;
