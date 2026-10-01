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
}


document
    .getElementById("save-settings")
    .addEventListener("click", saveSettings);


updateNewspaper();
updateDate();