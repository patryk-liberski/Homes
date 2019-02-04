///MOBILE MENU///

document.querySelectorAll(".dropdown__selectBox").forEach((el) => {
	el.addEventListener('click', showdropdown__checkBox);
	el.addEventListener('click', changeArrow);
	el.nextElementSibling.style.display = "none";
});

document.querySelectorAll(".nav__label").forEach((el) => {
	el.addEventListener('click', changeArrow);
});

document.querySelectorAll(".dropform__label").forEach((el) => {
	el.addEventListener('click', changeArrow);
	el.addEventListener('click', changeText);
});


function showdropdown__checkBox() {
	var thisCheckbox = this.nextElementSibling;
	if (thisCheckbox.style.display == "none") {
		thisCheckbox.style.display = "block";
	} else {
		thisCheckbox.style.display = "none";
	}
}


function changeArrow() {
	var arrow = this.getElementsByClassName('arrow')[0];

	if (arrow.classList.contains("down-arrow")) {
		arrow.classList.remove("down-arrow");
		arrow.classList.add("up-arrow");
	} else if (arrow.classList.contains("up-arrow")) {
		arrow.classList.remove("up-arrow");
		arrow.classList.add("down-arrow");
	}
}

function changeText() {
	var changeText = document.querySelector(".dropform__text");

	if (changeText.classList.contains("showText")) {
		changeText.classList.remove("showText");
		changeText.classList.add("hideText");
	} else if (changeText.classList.contains("hideText")) {
		changeText.classList.remove("hideText");
		changeText.classList.add("showText");
	}
}

console.log("hey");

///GALLERY///

var slideIndex, slides, gallery__captionText;
function initGallery() {
	slideIndex = 0;
	slides = document.getElementsByClassName("gallery__imageHolder");
	slides[slideIndex].style.opacity = 1;

	gallery__captionText = document.querySelector(".gallery__captionHolder .gallery__captionText");
	gallery__captionText.innerText = slides[slideIndex].querySelector(".gallery__captionText").innerText;

	if (slides.length < 2) {
		var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
		nextPrevBtns.style.display = "none";
		for (i = 0; i < gallery__button.length; i++) {
			gallery__button[i].style.display = "none";
		}
	}

}
initGallery();
function plusSlides(n) {
	moveSlide(slideIndex + n);
}
function moveSlide(n) {

	var i;
	var current, next;
	var moveSlideAnimClass = {
		forCurrent: "",
		forNext: ""
	};
	var slideTextAnimClass;
	if (n > slideIndex) {
		if (n >= slides.length) { n = 0; }
		moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
		moveSlideAnimClass.forNext = "moveLeftNextSlide";
		slideTextAnimClass = "gallery__captionText--fromTop";
	} else if (n < slideIndex) {
		if (n < 0) { n = slides.length - 1; }
		moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
		moveSlideAnimClass.forNext = "moveRightPrevSlide";
		slideTextAnimClass = "slideTextFromBottom";
	}
	const mq = window.matchMedia("(max-width: 500px)");
	if (n != slideIndex) {
		next = slides[n];
		current = slides[slideIndex];
		for (i = 0; i < slides.length; i++) {
			slides[i].className = "gallery__imageHolder";
			slides[i].style.opacity = 0;
		}
		current.classList.add(moveSlideAnimClass.forCurrent);
		next.classList.add(moveSlideAnimClass.forNext);
		slideIndex = n;
		gallery__captionText.style.display = "none";
		gallery__captionText.className = "gallery__captionText " + slideTextAnimClass;
		gallery__captionText.innerText = slides[n].querySelector(".gallery__captionText").innerText;
		if (mq.matches) {
			gallery__captionText.style.display = "block";
		}

	}

}
var timer = null;
function setTimer() {
	timer = setInterval(function () {
		plusSlides(1);
	}, 3000);
}
setTimer();


//TABLE//

