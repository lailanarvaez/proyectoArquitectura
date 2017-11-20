var app = angular.module('arquitectura', []);

app.controller('ctrlapp', function ($scope, $http) {
    $scope.name = [ ];
 
    $http.get('model.php')
            .then(function(data) {
                    $scope.name = eval(data);
                    console.log($scope.name);
                    return false;
                }, function (data){
                    console.log('Error: '+ data);
                });
     
    $scope.addNom = function() {
        $http.post('model.php', { op: 'append', nombre: $scope.nombre, apellido: $scope.apellido } )
                .then(function(data) {
                        $scope.name = eval(data);
                        console.log($scope.name);
                        return false;
                    }, function (data){
                    console.log('Error: '+ data);
                });
 
        $scope.nombre="";
        $scope.apellido="";
        }
 
    $scope.delNom = function( nombre ) {
        if ( confirm("Seguro?") ) {
            $http.post('model.php', { op: 'delete', nombre: nombre } )
                .then(function(data) {
                        $scope.name = eval(data);
                        console.log($scope.name);
                         return false;
                    }, function (data){
                    console.log('Error: '+ data);
                });
 
            }
        }
 
    });