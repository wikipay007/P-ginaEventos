const events = {
    "2024-11-01": [
        { title: "Confraternização da empresa A", time: "10h", description: "Localização: São Paulo, SP." },
        { title: "Seminário", time: "16h", description: "Localizaçãos: São José dos Campos, SP." }
    ],
    "2024-11-05": [
        { title: "Workshop de Design", time: "15h", description: "Localização: Osasco, SP." }
    ],
    "2024-11-10": [
        { title: "Casamento", time: "14h", description: "Localização: Búzios, RJ." },
        { title: "Festa de aniversário", time: "18h", description: "Localização: Rio de Janeiro, RJ." }
    ],
    "2024-11-15": [
        {title: "Palestra sobre segurança no trabalho", time: "10h", description: "Localização: Florianópolis, SC."}
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.getElementById("calendar-days");
    const eventDetails = document.getElementById("event-list");
    const selectedDateTitle = document.getElementById("selected-date");

    function loadCalendar() {
        for (let i = 0; i < 5; i++) {
            const emptyElement = document.createElement("span");
            emptyElement.textContent = ""; 
            calendarDays.appendChild(emptyElement);
        }

        for (let day = 1; day <= 30; day++) {
            const dayElement = document.createElement("span");
            const dateStr = `2024-11-${String(day).padStart(2, "0")}`;

            if (events[dateStr]) {
                dayElement.classList.add("has-event");
                const icon = document.createElement("i");
                icon.className = "fa-solid fa-star event-icon"; 
                dayElement.appendChild(icon);
            }

            const dayText = document.createTextNode(` ${day}`);
            dayElement.appendChild(dayText);

            dayElement.onclick = () => showEvents(dateStr);
            calendarDays.appendChild(dayElement);
        }
    }

    function showEvents(date) {
        const [year, month, day] = date.split("-").map(Number);
        const formattedDate = new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        selectedDateTitle.textContent = `Eventos para ${formattedDate}`;
        eventDetails.innerHTML = "";

        if (events[date]) {
            events[date].forEach(event => {
                const eventItem = document.createElement("li");
                eventItem.classList.add("has-event"); 

                const title = document.createElement("span");
                title.textContent = `${event.title} - ${event.time}`;
                eventItem.appendChild(title);

                const extraInfo = document.createElement("div");
                extraInfo.className = "extra-info";
                extraInfo.textContent = event.description;
                eventItem.appendChild(extraInfo);

                const editButton = document.createElement("button");
                editButton.className = "edit-button";
                editButton.textContent = "Editar";
                eventItem.appendChild(editButton);

                eventDetails.appendChild(eventItem);
            });
        } else {
            eventDetails.innerHTML = "<li>Sem eventos</li>";
        }
    }

    loadCalendar();
});

