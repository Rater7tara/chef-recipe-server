const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('chef recipes')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(chefs)
    }
    else{
        const selectedChefs = chefs.find(n => n.id == id);
        res.send(selectedChefs)
    }
    
})

app.listen(port, () =>{
    console.log(`chef API is running on port: ${port}`)
})