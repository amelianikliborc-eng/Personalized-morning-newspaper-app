const defaultUser = {
    name: "AMELA",
    city: "OŚWIĘCIM",
    country: "POLAND",
    language: "en",
    theme: "classic"
};

let user = {
    ...defaultUser
};


const translations = {

    en: {
        title: "MORNING EDITION",
        greeting: "GOOD MORNING",
        welcome: "Your personalized morning newspaper.",
        weather: "WEATHER",
        now: "Now",
        highLow: "High / Low",
        rain: "Rain",
        wind: "Wind",
        sunrise: "Sunrise",
        sunset: "Sunset",
        world: "WORLD",
        worldTitle: "Your morning news",
        worldText: "Important events from around the world, selected and summarized for you.",
        science: "SCIENCE",
        scienceTitle: "Science & Space",
        scienceText: "The most interesting scientific developments from the previous night.",
        technology: "TECHNOLOGY",
        technologyTitle: "Technology",
        technologyText: "The latest developments in technology and electronics.",
        settings: "SETTINGS",
        name: "Your name",
        city: "City",
        country: "Country",
        language: "Language",
        theme: "Theme",
        namePlaceholder: "Enter your name",
        cityPlaceholder: "Enter your city",
        countryPlaceholder: "Enter your country",
        save: "SAVE SETTINGS",
        footer: "Morning Newspaper"
    },

    pl: {
        title: "PORANNE WYDANIE",
        greeting: "DZIEŃ DOBRY",
        welcome: "Twoja spersonalizowana poranna gazeta.",
        weather: "POGODA",
        now: "Teraz",
        highLow: "Maks. / Min.",
        rain: "Opady",
        wind: "Wiatr",
        sunrise: "Wschód",
        sunset: "Zachód",
        world: "ŚWIAT",
        worldTitle: "Twoje poranne wiadomości",
        worldText: "Najważniejsze wydarzenia ze świata, wybrane i podsumowane specjalnie dla Ciebie.",
        science: "NAUKA",
        scienceTitle: "Nauka i kosmos",
        scienceText: "Najciekawsze wydarzenia naukowe z ostatniej nocy.",
        technology: "TECHNOLOGIA",
        technologyTitle: "Technologia",
        technologyText: "Najnowsze informacje ze świata technologii i elektroniki.",
        settings: "USTAWIENIA",
        name: "Twoje imię",
        city: "Miasto",
        country: "Kraj",
        language: "Język",
        theme: "Motyw",
        namePlaceholder: "Wpisz swoje imię",
        cityPlaceholder: "Wpisz swoje miasto",
        countryPlaceholder: "Wpisz swój kraj",
        save: "ZAPISZ USTAWIENIA",
        footer: "Poranna Gazeta"
    },

    de: {
        title: "MORGENAUSGABE",
        greeting: "GUTEN MORGEN",
        welcome: "Deine personalisierte Morgenzeitung.",
        weather: "WETTER",
        now: "Jetzt",
        highLow: "Höchst. / Tiefst.",
        rain: "Regen",
        wind: "Wind",
        sunrise: "Sonnenaufgang",
        sunset: "Sonnenuntergang",
        world: "WELT",
        worldTitle: "Deine Morgennachrichten",
        worldText: "Die wichtigsten Ereignisse aus aller Welt, ausgewählt und zusammengefasst.",
        science: "WISSENSCHAFT",
        scienceTitle: "Wissenschaft & Weltraum",
        scienceText: "Die interessantesten wissenschaftlichen Entwicklungen der letzten Nacht.",
        technology: "TECHNOLOGIE",
        technologyTitle: "Technologie",
        technologyText: "Die neuesten Entwicklungen aus Technologie und Elektronik.",
        settings: "EINSTELLUNGEN",
        name: "Dein Name",
        city: "Stadt",
        country: "Land",
        language: "Sprache",
        theme: "Design",
        namePlaceholder: "Gib deinen Namen ein",
        cityPlaceholder: "Gib deine Stadt ein",
        countryPlaceholder: "Gib dein Land ein",
        save: "EINSTELLUNGEN SPEICHERN",
        footer: "Morgenzeitung"
    },

    es: {
        title: "EDICIÓN MATUTINA",
        greeting: "BUENOS DÍAS",
        welcome: "Tu periódico matutino personalizado.",
        weather: "TIEMPO",
        now: "Ahora",
        highLow: "Máx. / Mín.",
        rain: "Lluvia",
        wind: "Viento",
        sunrise: "Amanecer",
        sunset: "Atardecer",
        world: "MUNDO",
        worldTitle: "Tus noticias de la mañana",
        worldText: "Los acontecimientos más importantes del mundo, seleccionados y resumidos para ti.",
        science: "CIENCIA",
        scienceTitle: "Ciencia y espacio",
        scienceText: "Los acontecimientos científicos más interesantes de la última noche.",
        technology: "TECNOLOGÍA",
        technologyTitle: "Tecnología",
        technologyText: "Las últimas novedades del mundo de la tecnología y la electrónica.",
        settings: "AJUSTES",
        name: "Tu nombre",
        city: "Ciudad",
        country: "País",
        language: "Idioma",
        theme: "Tema",
        namePlaceholder: "Escribe tu nombre",
        cityPlaceholder: "Escribe tu ciudad",
        countryPlaceholder: "Escribe tu país",
        save: "GUARDAR AJUSTES",
        footer: "Periódico Matutino"
    },

    fr: {
        title: "ÉDITION DU MATIN",
        greeting: "BONJOUR",
        welcome: "Votre journal du matin personnalisé.",
        weather: "MÉTÉO",
        now: "Maintenant",
        highLow: "Max. / Min.",
        rain: "Pluie",
        wind: "Vent",
        sunrise: "Lever du soleil",
        sunset: "Coucher du soleil",
        world: "MONDE",
        worldTitle: "Vos actualités du matin",
        worldText: "Les événements les plus importants du monde, sélectionnés et résumés pour vous.",
        science: "SCIENCE",
        scienceTitle: "Science et espace",
        scienceText: "Les développements scientifiques les plus intéressants de la nuit dernière.",
        technology: "TECHNOLOGIE",
        technologyTitle: "Technologie",
        technologyText: "Les dernières nouveautés dans le monde de la technologie et de l'électronique.",
        settings: "PARAMÈTRES",
        name: "Votre nom",
        city: "Ville",
        country: "Pays",
        language: "Langue",
        theme: "Thème",
        namePlaceholder: "Entrez votre nom",
        cityPlaceholder: "Entrez votre ville",
        countryPlaceholder: "Entrez votre pays",
        save: "ENREGISTRER",
        footer: "Journal du Matin"
    }

};


