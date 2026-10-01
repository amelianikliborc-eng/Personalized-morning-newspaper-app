const defaultUser = {
    name: "AMELA",
    city: "OŚWIĘCIM",
    country: "POLAND",
    language: "en"
};

let user = {
    ...defaultUser
};


function updateDate() {

    const today = new Date();

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const formattedDate =
        today.toLocaleDateString("en-US", options);

    document.getElementById("date").textContent =
        formattedDate.toUpperCase();
}


function updateNewspaper() {

    document.getElementById("greeting").textContent =
        `GOOD MORNING, ${user.name}`;

    document.getElementById("location").textContent =
        `${user.city}, ${user.country}`;
}


async function updateWeather() {

    const city = user.city;
    const country = user.country;

    try {

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city + ", " + country)}&count=1&language=en&format=json`
        );

        const locationData =
            await locationResponse.json();


        if (!locationData.results || locationData.results.length === 0) {

            document.getElementById("temperature").textContent = "--°C";
            document.getElementById("high-low").textContent = "--° / --°";
            document.getElementById("rain").textContent = "--%";
            document.getElementById("wind").textContent = "-- km/h";
            document.getElementById("sunrise").textContent = "--:--";
            document.getElementById("sunset").textContent = "--:--";

            return;
        }


        const location =
            locationData.results[0];

        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=auto`
        );


        const weatherData =
            await weatherResponse.json();


        const temperature =
            Math.round(
                weatherData.current.temperature_2m
            );


        const high =
            Math.round(
                weatherData.daily.temperature_2m_max[0]
            );


        const low =
            Math.round(
                weatherData.daily.temperature_2m_min[0]
            );


        const rain =
            weatherData.daily.precipitation_probability_max[0];


        const wind =
            Math.round(
                weatherData.current.wind_speed_10m
            );


        const sunrise =
            weatherData.daily.sunrise[0].slice(11, 16);


        const sunset =
            weatherData.daily.sunset[0].slice(11, 16);


        document.getElementById("temperature").textContent =
            `${temperature}°C`;

        document.getElementById("high-low").textContent =
            `${high}° / ${low}°`;

        document.getElementById("rain").textContent =
            `${rain}%`;

        document.getElementById("wind").textContent =
            `${wind} km/h`;

        document.getElementById("sunrise").textContent =
            sunrise;

        document.getElementById("sunset").textContent =
            sunset;


    } catch (error) {

        console.error("Weather error:", error);

    }
}


function saveSettings() {

    const nameInput =
        document.getElementById("name").value.trim();

    const cityInput =
        document.getElementById("city").value.trim();

    const countryInput =
        document.getElementById("country").value.trim();

    const languageInput =
        document.getElementById("language").value;


    if (nameInput !== "") {
        user.name =
            nameInput.toUpperCase();
    }


    if (cityInput !== "") {
        user.city =
            cityInput.toUpperCase();
    }


    if (countryInput !== "") {
        user.country =
            countryInput.toUpperCase();
    }


    user.language =
        languageInput;


    updateNewspaper();

    updateWeather();
}


document
    .getElementById("save-settings")
    .addEventListener("click", saveSettings);


updateNewspaper();

updateDate();

updateWeather();
