angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Slider', function () {
  var images = [
    { id: 0, img: 'http://cdn29.elitedaily.com/wp-content/uploads/2014/01/richard-sherman-elite-daily1.jpg' },
    { id: 1, img: 'http://l3.yimg.com/bt/api/res/1.2/q5_DIcNLvFn6aAxkxMltmA--/YXBwaWQ9eW5ld3M7cT04NTt3PTYwMA--/http://media.zenfs.com/en/blogs/sptusmmaexperts/richard-sherman-s-trash-talk-1090514-TwoByOne.jpg' },
    { id: 2, img: 'http://atlantablackstar.com/wp-content/uploads/2014/02/RICHARD-SHERMAN-post-game-600x300.jpg' }
  ];
  return function () {
      return images;
  }
})

.factory('Media', function () {
  var images = [
    { id: 0, name: 'Erin Andrews', img: 'http://blacksportsonline.com/home/wp-content/uploads/2014/01/Erin-Andrews-Richard-Sherman.jpg' },
    { id: 1, name: 'Postgame', img: 'http://a.espncdn.com/photo/2014/0122/nfl_a_shermanr_jv_600x600.jpg' },
    { id: 2, name: 'Red Carpet', img: 'http://wac.450f.edgecastcdn.net/80450F/newstalkkit.com/files/2014/04/470551043-e1398369805343.jpg' }
  ];
  return {
    all: function() {
      return images;
    },
    get: function(imageId) {
      // Simple index lookup
      return images[imageId];
    }
  }

})

.factory('Blog', function ($http, $q, SHOPIFY_KEY, SHOPIFY_HOSTNAME) {
  return function (path) {
    var url = SHOPIFY_KEY + SHOPIFY_HOSTNAME + path;
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: url
    }).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;
  }
});
