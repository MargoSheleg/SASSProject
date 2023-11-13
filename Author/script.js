const aAuthor = document.querySelector("#author");
if (window.location.pathname === "/Author/author.html") {
  aAuthor.style.color = "#FFCA42";
}

// TO HOME
const home = document.querySelector("#home");
home.addEventListener("click", () => {
  window.location.pathname = "../Main/main.html";
});

// TO COMPANIES
const companies = document.querySelector("#companies");
companies.addEventListener("click", () => {
  window.location.pathname = "../Companies/companies.html";
});
