// toggle fullscreen on click
addEventListener("mousedown", function() {
  var d = document.documentElement;
  var rfs = d.requestFullScreen || d.webkitRequestFullScreen || d.mozRequestFullScreen || d.msRequestFullScreen;
  rfs.call(d);
});

var text = document.querySelector("#text");
function changeText(state) {
  switch (state) {
    case 1: text.innerHTML = "About 30 minutes remaining"; break;
    case 2: text.innerHTML = "About 20 minutes remaining"; break;
    case 3: text.innerHTML = "About 2 minutes remaining"; break;
    case 4: text.innerHTML = "Less than one minute remaining"; break;
  }
}

var load = document.querySelector("#load");
var width = 1;
var state = 0;
setInterval(function() {
  load.style.width = width + "%";
  width += (99-width) * 0.001;
  var oldstate = state;
  if (width >= 20) state = 1;
  if (width >= 70) state = 2;
  if (width >= 90) state = 3;
  if (width >= 97) state = 4;
  if (state != oldstate) {
    changeText(state);
  }
}, 10);