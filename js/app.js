'use strict';
/* 
	Gallery script
	--------------
	2017(c) Green Fox Academy

	App
	Event listener
	Generate thumbnails

 */

const App = function(rootElement, images) {
	this.root = document.querySelector(rootElement);
	this.thumbnails = this.root.querySelector('.thumbnails');
	this.images = images;

	this.init = function() {
		console.log('App started');
		this.generateThumbnails();
	}

	this.generateThumbnails = function () {
		this.images.forEach(function(image) {
			let thumb = document.createElement('div');
			thumb.style.backgroundImage = 'url(images/' + image.file + ')';
			this.thumbnails.appendChild(thumb);
		}, this);
	}
}

const myGallery = new App('.tokyo', images);
myGallery.init();