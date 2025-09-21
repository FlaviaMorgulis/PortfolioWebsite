document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "About";
  header.appendChild(h1);

  const nav = document.createElement("nav");
  const links = [
    { href: "index.html", text: "Home" },
    { href: "projects.html", text: "Projects" },
  ];
  links.forEach((l) => {
    const a = document.createElement("a");
    a.href = l.href;
    a.textContent = l.text;
    nav.appendChild(a);
  });
  header.appendChild(nav);
  document.body.appendChild(header);

  // CONTENT WRAPPER
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";

  // LEFT COLUMN - ABOUT
  const about = document.createElement("div");
  about.className = "about";

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Who I Am";
  about.appendChild(aboutTitle);

  const para1 = document.createElement("p");
  para1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a semper sapien. Phasellus euismod ligula eu nunc tristique, ut fermentum orci faucibus. Aliquam erat volutpat.";
  about.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent =
    "Fusce ullamcorper, urna sed sodales tristique, lorem nulla pharetra mi, ac fermentum nulla nisl eu mauris. Integer tincidunt, justo nec tristique dictum, erat purus malesuada elit.";
  about.appendChild(para2);

  contentWrapper.appendChild(about);

  // RIGHT COLUMN - LANGUAGES
  const languagesContainer = document.createElement("div");
  languagesContainer.className = "languages-container";

  const langLabel = document.createElement("h2");
  langLabel.textContent = "Languages:";
  langLabel.className = "lang-label";
  languagesContainer.appendChild(langLabel);

  const iconsCircle = document.createElement("div");
  iconsCircle.className = "icons-circle";

  const icons = [
    { src: "python.png", alt: "Python" },
    { src: "css-3.png", alt: "CSS" },
    { src: "js.png", alt: "JavaScript" },
    { src: "html.png", alt: "HTML" },
    { src: "sql.png", alt: "SQL" },
    { src: "github.png", alt: "Git" },
  ];

  icons.forEach((icon) => {
    const img = document.createElement("img");
    img.src = icon.src;
    img.alt = icon.alt;
    img.className = "circle-icon";
    iconsCircle.appendChild(img);
  });

  languagesContainer.appendChild(iconsCircle);
  contentWrapper.appendChild(languagesContainer);

  document.body.appendChild(contentWrapper);

  // FOOTER
  const footer = document.createElement("footer");
  const footerLinks = [
    {
      href: "https://www.linkedin.com/in/flavia-morgulis-418579221/",
      text: "LinkedIn",
    },
    { href: "https://github.com/FlaviaMorgulis", text: "GitHub" },
  ];
  footerLinks.forEach((l) => {
    const a = document.createElement("a");
    a.href = l.href;
    a.target = "_blank";
    a.textContent = l.text;
    footer.appendChild(a);
  });
  document.body.appendChild(footer);
});
