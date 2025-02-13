
function createSideBar() {
    const app = document.getElementById("appList");
    // create open button
    const openBtn = document.createElement("button");
    openBtn.id = "openBtn";
    openBtn.className = "open-btn";
    openBtn.textContent = "☰";
    app.appendChild(openBtn);

    // create sidebar
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.className = "sidebar";

    // create close button 
    const closeBtn = document.createElement("button");
    closeBtn.id = "closeBtn";
    closeBtn.className = "close-btn";
    closeBtn.textContent = "×";
    sidebar.appendChild(closeBtn);

    // create menu links
    const menuItems = [
        { text: "Home", href: "index.html" },
        { text: "Contact", href: "contact.html" },
        { text: "About", href: "about.html" },
        { text: "Sign Up", href: "sign up.html" },
        { text: "My Account", href: "my-account.html" },
        { text: "My Orders", href: "orders.html" },
        { text: "Log Out", href: "logout.html" },
    ];

    menuItems.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.text;
        sidebar.appendChild(link);
    });

    // create search box
    const searchDiv = document.createElement("div");
    searchDiv.className = "search";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "What are you looking for?";
    searchDiv.appendChild(searchInput);

    const searchButton = document.createElement("button");
    searchButton.textContent = "🔍";
    searchDiv.appendChild(searchButton);

    sidebar.appendChild(searchDiv);

    // add sidebar to page
    app.appendChild(sidebar);

    // control in sidebar
    openBtn.addEventListener("click", () => {
        sidebar.style.width = "250px";
    });

    closeBtn.addEventListener("click", () => {
        sidebar.style.width = "0";
    });
}
createSideBar();