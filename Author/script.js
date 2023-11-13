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

home.addEventListener("click", () => {
  changePage(homePathName);
});
companies.addEventListener("click", () => {
  changePage(companiesPathName);
});
articles.addEventListener("click", () => {
  changePage(articlesPathName);
});

author.style.color = "#FFCA42";
