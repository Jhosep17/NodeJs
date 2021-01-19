const { Router } = require('express');
const router = Router();

const user = require('../data.json');

router.get('/',(req,res)=>{
    res.json(user);
})

module.exports = router;