const express = require('express');
const router = express.Router();
const verifyStates = ('../middleware/verifyStates.js');
const statesController = require('../../controllers/statesController');

router.route('/')
    .get(statesController.getAllStates)
    .post(statesController.createNewState)
    .put(statesController.updateState)
    .delete(statesController.deleteState);

router.route('/:stateCode')
    .get(statesController.getState);

router.route('/:stateCode/funfact')
    .post(statesController.createFunFacts);
module.exports = router;