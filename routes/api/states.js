const express = require('express');
const router = express.Router();
const verifyState = ('../../middleware/verifyState');
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

router.route('/:stateCode/capital')
    .get(statesController.getState);

router.route('/:stateCode/nickname')
    .get(statesController.getState);

router.route('/:stateCode/population')
    .get(statesController.getState);

router.route('/:stateCode/admission')
    .get(statesController.getState);

module.exports = router;