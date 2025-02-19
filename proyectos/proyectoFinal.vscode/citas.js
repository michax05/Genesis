document.addEventListener("DOMContentLoaded", function () {
    const appointmentForm = document.getElementById("appointment-form");

    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value;
        const identification = document.getElementById("identification").value;
        const selectedDate = document.getElementById("selected-date").value;
        const selectedTime = document.getElementById("selected-time").value;

        if (fullName && identification && selectedDate && selectedTime) {
            alert(`Cita agendada para ${fullName} (Cédula/Pasaporte: ${identification})\nFecha: ${selectedDate}\nHora: ${selectedTime}`);
        } else {
            alert("Por favor, completa todos los campos.");
        }
    }); 
});
