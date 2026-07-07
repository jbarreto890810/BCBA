// =============================
// BCBA Academy
// script.js
// =============================

// Buscador
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();

        let cards = document.querySelectorAll(".course-card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}



// =============================
// Guardar progreso
// =============================

document.querySelectorAll(".course-card").forEach(card => {

    card.addEventListener("click", function () {

        let tema = this.querySelector("h3").innerText;

        let vistos = JSON.parse(localStorage.getItem("bcbaTemas")) || [];

        if (!vistos.includes(tema)) {

            vistos.push(tema);

            localStorage.setItem("bcbaTemas", JSON.stringify(vistos));

        }

    });

});



// =============================
// Mostrar temas completados
// =============================

window.addEventListener("load", function () {

    let vistos = JSON.parse(localStorage.getItem("bcbaTemas")) || [];

    document.querySelectorAll(".course-card").forEach(card => {

        let tema = card.querySelector("h3").innerText;

        if (vistos.includes(tema)) {

            card.style.border = "3px solid #22c55e";

            let badge = document.createElement("div");

            badge.innerHTML = "✔ Completado";

            badge.style.marginTop = "20px";
            badge.style.fontWeight = "bold";
            badge.style.color = "#22c55e";

            card.appendChild(badge);

        }

    });

});



// =============================
// Barra de progreso
// =============================

window.addEventListener("load", function () {

    const progress = document.getElementById("progress");

    if (!progress) return;

    let vistos = JSON.parse(localStorage.getItem("bcbaTemas")) || [];

    let porcentaje = (vistos.length / 9) * 100;

    progress.style.width = porcentaje + "%";

    progress.innerHTML = Math.round(porcentaje) + "%";

});



// =============================
// Reiniciar progreso (F12)
// resetProgress()
// =============================

function resetProgress() {

    localStorage.removeItem("bcbaTemas");

    location.reload();

}
