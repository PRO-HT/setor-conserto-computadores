const repairs = [
    {
        title: "Placa principal",
        description: "Registro da placa-mãe usada no diagnóstico do computador.",
        status: "Concluído",
        image: "assets/img/consertos/registros/registro-imagens-01.jpeg"
    },
    {
        title: "Peças organizadas",
        description: "Peças separadas para dar sequência ao conserto.",
        status: "Concluído",
        image: "assets/img/consertos/registros/registro-imagens-07.jpeg"
    },
    {
        title: "Reparo concluído",
        description: "Registro final dos componentes atendidos na bancada.",
        status: "Concluído",
        image: "assets/img/consertos/registros/registro-imagens-19.jpeg"
    }
];

const repairsGrid = document.getElementById("repairs-grid");
repairsGrid.innerHTML = repairs.map((repair) => `
    <article class="portfolio-card repair-card">
        <div class="project-cover">
            <img src="${repair.image}" alt="${repair.title}" loading="lazy">
        </div>
        <div class="card-body">
            <span class="card-type">${repair.status}</span>
            <h3>${repair.title}</h3>
            <p>${repair.description}</p>
        </div>
    </article>
`).join("");

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}));
