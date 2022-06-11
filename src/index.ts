import express from 'express'
import { readdirSync } from 'fs'
import path from 'path'
import url from 'url'

const app = express()

interface Param {
    a: number,
    b: number
}

const add = (x: Param) => {
    return x.a + x.b
}

const subtract = (x: Param) => {
    return x.a - x.b
}

const multiply = (x: Param) => {
    return x.a*x.b
}

const divide = (x: Param) => {
    return x.a/x.b
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/add', (req, res) => {
    console.log("Hit the server for addition operation")
    const data:any = url.parse(req.url, true).query
    console.log(data)
    let x: Param = {
        a: parseInt(data.a),
        b: parseInt(data.b)
    }
    if(Number.isNaN(x.b)) x.b = 0
    res.send(`${add(x)}`)
})

app.get('/subtract', (req, res) => {
    console.log("Hit the server for subtraction operation")
    const data:any = url.parse(req.url, true).query
    console.log(data)
    let x: Param = {
        a: parseInt(data.a),
        b: parseInt(data.b)
    }
    if(Number.isNaN(x.b)) x.b = 0
    res.send(`${subtract(x)}`)
})

app.get('/multiply', (req, res) => {
    console.log("Hit the server for multiplication operation")
    const data:any = url.parse(req.url, true).query
    console.log(data)
    let x: Param = {
        a: parseInt(data.a),
        b: parseInt(data.b)
    }
    if(Number.isNaN(x.b)) x.b = 0
    res.send(`${multiply(x)}`)
})

app.get('/divide', (req, res) => {
    console.log("Hit the server for division operation")
    const data:any = url.parse(req.url, true).query
    console.log(data)
    let x: Param = {
        a: parseInt(data.a),
        b: parseInt(data.b)
    }
    if(Number.isNaN(x.b)) x.b = 0
    res.send(`${divide(x)}`)
})

app.listen(3001, () => {
    console.log("Listening on port 3001")
})