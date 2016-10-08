angular.module('quizApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'components/home/homeView.html',
    controller: 'homeCtrl'
  })
  .state('results', {
    url: '/results',
    templateUrl: 'components/results/resultsView.html',
    controller: 'resultsCtrl'
  })
  .state('quiz', {
    url: '/quiz',
    templateUrl: 'components/quiz/view/quizContainerView.html',
    controller: 'quizCtrl'
  });


});
