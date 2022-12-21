function openResume() {
  document.getElementById("myResume").style.display = "block";
  document.getElementById("closeButton").style.display = "block";
  document.getElementById("body").style.overflowY = "hidden";
}

function closeResume() {
  document.getElementById("myResume").style.display = "none";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("body").style.overflowY = "visible";
}

function toggleResume() {
  if (document.getElementById("myResume").style.display != "block") {
    openResume();
  } else {
    closeResume();
  }
}
