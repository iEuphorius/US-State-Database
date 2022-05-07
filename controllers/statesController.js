const express = require('express');
const verifyState = require('../middleware/verifyState.js');
const app = express();


const statesData = {
    states: require('../model/states.json'),
    setStates: function (statesData) {this.states = statesData}
}
const funFacts = require('../model/State');


const getAllStates = async (req, res) => {
    // const states = await State.find();
    // if (!states) return res.status(204).json({ 'message': 'No states found.' });
    /*
    let statesList;    
    const contig = req.query?.contig;
    const isContig = app.use(verifyStates.find(stateAbbreviation => stateAbbreviation === contig));
    if (isContig === 'false'){
        statesList = statesData.filter(st => st.code === 'AK' || st.code === 'HI');
    }
    statesList.forEach(state => {
        const stateExists = mongoStates.find(st => st.stateCode === state.code);
    })
    */
    res.json(statesData.states);
}

const createNewState = async (req, res) => {
    if (!req?.body?.stateCode) {
        return res.status(400).json({ 'message': 'State code required' });
    }

    try {
        const result = await statesData.create({
            stateCode: req.body.stateCode,
            funFacts: req.body.funFacts
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateState = async (req, res) => {
    if (!req?.body?.stateCode) {
        return res.status(400).json({ 'message': 'stateCode parameter is required.' });
    }

    const state = await statesData.findOne({ _stateCode: req.body.stateCode }).exec();
    if (!state) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.body.id}.` });
    }
    if (req.body?.stateCode) state.stateCode = req.body.stateCode;
    if (req.body?.funFacts) state.funFacts = req.body.funFacts;
    const result = await state.save();
    res.json(result);
}

const deleteState = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'State stateCode required.' });

    const state = await statesData.findOne({ _stateCode: req.body.stateCode }).exec();
    if (!state) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.body.stateCode}.` });
    }
    const result = await state.deleteOne(); //{ __stateCode: req.body._stateCode }
    res.json(result);
}

const getState = async (req, res) => {
    if (!req?.params?.stateCode) return res.status(400).json({ 'message': 'State code required.' });
    const stateObj = statesData.states.find(state => state.code === req.params.stateCode);
    
    if (!stateObj) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.params.stateCode}.` });
    }
    res.json(stateObj);
}

const getStateCapital = async (req, res) => {
    if (!req?.params?.stateCode) return res.status(400).json({ 'message': 'State code required.' });
    const stateObj = statesData.states.find(state => state.code === req.params.stateCode);
    
    if (!stateObj) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.params.stateCode}.` });
    }
    res.json({"state": stateObj.state, "capital": stateObj.capital_city });
}

const getStateNickname = async (req, res) => {
    if (!req?.params?.stateCode) return res.status(400).json({ 'message': 'State code required.' });
    const stateObj = statesData.states.find(state => state.code === req.params.stateCode);
    
    if (!stateObj) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.params.stateCode}.` });
    }
    res.json({"state": stateObj.state, "nickname": stateObj.nickname });
}

const getStatePopulation = async (req, res) => {
    if (!req?.params?.stateCode) return res.status(400).json({ 'message': 'State code required.' });
    const stateObj = statesData.states.find(state => state.code === req.params.stateCode);
    
    if (!stateObj) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.params.stateCode}.` });
    }
    res.json({"state": stateObj.state, "population": stateObj.population });
}

const getStateAdmission = async (req, res) => {
    if (!req?.params?.stateCode) return res.status(400).json({ 'message': 'State code required.' });
    const stateObj = statesData.states.find(state => state.code === req.params.stateCode);
    
    if (!stateObj) {
        return res.status(204).json({ "message": `No state matches stateCode ${req.params.stateCode}.` });
    }
    res.json({"state": stateObj.state, "admitted": stateObj.admission_date });
}


const createFunFacts = async (req,res) => {
    if (!req?.body?.stateCode || !req?.body?.funFacts) {
        return res.status(400).json({ 'message': 'State code and fun facts are required' });
    }

    try {
        const result = await State.create({
            stateCode: req.body.stateCode,
            funFacts: req.body.funFacts
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}
module.exports = {
    getAllStates,
    createNewState,
    updateState,
    deleteState,
    getState,
    getStateCapital,
    getStateNickname,
    getStatePopulation,
    getStateAdmission,
    createFunFacts
}