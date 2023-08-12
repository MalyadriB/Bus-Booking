const express = require('express');
const { savedata, getdata, updateSeatSelection } = require('../Controller/rescon'); 

const route = express.Router();

route.get('/getdata/:id', getdata); 
route.get('/getdata', getdata); 
route.post('/save', savedata);
route.post('/updateSeatSelection/:id', updateSeatSelection);

module.exports = route;
