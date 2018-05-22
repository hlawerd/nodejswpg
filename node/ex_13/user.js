const http = require('http');
const express = require('express');
const port = 3000;
const router = express.Router();

router.get('/', (req,res) => res.send('Please log to get a user'))
router.post('/', (req,res) => res.send('Please log to get a user POST'))
router.put('/',(req,res)=> res.send('Please log to get a user PUT'))
router.delete('/', (req, res) => res.send('Please log to get a user DELETE'))

module.exports = router;