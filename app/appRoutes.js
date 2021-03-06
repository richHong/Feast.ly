feastly.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    //STATES
    .state('footer', {
      url: '',
      templateUrl: '/Shared/Footer/footerview.html',
    })
    .state('home', {
      url: '/home',
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .state('recipe', {
      url: '/recipes',
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
    .state('results', {
      url: '/results',
      templateUrl: 'Components/SearchResults/resultsview.html',
      controller: 'search.ctrl',
      authenticate: true
    });
});