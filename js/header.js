jQuery(document).ready(function() {
	"use strict";
	// Your custom js code goes here.

  /*----------------------------------------
		Active Navbar
	----------------------------------------*/
  $('#titleHead').text('Progmin.');

  const path = window.location.pathname.replace('/', '').replace('.html', '');
  if(path == 'projects') {
    $('.probootstrap-main-nav > li').removeClass('active');
    $('#Projects').addClass('active');
  } else if(path == 'services') {
    $('.probootstrap-main-nav > li').removeClass('active');
    $('#Services').addClass('active');
  } else if (path == 'about') {
    $('.probootstrap-main-nav > li').removeClass('active');
    $('#Abouts').addClass('active');
  } else if (path == 'contact') {
    $('.probootstrap-main-nav > li').removeClass('active');
    $('#Contacts').addClass('active');
  }

  /*----------------------------------------
		Link url Sosial media
	----------------------------------------*/
  $('#twitterLink, #twitterLinkM').attr('href', 'https://twitter.com/Orangjauh13');
  $('#facebookLink, #facebookLinkM').attr('href', 'https://web.facebook.com/anggasaput.anggasaput.9');
  $('#instagramLink, #instagramLinkM').attr('href', 'https://www.instagram.com/angga_spt27/');
});
