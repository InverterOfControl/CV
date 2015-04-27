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

.controller('ContactCtrl', function ContactCtrl($scope) {
   
});
