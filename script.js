document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container_grid");

    // Create the glowing effect element
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    container.appendChild(glow);

    // Move glow with cursor inside the container
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.opacity = "1";
        glow.style.transform = `translate(${x - 60}px, ${y - 60}px)`;
    });

    // Hide glow when leaving the container
    container.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });
});
setTimeout(() => {
    document.querySelector(".intro").style.display = "none";
}, 3000);
