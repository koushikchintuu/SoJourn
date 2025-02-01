// utils/geocoding.js
const axios = require('axios');

async function geocode(address) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });

        if (response.data.results.length > 0) {
            const { lat, lng } = response.data.results[0].geometry.location;
            return {
                type: 'Point',
                coordinates: [lng, lat]
            };
        }
        return null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
}

module.exports = { geocode };