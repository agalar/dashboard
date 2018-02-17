/* Adapted from http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design */ 

var links = document.querySelectorAll("[data-ripple]");

function animate(e) {
  var parent = this;

  if (parent.querySelectorAll(".ripple").length === 0) {
    var span = document.createElement("span");
    span.classList.add("ripple");
    parent.insertBefore(span, parent.firstChild);
  }

  var ink = parent.querySelectorAll(".ripple")[0];

  ink.classList.remove("ripple--animate");

  if (!ink.offsetHeight && !ink.offsetWidth) {
    var d = Math.max(parent.offsetHeight, parent.offsetWidth);
    ink.style.height = d + "px";
    ink.style.width = d + "px";
  }

  var rect = parent.getBoundingClientRect();

  var offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };

  var x = e.pageX - offset.left - ink.offsetWidth / 2;
  var y = e.pageY - offset.top - ink.offsetHeight / 2;

  ink.style.top = y + "px";
  ink.style.left = x + "px";
  ink.classList.add("ripple--animate");
}

links.forEach(function (link) {
  return link.addEventListener("click", animate);
});