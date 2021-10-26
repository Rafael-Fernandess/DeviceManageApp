const router = require('express').Router()
const connection = require('./config/connection')

//---------Routes----------
//show devices
router.get('/', (req,res)=>{
    let sql = 'SELECT * FROM device'
    connection.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//show specific device
router.get('/:id', (req,res)=>{
    const {id} = req.params 
    let sql = 'SELECT * FROM device WHERE Id = ?'
    connection.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//add device
router.post('/',(req, res)=>{
    const{Category, Color, partNumber} = req.body

    let sql = `INSERT INTO device(Category, Color, partNumber) VALUES(${Category}, "${Color}", ${partNumber})`
    connection.query(sql, (err, rows, field)=>{
        if(err) throw err
        else{
            res.json({status: 'Device added succesfully!'})
        }
    })
})
//delete device
router.delete('/:id',(req,res)=>{
    const{id} = req.params

    let sql = `DELETE FROM device WHERE Id = ${id}`
    connection.query(sql, (err, rows, field)=>{
        if(err) throw err
        else{
            res.json({status: 'Device deleted succesfully!'})
        }
    })
})
//show categories
router.get('/categories', (req,res)=>{
    let sql = 'SELECT * FROM category'
    connection.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//show specific category
router.get('/categories/:id', (req,res)=>{
    const {id} = req.params 
    let sql = 'SELECT * FROM category WHERE Id = ?'
    connection.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//add category
router.post('/categories',(req, res)=>{
    const{Name} = req.body

    let sql = `INSERT INTO category(Name) VALUE("${Name}")`
    connection.query(sql, (err, rows, field)=>{
        if(err) throw err
        else{
            res.json({status: 'Category added succesfully!'})
        }
    })
})
//delete category
router.delete('/categories/:id',(req,res)=>{
    const{id} = req.params

    let sql = `DELETE FROM category WHERE Id = ${id}`
    connection.query(sql, (err, rows, field)=>{
        if(err) throw err
        else{
            res.json({status: 'Category deleted succesfully!'})
        }
    })
})
//--------------------------


module.exports = router;