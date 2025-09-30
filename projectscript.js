document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="content-wrapper">
      <div class="left-column">
        <h2>
          'Music and coding are siblings. Both turn patterns into meaning,
          rhythm into structure, and silence into possibility.'
        </h2>
        <div class="button-container">
          <div>
            <button id="homeBtn" class="about-button">Home</button>
            <div class="contact">
              <h3>Contact:</h3>
              <div class="contact-links">
                <a href="https://github.com/FlaviaMorgulis" target="_blank" aria-label="GitHub">
                  <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="#39393a" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.003 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/flavia-morgulis-418579221/" target="_blank" aria-label="LinkedIn">
                  <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="#39393a" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.635-1.849 3.367-1.849 3.594 0 4.257 2.364 4.257 5.438v6.302zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.897 20.452H3.776V9h3.121v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <button id="aboutBtn" class="about-button">About</button>
            <div class="cv-download">
              <h3>Download CV:</h3>
              <a href="FlaviaMorgulisCV.pdf" download class="cv-link" aria-label="Download CV">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#39393a" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5V8h5.5L13 3.5zM6 4h6v5a1 1 0 0 0 1 1h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-column" id="projects-col" style="margin-top: 30px;">
        <h2>Projects</h2>
      </div>
    </div>
    <div class="description-box" id="descBox"></div>
  `;

  document.getElementById("homeBtn")?.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  document.getElementById("aboutBtn")?.addEventListener("click", () => {
    window.location.href = "About.html";
  });

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive website with HTML, CSS, JS.",
      langs: [
        { icon: "fa-html5", prefix: "fa-brands", color: "#e34c26" },
        { icon: "fa-css3-alt", prefix: "fa-brands", color: "#2965f1" },
        { icon: "fa-js", prefix: "fa-brands", color: "#f7df1e" },
      ],
    },
    {
      title: "Data Dashboard",
      desc: "Interactive dashboard with Python and Plotly.",
      langs: [{ icon: "fa-python", prefix: "fa-brands", color: "#3776ab" }],
    },
    {
      title: "ML Model",
      desc: "Predictive ML model using scikit-learn.",
      langs: [{ icon: "fa-python", prefix: "fa-brands", color: "#3776ab" }],
    },
    {
      title: "Web App",
      desc: "Full-stack web app using Node.js and Express.",
      langs: [
        { icon: "fa-node-js", prefix: "fa-brands", color: "#68a063" },
        { icon: "fa-js", prefix: "fa-brands", color: "#f7df1e" },
      ],
    },
    {
      title: "API Project",
      desc: "REST API with Node.js and MongoDB.",
      langs: [
        { icon: "fa-node-js", prefix: "fa-brands", color: "#68a063" },
        { icon: "fa-database", prefix: "fa-solid", color: "#4db33d" },
      ],
    },
    {
      title: "Data Analysis",
      desc: "Data analysis with Python, Pandas, Matplotlib.",
      langs: [{ icon: "fa-python", prefix: "fa-brands", color: "#3776ab" }],
    },
  ];

  const projectsCol = document.getElementById("projects-col");
  const descBox = document.getElementById("descBox");

  projects.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "project-button";
    btn.innerHTML =
      p.langs
        .map(
          (lang) =>
            `<i class="${lang.prefix} ${lang.icon} fa-lg" style="color:${lang.color};margin-right:8px;"></i>`
        )
        .join("") + `<span>${p.title}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      descBox.innerHTML = `<strong>${p.title}</strong><p>${p.desc}</p>`;
      descBox.style.display = "block";
    });
    projectsCol.appendChild(btn);
  });

  document.addEventListener("click", () => {
    descBox.style.display = "none";
  });
});
