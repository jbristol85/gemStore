/* global angular */

(function(){
	var app = angular.module('store-directives', []);
	
		app.directive('productReviews', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html',
		};
	});

	app.directive('productTabs', function() {
		return {
			restrict: 'E',
			templateUrl: "product-tabs.html",
			controller: function() {
				this.tab = 1;

				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};

				this.setTab = function(newValue) {
					this.tab = newValue;
				};
			},
			controllerAs: "tab"
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

})();