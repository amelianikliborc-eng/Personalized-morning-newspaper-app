const user = {
    name: "AMELA",
    city: "OŚWIĘCIM",
    country: "POLAND"
};


document.getElementById("greeting").textContent =
    `GOOD MORNING, ${user.name}`;


document.getElementById("location").textContent =
    `${user.city}, ${user.country}`;