(function (document) {
	'use strict';

	var LightTableSorter = (function (Arr) {

		var _th, _cellIndex, _order = '';

		function _text(row) {
			return row.cells.item(_cellIndex).textContent.toLowerCase();
		}

		function _sort(a, b) {
			var va = _text(a), vb = _text(b), n = parseInt(va, 10);
			if (n) {
				va = n;
				vb = parseInt(vb, 10);
			}
			return va > vb ? 1 : va < vb ? -1 : 0;
		}

		function _toggle() {
			var c = _order !== 'asc' ? 'asc' : 'desc';
			_th.className = (_th.className.replace(_order, '') + ' ' + c).trim();
			_order = c;
		}

		function _reset() {
			_th.className = _th.className.replace('asc', '').replace('desc', '');
			_order = '';
		}

		function onClickEvent(e) {
			if (_th && _cellIndex !== e.target.cellIndex) {
				_reset();
			}
			_th = e.target;
			_cellIndex = _th.cellIndex;
			var tbody = _th.offsetParent.getElementsByTagName('tbody')[0],
				rows = tbody.rows;
			if (rows) {
				rows = Arr.sort.call(Arr.slice.call(rows, 0), _sort);
				if (_order === 'asc') {
					Arr.reverse.call(rows);
				}
				_toggle();
				tbody.innerHtml = '';
				Arr.forEach.call(rows, function (row) { tbody.appendChild(row); });
			}
		}

		return {
			init: function () {
				var ths = document.getElementsByTagName('th');
				Arr.forEach.call(ths, function (th) { th.onclick = onClickEvent; });
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function () {
		if (document.readyState === 'complete') {
			LightTableSorter.init();
		}
	});

})(document);



///////////form/////////////

function captchaCode() {
	var Numb1, Numb2, Numb3, Numb4, Code;
	Numb1 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb2 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb3 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb4 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb5 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb6 = (Math.ceil(Math.random() * 10) - 1).toString();
	Numb7 = (Math.ceil(Math.random() * 10) - 1).toString();

	Code = Numb1 + Numb2 + Numb3 + Numb4;
	$("#captcha span").remove();
	$("#captcha input").remove();
	$("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
}

$(function () {
	captchaCode();

	$('#contactForm').submit(function () {
		var captchaVal = $("#code").text();
		var captchaCode = $(".captcha").val();
		if (captchaVal == captchaCode) {
			$(".captcha").css({
				"color": "#609D29"
			});
		}
		else {
			$(".captcha").css({
				"color": "#CE3B46"
			});
		}

		var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
		var emailText = $(".email").val();
		if (emailFilter.test(emailText)) {
			$(".email").css({
				"color": "#609D29"
			});
		}
		else {
			$(".email").css({
				"color": "#CE3B46"
			});
		}

		var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
		var nameText = $(".name").val();
		if (nameFilter.test(nameText)) {
			$(".name").css({
				"color": "#609D29"
			});
		}
		else {
			$(".name").css({
				"color": "#CE3B46"
			});
		}

		var messageText = $(".message").val().length;
		if (messageText > 50) {
			$(".message").css({
				"color": "#609D29"
			});
		}
		else {
			$(".message").css({
				"color": "#CE3B46"
			});
		}

		if ((captchaVal !== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText < 50)) {
			return false;
		}
		if ((captchaVal == captchaCode) && (emailFilter.test(emailText)) && (nameFilter.test(nameText)) && (messageText > 50)) {
			$("#contactForm").css("display", "none");
			$("#form").append("<h2>Message sent!</h2>");
			return false;
		}
	});
});



////////PAGINATION////////
var $table = document.getElementById("myTable"),
	$n = 5,
	$rowCount = $table.rows.length,
	$firstRow = $table.rows[0].firstElementChild.tagName,
	$hasHead = ($firstRow === "TH"),
	$tr = [],
	$i, $ii, $j = ($hasHead) ? 1 : 0,
	$th = ($hasHead ? $table.rows[(0)].outerHTML : "");
var $pageCount = Math.ceil($rowCount / $n);
if ($pageCount > 1) {
	for ($i = $j, $ii = 0; $i < $rowCount; $i++ , $ii++)
		$tr[$ii] = $table.rows[$i].outerHTML;
	$table.insertAdjacentHTML("afterend", "<div id='paginationButtons'></div");
	sort(1);
}

function sort($p) {

	var $rows = $th, $s = (($n * $p) - $n);
	for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
		$rows += $tr[$i];

	$table.innerHTML = $rows;
	document.getElementById("paginationButtons").innerHTML = pageButtons($pageCount, $p);
	document.getElementById("id" + $p).setAttribute("class", "active");
}


function pageButtons($pCount, $cur) {

	var $prevDis = ($cur == 1) ? "disabled" : "",
		$nextDis = ($cur == $pCount) ? "disabled" : "",

		$buttons = "<input type='button' onclick='sort(" + ($cur - 1) + ")' ";
	for ($i = 1; $i <= $pCount; $i++)
		$buttons += "<input type='button' id='id" + $i + "'value='" + $i + "' onclick='sort(" + $i + ")'>";
	$buttons += "<input type='button' onclick='sort(" + ($cur + 1) + ")' ";
	return $buttons;
}
