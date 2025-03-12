document.getElementById("searchBtn").addEventListener("click", function() {
    let query = document.getElementById("searchQuery").value;
    if (query) {
        let searchUrl = `https://shopwice.com/?s=${encodeURIComponent(query)}`;
        browser.tabs.create({ url: searchUrl });
    }
});

// Load deals (Static Example - Replace with API Call if available)
let deals = [
    { name: "Samsung Galaxy A15 - 5G", url: "https://shopwice.com/product/samsung-galaxy-a15-5g/" },
    { name: "JBL PartyBox Speaker", url: "https://shopwice.com/product/jbl-partybox-speaker/" }
];

let dealsContainer = document.getElementById("deals");
deals.forEach(deal => {
    let link = document.createElement("a");
    link.href = deal.url;
    link.textContent = deal.name;
    link.target = "_blank";
    dealsContainer.appendChild(link);
    dealsContainer.appendChild(document.createElement("br"));
});
