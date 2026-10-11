let certificates = [
  {
    image: "src/assets/images/portfolio/certificate/JSEssential1.png",
    name: "JavaScript Essentials 1",
    platform: "Cisco Networking Academy",
    desc: "This certification validates foundational knowledge in JavaScript programming. It covers designing, developing, and improving interactive applications, preparing candidates for entry‑level technology roles.",
    skill: [
      "Conditional Execution",
      "Loops",
      "Functions",
      "Data Types",
      "Control Flow",
      "Exceptions",
    ],
    dateIssued: "2026-06",
  },
  {
    image: "src/assets/images/portfolio/certificate/JSEssential2.png",
    name: "JavaScript Essentials 2",
    platform: "Cisco Networking Academy",
    desc: "This certification validates foundational knowledge in JavaScript programming. It covers designing, developing, and improving interactive applications, preparing candidates for entry‑level technology roles.",
    skill: [
      "Inheritance",
      "Setters",
      "Getters",
      "Object Manipulation",
      "Set & Map",
      "Object Method",
      "Prototypes",
    ],
    dateIssued: "2026-10",
  },
  {
    image: "src/assets/images/portfolio/certificate/OperatingSystemSupport.png",
    name: "Operating System Support",
    platform: "Cisco Networking Academy",
    desc: "This certification validates skills in troubleshooting Windows, macOS, and mobile operating systems, with emphasis on enhancing customer service in technical support environments.",
    skill: ["Windows Troubleshooting", "macOS Support", "Customer Service"],
    dateIssued: "2025-11",
  },
  {
    image: "src/assets/images/portfolio/certificate/IOT.png",
    name: "Exploring Internet of Things with Cisco Packet Tracer",
    platform: "Cisco Networking Academy",
    desc: "This certification demonstrates the ability to add and configure IoT devices in Cisco Packet Tracer, enabling the setup of smart home networks and showcasing applied networking skills.",
    skill: ["Network Simulation", "Cisco Packet Tracer", "IoT"],
    dateIssued: "2025-11",
  },
  {
    image: "src/assets/images/portfolio/certificate/TOPCIT.png",
    name: "13th Test of Practical Competency in ICT (TOPCIT) Philippines",
    platform: "BULACAN AGRICULTURAL STATE COLLEGE [Global]",
    desc: "This certification evaluates practical ICT competencies across software development, database management, networking, and IT problem‑solving. Achieving Level 2 demonstrates strong applied skills in programming, system design, and technical communication",
    skill: [
      "System Architecture",
      "Software",
      "Data",
      "Information Security",
      "Tech. Comm. & PM",
      "IT Business & Ethics",
      "Competencies",
    ],
    dateIssued: "2025-12",
  },
];

function renderCertificate() {
  const container = document.getElementById("certificate");

  certificates.forEach((cert) => {
    const dateIssued = formatMonthYear(cert.dateIssued);

    let skillList = renderBadges(cert.skill);

    let card = `
        <div class="card certificate" id="certificate-card">
              <div class="certificate-image-container">
                <img
                  src="${cert.image}"
                  class="card-img-top"
                  alt="${cert.name}"
                />
              </div>

                <div class="card-body d-flex flex-column">
                  <div>
                    <h5 class="card-title fw-semibold fs-5">${cert.name}</h5>
                    <p class="card-text fs-6 text-justify mt-3">${cert.desc}</p>
                  </div>
                  <div class="mt-auto">
                    <div class="badge-container d-flex flex-wrap gap-1 mt-5" nstyle="width: 250px">
                        ${skillList}
                    </div>
                </div>
            </div>
            <div class="card-footer text-body-secondary">
                Issued: ${dateIssued}
            </div>
        </div>
    `;

    container.innerHTML += card;
  });
}

if (certificates && certificates.length > 0) {
  renderCertificate();
} else {
  const container = document.getElementById("certificate");

  container.innerHTML = `
    <div class="card empty-certificate">
    <img src="src/assets/images/portfolio/No-Image.png" 
        class="card-img-top" alt="No Certicate Image" />

    <div class="card-body d-flex flex-column">
        <div>
        <h5 class="card-title fw-semibold fs-5">No Certificate to Display</h5>
        <p class="card-subtitle fs-6 text-justify mt-3">
            This section will display earned certifications and credentials. Future entries will reflect verified skills and professional development milestones.
        </p>
        <p class="card-text fs-6 text-justify mt-2">
            Additional certifications will be added as they are issued.
        </p>

        </div>
        <div class="mt-auto">
        <div class="badge-container mt-5">
            <span class="badge bg-secondary">N/A</span>
        </div>
        </div>
    </div>
    <div class="card-footer text-body-secondary">Issued: —</div>
    </div>`;
}
