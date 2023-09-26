const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const membersRouter = require('./routes/members.router');
const albumsRouter = require('./routes/albums.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rammstein',
    });
});

app.use('/members', membersRouter);
app.use('/albums', albumsRouter);

module.exports = app;
