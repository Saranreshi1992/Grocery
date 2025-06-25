
const dropdown = document.getElementById("locationDropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");

function toggleDropdown() {
    dropdown.classList.toggle("open");
}

function useCurrentLocation() {
dropdown.classList.remove("open");

if (!navigator.geolocation) {
    console.error("Geolocation unsupported");
    toggle.innerText = "❌ Geolocation not supported";
    return;
}     

console.log("Requesting location…");
navigator.geolocation.getCurrentPosition(
    async (pos) => {
    console.log("Got position:", pos);
    const { latitude: lat, longitude: lon } = pos.coords;

    toggle.innerText = "⌛ Fetching address...";
    const locationName = await reverseGeocode(lat, lon);
    console.log("Resolved to:", locationName);
    toggle.innerText = `📍 ${locationName}`;
    },
    (err) => {
    console.error("Geolocation error:", err);
    toggle.innerText = `❌ ${err.message}`;
    }
);
}

async function reverseGeocode(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        const { suburb, city, town, village, state, country } = data.address;
        return suburb || city || town || village || state || country || "Unknown location";
    } catch (e) {
        return "Unable to fetch location";
    }
}

function enterManualLocation() {
    dropdown.classList.remove("open");
    const userInput = prompt("Enter your location (city or area):");
    if (userInput && userInput.trim() !== "") {
        toggle.innerText = `✏️ ${userInput}`;
    } else {
        toggle.innerText = "❌ Invalid location";
    }
}

window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});            