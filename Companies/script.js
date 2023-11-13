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
articles.addEventListener("click", () => {
  changePage(articlesPathName);
});

companies.style.color = "#FFCA42";
