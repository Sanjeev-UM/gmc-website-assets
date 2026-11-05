
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

    function buildNavigation() {
        var containers = document.querySelectorAll(".iblt-navigation");

        containers.forEach(function (container) {

            // Completely remove existing generated content
            container.innerHTML = "";

            // Apply navigation styling
            container.style.cssText =
                "display:flex;" +
                "flex-wrap:wrap;" +
                "background:#003366;" +
                "font-family:Arial,Helvetica,sans-serif;" +
                "margin-bottom:25px;";

            var currentPath = window.location.pathname
                .replace(/\/+$/, "")
                .split("/")
                .pop()
                .toLowerCase();

            pages.forEach(function (page) {
                var link = document.createElement("a");

                link.href = page.url;
                link.textContent = page.title;

                link.style.cssText =
                    "display:block;" +
                    "padding:14px 16px;" +
                    "color:#f2f2f2;" +
                    "font-size:16px;" +
                    "text-decoration:none;";

                if (currentPath === page.url.toLowerCase()) {
                    link.style.backgroundColor = "#ffc40c";
                    link.style.color = "#ffffff";
                    link.setAttribute("aria-current", "page");
                }

                container.appendChild(link);
            });
        });
    }

    // Run after the document is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildNavigation);
    } else {
        buildNavigation();
    }

})();
