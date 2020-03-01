var articlesExport = require("./articles");
var articles = articlesExport.articles;

const COLOR_CLASSES = [
  "bg-lr",
  "bg-lb",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandRange(min, max) {
  var diff = max - min;
  return getRandomInt(diff) + min;
}

// art.splice(12, 1) 
// TODO: should be based on the size of the browser

function createNewNode(mainArticle, linkInfo, colorClass) {
  var newNode = mainArticle.cloneNode(true);
  newNode.classList.remove("dn");
  document.body.appendChild(newNode);

  newNode.style.top = getRandRange(0, 600) + "px";
  newNode.style.left = getRandRange(20, 700) + "px";

  newNode.querySelector(".article--container").classList.add(colorClass);

  // button functionality
  var button = newNode.querySelector("button");
  button.onclick = (function () {
    document.body.removeChild(newNode);
  }).bind(newNode);

  // Set link and text
  var link = newNode.querySelector("a");
  link.href = linkInfo.url;
  link.innerText = linkInfo.title;

}

var mainArticle = document.querySelector(".article");

// TODO: do this for a bunch of random articles
numArticles = getRandRange(4, 6);
for (var i=0; i <= numArticles; i++) {
  var index = getRandomInt(30);
  var article = articles.splice(index, 1)[0];
  var colorIndex = i%2;
  var colorClass = COLOR_CLASSES[colorIndex];
  createNewNode(mainArticle, article, colorClass);
}

