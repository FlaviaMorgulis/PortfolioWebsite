document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Render content identical to index, plus projects section
  app.innerHTML = `
    <div class="content">
      <h1>Flavia Morgulis</h1>
      <h2>Software Development</h2>

      <!-- Two buttons like index -->
      <div class="button-container">
        <button id="projectsBtn">Projects</button>
        <button id="aboutBtn">About</button>
      </div>

      <!-- Project buttons section -->
      <div class="project-columns">
        <div class="project-column" id="left-col"></div>
        <div class="project-column" id="right-col"></div>
      </div>

      <!-- Contact block identical to index -->
      <div class="contact">
        <h3>Contact:</h3>
        <div class="contact-links">
          <a href="https://github.com/FlaviaMorgulis" target="_blank" aria-label="GitHub">
            <svg role="img" viewBox="0 0 24 24">
              <path d="M12 .297a12 12 0 0 0-3.793 23.406c..."/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/flavia-morgulis-418579221/" target="_blank" aria-label="LinkedIn">
            <svg role="img" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c..."/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="description-box" id="descBox"></div>
  `;

  // Redirect buttons
  document.getElementById("projectsBtn")?.addEventListener("click", () => window.location.href = "projects.html");
  document.getElementById("aboutBtn")?.addEventListener("click", () => window.location.href = "About.html");

  // Project data
  const projects = [
    { title: "Portfolio Website", desc: "Responsive website with HTML, CSS, JS.", icons: ["fab fa-html5"], side: "left" },
    { title: "Data Dashboard", desc: "Interactive dashboard with Python and Plotly.", icons: ["fab fa-python"], side: "left" },
    { title: "ML Model", desc: "Predictive ML model using scikit-learn.", icons: ["fab fa-python"], side: "left" },
    { title: "Web App", desc: "Full-stack web app using Node.js and Express.", icons: ["fab fa-node"], side: "right" },
    { title: "API Project", desc: "REST API with Node.js and MongoDB.", icons: ["fab fa-node"], side: "right" },
    { title: "Data Analysis", desc: "Data analysis with Python, Pandas, Matplotlib.", icons: ["fab fa-python"], side: "right" }
  ];

  const leftCol = document.getElementById("left-col");
  const rightCol = document.getElementById("right-col");
  const descBox = document.getElementById("descBox");

  // Create project buttons
  projects.forEach(p => {
    const btn = document.createElement
