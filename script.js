// script.js
const events = {
    "2024-11-01": ["Confraternização da empresa A - 10h", "Seminário - 16h"],
    "2024-11-03": ["Workshop de Design - 15h"],
    "2024-11-10": ["Casamento - 14h", "Festa de aniversário - 18h"],
};

document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.getElementById("calendar-days");
    const eventDetails = document.getElementById("event-details");

    function loadCalendar() {
        // Adiciona 5 espaços vazios para os dias da semana antes de 1º de novembro (quinta-feira)
        for (let i = 0; i < 5; i++) {
            const emptyElement = document.createElement("span");
            emptyElement.textContent = ""; // Espaço vazio
            calendarDays.appendChild(emptyElement);
        }

        // Adiciona os dias de novembro
        for (let day = 1; day <= 30; day++) {
            const dayElement = document.createElement("span");
            const dateStr = `2024-11-${String(day).padStart(2, "0")}`;

            if (events[dateStr]) {
                const icon = document.createElement("i");
                icon.className = "fa-solid fa-star event-icon"; // Ícone de calendário
                dayElement.appendChild(icon);
            }

            dayElement.textContent = day;
            dayElement.onclick = () => showEvents(dateStr);
            calendarDays.appendChild(dayElement);
        }
    }

    function showEvents(date) {
        eventDetails.innerHTML = "";
        if (events[date]) {
            events[date].forEach(event => {
                const eventItem = document.createElement("li");
                eventItem.textContent = event;
                eventDetails.appendChild(eventItem);
            });
        } else {
            eventDetails.innerHTML = "<li>Sem eventos</li>";
        }
    }

    loadCalendar();
});

