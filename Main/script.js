import { changePage, makeYellow } from "../scripts/helpers";
import {
  home,
  author,
  companies,
  articles,
  homePathName,
  authorPathName,
  companiesPathName,
  articlesPathName,
} from "../scripts/utils";

author.addEventListener("click", changePage(authorPathName));
companies.addEventListener("click", changePage(companiesPathName));
articles.addEventListener("click", changePage(articlesPathName));

home.style.color = "#ffca42";
