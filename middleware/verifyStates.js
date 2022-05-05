const statesData = require('../model/states.json');

const verifyStates = (req, res, next) => {
    const stateAbbreviation = req.params.code.toUpperCase();
    const stateCodes = statesData.map(state=>state.code);
    const isState = stateCodes.find(stateAbbreviation => stateAbbreviation === code)
    if (!isState) return res.status(400).json({"message": `No state matches stateCode ${stateAbbreviation}.`})
    req.Abbr = stateAbbr;
    console.log(stateAbbr);
    next();
}

module.exports = verifyStates;