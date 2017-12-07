function load(){
	var home = document.getElementById("home");
	var services = document.getElementById("services");
	var contact = document.getElementById("contact");

	home.addEventListener("click", function() {window.location.assign("index.html")});
	services.addEventListener("click", function() {window.location.assign("Services.html")});
	contact.addEventListener("click", function() {window.location.assign("Contact.html")});
	
	var home2 = document.getElementById("home2");
	var services2 = document.getElementById("services2");
	var contact2 = document.getElementById("contact2");

	home2.addEventListener("click", function() {window.location.assign("index.html")});
	services2.addEventListener("click", function() {window.location.assign("Services.html")});
	contact2.addEventListener("click", function() {window.location.assign("Contact.html")});
}

document.addEventListener("DOMContentLoaded", load, false);