function showMenu() {
  document.getElementById('silo-menu-retratil').classList.remove("menu-hide");
  document.getElementById('silo-menu-retratil').classList.add("menu-show");
}

function hideMenu() {
  document.getElementById('silo-menu-retratil').classList.remove("menu-show");
  document.getElementById('silo-menu-retratil').classList.add("menu-hide");
}

document.getElementById('show-menu').onclick = showMenu;
document.getElementById('hide-menu').onclick = hideMenu;
