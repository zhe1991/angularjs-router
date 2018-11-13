angular.module('productApp', []).controller('aboutCtrl', function($scope,$state) {
 	  $scope.text = '这是关于'; 
	  $scope.abc = "nice";//需要传的参数值
    $scope.def = 10;//需要传的参数值
    $scope.jump = function(){
        $state.go('test.tab1',{id: $scope.abc,number: $scope.def});
    } 
});