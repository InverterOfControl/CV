/*global angular*/

angular.module('SlCV', [
    'templates-app',
    'templates-common',
    'SlCV.home',
    'SlCV.about',
    'SlCV.contact',
    'SlCV.projects',
    'ui.router',
    'pascalprecht.translate',
    'githubRepo'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/{part}/{lang}.json'
    });
    
    $translateProvider.preferredLanguage('de');
})

.run(function run($rootScope, $translate) {
    $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
    $rootScope.currentLanguage = $translate.proposedLanguage() || $translate.use();
    $rootScope.currentLanguageIndex = 0;
    $translate.refresh();
  });
})

.controller('AppCtrl', function AppCtrl($scope, $location, $translate, $rootScope, $translatePartialLoader) {
    $scope.currentYear = new Date().getFullYear();
    
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | saschalaabs.com';
        }
    });
    
    $translatePartialLoader.addPart('main');
    
    
    
    var supportedLangs = ['de', 'en'];
    
    // kind of hacky
    $scope.switchLang = function(){
      var currentIdx = $rootScope.currentLanguageIndex;
      
      if(currentIdx >= supportedLangs.length - 1){
          $rootScope.currentLanguageIndex = -1;
      }
        
      $translate.use(supportedLangs[++$rootScope.currentLanguageIndex]);
      $rootScope.currentLanguage = $translate.proposedLanguage() || $translate.use();
    };
});

