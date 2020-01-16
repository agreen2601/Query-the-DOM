const firstArticleHeader = document.querySelector(".article__header");
firstArticleHeader.textContent = "Welcome to the Andrew Blog";

const allArticleHeadersAdd = document.querySelectorAll(".article__header");
for (let i = 0; i < allArticleHeadersAdd.length; i++) {
allArticleHeadersAdd[i].classList.add("important");
}

const removeDashed = document.querySelector(".dashed");
removeDashed.classList.remove("dashed");

const addGoldenrod = document.querySelector(".article__footer");
addGoldenrod.classList.add("goldenrod");