﻿app.controller('editorialController', [
    '$scope',
    'editorialService',
    function ($scope, editorialService) {
        $scope.libros = [];
        $scope.libroActual = {
            Id: '0',
            Nombre: ''
        };
        $scope.accionActual = 'Agregar';
        $scope.obtenerLibros = function () {
            editorialService.obtenerLibros()
                .then(function (response) {
                    $scope.libros = response.data;
                });
        }
        $scope.salvarLibro = function () {
            if ($scope.accionActual === 'Agregar') {
                editorialService.agregarEditorial($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Agregada!');
                    });
            }
            else if ($scope.accionActual === 'Editar') {
                editorialService.editarEditorial($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Editada!');
                    });
            } else if ($scope.accionActual === 'Eliminar') {
                editorialService.eliminarLibro($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Eliminada!');
                    });
            }

        }
        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar';
            $scope.libroActual = {
                Id: '0',
                Nombre: ''
            }
        }
        $scope.editar = function (editorial) {
            $scope.accionActual = 'Editar';
            $scope.libroActual = JSON.parse(JSON.stringify(editorial));
        }

        $scope.eliminar = function (editorial) {
            $scope.accionActual = 'Eliminar';
            $scope.libroActual = JSON.parse(JSON.stringify(editorial));;
        }

        $scope.obtenerLibros();
    }
]);