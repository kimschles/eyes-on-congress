app.controller('SearchController', ["$scope", "$location", 'DataFactory', 'SearchFactory', 'SearchTerm', 'CurrentCandidate',  function($scope, $location, DataFactory, SearchFactory, SearchTerm, CurrentCandidate) {
  $scope.addSearch = function(){
    var sTerm = $scope.search.searchTerm
    SearchTerm.current = sTerm
    DataFactory.getList(SearchTerm.current).then(function(response) {
      var parsedResponse = JSON.parse(response.body)
      var legislatorsArray = parsedResponse.response.legislator
      console.log(legislatorsArray);
      $scope.legislators = legislatorsArray

      // function partyExpander (string) {
      //   if (string === "D") {
      //     return "Democrat"
      //   }
      //   if (string === "R") {
      //     return "Republican"
      //   }
      //   if (string === "I") {
      //     return "Independent"
      //   } else {
      //     return "Third Party"
      //   }
      // }
      // $scope.party = partyExpander(parsedResponse.party);
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
  }
}]);
