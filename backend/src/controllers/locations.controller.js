const Locations = require('../models/locations.model');

async function addLocation(req, res) {
    try {
        console.log(1111111111111111111111)
        console.log(req.body)
        const location = await Locations.create({
            lat: req.body.lat,
            lng: req.body.lng,
        });
        res.status(201).json({
            location: location,
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addLocation
}