(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var articles = [
    {
      "title": "How Does Bernie Pay for His Major Plans?",
      "url": "https://berniesanders.com/issues/how-does-bernie-pay-his-major-plans/"
    },
    {
      "title": "Medicare for All",
      "url": "https://berniesanders.com/issues/medicare-for-all/"
    },
    {
      "title": "Green New Deal",
      "url": "https://berniesanders.com/issues/green-new-deal/"
    },
    {
      "title": "College For All",
      "url": "https://berniesanders.com/issues/free-college-cancel-debt/"
    },
    {
      "title": "A Welcoming and Safe America for All",
      "url": "https://berniesanders.com/issues/welcoming-and-safe-america-all/"
    },
    {
      "title": "Workplace Democracy",
      "url": "https://berniesanders.com/issues/workplace-democracy/"
    },
    {
      "title": "Housing for All",
      "url": "https://berniesanders.com/issues/housing-all/"
    },
    {
      "title": "Expand Social Security",
      "url": "https://berniesanders.com/issues/expand-social-security/"
    },
    {
      "title": "Justice and Safety for All",
      "url": "https://berniesanders.com/issues/criminal-justice-reform/"
    },
    {
      "title": "Honoring Our Commitment to Veterans",
      "url": "https://berniesanders.com/issues/honoring-veterans/"
    },
    {
      "title": "Free Child Care and Pre-K for All",
      "url": "https://berniesanders.com/issues/free-child-care-and-pre-k-all/"
    },
    {
      "title": "Eliminating Medical Debt",
      "url": "https://berniesanders.com/issues/eliminating-medical-debt/"
    },
    {
      "title": "Reinvest in Public Education",
      "url": "https://berniesanders.com/issues/reinvest-in-public-education/"
    },
    {
      "title": "Fair Banking for All",
      "url": "https://berniesanders.com/issues/fair-banking-for-all/"
    },
    {
      "title": "Supporting HBCUs and MSIs",
      "url": "https://berniesanders.com/issues/supporting-hbcus-and-msis/"
    },
    {
      "title": "Tax on Extreme Wealth",
      "url": "https://berniesanders.com/issues/tax-extreme-wealth/"
    },
    {
      "title": "Racial Justice",
      "url": "https://berniesanders.com/issues/racial-justice/"
    },
    {
      "title": "High-Speed Internet for All",
      "url": "https://berniesanders.com/issues/high-speed-internet-all/"
    },
    {
      "title": "Free and Fair Elections",
      "url": "https://berniesanders.com/issues/free-and-fair-elections/"
    },
    {
      "title": "Income Inequality Tax Plan",
      "url": "https://berniesanders.com/issues/income-inequality-tax-plan/"
    },
    {
      "title": "Revitalizing Rural America",
      "url": "https://berniesanders.com/issues/revitalizing-rural-america/"
    },
    {
      "title": "Responsible Foreign Policy",
      "url": "https://berniesanders.com/issues/responsible-foreign-policy/"
    },
    {
      "title": "Women’s Rights",
      "url": "https://berniesanders.com/issues/womens-rights/"
    },
    {
      "title": "Get Corporate Money Out of Politics",
      "url": "https://berniesanders.com/issues/money-out-of-politics/"
    },
    {
      "title": "LGBTQ+ Equality",
      "url": "https://berniesanders.com/issues/lgbtq-equality/"
    },
    {
      "title": "Fighting for Disability Rights",
      "url": "https://berniesanders.com/issues/fighting-for-disability-rights/"
    },
    {
      "title": "Empower Puerto Rico",
      "url": "https://berniesanders.com/issues/empower-puerto-rico/"
    },
    {
      "title": "Tax Increases for the Rich",
      "url": "https://berniesanders.com/issues/tax-increases-for-the-rich/"
    },
    {
      "title": "Gun Safety",
      "url": "https://berniesanders.com/issues/gun-safety/"
    },
    {
      "title": "Legalizing Marijuana",
      "url": "https://berniesanders.com/issues/legalizing-marijuana/"
    },
    {
      "title": "Empowering Tribal Nations",
      "url": "https://berniesanders.com/issues/empowering-tribal-nations/"
    },
    {
      "title": "Real Wall Street Reform",
      "url": "https://berniesanders.com/issues/real-wall-street-reform/"
    },
    {
      "title": "Jobs for All",
      "url": "https://berniesanders.com/issues/jobs-for-all/"
    },
    {
      "title": "Fair Trade",
      "url": "https://berniesanders.com/issues/fair-trade/"
    },
    {
      "title": "Corporate Accountability and Democracy",
      "url": "https://berniesanders.com/issues/corporate-accountability-and-democracy/"
    }
  ];

exports.articles = articles;
},{}],2:[function(require,module,exports){
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


},{"./articles":1}]},{},[2]);
