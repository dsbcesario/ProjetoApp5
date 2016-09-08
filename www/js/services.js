app.factory('TodoService', function(){

    var tarefas = [
    {
      "id" : 1,
      "texto" : "Estudar mais",
      "concluida" : false
    },
    {
      "id" : 2,
      "texto" : "Dormir menos",
      "concluida" : true
    }
  ];

  return {
    //Metodo CRUD
    read: function(){ //read pode ser qualquer nome , como exemplo , RetornarTarefas

      return tarefas;

    }
    
  }
  
});