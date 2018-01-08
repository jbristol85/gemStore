/* global angular */
(function() {
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		};
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};

	});

	// app.controller('GalleryController', function() {
	// 	this.current = 0;

	// 	this.setCurrent = function(newGallery) {
	// 		this.current = newGallery || 0;
	// 	};

	// });

	app.controller("ReviewController", function() {
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive("productDescription", function() {
		return {
			restrict: 'E',
			templateUrl: "product-description.html"

		};
	});

	app.directive("productSpecs", function() {
		return {
			restrict: 'A',
			templateUrl: "product-specs.html"
		};
	});

	app.directive("productGallery", function() {
		return {
			restrict: 'E',
			templateUrl: "product-gallery.html",
			controller: function() {
				this.current = 0;

				this.setCurrent = function(newGallery) {
					this.current = newGallery || 0;
				};
			},
			controllerAs: "gallery",
		};
	});

	var gems = [{
			name: 'Azurite',
			price: 110.50,
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			shine: 8,
			rarity: 7,
			color: '#CCC',
			faces: 14,
			canPurchase: true,
			soldOut: false,
			images: ["http://www.agta.org/gemstones/images/ruby.jpg", "http://www.mysticfamiliar.com/library/crystals/images/rbb.JPG", "http://ruby.org.in/wp-content/uploads/ruby-gemstone-3.jpg"],
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Bloodstone',
			price: 5.00,
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			canPurchase: true,
			soldOut: false,
			images: ["http://whataearth.com/wp-content/uploads/2013/12/Emerald_605.jpg", "http://www.vibgyorgems.com/images/subcategory/Medium/created_emerald_heart_small.jpg", "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAApHAAAAJDkwZWY0MDc1LWE3YWQtNDUxNy04MDNkLTA5N2M2M2UxYzViZQ.png"],
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Zircon',
			price: 3.95,
			description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
			shine: 70,
			rarity: 2,
			color: '#000',
			faces: 6,
			canPurchase: true,
			soldOut: false,
			images: ["https://www.gempundit.com/skin/frontend/ultimo/default/img/bg/amethyst-banner-1.png", "http://www.agta.org/gemstones/images/amethyst.jpg", "http://www.godsstones.com/images/GorgeousBrazilianAmethystGem.jpg"],
			reviews: [{
				stars: 1,
				body: "This gem is WAY too expensive for its rarity value.",
				author: "turtleguyy@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "BBW: High Shine != High Quality.",
				author: "LouisW407@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}]
		},

	];
})();
