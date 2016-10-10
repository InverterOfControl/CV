angular.module('SlCV.projects', [
    'ui.router',
    'ui.bootstrap',
    'githubRepo'
])

.config(function config($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        views: {
            "main": {
                controller: 'ProjectsCtrl',
                templateUrl: 'projects/projects.tpl.html'
            }
        },
        data: { pageTitle: 'Projekte' }
    });
})

.controller('ProjectsCtrl', function ProjectsCtrl($scope, $translatePartialLoader) {
   $translatePartialLoader.addPart('projects');
});
