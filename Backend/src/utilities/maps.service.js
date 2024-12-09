const axios = require("axios")


async function getCoordinatesFromOSM(address) {
    const url = `https://nominatim.openstreetmap.org/search`;
  
    try {
      const response = await axios.get(url, {
        params: {
          q: address,
          format: 'json',
        },
      });
  
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
      } else {
        throw new Error("No results found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
      throw error;
    }
}



async function getTravelTime(address1, address2) {
  const apiKey = process.env.API_KEY;
  const geocodeUrl = 'https://nominatim.openstreetmap.org/search';
  const routeUrl = 'https://api.openrouteservice.org/v2/directions/driving-car';
  try {
    const response1 = await axios.get(geocodeUrl, {
      params: {
        q: address1,
        format: 'json',
      },
    });
    if (response1.data.length === 0) throw new Error(`Could not find location for address: ${address1}`);
    const { lat: lat1, lon: lon1 } = response1.data[0];

    const response2 = await axios.get(geocodeUrl, {
      params: {
        q: address2,
        format: 'json',
      },
    });

    if (response2.data.length === 0) throw new Error(`Could not find location for address: ${address2}`);
    const { lat: lat2, lon: lon2 } = response2.data[0];

    const routeResponse = await axios.get(routeUrl, {
      headers: { Authorization: apiKey },
      params: {
        start: `${lon1},${lat1}`,
        end: `${lon2},${lat2}`,
      },
    });

    const { duration, distance } = routeResponse.data.features[0].properties.segments[0];


    const travelTimeMinutes = Math.ceil(duration / 60);
    const travelDistanceKm = (distance / 1000).toFixed(2);

    return {
      travelTime: `${travelTimeMinutes} minutes`,
      travelDistance: `${travelDistanceKm} km`,
    };
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}




async function getSuggestions(query) {
  const geocodeUrl = 'https://nominatim.openstreetmap.org/search';

  try {
    const response = await axios.get(geocodeUrl, {
      params: {
        q: query, // User input query
        format: 'json', // Response format
        addressdetails: 1, // Include detailed address
        limit: 5, // Limit the number of results
      },
    });

    if (response.data.length === 0) {
      return ['No suggestions found'];
    }

    // Extract formatted address suggestions
    const suggestions = response.data.map(item => item.display_name);
    return suggestions;
  } catch (error) {
    console.error('Error fetching suggestions:', error.message);
    throw error;
  }
}






module.exports = {getCoordinatesFromOSM, getTravelTime, getSuggestions};