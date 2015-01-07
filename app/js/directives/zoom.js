
angular.module('myApp').directive('zoom', function() {
    return {
        restrict: 'A', //EA
        link: function(scope, element, attr) {
            element.on('mouseenter', function() {
                element.css({
                    'font-size': '50px'
                });
            })
        }
        
    }
})