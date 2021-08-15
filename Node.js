const { response, request } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Connect with server successfully</h1>')
})



app.get('/getData', (req, res) => {
    const result = ((1 + Number(req.query.number))*Number(req.query.number))/2 //number
    
    if (result) {
        res.send(`<h2>${result}</h2>`)
    } else if (typeof req.query.number === 'string') {
        res.send('<h2>Wrong Parameter</h2>') 
    } else if (req.query) {
        res.send('<h2>Lack of Parameter</h2>') 
    }
})


    
app.use(express.static('public'))


app.listen(3000)