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
author.addEventListener("click", () => {
  changePage(authorPathName);
});
companies.addEventListener("click", () => {
  changePage(companiesPathName);
});

articles.style.color = "#FFCA42";
