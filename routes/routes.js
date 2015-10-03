app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/index.html',
    controller: 'SearchController'
  })
  .when('/latestsearches', {
    templateUrl: 'templates/searches.html',
    controller: 'SearchReturnController'
  })
  .when('/about', {
    templateUrl: 'templates/about.html',
  })
  .when('/list/:state', {
    templateUrl: 'templates/index.html',
    controller: 'SearchController'
  })
  .when('/show/:cid/:lastname', {
    templateUrl: 'templates/show.html',
    controller: 'CandController'
  })
  .otherwise({ redirectTo: '/' });
});
