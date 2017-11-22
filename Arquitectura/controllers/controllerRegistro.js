angular.module('controller', [])

.controller('RegistrarCtrl', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
    $scope.frm = {};
    $scope.notification = {};

    $scope.registrarUsuario = function($params) {
        $http.post('./model/registrarUsuario.php', { 
         'nombres': $params.nombres, 
        'apellidos': $params.apellidos,        
        'email': $params.email, 
        'password': $params.password,
        'carrera': $params.carrera,
        'sede': $params.sede})
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Bienvenido";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.usuario = data;
                $scope.frm = {};
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Informacion incorrecta";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            })
    }
    

}])
