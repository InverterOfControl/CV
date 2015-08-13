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
   $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
   
  $scope.sendMail = function() {
    $http({
        url: 'assets/mail.php',
        method: "POST",
        data: { 'message' : $scope.mail.message, 'from': $scope.mail.from }
    })
    .then(function(response) {
            // success
    }, 
    function(response) { // optional
            // failed
    });
};
});
