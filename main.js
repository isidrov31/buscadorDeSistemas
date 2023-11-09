document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const messageContainer = document.getElementById("messageContainer");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const systemDropdown = document.getElementById("dropdownMenuButton");

    const systemMessages = {
        ASEGURAMIENTO: [
            "👉 Si el incidente es masivo, genera un iTracker y avísanos por los medios que utilizamos usualmente (grupo de WhatsApp, llamada/mensaje por Teams).",
            "👉 Si es particular, genera un iTracker y aguarda que nos comuniquemos.",
            "👉 Si es fuera de horario laboral (Lunes a Viernes de 9 a 18), generá un iTracker y llámanos a la guardia 08004442228."
        ],
        FUNCIONAL: [
            "En desarrollo"
        ],
    };

    // Obtener los elementos de la lista desplegable
    const dropdownItemsArray = Array.from(dropdownItems);

    searchButton.addEventListener("click", function () {
        const searchInput = document.getElementById("searchInput").value.trim().toUpperCase();

        if (searchInput === "") {
            messageContainer.innerHTML = "<p>Por favor, ingresa un sistema en el buscador.</p>";
        } else {
            // Filtrar elementos de la lista desplegable para encontrar coincidencias
            const matchingItems = dropdownItemsArray.filter(item =>
                item.textContent.toUpperCase().includes(searchInput)
            );

            if (matchingItems.length > 0) {
                messageContainer.innerHTML = ""; // Limpiar el contenido existente

                matchingItems.forEach(item => {
                    const selectedSystem = item.getAttribute("data-system");
                    const systemMessageArray = systemMessages[selectedSystem];
                    systemMessageArray.forEach((message, index) => {
                        messageContainer.innerHTML += `<div id="message_${selectedSystem}_${index}"><p>${message}</p></div>`;
                    });
                });
            } else {
                messageContainer.innerHTML = "<p>No conozco esa aplicación 😵 😵 Inténtalo nuevamente desde la lista desplegable. Si no aparece, escrible a alguno de los siguientes referentes: Darío Panico, Cyntia Sadran, Cecilia Garcia, Debora Martini</p>";
            }
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

    


