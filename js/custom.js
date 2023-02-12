jQuery(document).ready(function() {
	"use strict";
	// Your custom js code goes here.
	// script header multiple body
  var mySound;
  mySound = new Audio("img/CalvinHarris-Feelscut.mp3");
  /*----------------------------------------
		Import from file others
	----------------------------------------*/
  $('#headers').load('header.html');
  $('#footers').load('footer.html');


  const path = window.location.pathname.replace('/', '').replace('.html', '');

  setTimeout(
    function() {
      // $('#vid').removeAttr('muted');
      // var video = document.querySelector('video');
      // // video.muted = true;
      // video.play();
      // audio.volume = 0.2;
      if (path == 'index') {
        mySound.currentTime = '5';
        mySound.volume = 0.2
        mySound.play();
      }
    }, 2000);

    $('#myForm').submit(async function (e) {
        // e.preventDefault();
        // console.log(this.elements[0].value);
        // const formData = {
        //   'fname': this.elements[0].value,
        //   'lname': this.elements[1].value,
        //   'email': this.elements[2].value,
        //   'message': this.elements[3].value
        // }
        // console.log(formData)
        // // const formData = new FormData($('#myForm')).entries()
        // const response = await fetch('api/email.php', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });

        // const result = await response.json();

        // if (result.code == 0) {
          window.location.href = "mailto:saputangga1977@gmail.com?subject=Saya mempunyai ide bagus nih&body="+ this.elements[3].value;
        // }
    });

});
