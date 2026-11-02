
(function () {
    "use strict";

    var pages = [
        { title: "Home", url: "inbound-long-term-home" },
        { title: "Nomination", url: "inbound-long-term-nomination" },
        { title: "Application", url: "inbound-long-term-application" },
        { title: "Module Selection", url: "inbound-long-term-module-selection" },
        { title: "Info Package", url: "inbound-long-term-info-package" },
        { title: "Accommodations", url: "accommodations-for-mobility-students" },
        { title: "FAQ", url: "inbound-long-term-faq" }
    ];

    var containers = document.querySelectorAll(".iblt-navigation");

    if (!containers.length) return;

    var currentPath = window.location.pathname
        .replace(/\/+$/, "")
        .split("/")
        .pop()
        .toLowerCase();

    containers.forEach(function (container) {
        var style = document.createElement("style");

        style.textContent = `
            .iblt-navigation {
                display: flex;
                flex-wrap: wrap;
                background: #003366;
                font-family: Arial, Helvetica, sans-serif;
                margin-bottom: 25px;
            }

            .iblt-navigation a {
                display: block;
                padding: 14px 16px;
                color: #f2f2f2 !important;
                font-size: 16px;
                text-decoration: none !important;
                transition: background 0.2s;
            }

            .iblt-navigation a:hover {
                background: #ddd;
                color: #000 !important;
            }

            .iblt-navigation a.active {
                background: #ffc40c;
                color: #fff !important;
            }

            @media (max-width: 650px) {
                .iblt-navigation a {
                    flex: 1 1 auto;
                    text-align: center;
                    font-size: 14px;
                    padding: 12px;
                }
            }
        `;

        container.appendChild(style);

// Remove previously generated navigation links
container.querySelectorAll("a").forEach(function(link) {
    link.remove();
});

        
        pages.forEach(function (page) {
            var link = document.createElement("a");

            link.href = page.url;
            link.textContent = page.title;

            if (currentPath === page.url.toLowerCase()) {
                link.className = "active";
                link.setAttribute("aria-current", "page");
            }

            container.appendChild(link);
        });
    });
})();
