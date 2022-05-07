const statesData = {
    states: require('../model/states.json'),
    setStates: function (statesData) {this.states = statesData}
}
/*
const verifyState = (req, res, next) => {
    const stateAbbreviation = req.params.code.toUpperCase();
    const stateCodes = statesData.map(state=>state.code);
    const isState = stateCodes.find(stateAbbreviation => stateAbbreviation === code)
    if (!isState) return res.status(400).json({"message": `No state matches stateCode ${stateAbbreviation}.`})
    req.Abbr = stateAbbr;
    console.log(req.Abbr);
    next();
}
*/

const verifyState = () => {
    return (req, res, next) => {
        const stateAbbreviation = req.params.code.toUpperCase();
        const stateCodes = statesData.map(state=>state.code);
        const isState = stateCodes.find(stateAbbreviation => stateAbbreviation === code)
        if (!isState) return res.status(400).json({"message": `No state matches stateCode ${stateAbbreviation}.`})
        req.Abbr = stateAbbr;
        console.log(req.Abbr);
        next();
    }
}

module.exports = verifyState;