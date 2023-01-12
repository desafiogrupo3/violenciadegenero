const Locations = require('../models/locations.model');

async function addLocation(req, res) {
    try {
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


// Para limpiar la base de datos de pruebas
async function deleteAllLocations(req, res) {
    try {
        await Locations.deleteMany({});
        res.status(200).json({
            message: 'All locations deleted',
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addLocation,
    deleteAllLocations
}