document.addEventListener("DOMContentLoaded", () => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("projects-container");

    const reshuffledPayload = shuffleArray(payload);

    reshuffledPayload.forEach((project) => {
        // Project Div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        containerDiv.appendChild(projectDiv);

        // Repo Div
        const repoContainer = document.createElement("div");
        repoContainer.classList.add("repo");

        const repoLink = document.createElement("a");
        repoLink.href = `${project.repo}`;
        repoLink.textContent = `${project.name}`;
        repoLink.target = "_blank";
        repoLink.rel = "noopener noreferrer";
        repoLink.setAttribute("aria-label", `Open ${project.name} repository`);
        repoContainer.appendChild(repoLink);
        projectDiv.appendChild(repoContainer);

        // Pages Div
        const pagesContainer = document.createElement("div");
        pagesContainer.classList.add("pages");

        const pagesLink = document.createElement("a");
        pagesLink.href = `${project.pages}`;
        pagesLink.target = "_blank";
        pagesLink.rel = "noopener noreferrer";
        pagesLink.setAttribute("aria-label", `Open ${project.name} project`);

        const pagesImage = document.createElement("img");
        pagesImage.src = `${project.thumbnail}`;
        pagesImage.alt = `${project.name} project thumbnail`;

        // New Label
        if (project.new) {
            const pagesImageDiv = document.createElement("div");
            pagesImageDiv.classList.add("corner-label");
            pagesImageDiv.textContent = "New";
            pagesLink.appendChild(pagesImageDiv);
        }

        // Append all
        pagesLink.appendChild(pagesImage);
        pagesContainer.appendChild(pagesLink);
        projectDiv.appendChild(pagesContainer);
        document.body.appendChild(containerDiv);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}
