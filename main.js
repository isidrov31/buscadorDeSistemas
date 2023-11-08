document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const messageContainer = document.getElementById("messageContainer");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    const systemMessages = {
        ASEGURAMIENTO: [
            "👉 Si el incidente es masivo, genera un iTracker y avísanos por los medios que utilizamos usualmente (grupo de WhatsApp, llamada/mensaje por Teams).",
            "👉 Si es particular, genera un iTracker y aguarda que nos comuniquemos a la brevedad.",
            "👉 Si es fuera de horario laboral, genera un iTracker y llámanos a la guardia."
        ],
        FUNCIONAL: [
            "En desarrollo"
        ],
    };

    searchButton.addEventListener("click", function () {
        const searchInput = document.getElementById("searchInput").value.trim();

        if (searchInput === "") {
            messageContainer.innerHTML = "<p>Por favor, ingresa un sistema en el buscador.</p>";
        } else if (systemMessages.hasOwnProperty(searchInput)) {
            const systemMessageArray = systemMessages[searchInput];
            messageContainer.innerHTML = ""; // Limpiar el contenido existente

            systemMessageArray.forEach((message, index) => {
                messageContainer.innerHTML += `<div id="message_${searchInput}_${index}"><p>${message}</p></div>`;
            });
        } else {
            messageContainer.innerHTML = "<p>No conozco esa aplicación 😵 😵 Inténtalo nuevamente desde la lista desplegable. Si no aparece, escrible a alguno de los siguientes referentes: Darío Panico, Cyntia Sadran, Cecilia Garcia, Debora Martini</p>";
        }
    });

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const selectedSystem = this.getAttribute("data-system");
            const systemMessageArray = systemMessages[selectedSystem];
            messageContainer.innerHTML = ""; // Limpiar el contenido existente

            systemMessageArray.forEach((message, index) => {
                messageContainer.innerHTML += `<div id="message_${selectedSystem}_${index}"><p>${message}</p></div>`;
            });
        });
    });
});
