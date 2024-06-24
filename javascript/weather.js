// Replace 'YOUR_API_KEY' with your actual API key from the weather API provider.
const apiKey = '5ed2ba1c94c5446799842310230611';

const getWeather = async () => {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('cityName').textContent = data.location.name;
        document.getElementById('temperature').textContent = data.current.temp_c;
        document.getElementById('weatherDescription').textContent = data.current.condition.text;
    } catch (error) {
        alert('City not found. Please try again.');
    }
};
document.getElementById('getWeather').addEventListener('click', getWeather);













//export default pet;
