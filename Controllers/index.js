const travelsList = require("../Models/travels.json");



exports.getAllTravels = (req, res) => {
    res.status(200).json(travelsList);
}

exports.getTravelsById = (req, res) => {
    const travelsId = req.params.id;
    const travel = travelsList.find(value =>  value.id == travelsId);

    if (travel) {
        res.status(200).json({ travel });
    }
    else {
        res.status(404).json({
            message: "Please provide valid travels ID"
        });
    } 
}

exports.getTravelsByCity = (req, res) => {
    const city = req.params.city.toLowerCase();

    const filteredTravels = travelsList.filter(trav => trav.city.toLowerCase() === city.toLowerCase());


    if (filteredTravels.length > 0) {
        res.status(200).json({ travelsList: filteredTravels });
    } else {
        res.status(404).json({
            message: "Please provide valid City Name"
        });
    } 
}

