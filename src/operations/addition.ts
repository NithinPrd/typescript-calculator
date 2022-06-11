import express from 'express'
import Param from '../../@types/Param'
import url from 'url'

var router = express.Router()

const add = (x: Param) => {
    return x.a + x.b
}

router.get('/', (req, res) => {
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

export default router