app.controller('ListaCtrl', function($scope, TodoService, $state) { 
// sempre ir adicionando as novas funções dentro do app.controller
    
  $scope.tarefas = TodoService.read();
  
  $scope.editar = function(id) { // o parametro dentro da function é o msm q vem depois de id:
    
    $state.go('edita', {id: id})
    
  }
  
  $scope.concluir = function(id) { 
    
    TodoService.concluir(id);
    
  }
  
  $scope.apagar = function(id) { 
    
    TodoService.apagar(id);
    
  }

});

app.controller('NovoCtrl', function ($scope, TodoService, $state){ 

    $scope.tarefa = {};
    
    $scope.salvar = function () {

    var tarefa =
    {
      'id'        : new Date().getTime(),
      'texto'     : $scope.tarefa.texto,
      'concluida' : false
    }

    TodoService.create(tarefa);

    $state.go('lista');

}
});

app.controller('EditaCtrl', function ($scope, TodoService, $state, $stateParams){ // o :id fica dentro dessa stateparams em app.js

  var id = $stateParams.id;
  
  $scope.tarefa = TodoService.readOne(id); // acessa o id do services.js da função readOne

  $scope.salvar = function () {

    var tarefa =
    {
      'id'        : new Date().getTime(),
      'texto'     : $scope.tarefa.texto,
      'concluida' : false
    }

    TodoService.update(tarefa);

    $state.go('lista');

}
});