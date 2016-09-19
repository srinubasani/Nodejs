/**
 * Created by abhay-pc on 3/4/2016.
 */
var express = require('express');
var router = express.Router();


router.post('/add',function(req,res)
{

    var result = Number(req.body.first_num) + Number(req.body.second_num);
    res.send(String(result));
})
router.post('/subtract',function(req,res)
{

    var result = req.body.first_num - req.body.second_num;
    res.send(String(result));
})
router.post('/multiply',function(req,res)
{

    var result = req.body.first_num * req.body.second_num;
    res.send(String(result));
})
router.post('/divide',function(req,res)
{

    var result = req.body.first_num / req.body.second_num;
    res.send(String(result));

})


module.exports = router;