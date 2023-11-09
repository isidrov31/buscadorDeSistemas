document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const messageContainer = document.getElementById("messageContainer");
    const systemList = document.getElementById("systemList");
    const dropdownMenu = document.querySelector(".dropdown-menu");

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

    // Obtener los elementos de la lista desplegable y convertirlos en un array
    const dropdownItems = Array.from(dropdownMenu.querySelectorAll(".dropdown-item"));

    // Ordenar los elementos alfabéticamente
    dropdownItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Volver a agregar los elementos al menú desplegable
    dropdownItems.forEach(item => dropdownMenu.appendChild(item));

    searchButton.addEventListener("click", function () {
        const searchInput = document.getElementById("searchInput").value.trim().toUpperCase();

        if (searchInput === "") {
            messageContainer.innerHTML = "<p>Por favor, ingresa un sistema en el buscador.</p>";
        } else {
            // Filtrar elementos de la lista desplegable para encontrar coincidencias
            const matchingItems = dropdownItems.filter(item =>
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

    // Evento de escucha para el input
    document.getElementById("searchInput").addEventListener("input", function () {
        const inputText = this.value.trim().toUpperCase();

        // Limpiar opciones anteriores
        systemList.innerHTML = "";

        // Verificar si el input no está vacío
        if (inputText !== "") {
            // Filtrar elementos de la lista desplegable y agregar a datalist
            dropdownItems.forEach(item => {
                const systemName = item.textContent.toUpperCase();
                if (systemName.includes(inputText)) {
                    const option = document.createElement("option");
                    option.value = item.textContent;
                    systemList.appendChild(option);
                }
            });
        }
    });
});

