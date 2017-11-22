angular.module('controller2', [])

.controller('auntCtrl', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
	$scope.user = {};
    $scope.notification = {};

    $http.get('./model/autenlogin.php')
        .success(function(data) {
            $scope.users = data;
        })
        .error(function(err) {
            $log.error(err);
        })


  
    $scope.autenlogin = function($variable) {
        $http.post('./model/autenlogin.php', { 'email': $variable.email, 'password': $variable.password })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Bienvenido";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.users = data;
                $scope.user = {};
                $('#loginForm').slideToggle();
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Error de autenticacion";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            })
    }

}])
