async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.error}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data</p>`;
    }
}