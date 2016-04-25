/*global angular*/

angular.module( 'SlCV.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'Über' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl($scope, $translatePartialLoader) {
  $translatePartialLoader.addPart('about');
  var today = new Date();
  
   $scope.translationData = {
    programmingSince: today.getFullYear() - 2007
  };
  
});
