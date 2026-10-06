var express = require('express');
var router = express.Router();
const Categories = require("../db/models/Categories")
const Response = require("../lib/response")


/* GET categories listing. */
router.get('/', async (req, res, next)=>{

  try{
    let categories = await Categories.find({});
    res.json(Response.successResponse(categories));
  }catch(err){
     res.json(Response.errorResponse(err));
  }

});

module.exports = router;
