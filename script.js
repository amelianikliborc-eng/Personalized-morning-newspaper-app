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

        // 1. Znajdujemy współrzędne miasta

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city + ", " + country)}&count=1&language=en&format=json`
        );

        const locationData =
            await locationResponse.json();


        if (!locationData.results || locationData.results.length === 0) {

            document.getElementById("temperature").textContent = "--°C";
            document.getElementById("high-low").textContent = "--° / --°";
            document.getElementById("rain").textContent = "--%";

            return;
        }


        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;


        // 2. Pobieramy pogodę dla znalezionych współrzędnych

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
        );

        const weatherData =
            await weatherResponse.json();


        // 3. Aktualna temperatura

        const temperature =
            Math.round(weatherData.current.temperature_2m);


        // 4. Temperatura maksymalna

        const high =
            Math.round(weatherData.daily.temperature_2m_max[0]);


        // 5. Temperatura minimalna

        const low =
            Math.round(weatherData.daily.temperature_2m_min[0]);


        // 6. Prawdopodobieństwo opadów

        const rain =
            weatherData.daily.precipitation_probability_max[0];


        // 7. Wstawiamy dane do gazety

        document.getElementById("temperature").textContent =
            `${temperature}°C`;

        document.getElementById("high-low").textContent =
            `${high}° / ${low}°`;

        document.getElementById("rain").textContent =
            `${rain}%`;

    } catch (error) {

        console.error("Weather error:", error);

        document.getElementById("temperature").textContent =
            "--°C";

        document.getElementById("high-low").textContent =
            "--° / --°";

        document.getElementById("rain").textContent =
            "--%";
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
        user.name = nameInput.toUpperCase();
    }

    if (cityInput !== "") {
        user.city = cityInput.toUpperCase();
    }

    if (countryInput !== "") {
        user.country = countryInput.toUpperCase();
    }

    user.language = languageInput;


    updateNewspaper();

    updateWeather();
}


document
    .getElementById("save-settings")
    .addEventListener("click", saveSettings);


updateNewspaper();

updateDate();

updateWeather();