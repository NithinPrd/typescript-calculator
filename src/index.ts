import express from 'express'
import path from 'path'
import addition from './operations/addition'
import subtraction from './operations/subtraction'
import multiplication from './operations/multiplication'
import division from './operations/division'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use('/add', addition)
app.use('/subtract', subtraction)
app.use('/multiply', multiplication)
app.use('/divide', division)

app.listen(3001, () => {
    console.log("Listening on port 3001")
})