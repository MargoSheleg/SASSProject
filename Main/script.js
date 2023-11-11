const author = document.querySelector("#author");

author.addEventListener("click", () => {
  window.location.href = "/Author/author.html";
});

const aHome = document.querySelector("#home");
if ((window.location.href = "/Main/main.html")) {
  aHome.style.color = "#FFCA42";
}
