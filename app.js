var uiApp = angular.module('uiApp', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.select', 'ngTouch'])

    uiApp.controller('SelectCtrl', ['$scope', function($scope) {
      $scope.state = [
        {name: 'Activo'},
        {name: 'Inactivo'},
        {name: 'Todos'}
      ]
    }]);
    angular.module('uiApp').controller('TabsCtrl', function ($scope, $window) {
      $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
      ];

     $scope.model = {
        name: 'Tabs'
      };
    });   




