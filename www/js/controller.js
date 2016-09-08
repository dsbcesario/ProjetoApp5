app.controller('ListaCtrl', function($scope, TodoService) {
    
  $scope.tarefas = TodoService.read();

});