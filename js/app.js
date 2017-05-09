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
	this.mainImage = this.root.querySelector('.image');
	this.descTitle = this.root.querySelector('.image h1');
	this.descBody = this.root.querySelector('.image p');
	this.images = images;

	this.init = function() {
		this.displayImage(0);
		this.generateThumbnails();
	}

	this.displayImage = function(index) {
		let img = this.images[index];
		this.mainImage.style.backgroundImage = 'url(images/' + img.file + ')';
		this.descTitle.innerText = img.title;
		this.descBody.innerText = img.desc;
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