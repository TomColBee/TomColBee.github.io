// Function to capture active page and highlight it
$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
         return this.href == url;
    }).parent().addClass('active');
});


// Navigation bar and header
var navheader =
'<header role="banner">'+
'  <img id="logo-main" src="TomColBee.github.io/assets/logo.PNG" width="25%" alt="Thomas Beeson">'+
'  <nav id="navbar-primary" class="navbar navbar-default" role="navigation">'+
'    <div class="container-fluid">'+
'      <div class="navbar-header">'+
'        <button type="button" class="navbar-toggle collasped" data-toggle="collapse" data-target="#navbar-primary-collapse">'+
'          <span class="sr-only">Toggle navigation</span>'+
'          <span class="icon-bar"></span>'+
'          <span class="icon-bar"></span>'+
'          <span class="icon-bar"></span>'+
'        </button>'+
'      </div>'+
'      <div class="collapse navbar-collapse" id="navbar-primary-collapse">'+
'        <ul class="nav navbar-nav">'+
'          <li><a href="index.html">Home</a></li>'+
'          <li><a href="about.html">About</a></li>'+
'          <li><a href="portfolio.html">Portfolio</a></li>'+
'          <li><a href="contact.html">Contact</a></li>'+
'          <li><a href="#">Resume</a></li>'+
'        </ul>'+
'      </div>'+
'    </div>'+
'  </nav>'+
'  </header>';

$('#navheader').html(navheader);


// Navigation bar only - to be presented in portfolio pages
var nav_only =
'<nav id="navbar-primary" class="navbar navbar-default" role="navigation">'+
'  <div class="container-fluid">'+
'    <div class="navbar-header">'+
'      <button type="button" class="navbar-toggle collasped" data-toggle="collapse" data-target="#navbar-primary-collapse">'+
'        <span class="sr-only">Toggle navigation</span>'+
'        <span class="icon-bar"></span>'+
'        <span class="icon-bar"></span>'+
'        <span class="icon-bar"></span>'+
'      </button>'+
'    </div>'+
'    <div class="collapse navbar-collapse" id="navbar-primary-collapse">'+
'      <ul class="nav navbar-nav">'+
'        <li><a href="index.html">Home</a></li>'+
'        <li><a href="about.html">About</a></li>'+
'        <li><a href="portfolio.html">Portfolio</a></li>'+
'        <li><a href="contact.html">Contact</a></li>'+
'        <li><a href="#">Resume</a></li>'+
'      </ul>'+
'    </div>'+
'  </div>'+
'</nav>';

$('#nav_only').html(nav_only);

// Footer
var footer =
'<div class="footer">'+
'  <p>Website created by <strong>Thomas Beeson</strong> using HTML, CSS, Javascript and Bootstrap</p>'+
'</div>';

$('#footer').html(footer);
