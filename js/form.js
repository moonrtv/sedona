var btnSearch = document.querySelector(".btn");
var btnForm = document.querySelector(".btn-form");
var btnFormMinusPlus = document.querySelector(".block");
var popup = document.querySelector(".modal-content");

btnFormMinusPlus.onclick = function(event) {
  event.preventDefault();
  var target = event.target,
      btnMinus = target.closest(".icon-minus"),
      btnPlus = target.closest(".icon-plus");

  if ((!btnMinus || btnPlus) && (btnMinus || !btnPlus)) return;
  searchInput(target);
};

function searchInput(node) {
  var parentNode = node.parentNode.parentNode,
      childNode = parentNode.querySelector("input");
  if (childNode) setNumber(childNode);
}

function setNumber(node) {
  console.log('Set number');
}

btnForm.addEventListener("click", function (event) {
      event.preventDefault();
      window.alert(document.cookie);
});

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
