app.controller('SearchReturnController', ["$scope", 'SearchFactory', function($scope, SearchFactory) {
  SearchFactory.getSearches().then(function(response) {
    $scope.latestSearches = response
    console.log(response);

    function partyExpander (string) {
      if (string === "D") {
        return "Democrat"
      }
      if (string === "R") {
        return "Republican"
      }
      if (string === "I") {
        return "Independent"
      } else {
        return "Third Party"
      }
    };
    $scope.party = partyExpander(response.party);
  })
}]);
