app.controller('TopContribController', ["$scope", '$routeParams', 'DataFactory', function($scope, $routeParams, DataFactory) {
  DataFactory.getTopContributor($routeParams.cid).then(function(response) {
    var parsedResponse = JSON.parse(response.body)
    $scope.contributors = parsedResponse.response.contributors.contributor
  })
}]);

app.controller('TopSectorController', ["$scope", '$routeParams', 'DataFactory', function($scope, $routeParams, DataFactory) {
  DataFactory.getTopSector($routeParams.cid).then(function(response) {
    var parsedResponse = JSON.parse(response.body)
      $scope.sectors = parsedResponse.response.sectors.sector
  })
}]);
