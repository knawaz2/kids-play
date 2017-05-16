const express = require('express');
const block = require('../model/blocksmodel');

const router = express.Router();




router.post('/block', (req, res, next) => {
  console.log(req.body);
  block.create(req.body).then(function(tmpBlock){
        res.send({"req": "Post the information for the Block", "returnVal": tmpBlock});
    }).catch(next);
  });

  router.delete('/block/:id', (req, res, next) => {
      block.findByIdAndRemove({_id:req.params.id}).then((tmpBlock) => {
         res.send({"RemovedRecord": tmpBlock});
      });

  });

  router.get('/getblocks', (req, res, next) => {
    block.find({}).then((tmpBlock) => {
         res.send(tmpBlock);
      });
    /*  block.find({}).then(function(tmpBlocks){
         res.send({"blocks": tmpBlock});
      });*/
  });

module.exports = router;
