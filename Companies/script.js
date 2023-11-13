const aCompanies = document.querySelector("#companies");
if (window.location.pathname === "/Companies/companies.html") {
  aCompanies.style.color = "#FFCA42";
}

// TO HOME
const home = document.querySelector("#home");
home.addEventListener("click", () => {
  window.location.pathname = "../Main/main.html";
});

// TO AUTHOR
const author = document.querySelector("#author");
author.addEventListener("click", () => {
  window.location.pathname = "../Author/author.html";
});

// TO ARTICLES
const articles = document.querySelector("#articles");
articles.addEventListener("click", () => {
  window.location.pathname = "../Articles/articles.html";
});
