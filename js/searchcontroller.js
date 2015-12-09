app.controller('SearchController', ["$scope", "$location", 'DataFactory', 'SearchFactory', 'SearchTerm', 'CurrentCandidate',  function($scope, $location, DataFactory, SearchFactory, SearchTerm, CurrentCandidate) {
  $scope.addSearch = function(){
    var sTerm = $scope.search.searchTerm
    SearchTerm.current = sTerm
    DataFactory.getList(SearchTerm.current).then(function(response) {
      var parsedResponse = JSON.parse(response.body)
      var legislatorsArray = parsedResponse.response.legislator
      console.log(legislatorsArray);
      $scope.legislators = legislatorsArray
    })
    $scope.addCand = function (cid, lastname, firstlast, party, office) {
      CurrentCandidate.cid = cid
      CurrentCandidate.lastname = lastname
      CurrentCandidate.firstlast = firstlast
      CurrentCandidate.party = party
      CurrentCandidate.office = office
      SearchFactory.post({candName: CurrentCandidate.firstlast, party: CurrentCandidate.party, office: CurrentCandidate.office})
      window.location.href = '/#/show/' + CurrentCandidate.cid + '/' + CurrentCandidate.lastname;
    }
  } // original penultimate curly brace
  $scope.mapObject = {
  scope: 'usa',
  options: {
    width: 1110,
    legendHeight: 60 // optionally set the padding for the legend
  },
  geographyConfig: {
    highlighBorderColor: '#EAA9A8',
    highlighBorderWidth: 2
  },
  fills: {
    'HIGH': '#CC4731',
    'MEDIUM': '#306596',
    'LOW': '#667FAF',
    'defaultFill': '#DDDDDD'
  },
  data: {
    "AZ": {
      "fillKey": "MEDIUM",
    },
    "CO": {
      "fillKey": "HIGH",
    },
    "DE": {
      "fillKey": "LOW",
    },
    "GA": {
      "fillKey": "MEDIUM",
    }
  },
}
$scope.updateActiveGeography = function(geography) {
  $scope.stateName = geography.properties.name;
  $scope.stateCode = geography.id;
}

}]);

// Goal: click on a state, and display that name on the page
