app.controller('CandController', ["$scope", '$routeParams', 'DataFactory', function($scope, $routeParams, DataFactory) {
  DataFactory.getCand($routeParams.cid, $routeParams.lastname).then(function(response) {
    var parsedResponse = JSON.parse(response.body)
    console.log(parsedResponse);
    $scope.cand = parsedResponse.response

    function nameSwitch(ele){
        var splitName = ele.split(",");
        return splitName.reverse().join(" ")
    }
    $scope.candFirstName = nameSwitch(parsedResponse.response.summary['@attributes'].cand_name)

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
    $scope.party = partyExpander(parsedResponse.response.summary["@attributes"].party);

    function chamberExpander (string) {
      if (string === "H") {
        return "U.S. House of Representatives"
      }
      if (string === "S") {
        return "U.S. Senate"
      } else {
        return ("Presidential Candidate")
      }
    };
    $scope.chamber = chamberExpander(parsedResponse.response.summary["@attributes"].chamber);

    function stateName (string) {
      switch (string) {
        case "AL":
          return "Alabama";
          break;
        case "AK":
          return "Alaska";
          break;
        case "AZ":
          return "Arizona";
          break;
        case "AR":
          return "Arkansas";
          break;
        case "CA":
          return "California";
        case "CO":
          return "Colorado";
        case "CT":
          return "Connecticut";
        case "DE":
          return "Delaware";
        case "FL":
          return "Florida";
        case "GA":
          return "Georgia";
        case "HI":
          return "Hawaii";
        case "ID":
          return "Idaho";
        case "IL":
          return "Illinois";
        case "IN":
          return "Indiana";
        case "IA":
          return "Iowa";
        case "KS":
          return "Kansas";
        case "KY":
          return "Kentucky";
        case "LA":
          return "Louisiana";
        case "ME":
          return "Maine";
        case "MD":
          return "Maryland";
        case "MA":
          return "Massachusetts";
        case "MI":
          return "Michigan";
        case "MN":
          return "Minnesota";
        case "MS":
          return "Mississippi";
        case "MO":
          return "Missouri";
        case "MT":
          return "Montana";
        case "NE":
          return "Nebraska";
        case "NV":
          return "Nevada";
        case "NH":
          return "New Hampshire";
        case "NJ":
          return "New Jersey";
        case "NM":
          return "New Mexico";
        case "NY":
          return "New York";
        case "NC":
          return "North Carolina";
        case "ND":
          return "North Dakota";
        case "OH":
          return "Ohio";
        case "OK":
          return "Oklahoma";
        case "OR":
          return "Oregon";
        case "PA":
          return "Pennsylvania";
        case "RI":
          return "Rhode Island";
        case "SC":
          return "South Carolina";
        case "SD":
          return "South Dakota";
        case "TN":
          return "Tennessee";
        case "TX":
          return "Texas";
        case "UT":
          return "Utah";
        case "VT":
          return "Vermont";
        case "VA":
          return "Virginia";
        case "WA":
          return "Washington";
        case "WV":
          return "West Virginia";
        case "WI":
          return "Wisconsin";
        case "WY":
          return "Wyoming";
        default:
          return string
      }
    };
    $scope.state = stateName(parsedResponse.response.summary["@attributes"].state);
  })
}]);
