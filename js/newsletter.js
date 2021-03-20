function openNews() {
  document.getElementById("popup-newsletter").classList.remove("popup-hide");
  document.getElementById("popup-newsletter").classList.add("popup-show");
}

function closeNews() {
  document.getElementById("popup-newsletter").classList.remove("popup-show");
  document.getElementById("popup-newsletter").classList.add("popup-hide");
}


document.getElementById('newsletter').onclick = openNews;
document.getElementById('hide-popup').onclick = closeNews;