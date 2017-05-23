var timerId = setInterval(neon, 1000);
var whereToAppend = document.getElementById('content');

function neon() {

	setBcgr();

function setBcgr() {
	document.getElementsByClassName('banner')[0].style.boxShadow = '2px 3px 20px #00c518';
	document.getElementsByClassName('banner')[1].style.boxShadow = '2px 3px 20px #00c518';
	document.getElementsByClassName('banner')[2].style.boxShadow = '2px 3px 20px #00c518';
	document.getElementsByClassName('banner')[3].style.boxShadow = '2px 3px 20px #00c518';
	document.querySelector('.head_title').style.color = '#00c518';
	setTimeout(setBcgr1, 1000);
};

function setBcgr1() {
	document.getElementsByClassName('banner')[0].style.boxShadow = '2px 3px 20px #ff0101';
	document.getElementsByClassName('banner')[1].style.boxShadow = '2px 3px 20px #ff0101';
	document.getElementsByClassName('banner')[2].style.boxShadow = '2px 3px 20px #ff0101';
	document.getElementsByClassName('banner')[3].style.boxShadow = '2px 3px 20px #ff0101';
	document.querySelector('.head_title').style.color = '#ff0101';
	setTimeout(setBcgr2, 1000);
};

function setBcgr2() {
	document.getElementsByClassName('banner')[0].style.boxShadow = '2px 3px 20px #0022c5';
	document.getElementsByClassName('banner')[1].style.boxShadow = '2px 3px 20px #0022c5';
	document.getElementsByClassName('banner')[2].style.boxShadow = '2px 3px 20px #0022c5';
	document.getElementsByClassName('banner')[3].style.boxShadow = '2px 3px 20px #0022c5';
	document.querySelector('.head_title').style.color = '#0022c5';
	setTimeout(setBcgr3, 1000);
};

function setBcgr3() {
	document.getElementsByClassName('banner')[0].style.boxShadow = '2px 3px 20px #c5be00';
	document.getElementsByClassName('banner')[1].style.boxShadow = '2px 3px 20px #c5be00';
	document.getElementsByClassName('banner')[2].style.boxShadow = '2px 3px 20px #c5be00';
	document.getElementsByClassName('banner')[3].style.boxShadow = '2px 3px 20px #c5be00';
	document.querySelector('.head_title').style.color = '#c5be00';
	setTimeout(setBcgr, 1000);
};
};

addEventListener("scroll", addItems);

var arayOfPhotos = ['1', '2', '3', '4', '5'];

function addItems() {
	var toTop = 
		document.body.scrollHeight - //полный размер с учётом прокрутки 
		document.body.scrollTop - // текущая прокрутка
		window.innerHeight;  // текущий размер окна браузера

	if (toTop < 50) {

		for (var i = 0; i < arayOfPhotos.length; i++) {

			var newItem = document.createElement('div');
			newItem.className = 'col-md-8';
			newItem.classList.add('fun');
			var newTitle = document.createElement('h2');
			newTitle.innerHTML = 'Title'
			newItem.appendChild(newTitle);
			whereToAppend.appendChild(newItem);

			var newImg = document.createElement('img');
			newImg.classList.add('img-rounded');
			newImg.src = 'img/fun/' + arayOfPhotos[i] + '.jpg';
			
			newItem.appendChild(newImg);
		};

	};
};

