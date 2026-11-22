// Mobile menu: the "Menu" button in the header opens the #nav panel below it.
(function () {
	var button = document.getElementById("nav-toggle");
	var nav = document.getElementById("nav");
	if (!button || !nav) {
		return;
	}

	function setOpen(open) {
		nav.classList.toggle("menu-open", open);
		document.documentElement.classList.toggle("menu-is-open", open);
		button.setAttribute("aria-expanded", open ? "true" : "false");
	}

	button.addEventListener("click", function () {
		setOpen(!nav.classList.contains("menu-open"));
	});

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			setOpen(false);
		}
	});

	// Close the panel if the window becomes wide enough for the desktop menu.
	var desktop = window.matchMedia("(min-width: 940px)");
	var onChange = function (event) {
		if (event.matches) {
			setOpen(false);
		}
	};
	if (desktop.addEventListener) {
		desktop.addEventListener("change", onChange);
	} else if (desktop.addListener) {
		desktop.addListener(onChange);
	}
})();
