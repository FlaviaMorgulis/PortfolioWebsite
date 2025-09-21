document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="content">
      <h1>Hello, I am Flavia</h1>
      <h2>I am a Web Developer</h2>
      <button id="projectsBtn">Check My Work</button>
    </div>
  `;

  const projectsBtn = document.getElementById("projectsBtn");
  if (projectsBtn) {
    projectsBtn.addEventListener("click", () => {
      window.location.href = "projects.html";
    });
  }
});
