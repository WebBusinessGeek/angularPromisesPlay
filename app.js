var app = angular.module('app', []);



app.directive('promiseExample1', function(){
	return {
		restrict: 'E', 
		template: '<button class="btn btn-primary">Click this 1st</button>',
		controller: function($scope, $q, $timeout){
			
			$scope.tester = function(){
				//new deferred object
				var deferred = $q.defer();

				//deferred promise object
				var promise = deferred.promise;

				promise.then(function(data){
					alert(data);
				});

				$timeout(function(){
					deferred.resolve('I\'m from the very first button you clicked! - Look at the code if you dont believe me.');
				}, 4200);
			}

		},
		link: function(scope, element, attrs){
			element.bind('click', function(){
				scope.tester();
			});
		}
	}
})


app.directive('promiseExample2', function(){
	return {
		restrict: 'E', 
		template: '<button class="btn btn-primary pull-right">Then click me 2nd!</button>',
		controller: function($scope, $q){

			$scope.promiseShow = function(){
				var defer = $q.defer();

				defer.promise
					.then(function(data){
						alert('This alert came from the 2nd button you clicked' + data)
						return 'right after';
					})
					.then(function(data) {
						alert('And this 2nd alert box was executed ' + data + ' the last one.')
						return 'wait';
					})
					.then(function(data){
						alert('Now ' + data + ' for it...')
					});

				defer.resolve('.');
			}
		},
		link: function(scope, element, attrs){
			element.bind('click', function(){
				element.text(scope.promiseShow());
			});
		}
	}
})


