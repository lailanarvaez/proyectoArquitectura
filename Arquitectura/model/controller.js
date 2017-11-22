angular.module('controller', [])



    .controller('BlogCtrl', ['$scope', '$http', '$log', '$timeout','$location', function ($scope, $http, $log, $timeout,$location) {
        
        $scope.frm = {};
        $scope.notification = {};

        $scope.frmToggle = function () {
            $('#blogForm').slideToggle();
        }

        $http.get('./model/popData.php')
            .success(function (data) {
                $scope.blogs = data;
            })
            .error(function (err) {
                $log.error(err);
            })

        $scope.pushData = function ($params) {
            $http.post('./model/pushData.php', { 'title': $params.title, 'description': $params.description })
                .success(function (data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Blog Successfully Added!";
                    $timeout(function () {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                    $scope.frm = {};
                    $('#blogForm').slideToggle();
                })
                .error(function (err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Unable to add blog!";
                    $timeout(function () {
                        $scope.notification = {};
                    }, 3000);
                })
        }

        $scope.editData = function ($blog) {
            $scope.editBlogData = $blog;
            $('#edit-modal').modal('show');
        }

        $scope.updateData = function ($params) {
            $('#edit-modal').modal('hide');
            $http.post('./model/updateData.php', { 'title': $params.title, 'description': $params.description, 'id': $params.id })
                .success(function (data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Blog Successfully Updated!";
                    $timeout(function () {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                    $scope.frm = $scope.editBlogData = {};
                })
                .error(function (err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Unable to updated blog!";
                    $timeout(function () {
                        $scope.notification = {};
                    }, 3000);
                    $log.error(err);
                })
        }

        $scope.removeData = function ($params) {
            var cnfrm = confirm("Are you sure to delete?");
            if (cnfrm) {
                $http.post('./model/removeData.php', { 'id': $params })
                    .success(function (data) {
                        $scope.notification.success = true;
                        $scope.notification.message = "Blog Successfully Deleted!";
                        $timeout(function () {
                            $scope.notification = {};
                        }, 3000);
                        $scope.blogs = data;
                    })
                    .error(function (err) {
                        $scope.notification.error = true;
                        $scope.notification.message = "Unable to delete blog!";
                        $timeout(function () {
                            $scope.notification = {};
                        }, 3000);
                    })
            } else {
                // 
            }

        }

    }])

    .controller('RegistrarCtrl', ['$scope', '$http', '$log', '$timeout','$location', function ( $scope, $http, $log, $timeout,$location) {

            $scope.user = {};
            $scope.notification = {};
            $scope.usuario = {};
            $scope.registrarUsuario = function ($params) {
                $http.post('./model/registrarUsuario.php', { 'nombre': $params.nombre, 'apellido': $params.apellido, 'email': $params.email, 'password': $params.password, 'carrera': $params.carrera, 'sede': $params.sede })
                    .success(function (data) {
                        $scope.notification.success = true;
                        $scope.notification.message = "Registro Exitoso";
                        $timeout(function () {
                            $scope.notification = {};
                            $location.path();
                            
                            // change the path
                            $location.path('/home');
                        }, 3000);
                        $scope.usuario = data;
                        $scope.user = {};
    
                       // $location.path();
    
                        // change the path
                        //$location.path('/home');
                    })
                    .error(function (err) {
                        $scope.notification.error = true;
                        $scope.notification.message = "Informacion incorrecta";
                        $timeout(function () {
                            $scope.notification = {};
                        }, 3000);
                    })
            }
    
        }])

        .controller('HomeCtrl', ['$scope', function ($scope) 
        {
        }]);

        
    
