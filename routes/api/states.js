const express = require('express');
const router = express.Router();
const verifyState = ('../../middleware/verifyState');
const statesController = require('../../controllers/statesController');

router.route('/')
    .get(statesController.getAllStates)
    .post(statesController.createNewState)
    .put(statesController.updateState)
    .delete(statesController.deleteState);

router.route('/?contig=true')
    .get(statesController.getAllStatesContig);

router.route('/?contig=true')
    .get(statesController.getAllStatesContig);

router.route('/:stateCode')
    .get(statesController.getState);

router.route('/:stateCode/funfact')
    .get(statesController.getFunfacts);

router.route('/:stateCode/capital')
    .get(statesController.getStateCapital);

router.route('/:stateCode/nickname')
    .get(statesController.getStateNickname);

router.route('/:stateCode/population')
    .get(statesController.getStatePopulation);

router.route('/:stateCode/admission')
    .get(statesController.getStateAdmission);

module.exports = router;