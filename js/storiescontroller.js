app.controller('StoriesController', ["$scope", '$routeParams', 'DataFactory', function($scope, $routeParams, DataFactory) {
  DataFactory.getStories($routeParams.lastname).then(function(response) {
    console.log(response.body.posts);
    $scope.stories = response.body.posts
  });
}]);
