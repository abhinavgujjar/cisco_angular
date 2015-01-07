angular.module('myApp').directive('onlyEven', function() {
    return {
        restrict: 'A', //EA
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {

            //ctrl = ngModel's controller !
            ctrl.$parsers.unshift(checkForEven);

            function checkForEven(viewValue) {
                if (parseInt(viewValue) % 2 === 0) {
                    ctrl.$setValidity('evenNumber', true);
                } else {
                    ctrl.$setValidity('evenNumber', false);
                }
                return viewValue;
            }

        }

    }
})