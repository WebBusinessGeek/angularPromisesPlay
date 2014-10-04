var app = angular.module('app', []);

/*
app.controller('promiseExample2', function($scope, $q){

	var defer = $q.defer();

	defer.promise
		.then(function(data){
			alert('I was ' + data)
			return 'second';
		})
		.then(function(data) {
			alert('And I was ' + data)
			return 'third';
		})
		.then(function(data){
			alert('Sadly I was ' + data)
			return 'fourth';
		});

	defer.resolve('first');
})
*/

/*app.directive('promisedExample', function(){
	return {
		restrict: 'E',
		template: '<button class="btn btn-primary">Click Me</button>'

		
	}
});*/


app.directive('promiseExample', function(){
	return {
		restrict: 'E', 
		template: '<button class="btn btn-primary">Click me to see promises executed!</button>',
		controller: function($scope, $q){

			$scope.promiseShow = function(){
				var defer = $q.defer();

				defer.promise
					.then(function(data){
						alert('I was ' + data)
						return 'second';
					})
					.then(function(data) {
						alert('And I was ' + data)
						return 'third';
					})
					.then(function(data){
						alert('Sadly I was ' + data)
						return 'fourth';
					});

				defer.resolve('first');
			}
		},
		link: function(scope, element, attrs){
			element.bind('click', function(){
				element.text(scope.promiseShow());
			});
		}
	}
})