const express = require('express');
const path = require('path');

const app=express();

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', async(req, res) => {
    res.render("homepage")
})

app.listen(3000, () => {
    console.log('listening on port 3000')
    })