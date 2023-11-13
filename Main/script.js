import { changePage } from "../scripts/helpers.js";
import {
  home,
  author,
  companies,
  articles,
  homePathName,
  authorPathName,
  companiesPathName,
  articlesPathName,
} from "../scripts/utils.js";

author.addEventListener("click", () => {
  changePage(authorPathName);
});
companies.addEventListener("click", () => {
  changePage(companiesPathName);
});
articles.addEventListener("click", () => {
  changePage(articlesPathName);
});

home.style.color = "#ffca42";
