app.factory('DataFactory', ['$http', '$q', function($http, $q) {
  var finData = {}
  var link = 'https://desolate-woodland-4334.herokuapp.com/api/financeData/'

finData.getList = function (searchTerm) {
  var deferred = $q.defer()
  $http.get(link + 'list/' + searchTerm).success(function (response) {
    deferred.resolve(response)
  }).error(function () {
    deferred.reject('Error!')
  });
  return deferred.promise
};

finData.getCand = function (cid) {
  var deferred = $q.defer()
  $http.get(link + 'show/' + cid).success(function (response) {
    deferred.resolve(response)
  }).error(function () {
    deferred.reject('Error!')
  });
  return deferred.promise
};

finData.getTopContributor = function (cid) {
  var deferred = $q.defer()
  $http.get(link + 'topContributor/' + cid).success(function (response) {
    deferred.resolve(response)
  }).error(function () {
    deferred.reject('Error!')
  });
  return deferred.promise
};

finData.getTopSector = function (cid) {
  var deferred = $q.defer()
  $http.get(link + 'topSector/' + cid).success(function (response) {
    deferred.resolve(response)
  }).error(function () {
    deferred.reject('Error!')
  });
  return deferred.promise
};

finData.getStories = function (lastname) {
  var deferred = $q.defer()
  $http.get(link + 'stories/' + lastname).success(function (response) {
    deferred.resolve(response)
  }).error(function () {
    deferred.reject('Error!')
  });
  return deferred.promise
};
  return finData
}]);

app.factory('SearchFactory', ['$http', '$q', function($http, $q) {
  var searchData = {}
  var dbLink = 'https://desolate-woodland-4334.herokuapp.com/api/searchTerms/'
  searchData.post = function (obj) {
    $http.post(dbLink, obj).then(function (response) {
  });
};

searchData.getSearches = function () {
  var deferred = $q.defer()
  $http.get(dbLink + 'latestSearches').success(function (response) {
    deferred.resolve(response)
    }).error(function () {
      deferred.reject('Error!')
    });
    return deferred.promise
  };
  return searchData
}]);

//to pass search queries to api calls
app.factory('SearchTerm', function() {
  var searchTerm = {}
  searchTerm.current = undefined
  return searchTerm
});

//to pass candidate queries to api calls
app.factory('CurrentCandidate', function() {
  var candidate = {}
  candidate.cid = undefined
  candidate.lastname = undefined
  candidate.firstlast = undefined
  candidate.party = undefined
  candidate.office = undefined
  return candidate
});
