<script>
  import { Todos } from '../../stores/stores.js'
  import { Todo } from '../../Todo.js'
    
  let todo;

  function handleCreate()
  {
    if(todo.length < 5)
    {
      return
    }

    let todoObj = new Todo(todo, false, $Todos.length)
    console.log(todoObj)
    Todos.update(n => { 
      return [...n, todoObj]
    })
    todo = ""

  }
</script>

<div>
  <h1>What do you have planned?</h1>
  <input type="text" bind:value={todo}/>
  <button on:click={handleCreate}>Create</button>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

  div{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: #ffbe0b;
  }
  input {
    border: none;
    border-radius: 5px 5px 0px 0px;
    outline: none;
    width: 10%;
    height: 20%;
    background-color: #1a1a1a;
    color: white;
        
  }
  button{
    width: 10%;
    border: none;
    height: 20%;
    padding-left: 6px;
    background-color: #ffbe0b;
    color: #1a1a1a;
    border-radius: 0px 0px 5px 5px;
  }
</style>