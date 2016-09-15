app.factory('TodoService', function () {

  var tarefas = [
    {
      "id": 1,
      "texto": "Estudar mais",
      "concluida": false
    },
    {
      "id": 2,
      "texto": "Dormir menos",
      "concluida": true
    }
  ];

  return {
    //Metodo CRUD
    read: function () { //read pode ser qualquer nome , como exemplo , RetornarTarefas

      return tarefas;

    },

    readOne: function (id) { // ira retornar apenas o id q selecionei
      
      for (var i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == id) {

          return tarefas[i];

        }
      }
    },

    create: function (tarefa) { // irá criar novas tarefas

      tarefas.push(tarefa);

    },

    update: function (tarefa) { // irá alterar as tarefas ja criadas
      
      for (var i = 0; i < tarefas.length; i++) {

        if (tarefas[i].id == tarefa.id) {

          tarefas[i].texto = tarefa.texto;
          break;
        }
      }
    }
  }

});