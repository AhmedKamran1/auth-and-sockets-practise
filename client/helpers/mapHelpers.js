import axios from 'axios';

const baseURL = 'https://api.mapbox.com';
const token = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

// fetch location
export async function fetchCountry(long, lat) {
  const apiUrl = `${baseURL}/search/geocode/v6/reverse?longitude=${long}&latitude=${lat}&access_token=${token}`;

  const response = await axios.get(apiUrl);
  const context = response.data.features[0].properties.context;

  const location = {
    coordinates: [long, lat],
    country: [context?.place?.name, context?.region?.name, context?.country?.name]
      .filter(Boolean)
      .join(', '),
  };

  return location;
}

// fetch currency
export async function fetchCurrency(country) {
  const apiUrl = `https://restcountries.com/v3.1/name/${country}`;

  const response = await axios.get(apiUrl);
  const currencyDetails = response.data[0].currencies;
  const currencyType = Object.keys(currencyDetails)[0];

  return currencyType;
}

// get route
export async function getRoute(unit, start, end) {
  const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${unit}/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${token}`;

  const response = await axios.get(apiUrl);
  const coords = response.data.routes[0].geometry.coordinates;
}

export async function getSuggestions(searchText) {
  const apiUrl = `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchText}&session_token=0dfc37c3-b8fd-4711-88ef-d87c4f1058cf&limit=10&types=place,neighborhood,street,address,region,district,locality,postcode,poi&access_token=${token}`;

  const response = await axios.get(apiUrl);
  return response.data.suggestions;
}

export async function getCoordinates(mapbox_id) {
  const apiUrl = `https://api.mapbox.com/search/searchbox/v1/retrieve/${mapbox_id}?session_token=0dfc37c3-b8fd-4711-88ef-d87c4f1058cf&access_token=${token}`;

  const response = await axios.get(apiUrl);
  return response.data.features[0].geometry.coordinates;
}
