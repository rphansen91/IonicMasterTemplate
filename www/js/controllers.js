angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends, Media) {
  $scope.friends = Friends.all();
  $scope.images = Media.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('BlogsCtrl', function($scope, Blog) {
	$scope.blogs = [];
	var path = 'blogs/5409591/articles.json';
	Blog(path).then(function (result) {
		$scope.blogs = result.articles;
	});
})

.controller('ArticleCtrl', function($scope, $stateParams, Blog) {
	$scope.article = {};
	var path = 'blogs/5409591/articles/' +  $stateParams.articleId + '.json';
	Blog(path).then(function (result) {
		$scope.article = result.article;
		console.log(result);
	})
})

.controller('ProductsCtrl', function ($scope, Blog) {
	$scope.products = [];
	var path = 'products.json';
	Blog(path).then(function (result) {
		$scope.products = result.products;
		console.log(result);
	})
	
});
