var timerId = setInterval(neon, 1000);
var whereToAppend = document.getElementById('content');
var sendMessageButton = document.getElementById('sendMessage');
var URLS = {
        SEND_MESSAGE:"admin/api/sendMessage.php",
        SEND_ITEM:"admin/api/addItem.php"
    }

    var ERRORS ={
        LENGTH_NAME_ERROR:"Слишком короткое имя",
        EMPTY_URL_ERROR:"Url не должен быть пустым",
        ADDRESS_URL_ERROR:"Картинки по этому адресу не существует",
        LENGTH_MESSAGE_ERROR:"Слишком короткое сообщение",
        FILE_EMPTY_ERROR:"Выберите картинку",
        SERVER_ERROR:"Произошла ошибка сервера"
    }

    var sendMessageButton = document.getElementById("sendMessage");
    var sendNewItemButton = document.getElementById("send_new_item");

    addListenerForButtonsForm();

    function sendMessage(){
        removeListenerForButtonsForm();
        var parent = this.parentNode;
        var name = document.getElementById('message-name').value;
        var message = document.getElementById('message-text').value;
        var form = document.getElementById('send_message_form');

        if (name.length < 2) {
            showAlert(parent, ERRORS.LENGTH_NAME_ERROR, 0);
            addListenerForButtonsForm();
            return;
        }

        if (message.length < 5){
            showAlert(parent, ERRORS.LENGTH_MESSAGE_ERROR, 0);
            addListenerForButtonsForm();
            return;
        }
        sendData(URLS.SEND_MESSAGE, new FormData(form), parent, form);
    }

    function sendItem(){
        removeListenerForButtonsForm();
        var parent = this.parentNode;
        var form = document.getElementById('add_item_form');
        var radios = document.getElementsByName('radio_status');
        var formData = new FormData(form);
        var imageType;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                imageType = radios[i].value;
                break;
            }
        }

        if (imageType == "url"){
            var url = document.getElementById("add_item_form_url").value;
            if(url == ""){
                showAlert(parent, ERRORS.EMPTY_URL_ERROR, 0);
                addListenerForButtonsForm();
                return;
            }else{
                var img = new Image();
                img.onload = function(){
                    formData.append('type',imageType);
                    sendData(URLS.SEND_ITEM, formData, parent, form);
                };
                img.onerror = function(){
                    showAlert(parent, ERRORS.ADDRESS_URL_ERROR, 0);
                    addListenerForButtonsForm();
                };
                img.src = url;
            }
        }else{
            var inputFile = document.getElementById("input-file");
            var fileObj = inputFile.files[0];
            if (fileObj){
                formData.append('type',imageType);
                sendData(URLS.SEND_ITEM, formData, parent,form);
            }else{
                showAlert(parent, ERRORS.FILE_EMPTY_ERROR, 0);
                addListenerForButtonsForm();
            }
        }

    }

    function sendData(url,formData, element, form){
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: "json",
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            success: function(data){
                if (data["status"]){
                    showAlert(element, data["message"], 1);
                    if (form.reset){
                        form.reset();
                    }
                }else{
                    showAlert(element, ERRORS.SERVER_ERROR, 0);
                }
                addListenerForButtonsForm();
            },
            error: function(){
                showAlert(element, ERRORS.SERVER_ERROR, 0);
                addListenerForButtonsForm();
            }
        });
    }

    function addListenerForButtonsForm() {
        sendMessageButton.addEventListener('click', sendMessage, false);
        sendNewItemButton.addEventListener('click', sendItem, false);
    }

    function removeListenerForButtonsForm() {
        sendMessageButton.removeEventListener('click', sendMessage, false);
        sendNewItemButton.removeEventListener('click', sendItem, false);
    }

    function showAlert(element, text, status) {
        var alert = document.getElementsByClassName('alertShow')[0];
        if (alert){
            alert.parentNode.removeChild(alert);
        }
        alert = document.createElement('div');
        alert.setAttribute('role','alert');
        var viewClass = status ? "alert alert-dismissible alert-success alertShow" : "alert alert-dismissible alert-danger alertShow";
        alert.setAttribute('class',viewClass);
        var button = document.createElement('button');
        button.setAttribute('class','close');
        button.setAttribute('data-dismiss','alert');
        button.setAttribute('aria-label','Close');
        button.setAttribute('type','button');
        var span = document.createElement('span');
        span.setAttribute('aria-hidden','true');
        span.innerHTML = '&times;';
        button.appendChild(span);
        var strong = document.createElement('strong');
        var type = status ? "Успешно! " : "Ошибка! ";
        strong.innerHTML = type;
        alert.appendChild(button);
        alert.appendChild(strong);
        alert.innerHTML += text;
        element.insertBefore(alert, element.firstChild);
    }

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


