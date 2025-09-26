document.addEventListener("DOMContentLoaded", () => {
  const pageContainer =
    document.querySelector(".content-wrapper") || document.body;

  // ----- LEFT & RIGHT COLUMNS -----
  const leftColumn = document.createElement("div");
  leftColumn.className = "left-column";
  const rightColumn = document.createElement("div");
  rightColumn.className = "right-column";

  pageContainer.appendChild(leftColumn);
  pageContainer.appendChild(rightColumn);

  // ----- PROJECT DATA -----
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive website with HTML, CSS, JS.",
      icons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
      side: "left",
    },
    {
      title: "Data Dashboard",
      desc: "Interactive dashboard with Python and Plotly.",
      icons: ["fab fa-python"],
      side: "left",
    },
    {
      title: "ML Model",
      desc: "Predictive ML model using scikit-learn.",
      icons: ["fab fa-python"],
      side: "left",
    },
    {
      title: "Web App",
      desc: "Full-stack web app using Node.js and Express.",
      icons: ["fab fa-node", "fas fa-database"],
      side: "right",
    },
    {
      title: "API Project",
      desc: "REST API with Node.js and MongoDB.",
      icons: ["fab fa-node", "fas fa-database"],
      side: "right",
    },
    {
      title: "Data Analysis",
      desc: "Data analysis with Python, Pandas, Matplotlib.",
      icons: ["fab fa-python"],
      side: "right",
    },
  ];

  // ----- DESCRIPTION BOX -----
  const descBox = document.createElement("div");
  descBox.className = "description-box";
  document.body.appendChild(descBox);

  // ----- CREATE BUTTONS -----
  projects.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "project-button";

    // Add icons
    p.icons.forEach((ic) => {
      const i = document.createElement("i");
      i.className = ic;
      btn.appendChild(i);
    });

    // Add title
    const span = document.createElement("span");
    span.textContent = p.title;
    btn.appendChild(span);

    // Click event
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      descBox.innerHTML = `<strong>${p.title}</strong><p>${p.desc}</p>`;
      descBox.style.display = "block";
    });

    // Append to left/right column
    if (p.side === "left") leftColumn.appendChild(btn);
    else rightColumn.appendChild(btn);
  });

  // ----- CLICK OUTSIDE TO HIDE DESC -----
  document.addEventListener("click", () => {
    descBox.style.display = "none";
  });

  // ----- CONTACT SECTION under left buttons -----
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-section";
  contactDiv.innerHTML = `
    <h3>Contact:</h3>
    <div class="contact-links">
      <a href="https://github.com/FlaviaMorgulis" target="_blank" aria-label="GitHub">
        <svg viewBox="0 0 24 24"><path d="M12 .297a12 12 0 0 0-3.793 23.406c.6.111.82-.261.82-.58v-2.03c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.104.823 2.227v3.293c0 .322.218.694.824.576A12.004 12.004 0 0 0 12 .297z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/flavia-morgulis-418579221/" target="_blank" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.635-1.849 3.367-1.849 3.594 0 4.257 2.364 4.257 5.438v6.302zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.897 20.452H3.776V9h3.121v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
      </a>
    </div>
  `;
  leftColumn.appendChild(contactDiv);
});
