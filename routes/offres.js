var express = require('express');
var router = express.Router();

var offreController =require('../controllers/offreController');

// GET ALL offres
router.get('/', offreController.offre_list);


// get specific offre
router.get('/:id', offreController.offre_detail);

//post one offre
router.post('/', offreController.offre_ajout_post);
module.exports = router;