function updateLanguage() {

    const language =
        translations[user.language] || translations.en;

    document.getElementById("newspaper-title").textContent =
        language.title;

    document.getElementById("greeting").textContent =
        `${language.greeting}, ${user.name}`;

    document.getElementById("welcome-text").textContent =
        language.welcome;

    document.getElementById("weather-title").textContent =
        language.weather;

    document.getElementById("now-label").textContent =
        language.now;

    document.getElementById("high-low-label").textContent =
        language.highLow;

    document.getElementById("rain-label").textContent =
        language.rain;

    document.getElementById("wind-label").textContent =
        language.wind;

    document.getElementById("sunrise-label").textContent =
        language.sunrise;

    document.getElementById("sunset-label").textContent =
        language.sunset;

    document.getElementById("world-category").textContent =
        language.world;

    document.getElementById("world-title").textContent =
        language.worldTitle;

    document.getElementById("world-text").textContent =
        language.worldText;

    document.getElementById("science-category").textContent =
        language.science;

    document.getElementById("science-title").textContent =
        language.scienceTitle;

    document.getElementById("science-text").textContent =
        language.scienceText;

    document.getElementById("technology-category").textContent =
        language.technology;

    document.getElementById("technology-title").textContent =
        language.technologyTitle;

    document.getElementById("technology-text").textContent =
        language.technologyText;

    document.getElementById("settings-title").textContent =
        language.settings;

    document.getElementById("name-label").textContent =
        language.name;

    document.getElementById("city-label").textContent =
        language.city;

    document.getElementById("country-label").textContent =
        language.country;

    document.getElementById("language-label").textContent =
        language.language;

    document.getElementById("theme-label").textContent =
        language.theme;

    document.getElementById("name").placeholder =
        language.namePlaceholder;

    document.getElementById("city").placeholder =
        language.cityPlaceholder;

    document.getElementById("country").placeholder =
        language.countryPlaceholder;

    document.getElementById("save-settings").textContent =
        language.save;

    document.getElementById("footer-text").textContent =
        language.footer;
}


function updateDate() {

    const today = new Date();

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const locales = {
        en: "en-US",
        pl: "pl-PL",
        de: "de-DE",
        es: "es-ES",
        fr: "fr-FR"
    };

    const formattedDate =
        today.toLocaleDateString(
            locales[user.language] || "en-US",
            options
        );

    document.getElementById("date").textContent =
        formattedDate.toUpperCase();
}


function updateTheme() {

    const themes = [
        "classic",
        "forest",
        "burgundy",
        "navy",
        "chocolate",
        "rose",
        "monochrome"
    ];

    themes.forEach(theme => {
        document.body.classList.remove(`theme-${theme}`);
    });

    const selectedTheme =
        themes.includes(user.theme)
            ? user.theme
            : "classic";

    document.body.classList.add(
        `theme-${selectedTheme}`
    );
}


function updateNewspaper() {

    document.getElementById("location").textContent =
        `${user.city}, ${user.country}`;

    updateTheme();
    updateLanguage();
    updateDate();
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

        if (!locationData.results ||
            locationData.results.length === 0) {
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

    const themeInput =
        document.getElementById("theme").value;

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

    user.theme =
        themeInput;

    updateNewspaper();
    updateWeather();
}


document
    .getElementById("save-settings")
    .addEventListener("click", saveSettings);


updateNewspaper();
updateWeather();
