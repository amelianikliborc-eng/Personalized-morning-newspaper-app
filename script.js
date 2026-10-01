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
