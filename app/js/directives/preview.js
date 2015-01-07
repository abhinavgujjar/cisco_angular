
angular.module('myApp').directive('preview', function() {
    return {
        restrict: 'E', //EA
        templateUrl: 'partials/preview.html',
        scope : {
           text : '=text', //attribute
           lines : '@lines'
        },
        controller : function($scope){
            $scope.lines = $scope.lines || 50
        }
        
    }
})