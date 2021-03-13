// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // manually setup
  // linksContainer.classList.toggle("show-links");

  // dynamic setup
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

// target the navbar and back to top link
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;

  // get the height of the navbar
  const navHeight = navbar.getBoundingClientRect().height;

  // if this value is bigger than the height of the navbar
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // back to top function
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
console.log(scrollLinks);

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // navigate to specific spot...add the slice to skip the #
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element);

    // get the position of that element
    let position = element.offsetTop;
    // console.log(position);

    window.scrollTo({
      left: 0,
      top: position - 100,
    });
    // close the navbar after a click
    linksContainer.style.height = 0;
  });
});
