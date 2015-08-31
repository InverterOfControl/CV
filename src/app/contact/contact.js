angular.module('SlCV.contact', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        views: {
            "main": {
                controller: 'ContactCtrl',
                templateUrl: 'contact/contact.tpl.html'
            }
        },
        data: { pageTitle: 'Kontakt' }
    });
})

.controller('ContactCtrl', function ContactCtrl($scope, $http) {   
  $scope.alerts = [];
  
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  
  $scope.sendMail = function() {
    $http({
        url: 'assets/mail.php',
        method: "POST",
        data: { 'message' : $scope.mail.message, 'from': $scope.mail.from }
    })
    .then(function(response) {
            $scope.alerts.push({msg: 'Nachricht verschickt!', type: 'success'});
    }, 
    function(response) { 
            $scope.alerts.push({msg: 'Fehler beim Verschicken!', type: 'danger'});
    });
};
});
