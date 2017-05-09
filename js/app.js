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
	this.navLeft = this.root.querySelector('.gallery .left');
	this.navRight = this.root.querySelector('.gallery .right');
	//
	this.images = images;
	this.imageIndex = 0;

	this.init = function() {
		this.displayImage(this.imageIndex);
		this.generateThumbnails();
		this.addEvents();
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

	this.addEvents = function() {
		this.navLeft.addEventListener('click', this.navigateLeft.bind(this));
		this.navRight.addEventListener('click', this.navigateRight.bind(this));

		let thumbs = this.root.querySelectorAll('.thumbnails div');

		thumbs.forEach(function(thumb, index){
			thumb.addEventListener('click', function () {
				this.displayImage(index);
			}.bind(this));
		}, this);
	}

	this.navigateLeft = function() {
		this.imageIndex = (this.imageIndex == 0) ? this.images.length - 1 : --this.imageIndex;
		this.displayImage(this.imageIndex);
	}

	this.navigateRight = function() {
		this.imageIndex = (this.imageIndex < this.images.length-1)? ++this.imageIndex : 0;
		this.displayImage(this.imageIndex);
	}
}
