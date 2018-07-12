window.onload = function() {
	var timmer;
	timmer = setInterval(change_image, 1500);
}

function change_image() {
		
			var myImage = document.getElementById("section-first-img");
			var mySrc = myImage.getAttribute("src", "");

			if (mySrc === 'images/photo01.jpg') {
				myImage.setAttribute('src', 'images/photo02.jpg');
			} else if (mySrc === 'images/photo02.jpg'){
				myImage.setAttribute('src', 'images/photo03.jpg');
			} else if (mySrc === 'images/photo03.jpg'){
				myImage.setAttribute('src', 'images/photo04.jpg');
			} else if (mySrc === 'images/photo04.jpg'){
			myImage.setAttribute('src', 'images/photo01.jpg');
			}
			
}