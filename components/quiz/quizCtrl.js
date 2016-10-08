angular.module('quizApp').controller('quizCtrl', function
($scope, quizService, $stateParams) {

$scope.quiz = quizService.getQuizName($stateParams.name)

$scope.test = "Yes";

});
