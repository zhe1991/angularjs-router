angular.module('productApp', []).controller('testCtrl', function($scope,$state,$stateParams) {
 	var id = $stateParams.id;
    var number = $stateParams.number;
    console.log(id);
    console.log(number);
});