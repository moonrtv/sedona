var btnSearch = document.querySelector(".btn");
var popup = document.querySelector(".modal-content");

btnSearch.addEventListener("click", function (event) {
			event.preventDefault();
			popup.classList.toggle("modal-content-show");
});

window.addEventListener("keydown", function (event) {
		if (event.keyCode == 27) {
		if (popup.classList.contains("modal-content-show")) {
				popup.classList.remove("modal-content-show"); }
			}
});